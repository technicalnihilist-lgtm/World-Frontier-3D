// ---------------------------------------------------------------
// GAMEPLAY: camera, missions, collectibles, world events
// ---------------------------------------------------------------
import * as THREE from 'three';
import { clamp, lerp, damp, mulberry32 } from './util.js';
import { heightAt, WATER_LEVEL, CITY_RADIUS } from './world.js';

// ------------------------------------------------------------------
// THIRD PERSON CAMERA
// ------------------------------------------------------------------
export class CameraController {
  constructor(camera, dom) {
    this.camera = camera;
    this.yaw = 0; this.pitch = 0.28;
    this.dist = 7;
    this.targetDist = 7;
    this.sensitivity = 1;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.shake = 0;
  }
  rotate(dx, dy) {
    this.yaw -= dx * 0.0032 * this.sensitivity;
    this.pitch = clamp(this.pitch + dy * 0.0028 * this.sensitivity, -0.35, 1.15);
  }
  update(dt, target, mode, world) {
    const dist = mode === 'vehicle' ? 11.5 : mode === 'air' ? 18 : 7;
    const height = mode === 'vehicle' ? 2.2 : mode === 'air' ? 4 : 1.55;
    this.targetDist = dist;
    this.dist = damp(this.dist, this.targetDist, 4, dt);

    const focus = new THREE.Vector3(target.x, target.y + height, target.z);
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const desired = new THREE.Vector3(
      focus.x + Math.sin(this.yaw) * this.dist * cp,
      focus.y + sp * this.dist,
      focus.z + Math.cos(this.yaw) * this.dist * cp
    );
    // keep above ground
    const gy = heightAt(desired.x, desired.z) + 1.2;
    if (desired.y < gy) desired.y = gy;

    this.pos.lerp(desired, 1 - Math.exp(-14 * dt));
    this.look.lerp(focus, 1 - Math.exp(-18 * dt));
    this.camera.position.copy(this.pos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2);
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake;
    }
    this.camera.lookAt(this.look);
  }
}

// ------------------------------------------------------------------
// BEACON (mission marker)
// ------------------------------------------------------------------
export class Beacon {
  constructor(scene, color = 0x36c6ff) {
    this.group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.34, depthWrite: false, side: THREE.DoubleSide });
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 26, 14, 1, true), mat);
    pillar.position.y = 13;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.16, 8, 28), new THREE.MeshBasicMaterial({ color }));
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.6;
    this.group.add(pillar, ring);
    this.group.visible = false;
    scene.add(this.group);
    this.t = 0;
  }
  showAt(x, z, color) {
    this.group.position.set(x, heightAt(x, z), z);
    this.group.visible = true;
    if (color !== undefined) {
      this.group.traverse((o) => { if (o.material) o.material.color.setHex(color); });
    }
  }
  hide() { this.group.visible = false; }
  update(dt) {
    if (!this.group.visible) return;
    this.t += dt;
    this.group.children[1].rotation.z += dt * 1.4;
    this.group.children[0].material.opacity = 0.22 + Math.sin(this.t * 3) * 0.1;
  }
}

// ------------------------------------------------------------------
// MISSIONS
// ------------------------------------------------------------------
export const MISSION_DEFS = [
  { id: 'm_delivery1', type: 'delivery', title: 'Courier Run', desc: 'Pick up the parcel at the depot, deliver it to the harbour office.', reward: 450, time: 240 },
  { id: 'm_race1', type: 'race', title: 'Highway Sprint', desc: 'Hit all 5 checkpoints on the ring road before the timer runs out.', reward: 800, time: 150 },
  { id: 'm_collect1', type: 'collect', title: 'Signal Hunt', desc: 'Recover 3 signal shards scattered around the city outskirts.', reward: 600, time: 300 },
  { id: 'm_explore1', type: 'explore', title: 'Northern Peaks', desc: 'Reach the mountain viewpoint to the north.', reward: 350, time: 400 },
  { id: 'm_delivery2', type: 'delivery', title: 'Farm Supplies', desc: 'Haul supplies from the city market to the countryside farm.', reward: 500, time: 260 },
  { id: 'm_race2', type: 'race', title: 'Dock Circuit', desc: 'Clear 4 checkpoints around the docks area.', reward: 700, time: 140 },
  { id: 'm_explore2', type: 'explore', title: 'Coastal Watch', desc: 'Find the lighthouse on the western coast.', reward: 400, time: 420 },
];

export class MissionManager {
  constructor(scene, save, ui) {
    this.scene = scene;
    this.save = save;
    this.ui = ui;
    this.beacon = new Beacon(scene, 0x36c6ff);
    this.raceBeacon = new Beacon(scene, 0xffcc33);
    this.active = null;
    this.rng = mulberry32(2024);
    this.markers = [];
  }

  available() {
    const done = this.save.data.missions.completed || [];
    return MISSION_DEFS.filter((m) => !done.includes(m.id));
  }

  missionPoints(def) {
    const rng = mulberry32(def.id.split('').reduce((a, c) => a + c.charCodeAt(0), 7));
    const pt = (minR, maxR, angBase) => {
      const a = angBase + rng() * 1.2;
      const r = minR + rng() * (maxR - minR);
      return { x: Math.cos(a) * r, z: Math.sin(a) * r };
    };
    if (def.type === 'delivery') return [pt(40, 120, 0.4), pt(160, 300, 2.1)];
    if (def.type === 'race') {
      const pts = [];
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        pts.push({ x: Math.cos(a) * (150 + rng() * 90), z: Math.sin(a) * (150 + rng() * 90) });
      }
      return pts;
    }
    if (def.type === 'collect') return [pt(60, 140, 1.2), pt(60, 200, 3.4), pt(60, 200, 5.2)];
    return [pt(320, 460, 1.0)];
  }

  start(def) {
    const pts = this.missionPoints(def);
    this.active = {
      def, points: pts, index: 0, elapsed: 0, collected: 0,
      done: false, failed: false, state: 'travel',
    };
    this.save.data.missions.active = def.id;
    this.ui.toast(`MISSION STARTED: ${def.title}`, 'ok');
    this.updateMarkers();
  }

  updateMarkers() {
    this.markers.forEach((m) => this.scene.remove(m));
    this.markers = [];
    if (!this.active) { this.beacon.hide(); this.raceBeacon.hide(); return; }
    const p = this.active.points[this.active.index];
    if (p) this.beacon.showAt(p.x, p.z, 0x36c6ff);
  }

  update(dt, playerPos, inVehicle) {
    this.beacon.update(dt); this.raceBeacon.update(dt);
    if (!this.active) return;
    const a = this.active;
    a.elapsed += dt;
    const def = a.def;
    const p = a.points[a.index];
    if (!p) return;

    const d = Math.hypot(playerPos.x - p.x, playerPos.z - p.z);
    if (d < (def.type === 'race' ? 16 : 6)) {
      a.index++;
      if (def.type === 'collect') a.collected++;
      if (a.index >= a.points.length) {
        this.complete();
        return;
      }
      this.updateMarkers();
      this.ui.toast(def.type === 'race' ? 'CHECKPOINT!' : 'OBJECTIVE UPDATED', 'ok');
    }
    if (def.time && a.elapsed > def.time) {
      this.fail();
    }
  }

  complete() {
    const def = this.active.def;
    this.save.data.missions.completed.push(def.id);
    this.save.data.money += def.reward;
    this.save.data.missions.active = null;
    this.active = null;
    this.beacon.hide();
    this.ui.toast(`MISSION COMPLETE: ${def.title}  +₹${def.reward}`, 'ok');
    if (this.onComplete) this.onComplete(def);
  }

  fail() {
    const def = this.active.def;
    this.active = null;
    this.beacon.hide();
    this.save.data.missions.active = null;
    this.ui.toast(`MISSION FAILED: ${def.title}`, 'bad');
  }

  get hudText() {
    if (!this.active) return null;
    const a = this.active;
    const left = a.def.time ? Math.max(0, a.def.time - a.elapsed) : null;
    return {
      title: a.def.title,
      objective: a.def.type === 'race' ? `Checkpoint ${a.index + 1}/${a.points.length}`
        : a.def.type === 'collect' ? `Shard ${a.collected}/${a.points.length}`
        : a.def.type === 'delivery' ? (a.index === 0 ? 'Collect the cargo' : 'Deliver the cargo')
        : 'Reach the marker',
      timer: left,
      distance: Math.hypot(this._px - a.points[a.index].x, this._pz - a.points[a.index].z),
    };
  }
  trackPlayer(p) { this._px = p.x; this._pz = p.z; }
}

// ------------------------------------------------------------------
// COLLECTIBLES + WORLD EVENTS
// ------------------------------------------------------------------
export class Collectibles {
  constructor(scene, save) {
    this.scene = scene;
    this.save = save;
    this.items = [];
    const rng = mulberry32(4242);
    this.geo = new THREE.OctahedronGeometry(0.55, 0);
    this.mat = new THREE.MeshBasicMaterial({ color: 0x66e0ff });
    this.glowMat = new THREE.MeshBasicMaterial({ color: 0x66e0ff, transparent: true, opacity: 0.22, depthWrite: false });
    for (let i = 0; i < 28; i++) {
      const a = rng() * Math.PI * 2;
      const r = 70 + rng() * 700;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (heightAt(x, z) < WATER_LEVEL + 1) { i--; continue; }
      this.add(x, z, 'shard');
    }
    this.t = 0;
  }
  add(x, z, kind = 'shard') {
    const g = new THREE.Group();
    const m = new THREE.Mesh(this.geo, this.mat.clone());
    const halo = new THREE.Mesh(new THREE.SphereGeometry(1.3, 10, 8), this.glowMat.clone());
    g.add(m, halo);
    g.position.set(x, heightAt(x, z) + 1.4, z);
    this.scene.add(g);
    this.items.push({ group: g, mesh: m, x, z, kind, taken: false });
  }
  update(dt, playerPos, onPickup) {
    this.t += dt;
    for (const it of this.items) {
      if (it.taken) continue;
      it.mesh.rotation.y += dt * 1.6;
      it.mesh.rotation.x += dt * 0.6;
      it.group.position.y = heightAt(it.x, it.z) + 1.4 + Math.sin(this.t * 2 + it.x) * 0.22;
      const d = Math.hypot(playerPos.x - it.x, playerPos.z - it.z);
      if (d < 3.2) {
        it.taken = true; it.group.visible = false;
        onPickup(it);
      }
    }
  }
  get remaining() { return this.items.filter((i) => !i.taken).length; }
  reset() {
    this.items.forEach((it) => { it.taken = false; it.group.visible = true; });
  }
}

export class WorldEvents {
  constructor(game) {
    this.game = game;
    this.timer = 45;
    this.log = [];
  }
  update(dt) {
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = 70 + Math.random() * 90;
    const roll = Math.random();
    if (roll < 0.34) {
      const opts = ['clear', 'cloudy', 'rain', 'fog'];
      const w = opts[Math.floor(Math.random() * opts.length)];
      this.game.sky.setWeather(w);
      this.game.ui.toast(`WEATHER CHANGE: ${w.toUpperCase()}`, 'info');
    } else if (roll < 0.7) {
      const p = this.game.player.pos;
      const a = Math.random() * Math.PI * 2, r = 26 + Math.random() * 30;
      const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
      if (heightAt(x, z) > WATER_LEVEL + 0.5) {
        this.game.collectibles.add(x, z, 'crate');
        this.game.ui.toast('SUPPLY CRATE SPOTTED NEARBY', 'info');
      }
    } else {
      const p = this.game.player.pos;
      const a = Math.random() * Math.PI * 2, r = 20 + Math.random() * 24;
      const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
      this.game.spawnVehicleNear(x, z);
      this.game.ui.toast('A VEHICLE HAS BEEN ABANDONED NEARBY', 'info');
    }
  }
}
