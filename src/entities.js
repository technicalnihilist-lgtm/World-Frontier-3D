// ---------------------------------------------------------------
// ENTITIES: humanoid character, vehicles, pedestrians, animals
// All geometry is generated here: smooth capsules for bodies,
// bevelled extruded profiles for vehicle shells.
// ---------------------------------------------------------------
import * as THREE from 'three';
import { clamp, lerp, damp, mulberry32 } from './util.js';
import { heightAt, WATER_LEVEL, biomeAt, CITY_RADIUS } from './world.js';

const mat = (c, o = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });

// ==================================================================
// HUMANOID — shared by the player and every pedestrian
// ==================================================================
export function makeHuman(opt = {}) {
  const simple = !!opt.simple;                 // low-poly variant for NPC crowds
  const skinC = opt.skin ?? 0xd8a878;
  const shirtC = opt.shirt ?? 0x2f6f8f;
  const pantsC = opt.pants ?? 0x2b3340;
  const hairC = opt.hair ?? 0x241a12;
  const shoeC = opt.shoe ?? 0x16181c;

  const skin = mat(skinC), shirt = mat(shirtC), pants = mat(pantsC);
  const hairMat = mat(hairC), shoeMat = mat(shoeC);

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const chest = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.168, simple ? 0.52 : 0.30, simple ? 3 : 6, simple ? 10 : 16), shirt);
  chest.scale.set(1.22, 1.0, 0.80);
  chest.position.y = simple ? 1.12 : 1.24;
  body.add(chest);

  if (!simple) {
    const waist = new THREE.Mesh(new THREE.CapsuleGeometry(0.142, 0.12, 5, 14), shirt);
    waist.scale.set(1.18, 1.0, 0.82);
    waist.position.y = 1.02;
    body.add(waist);
  }

  const hips = new THREE.Mesh(new THREE.CapsuleGeometry(0.152, 0.10, simple ? 3 : 5, simple ? 10 : 14), pants);
  hips.scale.set(1.16, 1.0, 0.88);
  hips.position.y = 0.90;
  body.add(hips);

  if (!simple) {
    [-1, 1].forEach((s) => {
      const sh = new THREE.Mesh(new THREE.SphereGeometry(0.082, 12, 10), shirt);
      sh.position.set(s * 0.185, 1.36, 0);
      body.add(sh);
    });
  }

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.055, 0.10, simple ? 6 : 10), skin);
  neck.position.y = 1.46;
  body.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.113, simple ? 12 : 20, simple ? 10 : 16), skin);
  head.scale.set(0.94, 1.12, 1.02);
  head.position.y = 1.60;
  body.add(head);

  const hair = new THREE.Mesh(
    new THREE.SphereGeometry(0.118, simple ? 12 : 20, simple ? 8 : 14, 0, Math.PI * 2, 0, Math.PI * 0.40), hairMat);
  hair.scale.set(0.96, 1.10, 1.03);
  hair.position.y = 1.605;
  body.add(hair);

  if (!simple) {
    const eyeGeo = new THREE.SphereGeometry(0.0155, 8, 6);
    const eyeMat = mat(0x1d1712);
    [-1, 1].forEach((s) => {
      const e = new THREE.Mesh(eyeGeo, eyeMat);
      e.position.set(s * 0.040, 1.617, 0.098);
      body.add(e);
    });
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.017, 0.048, 6), skin);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, 1.588, 0.108);
    body.add(nose);
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.008, 0.008), mat(0x8a5a52));
    mouth.position.set(0, 1.552, 0.100);
    body.add(mouth);
  }

  const mkArm = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.205, 1.355, 0);
    if (simple) {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.050, 0.46, 3, 8), shirt);
      arm.position.y = -0.30;
      g.add(arm);
    } else {
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.052, 0.19, 4, 10), shirt);
      upper.position.y = -0.125;
      const fore = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.185, 4, 10), skin);
      fore.position.y = -0.395;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.050, 10, 8), skin);
      hand.scale.set(1.0, 1.2, 0.72);
      hand.position.y = -0.535;
      g.add(upper, fore, hand);
    }
    body.add(g);
    return g;
  };
  const armL = mkArm(-1), armR = mkArm(1);

  const mkLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.093, 0.895, 0);
    if (simple) {
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.60, 3, 8), pants);
      leg.position.y = -0.38;
      g.add(leg);
    } else {
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.074, 0.25, 4, 10), pants);
      thigh.position.y = -0.185;
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.27, 4, 10), pants);
      shin.position.y = -0.545;
      g.add(thigh, shin);
    }
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.098, 0.068, 0.235), shoeMat);
    foot.position.set(0, -0.795, 0.055);
    g.add(foot);
    body.add(g);
    return g;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);

  root.traverse((o) => { if (o.isMesh) { o.castShadow = !simple; o.receiveShadow = false; } });
  const s = opt.scale ?? 1;
  if (s !== 1) root.scale.setScalar(s);
  return { root, body, head, armL, armR, legL, legR };
}

// ==================================================================
// PLAYER
// ==================================================================
export class Player {
  constructor(scene) {
    this.scene = scene;
    const h = makeHuman({ shirt: 0x2f6f8f, pants: 0x2b3340, skin: 0xd8a878, hair: 0x241a12 });
    this.root = h.root;
    this.body = h.body;
    this.head = h.head;
    this.armL = h.armL; this.armR = h.armR;
    this.legL = h.legL; this.legR = h.legR;

    this.pos = new THREE.Vector3(41, 0, 61);
    this.vel = new THREE.Vector3();
    this.heading = 0;
    this.onGround = true;
    this.state = 'idle';
    this.speed = 0;
    this.walkPhase = 0;
    this.radius = 0.4;
    this.height = 1.75;
    this.crouch = 0;
    this.swimming = false;
    this.sitting = false;
    this.climbing = false;
    this.vehicle = null;
    this.health = 100;
    this.stamina = 100;
    scene.add(this.root);
  }

  respawn(x, z) {
    this.pos.set(x, heightAt(x, z) + 0.05, z);
    this.vel.set(0, 0, 0);
  }

  update(dt, input, camera, world, preset) {
    const gy = heightAt(this.pos.x, this.pos.z);
    const inWater = gy < WATER_LEVEL - 0.4;

    if (this.vehicle) { this.syncInVehicle(); this.animate(dt, 0); return; }

    const run = input.run ? 1 : 0;
    this.crouch = damp(this.crouch, input.crouch ? 1 : 0, 12, dt);

    // ---- camera-relative movement (fixed orientation) ----
    // camera sits at focus + dist*(sin yaw, cos yaw), so "forward" is
    // the opposite of that offset: (-sin yaw, -cos yaw).
    const yaw = camera.yaw;
    let mx = input.moveX, mz = input.moveZ;
    const mag = Math.hypot(mx, mz);
    if (mag > 1) { mx /= mag; mz /= mag; }
    const fwdX = -Math.sin(yaw), fwdZ = -Math.cos(yaw);   // away from camera
    const rightX = -fwdZ, rightZ = fwdX;                  // 90° right of forward
    const forwardAmount = -mz;                            // stick/W up = -1 = forward
    const wx = fwdX * forwardAmount + rightX * mx;
    const wz = fwdZ * forwardAmount + rightZ * mx;

    let maxSpeed = 3.4;
    if (run && this.stamina > 2) maxSpeed = 7.2;
    if (input.sprint && this.stamina > 2) maxSpeed = 10.5;
    if (this.crouch > 0.5) maxSpeed = 1.7;
    if (inWater) maxSpeed = 2.6;
    if (this.climbing) maxSpeed = 1.2;

    const moving = Math.hypot(wx, wz) > 0.05;
    this.vel.x = damp(this.vel.x, wx * maxSpeed, this.onGround ? 12 : 4, dt);
    this.vel.z = damp(this.vel.z, wz * maxSpeed, this.onGround ? 12 : 4, dt);

    const sprinting = (run || input.sprint) && moving && this.onGround && !inWater;
    this.stamina = clamp(this.stamina + (sprinting ? -18 : 14) * dt, 0, 100);

    if (inWater) {
      this.swimming = true;
      this.pos.y = damp(this.pos.y, WATER_LEVEL + 0.55 + (input.jump ? 0.6 : 0), 6, dt);
      this.vel.y = 0; this.onGround = false;
    } else {
      this.swimming = false;
      this.vel.y -= 22 * dt;
      if (input.jump && this.onGround) { this.vel.y = 7.4; this.onGround = false; }
      this.pos.y += this.vel.y * dt;
      if (this.pos.y <= gy + 0.02) { this.pos.y = gy; this.vel.y = 0; this.onGround = true; }
    }

    const steep = heightAt(this.pos.x + wx, this.pos.z + wz) - gy;
    this.climbing = !inWater && steep > 0.55 && (input.jump || this.climbing) && moving;
    if (this.climbing) {
      this.pos.y += 2.1 * dt; this.vel.y = 0;
      this.pos.x += wx * 0.5 * dt; this.pos.z += wz * 0.5 * dt;
    }

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    // model faces +Z, so heading = atan2(x, z)
    if (moving) this.heading = Math.atan2(this.vel.x, this.vel.z);

    this.speed = Math.hypot(this.vel.x, this.vel.z);
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.heading;
    this.animate(dt, this.speed);

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
      this.body.rotation.x = -1.15;
      this.body.position.y = 0;
    } else if (this.sitting) {
      this.body.rotation.x = 0; this.body.position.y = -0.42;
      this.legL.rotation.x = -1.5; this.legR.rotation.x = -1.5;
      this.armL.rotation.x = -0.6; this.armR.rotation.x = -0.6;
    } else if (this.climbing) {
      this.body.rotation.x = 0;
      this.armL.rotation.x = -2.2 + s * 0.6;
      this.armR.rotation.x = -2.2 + s2 * 0.6;
      this.legL.rotation.x = s * 0.7; this.legR.rotation.x = s2 * 0.7;
    } else {
      this.body.rotation.x = 0;
      this.body.position.y = -this.crouch * 0.42;
      this.legL.rotation.x = s * amp * 0.9;
      this.legR.rotation.x = s2 * amp * 0.9;
      this.armL.rotation.x = s2 * amp * 0.75;
      this.armR.rotation.x = s * amp * 0.75;
      this.body.position.y += Math.abs(Math.sin(this.walkPhase * 2.2)) * amp * 0.04;
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

// ==================================================================
// VEHICLES — bevelled extruded shells
// ==================================================================
export const VEHICLE_TYPES = {
  sedan:    { name: 'Sedan',       kind: 'car',   w: 1.86, h: 1.44, l: 4.42, color: 0x9aa4b2, maxSpeed: 34, accel: 12, turn: 1.7, mass: 1.0, seats: 4 },
  sports:   { name: 'Sports Car',  kind: 'car',   w: 1.94, h: 1.20, l: 4.34, color: 0xc0392b, maxSpeed: 52, accel: 20, turn: 1.9, mass: 0.85, seats: 2 },
  supercar: { name: 'Supercar',    kind: 'car',   w: 2.02, h: 1.06, l: 4.62, color: 0xf1c40f, maxSpeed: 66, accel: 26, turn: 2.0, mass: 0.8, seats: 2 },
  bike:     { name: 'Motorcycle',  kind: 'bike',  w: 0.82, h: 1.10, l: 2.10, color: 0x222831, maxSpeed: 44, accel: 22, turn: 2.4, mass: 0.4, seats: 1 },
  scooter:  { name: 'Scooter',     kind: 'bike',  w: 0.72, h: 1.02, l: 1.80, color: 0x3fa9f5, maxSpeed: 22, accel: 12, turn: 2.6, mass: 0.3, seats: 1 },
  bus:      { name: 'City Bus',    kind: 'big',   w: 2.62, h: 3.10, l: 11.0, color: 0x2e8b57, maxSpeed: 24, accel: 7, turn: 1.0, mass: 3.0, seats: 30 },
  truck:    { name: 'Truck',       kind: 'big',   w: 2.52, h: 3.05, l: 8.50, color: 0xd35400, maxSpeed: 26, accel: 8, turn: 1.2, mass: 2.6, seats: 2 },
  boat:     { name: 'Motorboat',   kind: 'boat',  w: 2.40, h: 1.25, l: 6.00, color: 0xecf0f1, maxSpeed: 30, accel: 10, turn: 1.4, mass: 1.4, seats: 4 },
  heli:     { name: 'Helicopter',  kind: 'air',   w: 3.00, h: 2.20, l: 6.50, color: 0x34495e, maxSpeed: 55, accel: 14, turn: 1.6, mass: 1.6, seats: 3 },
  plane:    { name: 'Light Plane', kind: 'air',   w: 9.00, h: 2.20, l: 8.00, color: 0xdfe6e9, maxSpeed: 85, accel: 16, turn: 1.1, mass: 2.0, seats: 2 },
};

// side silhouettes, x = along the car (front is +x), y = height
const PROFILES = {
  sedan: [[-2.21,0.26],[-2.21,0.80],[-1.60,0.92],[-1.02,1.36],[-0.34,1.42],[0.54,1.41],[1.16,0.99],[1.78,0.90],[2.16,0.78],[2.21,0.46],[2.10,0.26]],
  sports: [[-2.17,0.22],[-2.17,0.70],[-1.62,0.80],[-0.92,1.14],[-0.10,1.20],[0.62,1.10],[1.28,0.86],[1.92,0.80],[2.17,0.62],[2.17,0.34],[2.05,0.20]],
  supercar: [[-2.31,0.20],[-2.31,0.62],[-1.74,0.72],[-1.02,0.98],[-0.14,1.04],[0.52,0.96],[1.16,0.76],[1.92,0.72],[2.28,0.56],[2.31,0.32],[2.16,0.18]],
  bus: [[-5.50,0.30],[-5.50,3.00],[-5.10,3.10],[5.10,3.10],[5.50,2.90],[5.50,0.44],[5.20,0.30]],
  truck: [[-4.25,0.34],[-4.25,3.00],[-1.10,3.00],[-1.10,0.34]],
  boat: [[-3.00,0.30],[-2.40,0.85],[-0.40,1.05],[1.60,0.95],[2.70,0.60],[3.00,0.30],[2.60,0.05],[-2.70,0.05]],
};

function extrudeProfile(profile, width, bevel = 0.055) {
  const shape = new THREE.Shape();
  profile.forEach(([x, y], i) => (i ? shape.lineTo(x, y) : shape.moveTo(x, y)));
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: Math.max(0.05, width - bevel * 2),
    bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 3, curveSegments: 2, steps: 1,
  });
  geo.translate(0, 0, -(width - bevel * 2) / 2);
  geo.rotateY(-Math.PI / 2);      // nose (+x) becomes +z, width along x
  geo.computeVertexNormals();
  return geo;
}

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
    this.build();
    scene.add(this.root);
  }

  build() {
    const c = this.cfg;
    const g = new THREE.Group();
    const paint = mat(c.color);
    const paintDark = mat(new THREE.Color(c.color).multiplyScalar(0.65).getHex());
    const glass = mat(0x1b2a36, { transparent: true, opacity: 0.78 });
    const dark = mat(0x14161a);
    const chrome = mat(0xb9c0c8);
    const head = new THREE.MeshLambertMaterial({ color: 0xfff6d5, emissive: 0xffe9a8, emissiveIntensity: 0.85 });
    const tail = new THREE.MeshLambertMaterial({ color: 0xff3b2f, emissive: 0x8c1207, emissiveIntensity: 0.9 });

    const addWheels = (radius, halfTrack, zFront, zRear) => {
      const tire = new THREE.CylinderGeometry(radius, radius, radius * 0.62, 20);
      tire.rotateZ(Math.PI / 2);
      const rim = new THREE.CylinderGeometry(radius * 0.58, radius * 0.58, radius * 0.64, 12);
      rim.rotateZ(Math.PI / 2);
      const tireMat = mat(0x0e0f11), rimMat = mat(0x9aa2ab);
      [zFront, zRear].forEach((z) => {
        [-1, 1].forEach((sx) => {
          const w = new THREE.Mesh(tire, tireMat);
          const r = new THREE.Mesh(rim, rimMat);
          w.add(r);
          w.position.set(sx * halfTrack, radius, z);
          w.castShadow = true;
          g.add(w); this.wheels.push(w);
        });
      });
    };

    if (c.kind === 'air') {
      const fuseGeo = new THREE.CapsuleGeometry(c.h * 0.30, c.l * 0.62, 8, 16);
      fuseGeo.rotateX(Math.PI / 2);
      const fuse = new THREE.Mesh(fuseGeo, paint);
      fuse.position.y = c.h * 0.48;
      g.add(fuse);
      const canopy = new THREE.Mesh(new THREE.SphereGeometry(c.h * 0.30, 16, 12), glass);
      canopy.scale.set(1, 0.85, 1.7);
      canopy.position.set(0, c.h * 0.62, -c.l * 0.10);
      g.add(canopy);
      if (this.type === 'heli') {
        const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.16, c.l * 0.55, 10), paint);
        boom.rotation.x = Math.PI / 2; boom.position.set(0, c.h * 0.5, c.l * 0.48); g.add(boom);
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, 0.5), paintDark);
        fin.position.set(0, c.h * 0.75, c.l * 0.72); g.add(fin);
        const rotor = new THREE.Mesh(new THREE.BoxGeometry(c.w * 2.1, 0.05, 0.30), dark);
        rotor.position.y = c.h * 1.02; g.add(rotor); this.rotor = rotor;
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, c.h * 0.5, 8), chrome);
        mast.position.y = c.h * 0.78; g.add(mast);
        const tailRotor = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.85, 0.12), dark);
        tailRotor.position.set(0.12, c.h * 0.78, c.l * 0.74); g.add(tailRotor); this.tailRotor = tailRotor;
        [-0.62, 0.62].forEach((x) => {
          const skid = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, c.l * 0.72, 8), chrome);
          skid.rotation.x = Math.PI / 2; skid.position.set(x, 0.06, 0); g.add(skid);
          const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.55, 6), dark);
          strut.position.set(x, 0.33, 0); g.add(strut);
        });
      } else {
        const wingGeo = new THREE.BoxGeometry(c.w * 1.9, 0.13, 1.55);
        wingGeo.translate(0, 0, 0);
        const wing = new THREE.Mesh(wingGeo, paint);
        wing.position.set(0, c.h * 0.48, -0.10); g.add(wing);
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.10, 1.05, 0.85), paintDark);
        fin.position.set(0, c.h * 0.88, c.l * 0.44); g.add(fin);
        const prop = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.55, 0.06), dark);
        prop.position.set(0, c.h * 0.48, -c.l * 0.55); g.add(prop); this.rotor = prop;
        const tailplane = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.62, 0.09, 0.85), paint);
        tailplane.position.set(0, c.h * 0.55, c.l * 0.52); g.add(tailplane);
      }
    } else if (c.kind === 'boat') {
      const hull = new THREE.Mesh(extrudeProfile(PROFILES.boat, c.w, 0.05), paint);
      hull.position.y = 0.10; g.add(hull);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.86, 0.07, c.l * 0.72), mat(0xdad5c8));
      deck.position.set(0, 0.78, 0.1); g.add(deck);
      const screen = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.66, 0.42, 0.06), glass);
      screen.position.set(0, 1.0, -0.75); g.add(screen);
      const console_ = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.4, 0.24, 0.35), dark);
      console_.position.set(0, 0.9, -0.55); g.add(console_);
      const motor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.45, 0.3), dark);
      motor.position.set(0, 0.55, c.l * 0.48); g.add(motor);
    } else if (c.kind === 'bike') {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.42, 0.30, c.l * 0.66), paint);
      frame.position.y = c.h * 0.48; g.add(frame);
      const tank = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.30, 4, 12), paint);
      tank.rotation.x = Math.PI / 2; tank.position.set(0, c.h * 0.66, -0.10); g.add(tank);
      const seat = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.36, 0.10, c.l * 0.30), dark);
      seat.position.set(0, c.h * 0.72, c.l * 0.16); g.add(seat);
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, c.w * 0.95, 6), chrome);
      bar.rotation.z = Math.PI / 2; bar.position.set(0, c.h * 0.82, -c.l * 0.30); g.add(bar);
      const fork = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, c.h * 0.55, 6), chrome);
      fork.rotation.x = -0.30; fork.position.set(0, c.h * 0.55, -c.l * 0.34); g.add(fork);
      const rider = makeHuman({ simple: true, shirt: 0x2c3e50, pants: 0x1b1f24, skin: 0xd8a878 });
      rider.root.position.set(0, 0.28, 0.05);
      rider.legL.rotation.x = -1.2; rider.legR.rotation.x = -1.2;
      rider.armL.rotation.x = -1.1; rider.armR.rotation.x = -1.1;
      g.add(rider.root);
      const wr = 0.33;
      const tire = new THREE.CylinderGeometry(wr, wr, 0.11, 18);
      tire.rotateZ(Math.PI / 2);
      [-c.l * 0.42, c.l * 0.42].forEach((z) => {
        const w = new THREE.Mesh(tire, mat(0x0e0f11));
        const rim = new THREE.Mesh(new THREE.CylinderGeometry(wr * 0.55, wr * 0.55, 0.12, 10), mat(0x9aa2ab));
        w.add(rim);
        w.position.set(0, wr, z); w.castShadow = true;
        g.add(w); this.wheels.push(w);
      });
    } else if (c.kind === 'big') {
      const body = new THREE.Mesh(extrudeProfile(PROFILES[this.type], c.w, 0.06), paint);
      g.add(body);
      // window band
      const bandW = c.w * 0.94;
      if (this.type === 'bus') {
        const band = new THREE.Mesh(new THREE.BoxGeometry(bandW, 0.85, c.l * 0.90), glass);
        band.position.set(0, 2.35, 0); g.add(band);
        const door = new THREE.Mesh(new THREE.BoxGeometry(bandW * 0.98, 1.9, 0.05), glass);
        door.position.set(0, 1.35, c.l * 0.46); g.add(door);
      } else {
        const cab = new THREE.Mesh(new THREE.BoxGeometry(bandW, 0.80, 0.06), glass);
        cab.position.set(0, 2.45, c.l * 0.5 - 0.12); g.add(cab);
        const side = new THREE.Mesh(new THREE.BoxGeometry(bandW, 0.72, 1.5), glass);
        side.position.set(0, 2.45, c.l * 0.5 - 1.0); g.add(side);
        const cargo = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.98, 2.35, c.l * 0.58), mat(0xd9d5cc));
        cargo.position.set(0, 1.65, -c.l * 0.14); g.add(cargo);
        for (let i = -1; i <= 1; i++) {
          const rail = new THREE.Mesh(new THREE.BoxGeometry(c.w * 1.0, 0.06, 0.08), chrome);
          rail.position.set(0, 1.1 + i * 0.55, -c.l * 0.14); g.add(rail);
        }
      }
      [-1, 1].forEach((sx) => {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.06), head);
        hl.position.set(sx * c.w * 0.30, 0.72, c.l * 0.5); g.add(hl);
        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.06), tail);
        tl.position.set(sx * c.w * 0.32, 0.75, -c.l * 0.5); g.add(tl);
      });
      const wr = this.type === 'bus' ? 0.52 : 0.55;
      addWheels(wr, c.w * 0.5 - 0.04, c.l * 0.32, -c.l * 0.34);
    } else {
      // ---- cars ----
      const body = new THREE.Mesh(extrudeProfile(PROFILES[this.type] || PROFILES.sedan, c.w, 0.06), paint);
      g.add(body);

      // glass band: slightly wider than the shell so it reads as windows
      const cabin = {
        sedan: [[-1.02,1.06],[-0.34,1.40],[0.54,1.39],[1.14,1.02]],
        sports: [[-0.92,0.86],[-0.10,1.18],[0.62,1.08],[1.24,0.88]],
        supercar: [[-1.02,0.72],[-0.14,1.02],[0.52,0.94],[1.12,0.78]],
      }[this.type] || [[-1.02,1.06],[-0.34,1.40],[0.54,1.39],[1.14,1.02]];
      const glassGeo = extrudeProfile(cabin, c.w * 0.96, 0.03);
      glassGeo.computeBoundingBox();
      const bb = glassGeo.boundingBox;
      const cy = (bb.min.y + bb.max.y) / 2;
      glassGeo.translate(0, -cy, 0);
      glassGeo.scale(1.05, 1.02, 1.0);
      glassGeo.translate(0, cy, 0);
      glassGeo.computeVertexNormals();
      const band = new THREE.Mesh(glassGeo, glass);
      g.add(band);

      // bumpers, lights, mirrors
      const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.96, 0.20, 0.16), paintDark);
      frontBumper.position.set(0, 0.40, c.l * 0.49); g.add(frontBumper);
      const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.96, 0.20, 0.16), paintDark);
      rearBumper.position.set(0, 0.40, -c.l * 0.49); g.add(rearBumper);
      const grille = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.5, 0.13, 0.05), dark);
      grille.position.set(0, 0.60, c.l * 0.50); g.add(grille);
      [-1, 1].forEach((sx) => {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.13, 0.07), head);
        hl.position.set(sx * c.w * 0.31, 0.72, c.l * 0.495); g.add(hl);
        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.11, 0.07), tail);
        tl.position.set(sx * c.w * 0.33, 0.76, -c.l * 0.495); g.add(tl);
        const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.10), paintDark);
        mirror.position.set(sx * (c.w * 0.52), 0.98, c.l * 0.13); g.add(mirror);
      });
      if (this.type === 'supercar' || this.type === 'sports') {
        const wing = new THREE.Mesh(new THREE.BoxGeometry(c.w * 0.92, 0.06, 0.34), paintDark);
        wing.position.set(0, 0.86, -c.l * 0.44); g.add(wing);
        [-1, 1].forEach((sx) => {
          const stay = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.20, 0.12), dark);
          stay.position.set(sx * c.w * 0.34, 0.76, -c.l * 0.44); g.add(stay);
        });
      }
      addWheels(0.345, c.w * 0.5 - 0.03, c.l * 0.31, -c.l * 0.31);
    }

    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.model = g;
    this.root.add(g);
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
    if (brake > 0.1) this.speed = damp(this.speed, 0, 4.5 * brake, dt);
    else if (throttle !== 0) this.speed += throttle * c.accel * dt * (1 - Math.abs(this.speed) / (maxSpeed * 1.35));
    else this.speed = damp(this.speed, 0, isAir ? 0.3 : 0.9, dt);
    this.speed = clamp(this.speed, -maxSpeed * 0.35, maxSpeed);

    const speedFactor = clamp(Math.abs(this.speed) / 6, 0, 1);
    this.steer = damp(this.steer, steerIn, 8, dt);
    // positive steer (stick right) turns right: heading increases -> yaw right
    this.heading -= this.steer * c.turn * dt * speedFactor * Math.sign(this.speed || 1) * (isBike ? 1.25 : 1);

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
      this.pos.y = damp(this.pos.y, Math.max(gy, WATER_LEVEL - 0.2) + 0.15, 10, dt);
      const ahead = heightAt(this.pos.x + fwdX * 3, this.pos.z + fwdZ * 3);
      const behind = heightAt(this.pos.x - fwdX * 3, this.pos.z - fwdZ * 3);
      this.pitch = damp(this.pitch, clamp((behind - ahead) * 0.12, -0.4, 0.4), 6, dt);
      this.roll = damp(this.roll, this.steer * clamp(this.speed / maxSpeed, 0, 1) * 0.12, 5, dt);
      const spin = this.speed * dt * 2.2;
      this.wheels.forEach((w) => { w.rotation.x += spin; });
    }

    this.root.position.copy(this.pos);
    this.root.rotation.set(this.pitch, this.heading, this.roll, 'YXZ');

    if (!isAir && Math.abs(this.speed) > maxSpeed * 0.75 && heightAt(this.pos.x, this.pos.z) > this.pos.y + 1.6) {
      this.speed *= 0.3; this.damage = Math.min(100, this.damage + 6);
    }
    return this;
  }

  get speedKmh() { return Math.abs(this.speed) * 3.6; }
}

// ==================================================================
// PEDESTRIANS
// ==================================================================
const SHIRTS = [0x2f6f8f, 0x8f2f2f, 0x2f8f5f, 0x6f4f8f, 0xcfcfcf, 0x2b2f36, 0xd8b070, 0xb84a6f];
const PANTS = [0x2b3340, 0x3d3a33, 0x1f2733, 0x4a4f57, 0x5a4632];
const SKINS = [0xd8a878, 0xc98f62, 0x9c6b45, 0x6f4a2f, 0xe8c39e];
const HAIRS = [0x241a12, 0x120d09, 0x4a2f1c, 0x2b2b2b];

export class Pedestrian {
  constructor(scene, rng) {
    const h = makeHuman({
      simple: true,
      shirt: SHIRTS[Math.floor(rng() * SHIRTS.length)],
      pants: PANTS[Math.floor(rng() * PANTS.length)],
      skin: SKINS[Math.floor(rng() * SKINS.length)],
      hair: HAIRS[Math.floor(rng() * HAIRS.length)],
      scale: 0.94 + rng() * 0.12,
    });
    this.root = h.root;
    this.body = h.body;
    this.legL = h.legL; this.legR = h.legR;
    this.armL = h.armL; this.armR = h.armR;
    this.head = h.head;
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
    this.legL.rotation.x = s * 0.62; this.legR.rotation.x = -s * 0.62;
    this.armL.rotation.x = -s * 0.5; this.armR.rotation.x = s * 0.5;
  }
  pickTarget(rng = Math.random) {
    const a = rng() * Math.PI * 2, r = 12 + rng() * 40;
    this.target.set(this.root.position.x + Math.cos(a) * r, 0, this.root.position.z + Math.sin(a) * r);
  }
}

// ==================================================================
// ANIMALS
// ==================================================================
export class Animal {
  constructor(scene, rng) {
    this.root = new THREE.Group();
    const hide = mat(0x8a6b4a), hideLight = mat(0xa8835c), dark = mat(0x5c4429);
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.72, 6, 12), hide);
    torso.rotation.x = Math.PI / 2; torso.position.y = 0.95; this.root.add(torso);
    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.30, 12, 10), hide);
    chest.position.set(0, 1.0, -0.42); this.root.add(chest);
    const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.10, 0.42, 4, 10), hide);
    neck.rotation.x = -0.5; neck.position.set(0, 1.32, -0.58); this.root.add(neck);
    const head = new THREE.Mesh(new THREE.CapsuleGeometry(0.10, 0.20, 4, 10), hideLight);
    head.rotation.x = Math.PI / 2.2; head.position.set(0, 1.58, -0.78); this.root.add(head);
    [-1, 1].forEach((s) => {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 6), hide);
      ear.position.set(s * 0.08, 1.72, -0.72); ear.rotation.z = s * 0.3; this.root.add(ear);
    });
    const tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.22, 3, 8), hideLight);
    tail.position.set(0, 1.08, 0.55); tail.rotation.x = 0.7; this.root.add(tail);
    this.legs = [];
    [[-0.17, -0.36], [0.17, -0.36], [-0.17, 0.34], [0.17, 0.34]].forEach(([x, z]) => {
      const g = new THREE.Group();
      g.position.set(x, 0.86, z);
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.062, 0.28, 4, 8), hide);
      thigh.position.y = -0.18; g.add(thigh);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.30, 4, 8), dark);
      shin.position.y = -0.52; g.add(shin);
      this.root.add(g); this.legs.push(g);
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
    if (dir.length() < 1.5) this.pickTarget();
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

// ==================================================================
// TRAFFIC
// ==================================================================
export class TrafficCar {
  constructor(scene, rng) {
    const types = ['sedan', 'sports', 'truck', 'bus'];
    const t = types[Math.floor(rng() * types.length)];
    this.v = new Vehicle(t, scene);
    this.axis = rng() < 0.5 ? 'x' : 'z';
    this.dir = rng() < 0.5 ? 1 : -1;
    this.speed = 8 + rng() * 8;
    this.lane = 3;
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
    const step = 40;
    const p = this.v.pos;
    let throttle = 1;
    if (p.distanceTo(playerPos) < 14) throttle = 0.2;
    if (Math.random() < dt * 0.15) {
      this.axis = this.axis === 'x' ? 'z' : 'x';
      this.dir = Math.random() < 0.5 ? 1 : -1;
    }
    this.v.update(dt, { throttle, steer: 0, brake: 0 }, null, false);
    const target = this.dir * this.lane;
    const err = this.axis === 'x' ? (Math.round(p.z / step) * step + target) - p.z
                                  : (Math.round(p.x / step) * step + target) - p.x;
    this.v.heading -= clamp(err * 0.03, -0.05, 0.05);
    if (Math.hypot(p.x, p.z) > CITY_RADIUS + 60) { this.axis = this.axis === 'x' ? 'z' : 'x'; this.dir = -this.dir; }
  }
  dispose(scene) { scene.remove(this.v.root); }
}
