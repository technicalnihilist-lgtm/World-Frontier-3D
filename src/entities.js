// ---------------------------------------------------------------
// ENTITIES: player character, vehicles, pedestrians, animals
// ---------------------------------------------------------------
import * as THREE from 'three';
import { clamp, lerp, damp, mulberry32 } from './util.js';
import { heightAt, WATER_LEVEL, biomeAt, CITY_RADIUS } from './world.js';

const SKIN = 0xd8a878, SHIRT = 0x2f6f8f, PANTS = 0x2b3340;

// ------------------------------------------------------------------
// PLAYER
// ------------------------------------------------------------------
export class Player {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.pos = new THREE.Vector3(12, 0, 60);
    this.vel = new THREE.Vector3();
    this.heading = 0;
    this.onGround = true;
    this.state = 'idle';
    this.speed = 0;
    this.walkPhase = 0;
    this.radius = 0.42;
    this.height = 1.75;
    this.crouch = 0;
    this.swimming = false;
    this.sitting = false;
    this.climbing = false;
    this.vehicle = null;
    this.health = 100;
    this.stamina = 100;
    this.build();
    scene.add(this.root);
  }

  build() {
    const mat = (c) => new THREE.MeshLambertMaterial({ color: c });
    const g = new THREE.Group();
    this.body = new THREE.Group();
    g.add(this.body);

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.72, 0.34), mat(SHIRT));
    torso.position.y = 1.18; torso.castShadow = true;
    this.body.add(torso);

    const hips = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.22, 0.32), mat(PANTS));
    hips.position.y = 0.78; this.body.add(hips);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 12, 10), mat(SKIN));
    head.position.y = 1.72; head.castShadow = true;
    this.head = head; this.body.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.215, 12, 8, 0, 6.3, 0, 1.2), mat(0x241a12));
    hair.position.y = 1.735; this.body.add(hair);

    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.07), mat(SKIN));
    nose.position.set(0, 1.71, -0.2); this.body.add(nose);

    const armGeo = new THREE.BoxGeometry(0.16, 0.62, 0.18);
    this.armL = new THREE.Mesh(armGeo, mat(SHIRT)); this.armL.position.set(-0.38, 1.18, 0);
    this.armR = new THREE.Mesh(armGeo, mat(SHIRT)); this.armR.position.set(0.38, 1.18, 0);
    this.armL.castShadow = this.armR.castShadow = true;
    this.body.add(this.armL, this.armR);

    const legGeo = new THREE.BoxGeometry(0.2, 0.76, 0.22);
    this.legL = new THREE.Mesh(legGeo, mat(PANTS)); this.legL.position.set(-0.15, 0.42, 0);
    this.legR = new THREE.Mesh(legGeo, mat(PANTS)); this.legR.position.set(0.15, 0.42, 0);
    this.legL.castShadow = this.legR.castShadow = true;
    this.body.add(this.legL, this.legR);

    // pivot fix: legs/arms rotate from the top
    [this.armL, this.armR].forEach((a) => { a.geometry.translate(0, -0.31, 0); a.position.y = 1.48; });
    [this.legL, this.legR].forEach((a) => { a.geometry.translate(0, -0.38, 0); a.position.y = 0.8; });

    this.root.add(g);
    this.model = g;
  }

  respawn(x, z) {
    this.pos.set(x, heightAt(x, z) + 0.1, z);
    this.vel.set(0, 0, 0);
  }

  update(dt, input, camera, world, preset) {
    const gy = heightAt(this.pos.x, this.pos.z);
    const inWater = gy < WATER_LEVEL - 0.4;

    if (this.vehicle) { this.syncInVehicle(); this.animate(dt, 0); return; }

    // ---- desired movement ----
    const run = input.run ? 1 : 0;
    const crouchKey = input.crouch;
    this.crouch = damp(this.crouch, crouchKey ? 1 : 0, 12, dt);

    const camYaw = camera.yaw;
    let mx = input.moveX, mz = input.moveZ;
    const mag = Math.hypot(mx, mz);
    if (mag > 1) { mx /= mag; mz /= mag; }
    const wx = Math.cos(camYaw) * mx - Math.sin(camYaw) * mz;
    const wz = Math.sin(camYaw) * mx + Math.cos(camYaw) * mz;

    let maxSpeed = 3.4;
    if (run && this.stamina > 2) maxSpeed = 7.2;
    if (input.sprint && this.stamina > 2) maxSpeed = 10.5;
    if (this.crouch > 0.5) maxSpeed = 1.7;
    if (inWater) maxSpeed = 2.6;
    if (this.climbing) maxSpeed = 1.2;

    const moving = Math.hypot(wx, wz) > 0.05;
    const targetVX = wx * maxSpeed, targetVZ = wz * maxSpeed;
    const accel = this.onGround ? 12 : 4;
    this.vel.x = damp(this.vel.x, targetVX, accel, dt);
    this.vel.z = damp(this.vel.z, targetVZ, accel, dt);

    // stamina
    const sprinting = (run || input.sprint) && moving && this.onGround && !inWater;
    this.stamina = clamp(this.stamina + (sprinting ? -18 : 14) * dt, 0, 100);

    // gravity / swim / climb
    if (inWater) {
      this.swimming = true;
      const targetY = WATER_LEVEL + 0.55;
      this.pos.y = damp(this.pos.y, targetY + (input.jump ? 0.6 : 0), 6, dt);
      this.vel.y = 0; this.onGround = false;
    } else {
      this.swimming = false;
      this.vel.y -= 22 * dt;
      if (input.jump && this.onGround) { this.vel.y = 7.4; this.onGround = false; }
      this.pos.y += this.vel.y * dt;
      if (this.pos.y <= gy + 0.02) { this.pos.y = gy; this.vel.y = 0; this.onGround = true; }
    }

    // climb: hold jump against a steep slope
    const steep = heightAt(this.pos.x + wx, this.pos.z + wz) - gy;
    this.climbing = !inWater && steep > 0.55 && (input.jump || this.climbing) && moving;
    if (this.climbing) {
      this.pos.y += 2.1 * dt;
      this.vel.y = 0;
      this.pos.x += wx * 0.5 * dt; this.pos.z += wz * 0.5 * dt;
    }

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    if (moving) this.heading = Math.atan2(this.vel.x, this.vel.z);

    this.speed = Math.hypot(this.vel.x, this.vel.z);
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.heading;
    this.animate(dt, this.speed);

    // state label for HUD
    this.state = this.swimming ? 'swimming' : this.climbing ? 'climbing'
      : !this.onGround ? 'jumping' : this.crouch > 0.5 ? 'crouching'
      : this.speed > 8 ? 'sprinting' : this.speed > 4.5 ? 'running'
      : this.speed > 0.4 ? 'walking' : 'idle';
  }

  animate(dt, speed) {
    const amp = clamp(speed / 6, 0, 1.25);
    this.walkPhase += dt * (3 + speed * 1.5);
    const s = Math.sin(this.walkPhase * 2.2);
    const s2 = Math.sin(this.walkPhase * 2.2 + Math.PI);

    if (this.swimming) {
      this.armL.rotation.x = -1.4 + Math.sin(this.walkPhase * 3) * 0.7;
      this.armR.rotation.x = -1.4 + Math.sin(this.walkPhase * 3 + 1) * 0.7;
      this.legL.rotation.x = Math.sin(this.walkPhase * 3) * 0.4;
      this.legR.rotation.x = Math.sin(this.walkPhase * 3 + 1) * 0.4;
      this.body.rotation.x = -1.1;
      this.body.position.y = 0;
    } else if (this.sitting) {
      this.body.rotation.x = 0; this.body.position.y = -0.35;
      this.legL.rotation.x = -1.5; this.legR.rotation.x = -1.5;
      this.armL.rotation.x = -0.6; this.armR.rotation.x = -0.6;
    } else if (this.climbing) {
      this.body.rotation.x = 0;
      this.armL.rotation.x = -2.2 + s * 0.6;
      this.armR.rotation.x = -2.2 + s2 * 0.6;
      this.legL.rotation.x = s * 0.7; this.legR.rotation.x = s2 * 0.7;
    } else {
      this.body.rotation.x = 0;
      this.body.position.y = -this.crouch * 0.45;
      this.legL.rotation.x = s * amp * 0.85;
      this.legR.rotation.x = s2 * amp * 0.85;
      this.armL.rotation.x = s2 * amp * 0.7;
      this.armR.rotation.x = s * amp * 0.7;
      this.body.position.y += Math.abs(Math.sin(this.walkPhase * 2.2)) * amp * 0.05;
    }
  }

  syncInVehicle() {
    const v = this.vehicle;
    this.root.position.copy(v.root.position);
    this.root.position.y += 0.6;
    this.root.rotation.y = v.heading;
    this.root.visible = false;
  }
}

// ------------------------------------------------------------------
// VEHICLES
// ------------------------------------------------------------------
export const VEHICLE_TYPES = {
  sedan:    { name: 'Sedan',       kind: 'car',   w: 1.9, h: 1.35, l: 4.4, color: 0x9aa4b2, maxSpeed: 34, accel: 12, turn: 1.7, mass: 1.0, seats: 4 },
  sports:   { name: 'Sports Car',  kind: 'car',   w: 2.0, h: 1.1,  l: 4.3, color: 0xc0392b, maxSpeed: 52, accel: 20, turn: 1.9, mass: 0.85, seats: 2 },
  supercar: { name: 'Supercar',    kind: 'car',   w: 2.05, h: 1.0, l: 4.6, color: 0xf1c40f, maxSpeed: 66, accel: 26, turn: 2.0, mass: 0.8, seats: 2 },
  bike:     { name: 'Motorcycle',  kind: 'bike',  w: 0.8, h: 1.1,  l: 2.1, color: 0x222831, maxSpeed: 44, accel: 22, turn: 2.4, mass: 0.4, seats: 1 },
  scooter:  { name: 'Scooter',     kind: 'bike',  w: 0.7, h: 1.0,  l: 1.8, color: 0x3fa9f5, maxSpeed: 22, accel: 12, turn: 2.6, mass: 0.3, seats: 1 },
  bus:      { name: 'City Bus',    kind: 'big',   w: 2.6, h: 3.1,  l: 11.0, color: 0x2e8b57, maxSpeed: 24, accel: 7, turn: 1.0, mass: 3.0, seats: 30 },
  truck:    { name: 'Truck',       kind: 'big',   w: 2.5, h: 3.0,  l: 8.5, color: 0xd35400, maxSpeed: 26, accel: 8, turn: 1.2, mass: 2.6, seats: 2 },
  boat:     { name: 'Motorboat',   kind: 'boat',  w: 2.4, h: 1.2,  l: 6.0, color: 0xecf0f1, maxSpeed: 30, accel: 10, turn: 1.4, mass: 1.4, seats: 4 },
  heli:     { name: 'Helicopter',  kind: 'air',   w: 3.0, h: 2.2,  l: 6.5, color: 0x34495e, maxSpeed: 55, accel: 14, turn: 1.6, mass: 1.6, seats: 3 },
  plane:    { name: 'Light Plane', kind: 'air',   w: 9.0, h: 2.2,  l: 8.0, color: 0xdfe6e9, maxSpeed: 85, accel: 16, turn: 1.1, mass: 2.0, seats: 2 },
};

export class Vehicle {
  constructor(type, scene) {
    this.type = type;
    this.cfg = VEHICLE_TYPES[type];
    this.scene = scene;
    this.root = new THREE.Group();
    this.pos = new THREE.Vector3();
    this.speed = 0;
    this.heading = 0;
    this.steer = 0;
    this.pitch = 0; this.roll = 0;
    this.damage = 0;
    this.fuel = 100;
    this.wheels = [];
    this.rotor = null;
    this.built = false;
    this.build();
    scene.add(this.root);
  }

  build() {
    const c = this.cfg;
    const mat = (col, opts = {}) => new THREE.MeshLambertMaterial({ color: col, ...opts });
    const g = new THREE.Group();
    const body = mat(c.color);
    const glass = mat(0x22303c, { transparent: true, opacity: 0.72 });
    const dark = mat(0x1a1a1c);
    const lightMat = new THREE.MeshLambertMaterial({ color: 0xfff2b0, emissive: 0xffe08a, emissiveIntensity: 0.6 });

    if (c.kind === 'air') {
      const fuse = new THREE.Mesh(new THREE.CapsuleGeometry(c.h * 0.32, c.l * 0.6, 6, 10), body);
      fuse.rotation.z = Math.PI / 2; fuse.position.y = c.h * 0.5;
      g.add(fuse);
      const canopy = new THREE.Mesh(new THREE.SphereGeometry(c.h * 0.34, 10, 8), glass);
      canopy.position.set(0, c.h * 0.62, -c.l * 0.18); canopy.scale.set(1, 0.8, 1.5);
      g.add(canopy);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.25, c.h * 0.9, c.l * 0.4), body);
      tail.position.set(0, c.h * 0.55, c.l * 0.45); g.add(tail);
      if (this.type === 'heli') {
        const rotor = new THREE.Mesh(new THREE.BoxGeometry(c.w * 2.2, 0.06, 0.34), dark);
        rotor.position.y = c.h * 1.05; g.add(rotor); this.rotor = rotor;
        const tailRotor = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.14), dark);
        tailRotor.position.set(0.2, c.h * 0.6, c.l * 0.6); g.add(tailRotor); this.tailRotor = tailRotor;
        const skidGeo = new THREE.BoxGeometry(0.12, 0.1, c.l * 0.7);
        [-0.6, 0.6].forEach((x) => {
          const sk = new THREE.Mesh(skidGeo, dark); sk.position.set(x, 0.08, 0); g.add(sk);
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), dark);
          leg.position.set(x, 0.3, 0); g.add(leg);
        });
      } else {
        const wing = new THREE.Mesh(new THREE.BoxGeometry(c.w * 2.0, 0.16, 1.5), body);
        wing.position.set(0, c.h * 0.5, -0.2); g.add(wing);
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.1, 0.9), body);
        fin.position.set(0, c.h * 0.85, c.l * 0.45); g.add(fin);
        const prop = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.6, 0.08), dark);
        prop.position.set(0, c.h * 0.5, -c.l * 0.52); g.add(prop); this.rotor = prop;
      }
    } else if (c.kind === 'boat') {
      const hull = new THREE.Mesh(new THREE.BoxGeometry(c.w, c.h * 0.55, c.l), body);
      hull.position.y = c.h * 0.3; g.add(hull);
      const bow = new THREE.Mesh(new THREE.ConeGeometry(c.w * 0.5, c.l * 0.45, 4), body);
      bow.rotation.x = -Math.PI / 2; bow.rotation.y = Math.PI / 4;
      bow.position.set(0, c.h * 0.3, -c.l * 0.62); bow.scale.set(1, 1, 0.55); g.add(bow);
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.7, c.h * 0.5, c.l * 0.32), glass);
      cabin.position.set(0, c.h * 0.72, c.l * 0.05); g.add(cabin);
    } else if (c.kind === 'bike') {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.5, c.h * 0.35, c.l * 0.75), body);
      frame.position.y = c.h * 0.45; g.add(frame);
      const tank = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.45, c.h * 0.2, c.l * 0.3), body);
      tank.position.set(0, c.h * 0.62, -0.1); g.add(tank);
      const seat = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.4, 0.12, c.l * 0.3), dark);
      seat.position.set(0, c.h * 0.68, c.l * 0.18); g.add(seat);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.9, 0.07, 0.07), dark);
      bar.position.set(0, c.h * 0.78, -c.l * 0.32); g.add(bar);
      const rider = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.5, 4, 8), mat(0x2c3e50));
      rider.position.set(0, c.h * 0.95, c.l * 0.1); g.add(rider);
    } else {
      const h = c.h;
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(c.w, h * 0.45, c.l), body);
      chassis.position.y = h * 0.42; g.add(chassis);
      if (c.kind === 'big') {
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.95, h * 0.5, c.l * 0.28), glass);
        cabin.position.set(0, h * 0.78, -c.l * 0.32); g.add(cabin);
        const box = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.98, h * 0.62, c.l * 0.6), body);
        box.position.set(0, h * 0.72, c.l * 0.14); g.add(box);
      } else {
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.86, h * 0.38, c.l * 0.45), glass);
        cabin.position.set(0, h * 0.72, c.l * 0.02); g.add(cabin);
        const roof = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.82, h * 0.1, c.l * 0.4), body);
        roof.position.set(0, h * 0.92, c.l * 0.02); g.add(roof);
        if (this.type === 'supercar' || this.type === 'sports') {
          const spoiler = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.9, 0.08, 0.4), dark);
          spoiler.position.set(0, h * 0.78, c.l * 0.48); g.add(spoiler);
        }
      }
      [-1, 1].forEach((sx) => {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.08), lightMat);
        hl.position.set(sx * c.w * 0.32, h * 0.45, -c.l * 0.5); g.add(hl);
        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.06), new THREE.MeshLambertMaterial({ color: 0xff3322, emissive: 0x881100, emissiveIntensity: 0.7 }));
        tl.position.set(sx * c.w * 0.34, h * 0.45, c.l * 0.5); g.add(tl);
      });
      // wheels
      const wr = c.kind === 'big' ? 0.55 : c.kind === 'bike' ? 0.34 : 0.36;
      const wgeo = new THREE.CylinderGeometry(wr, wr, 0.26, 10);
      wgeo.rotateZ(Math.PI / 2);
      const wmat = mat(0x101012);
      const axles = c.kind === 'big' ? [-0.34, -0.14, 0.26, 0.44] : [-0.32, 0.32];
      axles.forEach((az) => {
        [-1, 1].forEach((sx) => {
          const w = new THREE.Mesh(wgeo, wmat);
          w.position.set(sx * (c.w * 0.5), wr, az * c.l);
          w.castShadow = true;
          g.add(w); this.wheels.push(w);
        });
      });
    }

    g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
    this.model = g;
    this.root.add(g);
    this.built = true;
  }

  place(x, z, heading = 0) {
    this.pos.set(x, heightAt(x, z) + 0.15, z);
    this.heading = heading;
    this.speed = 0;
    this.root.position.copy(this.pos);
    this.root.rotation.y = heading;
  }

  update(dt, input, world, driver = true) {
    const c = this.cfg;
    const isAir = c.kind === 'air';
    const isBoat = c.kind === 'boat';
    const isBike = c.kind === 'bike';

    let throttle = driver ? input.throttle || 0 : 0;
    let steerIn = driver ? input.steer || 0 : 0;
    let brake = driver ? input.brake || 0 : 0;

    if (!driver) { throttle = input.throttle || 0; steerIn = input.steer || 0; }

    const maxSpeed = c.maxSpeed * (1 - this.damage * 0.004);
    const accel = c.accel;

    if (brake > 0.1) this.speed = damp(this.speed, 0, 4.5 * brake, dt);
    else if (throttle !== 0) {
      this.speed += throttle * accel * dt * (1 - Math.abs(this.speed) / (maxSpeed * 1.35));
    } else {
      this.speed = damp(this.speed, 0, isAir ? 0.3 : 0.9, dt);
    }
    this.speed = clamp(this.speed, -maxSpeed * 0.35, maxSpeed);

    // steering scales with speed
    const speedFactor = clamp(Math.abs(this.speed) / 6, 0, 1);
    this.steer = damp(this.steer, steerIn, 8, dt);
    this.heading += this.steer * c.turn * dt * speedFactor * Math.sign(this.speed || 1) * (isBike ? 1.25 : 1);

    const fwdX = Math.sin(this.heading), fwdZ = Math.cos(this.heading);
    const nx = this.pos.x + fwdX * this.speed * dt;
    const nz = this.pos.z + fwdZ * this.speed * dt;

    if (isAir) {
      const lift = driver ? (input.jump ? 1 : input.crouch ? -1 : 0) : 0;
      this.pos.y += lift * 18 * dt + (this.speed > 12 ? 1.6 * dt : 0);
      this.pos.y = clamp(this.pos.y, heightAt(nx, nz) + 1.2, 700);
      this.pos.x = nx; this.pos.z = nz;
      if (this.rotor) this.rotor.rotation.y += dt * 34;
      if (this.tailRotor) this.tailRotor.rotation.x += dt * 40;
      this.pitch = damp(this.pitch, -this.speed * 0.004 - lift * 0.1, 4, dt);
      this.roll = damp(this.roll, -this.steer * 0.28, 5, dt);
    } else if (isBoat) {
      const water = heightAt(nx, nz) < WATER_LEVEL;
      this.pos.x = nx; this.pos.z = nz;
      const targetY = WATER_LEVEL + 0.35 + Math.sin(performance.now() * 0.002) * 0.12;
      this.pos.y = damp(this.pos.y, water ? targetY : heightAt(nx, nz) + 0.4, 5, dt);
      if (!water) this.speed = damp(this.speed, 0, 2, dt);
      this.pitch = damp(this.pitch, -this.speed * 0.006, 3, dt);
      this.roll = damp(this.roll, this.steer * 0.2 * speedFactor, 4, dt);
    } else {
      this.pos.x = nx; this.pos.z = nz;
      const gy = heightAt(this.pos.x, this.pos.z);
      const targetY = Math.max(gy, WATER_LEVEL - 0.2) + 0.15;
      this.pos.y = damp(this.pos.y, targetY, 10, dt);
      // slope-based pitch
      const ahead = heightAt(this.pos.x + fwdX * 3, this.pos.z + fwdZ * 3);
      const behind = heightAt(this.pos.x - fwdX * 3, this.pos.z - fwdZ * 3);
      this.pitch = damp(this.pitch, clamp((behind - ahead) * 0.12, -0.4, 0.4), 6, dt);
      this.roll = damp(this.roll, -this.steer * clamp(this.speed / maxSpeed, 0, 1) * 0.14, 5, dt);
      const spin = this.speed * dt * 2.2;
      this.wheels.forEach((w) => { w.rotation.x += spin; });
    }

    this.root.position.copy(this.pos);
    this.root.rotation.set(this.pitch, this.heading, this.roll, 'YXZ');

    // collision damage with world / building-ish rough check
    if (!isAir && Math.abs(this.speed) > maxSpeed * 0.75 && heightAt(this.pos.x, this.pos.z) > this.pos.y + 1.6) {
      this.speed *= 0.3; this.damage = Math.min(100, this.damage + 6);
    }
    return this;
  }

  get speedKmh() { return Math.abs(this.speed) * 3.6; }
}

// ------------------------------------------------------------------
// PEDESTRIANS
// ------------------------------------------------------------------
const PED_COLORS = [0x2f6f8f, 0x8f2f2f, 0x2f8f5f, 0x6f4f8f, 0xcfcfcf, 0x333333, 0xd8b070];

export class Pedestrian {
  constructor(scene, rng) {
    this.root = new THREE.Group();
    const shirt = PED_COLORS[Math.floor(rng() * PED_COLORS.length)];
    const mat = (c) => new THREE.MeshLambertMaterial({ color: c });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.65, 0.3), mat(shirt));
    torso.position.y = 1.15; this.root.add(torso);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), mat(0xd8a878));
    head.position.y = 1.6; this.root.add(head);
    const legGeo = new THREE.BoxGeometry(0.17, 0.7, 0.19); legGeo.translate(0, -0.35, 0);
    this.legL = new THREE.Mesh(legGeo, mat(0x2b3340)); this.legL.position.set(-0.13, 0.8, 0);
    this.legR = new THREE.Mesh(legGeo, mat(0x2b3340)); this.legR.position.set(0.13, 0.8, 0);
    const armGeo = new THREE.BoxGeometry(0.13, 0.55, 0.15); armGeo.translate(0, -0.27, 0);
    this.armL = new THREE.Mesh(armGeo, mat(shirt)); this.armL.position.set(-0.32, 1.42, 0);
    this.armR = new THREE.Mesh(armGeo, mat(shirt)); this.armR.position.set(0.32, 1.42, 0);
    this.root.add(this.legL, this.legR, this.armL, this.armR);
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    scene.add(this.root);
    this.phase = rng() * 6;
    this.speed = 1.1 + rng() * 0.7;
    this.target = new THREE.Vector3();
    this.alert = 0;
  }
  update(dt, playerPos) {
    const dir = new THREE.Vector3().subVectors(this.target, this.root.position);
    dir.y = 0;
    const d = dir.length();
    if (d < 1.2) this.pickTarget();
    dir.normalize();
    const distToPlayer = this.root.position.distanceTo(playerPos);
    this.alert = damp(this.alert, distToPlayer < 7 ? 1 : 0, 3, dt);
    const sp = this.speed * (1 - this.alert * 0.55);
    this.root.position.addScaledVector(dir, sp * dt);
    this.root.position.y = heightAt(this.root.position.x, this.root.position.z);
    this.root.rotation.y = Math.atan2(dir.x, dir.z) + this.alert * Math.atan2(playerPos.x - this.root.position.x, playerPos.z - this.root.position.z) * 0.6;
    this.phase += dt * (3 + sp * 1.6);
    const s = Math.sin(this.phase * 2);
    this.legL.rotation.x = s * 0.6; this.legR.rotation.x = -s * 0.6;
    this.armL.rotation.x = -s * 0.5; this.armR.rotation.x = s * 0.5;
  }
  pickTarget(rng = Math.random) {
    const a = rng() * Math.PI * 2, r = 12 + rng() * 40;
    this.target.set(this.root.position.x + Math.cos(a) * r, 0, this.root.position.z + Math.sin(a) * r);
  }
}

// ------------------------------------------------------------------
// ANIMALS
// ------------------------------------------------------------------
export class Animal {
  constructor(scene, rng) {
    this.root = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.6, 1.25), new THREE.MeshLambertMaterial({ color: 0x8a6b4a }));
    body.position.y = 0.95; this.root.add(body);
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.55, 0.24), new THREE.MeshLambertMaterial({ color: 0x8a6b4a }));
    neck.position.set(0, 1.35, -0.55); this.root.add(neck);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.5), new THREE.MeshLambertMaterial({ color: 0x9c7c58 }));
    head.position.set(0, 1.6, -0.75); this.root.add(head);
    const legGeo = new THREE.BoxGeometry(0.12, 0.72, 0.12); legGeo.translate(0, -0.36, 0);
    this.legs = [];
    [[-0.2, -0.42], [0.2, -0.42], [-0.2, 0.42], [0.2, 0.42]].forEach(([x, z]) => {
      const l = new THREE.Mesh(legGeo, new THREE.MeshLambertMaterial({ color: 0x6b5236 }));
      l.position.set(x, 0.72, z); this.root.add(l); this.legs.push(l);
    });
    this.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    scene.add(this.root);
    this.phase = rng() * 6; this.speed = 1.4 + rng();
    this.target = new THREE.Vector3();
    this.flee = 0;
  }
  update(dt, playerPos) {
    const d = this.root.position.distanceTo(playerPos);
    this.flee = damp(this.flee, d < 16 ? 1 : 0, 2, dt);
    const dir = new THREE.Vector3().subVectors(this.target, this.root.position); dir.y = 0;
    if (dir.length() < 1.5) { this.pickTarget(); }
    dir.normalize();
    if (this.flee > 0.3) {
      const away = new THREE.Vector3().subVectors(this.root.position, playerPos).setY(0).normalize();
      dir.lerp(away, this.flee).normalize();
    }
    const sp = this.speed * (1 + this.flee * 3.5);
    this.root.position.addScaledVector(dir, sp * dt);
    this.root.position.y = heightAt(this.root.position.x, this.root.position.z);
    this.root.rotation.y = Math.atan2(dir.x, dir.z);
    this.phase += dt * (4 + sp);
    const s = Math.sin(this.phase * 2);
    this.legs.forEach((l, i) => { l.rotation.x = s * 0.7 * (i % 2 ? 1 : -1); });
  }
  pickTarget(rng = Math.random) {
    const a = rng() * Math.PI * 2, r = 15 + rng() * 45;
    this.target.set(this.root.position.x + Math.cos(a) * r, 0, this.root.position.z + Math.sin(a) * r);
  }
}

// ------------------------------------------------------------------
// TRAFFIC CAR (simple AI that follows the road grid)
// ------------------------------------------------------------------
export class TrafficCar {
  constructor(scene, rng) {
    const types = ['sedan', 'sports', 'truck', 'bus'];
    const t = types[Math.floor(rng() * types.length)];
    this.v = new Vehicle(t, scene);
    this.axis = rng() < 0.5 ? 'x' : 'z';
    this.dir = rng() < 0.5 ? 1 : -1;
    this.speed = 8 + rng() * 8;
    this.lane = 3;
    this.stuck = 0;
    this.alive = true;
  }
  spawn(nearX, nearZ, rng) {
    const step = 40;
    const line = Math.round((this.axis === 'x' ? nearZ : nearX) / step) * step;
    if (this.axis === 'x') this.v.place(nearX, line + this.dir * this.lane, this.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
    else this.v.place(line + this.dir * this.lane, nearZ, this.dir > 0 ? 0 : Math.PI);
    this.v.speed = this.speed;
  }
  update(dt, playerPos) {
    // follow current road line, turn at intersections occasionally
    const step = 40;
    const p = this.v.pos;
    const onLine = this.axis === 'x' ? Math.abs(((p.z / step) % 1) - 0) : Math.abs(((p.x / step) % 1) - 0);
    let throttle = 1;
    if (p.distanceTo(playerPos) < 14) { throttle = 0.2; }
    if (Math.random() < dt * 0.15) {
      this.axis = this.axis === 'x' ? 'z' : 'x';
      this.dir = Math.random() < 0.5 ? 1 : -1;
    }
    this.v.update(dt, { throttle, steer: 0, brake: 0 }, null, false);
    // keep on lane: gently steer toward lane line
    const target = this.axis === 'x' ? this.dir * this.lane : this.dir * this.lane;
    const err = this.axis === 'x' ? (Math.round(p.z / step) * step + target) - p.z
                                  : (Math.round(p.x / step) * step + target) - p.x;
    const cross = this.axis === 'x' ? err : err;
    this.v.heading += clamp(cross * 0.03, -0.05, 0.05);
    if (Math.hypot(p.x, p.z) > CITY_RADIUS + 60) { this.axis = this.axis === 'x' ? 'z' : 'x'; this.dir = -this.dir; }
  }
  dispose(scene) { scene.remove(this.v.root); }
}
