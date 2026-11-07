// ---------------------------------------------------------------
// WORLD FRONTIER 3D - main game loop
// ---------------------------------------------------------------
import * as THREE from 'three';
import { PRESETS, Settings, SaveSystem, presetTooHeavy, deviceClass } from './settings.js';
import { World, heightAt, WATER_LEVEL, CITY_RADIUS, biomeAt } from './world.js';
import { Sky } from './sky.js';
import { Player, Vehicle, Pedestrian, Animal, TrafficCar, VEHICLE_TYPES } from './entities.js';
import { CameraController, MissionManager, Collectibles, WorldEvents, MISSION_DEFS } from './gameplay.js';
import { UI, Input } from './ui.js';
import { clamp, damp, mulberry32 } from './util.js';

class AudioEngine {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.enabled = false;
  }
  init() {
    if (this.ctx) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.settings.values.masterVolume;
      this.master.connect(this.ctx.destination);

      // engine
      this.engineGain = this.ctx.createGain(); this.engineGain.gain.value = 0;
      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = 'lowpass'; this.engineFilter.frequency.value = 420;
      this.engineOsc = this.ctx.createOscillator();
      this.engineOsc.type = 'sawtooth'; this.engineOsc.frequency.value = 60;
      this.engineOsc2 = this.ctx.createOscillator();
      this.engineOsc2.type = 'square'; this.engineOsc2.frequency.value = 91;
      this.engineOsc.connect(this.engineFilter);
      this.engineOsc2.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.master);
      this.engineOsc.start(); this.engineOsc2.start();

      // ambient noise (wind / rain)
      const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.5;
      this.noise = this.ctx.createBufferSource();
      this.noise.buffer = buf; this.noise.loop = true;
      this.noiseFilter = this.ctx.createBiquadFilter();
      this.noiseFilter.type = 'bandpass'; this.noiseFilter.frequency.value = 700;
      this.noiseGain = this.ctx.createGain(); this.noiseGain.gain.value = 0;
      this.noise.connect(this.noiseFilter); this.noiseFilter.connect(this.noiseGain);
      this.noiseGain.connect(this.master); this.noise.start();

      // music pad
      this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = 0;
      this.musicGain.connect(this.master);
      [110, 164.81, 220, 329.63].forEach((f, i) => {
        const o = this.ctx.createOscillator();
        o.type = 'sine'; o.frequency.value = f;
        const g = this.ctx.createGain(); g.gain.value = 0.05 / (i + 1);
        o.connect(g); g.connect(this.musicGain); o.start();
      });
      this.enabled = true;
      this.applyVolumes();
    } catch (e) { console.warn('audio unavailable', e); }
  }
  applyVolumes() {
    if (!this.ctx) return;
    const v = this.settings.values;
    this.master.gain.value = v.masterVolume;
    this.musicGain.gain.value = v.musicVolume * 0.12;
    this.noiseGain.gain.value = v.ambientVolume * 0.06;
  }
  engine(on, speed, maxSpeed) {
    if (!this.ctx || !this.enabled) return;
    const v = this.settings.values;
    const target = on ? v.sfxVolume * 0.16 : 0;
    this.engineGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.15);
    const f = 48 + (speed / Math.max(1, maxSpeed)) * 120;
    this.engineOsc.frequency.setTargetAtTime(f, this.ctx.currentTime, 0.08);
    this.engineOsc2.frequency.setTargetAtTime(f * 1.5, this.ctx.currentTime, 0.08);
    this.engineFilter.frequency.setTargetAtTime(380 + (speed / Math.max(1, maxSpeed)) * 900, this.ctx.currentTime, 0.1);
  }
  weather(kind, wind) {
    if (!this.ctx) return;
    const v = this.settings.values;
    const rain = kind === 'rain' || kind === 'storm';
    this.noiseGain.gain.setTargetAtTime(v.ambientVolume * (rain ? 0.22 : 0.05), this.ctx.currentTime, 0.6);
    this.noiseFilter.frequency.setTargetAtTime(rain ? 1800 : 500, this.ctx.currentTime, 0.6);
  }
  thunder() {
    if (!this.ctx || !this.enabled) return;
    const v = this.settings.values;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 42;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(v.sfxVolume * 0.35, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 2.2);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 2.3);
  }
  click() {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 660;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(this.settings.values.sfxVolume * 0.06, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.13);
  }
}

class Game {
  constructor() {
    this.canvas = document.getElementById('gl');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = false;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.1, 3400);

    this.settings = new Settings();
    this.save = new SaveSystem();
    this.audio = new AudioEngine(this.settings);

    this.sky = new Sky(this.scene, this.renderer);
    this.sky.onThunder = () => this.audio.thunder();
    this.world = new World(this.scene);

    this.player = new Player(this.scene);
    this.cam = new CameraController(this.camera, this.canvas);
    this.cam.sensitivity = this.settings.values.cameraSensitivity;

    this.vehicles = [];
    this.traffic = [];
    this.peds = [];
    this.animals = [];
    this.rng = mulberry32(777);

    this.missions = new MissionManager(this.scene, this.save, null);
    this.collectibles = new Collectibles(this.scene, this.save);

    this.state = 'loading';
    this.paused = false;
    this.fps = 60;
    this.frames = 0; this.fpsTime = 0;
    this.time = 0;
    this.playtime = 0;
    this.drawDistanceScale = 1;
    this.renderScaleOverride = 1;
    this.effCache = {};
    this.effKey = '';

    this.ui = new UI(this);
    this.missions.ui = this.ui;
    this.input = new Input(this.canvas);
    this.input.joySensitivity = this.settings.values.joystickSensitivity;

    this.events = new WorldEvents(this);

    this.spawnWorldEntities();
    this.applyGraphics();
    this.applyResolution();
    this.bindActions();

    addEventListener('resize', () => this.onResize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });

    this.last = performance.now();
    this.autosaveTimer = 0;
    this.bootstrap();
    requestAnimationFrame((t) => this.loop(t));
  }

  // ---------- world population ----------
  spawnWorldEntities() {
    const start = { x: 41, z: 61 };
    this.player.respawn(start.x, start.z);
    this.player.pos.y = heightAt(start.x, start.z);
    this.cam.yaw = Math.PI * 0.9;
    this.cam.pos.set(start.x + 8, heightAt(start.x, start.z) + 5, start.z + 8);

    const spawns = [
      ['sedan', 20, 52, 0.4], ['sports', -26, 68, 2.2], ['supercar', 46, 74, 1.1],
      ['bike', 30, 44, 0.2], ['truck', -46, 40, 2.6], ['bus', 62, 30, 0.1],
      ['scooter', -14, 84, 1.9],
    ];
    spawns.forEach(([t, x, z, h]) => {
      const v = new Vehicle(t, this.scene);
      v.place(x, z, h);
      v.owned = true;
      this.vehicles.push(v);
    });
    // air + water craft near the coast
    const heli = new Vehicle('heli', this.scene); heli.place(78, 92, 0); heli.pos.y += 0; this.vehicles.push(heli);
    const plane = new Vehicle('plane', this.scene); plane.place(-120, 120, 0.6); this.vehicles.push(plane);
    const boat = new Vehicle('boat', this.scene);
    let bx = -800, bz = 0;
    for (let i = 0; i < 400; i++) {
      const a = this.rng() * Math.PI * 2, r = 600 + this.rng() * 900;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (heightAt(x, z) < WATER_LEVEL - 3) { bx = x; bz = z; break; }
    }
    boat.place(bx, bz, 0);
    this.vehicles.push(boat);
    this.save.data.vehiclesOwned = ['sedan', 'sports', 'bike', 'truck', 'bus', 'scooter', 'supercar', 'heli', 'plane', 'boat'];

    // pedestrians + animals
    for (let i = 0; i < 26; i++) {
      const p = new Pedestrian(this.scene, this.rng);
      const a = this.rng() * Math.PI * 2, r = 30 + this.rng() * 260;
      p.root.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      p.root.position.y = heightAt(p.root.position.x, p.root.position.z);
      p.pickTarget(() => this.rng());
      this.peds.push(p);
    }
    for (let i = 0; i < 14; i++) {
      const an = new Animal(this.scene, this.rng);
      const a = this.rng() * Math.PI * 2, r = 240 + this.rng() * 700;
      an.root.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      an.root.position.y = heightAt(an.root.position.x, an.root.position.z);
      an.pickTarget(() => this.rng());
      this.animals.push(an);
    }
    // traffic
    for (let i = 0; i < 10; i++) {
      const c = new TrafficCar(this.scene, this.rng);
      c.spawn((this.rng() - 0.5) * 300, (this.rng() - 0.5) * 300, this.rng);
      this.traffic.push(c);
    }
  }

  spawnVehicleNear(x, z) {
    const types = ['sedan', 'sports', 'bike', 'truck', 'supercar', 'scooter'];
    const t = types[Math.floor(Math.random() * types.length)];
    const v = new Vehicle(t, this.scene);
    v.place(x, z, Math.random() * 6.28);
    v.owned = false;
    this.vehicles.push(v);
    return v;
  }

  // ---------- graphics ----------
  effectivePreset() {
    const key = this.settings.values.graphics + '|' + this.drawDistanceScale.toFixed(2);
    if (this.effKey === key) return this.effCache;
    const base = PRESETS[this.settings.values.graphics] || PRESETS.low;
    const p = { ...base };
    p.viewChunks = Math.max(1, Math.round(base.viewChunks * clamp(this.drawDistanceScale, 0.5, 1)));
    p.fogFar = base.fogFar * clamp(this.drawDistanceScale, 0.5, 1);
    p.fogNear = base.fogNear * clamp(this.drawDistanceScale, 0.5, 1);
    this.effCache = p; this.effKey = key;
    return p;
  }

  applyGraphics(rebuild = false) {
    const p = this.effectivePreset();
    this.renderer.shadowMap.enabled = p.shadows;
    this.sky.setShadowQuality(p.shadowSize, p.shadows);
    this.renderer.shadowMap.needsUpdate = true;
    this.scene.traverse((o) => {
      if (o.isMesh && o.material && o.material.map) o.material.map.anisotropy = p.anisotropy;
    });
    this.applyResolution();
    this.ui.refreshMenu();
    if (rebuild) this.world.rebuildAll();
  }

  applyResolution() {
    const p = this.effectivePreset();
    const dpr = Math.min(devicePixelRatio || 1, 2.5);
    let scale = p.renderScale * this.renderScaleOverride;
    const res = this.settings.values.resolution;
    if (res === '720p') scale = Math.min(scale, 720 / Math.max(innerWidth, innerHeight));
    else if (res === '1080p') scale = Math.min(scale, 1080 / Math.max(innerWidth, innerHeight));
    else if (res === '1440p') scale = Math.min(scale, 1440 / Math.max(innerWidth, innerHeight));
    this.renderer.setPixelRatio(clamp(dpr * scale, 0.5, 2.5));
    this.renderer.setSize(innerWidth, innerHeight, false);
  }

  setGraphics(id) {
    if (!PRESETS[id]) id = 'low';
    if (presetTooHeavy(id)) {
      this.ui.dialog('Device warning',
        `Your device reports ${navigator.deviceMemory || '?'} GB RAM and ${navigator.hardwareConcurrency || '?'} cores. ` +
        `${PRESETS[id].label} may run slowly or heat the phone. You can try it, or stay on LOW.`,
        () => this.commitGraphics(id), true, () => this.ui.back());
      return;
    }
    this.commitGraphics(id);
  }

  commitGraphics(id) {
    this.settings.set('graphics', id);
    this.applyGraphics(true);
    this.ui.refreshMenu();
    this.ui.toast('GRAPHICS: ' + PRESETS[id].label, 'ok');
    this.ui.show(this.stackTop() || null);
  }

  stackTop() { return this.ui.stack[this.ui.stack.length - 1] || null; }

  // ---------- actions ----------
  bindActions() {
    document.getElementById('btnPause').onclick = () => this.pause();
    document.getElementById('btnMap').onclick = () => { this.ui.drawBigMap(this); this.ui.push('mapScreen'); };
    document.getElementById('btnInv').onclick = () => { this.ui.renderInventory(this); this.ui.push('inventory'); };
    document.getElementById('btnMission').onclick = () => { this.ui.renderMissionList(this); this.ui.push('missionScreen'); };
    ['pointerdown', 'keydown'].forEach((ev) => addEventListener(ev, () => this.audio.init(), { once: true }));
  }

  action(a) {
    this.audio.init(); this.audio.click();
    switch (a) {
      case 'play': this.startGame(false); break;
      case 'continue': this.startGame(true); break;
      case 'newgame':
        this.ui.dialog('New game', 'Start over? Current progress will be erased.', () => {
          this.save.reset();
          this.startGame(false);
        }, true);
        break;
      case 'settings': this.ui.push('settings'); break;
      case 'graphics':
        this.ui.push('settings');
        document.querySelector('.tab[data-tab="graphics"]').click();
        break;
      case 'controls': this.ui.push('controlsHelp'); break;
      case 'credits': this.ui.push('credits'); break;
      case 'exit':
        this.ui.dialog('Exit', 'On Android the app will close. On the web this tab cannot close itself.', () => {
          try { if (window.AndroidBridge && window.AndroidBridge.exitApp) window.AndroidBridge.exitApp(); } catch (e) {}
        });
        break;
      case 'resume': this.resume(); break;
      case 'savegame': this.saveGame(true); break;
      case 'restart': this.restart(); break;
      case 'mainmenu': this.toMenu(); break;
      case 'back': this.ui.back(); break;
      case 'closemap': case 'closeinv': case 'closemissions': this.ui.back(); break;
    }
  }

  // ---------- state machine ----------
  bootstrap() {
    let pct = 0;
    const steps = ['Generating terrain…', 'Raising the city…', 'Planting forests…', 'Loading traffic…', 'Ready'];
    const tick = () => {
      pct += 22;
      document.getElementById('loadfill').style.width = Math.min(100, pct) + '%';
      document.getElementById('loadtext').textContent = steps[Math.min(steps.length - 1, Math.floor(pct / 22))];
      if (pct < 100) setTimeout(tick, 90);
      else setTimeout(() => { this.state = 'menu'; this.ui.show('menu'); }, 160);
    };
    setTimeout(tick, 120);
  }

  startGame(useSave) {
    if (useSave && this.save.has()) {
      this.save.load();
      const d = this.save.data;
      this.player.respawn(d.player.x, d.player.z);
      this.player.heading = d.player.heading || 0;
      this.ui.toast('SAVE LOADED', 'ok');
    } else if (!useSave && this.save.has()) {
      this.save.load();
      this.player.respawn(this.save.data.player.x, this.save.data.player.z);
    } else {
      this.save.reset();
    }
    this.state = 'playing';
    this.paused = false;
    this.ui.stack = [];
    this.ui.show(null);
    document.getElementById('hud').classList.remove('hidden');
    this.audio.init();
    if (!this.audio.enabled) this.ui.toast('Tap once more for sound', 'info');
    this.ui.toast('WELCOME TO WORLD FRONTIER', 'ok');
    this.player.root.visible = true;
    this.save.data.started = true;
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    document.getElementById('pausePos').textContent =
      `x ${this.player.pos.x.toFixed(0)} · z ${this.player.pos.z.toFixed(0)}`;
    document.getElementById('pauseTime').textContent = this.formatTime(this.playtime);
    document.getElementById('pauseMissions').textContent = this.save.data.missions.completed.length;
    this.ui.push('pause');
    this.saveGame(false);
  }

  resume() {
    this.state = 'playing';
    this.ui.stack = [];
    this.ui.show(null);
    document.getElementById('hud').classList.remove('hidden');
  }

  restart() {
    this.ui.dialog('Restart', 'Reload this session from the start point?', () => {
      this.player.vehicle = null;
      this.player.root.visible = true;
      this.player.respawn(41, 61);
      this.vehicles.forEach((v) => { v.pos.set(v.pos.x, heightAt(v.pos.x, v.pos.z) + 0.15, v.pos.z); });
      this.missions.active = null;
      this.missions.beacon.hide();
      this.save.data.money = 500; this.save.data.shards = 0;
      this.save.data.missions.completed = [];
      this.collectibles.reset();
      this.sky.timeOfDay = 9.5;
      this.sky.setWeather('clear');
      this.resume();
      this.ui.toast('SESSION RESTARTED', 'ok');
    }, true);
  }

  toMenu() {
    this.state = 'menu';
    this.ui.stack = [];
    this.ui.show('menu');
    document.getElementById('hud').classList.add('hidden');
    this.saveGame(false);
  }

  saveGame(loud) {
    const ok = this.save.save({
      player: { x: this.player.pos.x, y: this.player.pos.y, z: this.player.pos.z, heading: this.player.heading },
      playtime: this.playtime,
      shards: this.save.data.shards,
    });
    if (loud) this.ui.toast(ok ? 'GAME SAVED' : 'SAVE FAILED', ok ? 'ok' : 'bad');
  }

  startMission(id) {
    const def = MISSION_DEFS.find((m) => m.id === id);
    if (!def) return;
    this.missions.start(def);
  }

  formatTime(s) {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return `${h}h ${String(m).padStart(2, '0')}m`;
  }

  onResize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.applyResolution();
  }

  // ---------- interaction ----------
  nearestVehicle() {
    let best = null, bd = 5.2;
    const p = this.player.pos;
    for (const v of this.vehicles) {
      const d = Math.hypot(v.pos.x - p.x, v.pos.z - p.z);
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }

  toggleVehicle() {
    if (this.player.vehicle) {
      const v = this.player.vehicle;
      this.player.vehicle = null;
      this.player.root.visible = true;
      const side = 2.6;
      const ox = Math.cos(v.heading) * side, oz = -Math.sin(v.heading) * side;
      this.player.pos.set(v.pos.x + ox, heightAt(v.pos.x + ox, v.pos.z + oz) + 0.1, v.pos.z + oz);
      this.player.vel.set(0, 0, 0);
      this.ui.toast('EXITED ' + v.cfg.name.toUpperCase(), 'info');
    } else {
      const v = this.nearestVehicle();
      if (!v) { this.ui.toast('NO VEHICLE NEARBY', 'bad'); return; }
      this.player.vehicle = v;
      this.player.root.visible = false;
      this.ui.toast('ENTERED ' + v.cfg.name.toUpperCase(), 'ok');
    }
  }

  // ---------- loop ----------
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (dt > 0.1) dt = 0.1;
    this.time += dt;

    // fps meter (real time, not clamped dt) + adaptive resolution
    this.frames++;
    this.fpsTime += (now - (this.lastReal || now)) / 1000;
    this.lastReal = now;
    if (this.fpsTime > 0.5) {
      this.fps = this.frames / this.fpsTime;
      this.frames = 0; this.fpsTime = 0;
      if (this.state === 'playing') this.adaptPerformance();
    }

    const limit = this.settings.values.fpsLimit || 60;
    if (this.fpsLimitAcc === undefined) this.fpsLimitAcc = 0;
    this.fpsLimitAcc += dt;
    if (this.fpsLimitAcc < 1 / limit - 0.001) { return; }
    this.fpsLimitAcc = 0;

    if (this.state === 'playing') {
      this.playtime += dt;
      this.updateGameplay(dt);
      this.autosaveTimer += dt;
      if (this.autosaveTimer > 30) {
        this.autosaveTimer = 0;
        if (this.settings.values.autoSave) this.saveGame(false);
      }
    } else {
      this.updateMenuScene(dt);
    }

    this.renderer.render(this.scene, this.camera);
  }

  adaptPerformance() {
    if (this.fps < 24 && this.renderer.getPixelRatio() > 0.6) {
      this.renderer.setPixelRatio(Math.max(0.6, this.renderer.getPixelRatio() - 0.08));
    } else if (this.fps > 55 && this.renderer.getPixelRatio() < 2 && this.settings.values.graphics !== 'low') {
      this.renderer.setPixelRatio(Math.min(2, this.renderer.getPixelRatio() + 0.02));
    }
  }

  updateMenuScene(dt) {
    const p = this.effectivePreset();
    const t = this.time * 0.045;
    const cx = Math.cos(t) * 300, cz = Math.sin(t) * 300;
    this.world.update(new THREE.Vector3(cx, 20, cz), p, dt, this.time);
    const { dayF } = this.sky.update(dt, new THREE.Vector3(cx, 20, cz), p);
    this.world.setNight(1 - dayF);
    this.camera.position.set(cx + Math.cos(t * 1.4) * 60, heightAt(cx, cz) + 95, cz + Math.sin(t * 1.4) * 60);
    this.camera.lookAt(0, heightAt(0, 0) + 24, 0);
    this.peds.forEach((pd) => pd.update(dt, this.camera.position));
    this.audio.engine(false, 0, 1);
    this.audio.weather(this.sky.weather, this.sky.wind);
  }

  updateGameplay(dt) {
    const input = this.input.poll();
    const camMove = this.input.consumeCamera();
    this.cam.rotate(camMove.dx, camMove.dy);
    const p = this.effectivePreset();

    // player / vehicle
    if (this.player.vehicle) {
      const v = this.player.vehicle;
      v.update(dt, {
        throttle: input.throttle, brake: input.brake, steer: input.steer,
        jump: input.jump, crouch: input.crouch,
      }, this.world, true);
      this.cam.update(dt, v.pos, v.cfg.kind === 'air' ? 'air' : 'vehicle', this.world);
      this.player.pos.copy(v.pos);
      this.player.heading = v.heading;
      this.audio.engine(true, Math.abs(v.speed), v.cfg.maxSpeed);
      if (input.vehicle) this.toggleVehicle();
    } else {
      this.player.update(dt, {
        moveX: input.moveX, moveZ: input.moveZ, run: input.run, sprint: input.sprint,
        crouch: input.crouch, jump: input.jump,
      }, this.cam, this.world, p);
      this.cam.update(dt, this.player.pos, 'foot', this.world);
      this.audio.engine(false, 0, 1);
      if (input.vehicle) this.toggleVehicle();
      if (input.use) this.interact();
    }
    this.audio.weather(this.sky.weather, this.sky.wind);

    // world + sky
    const focus = this.player.pos;
    this.world.update(focus, p, dt, this.time);
    const { dayF } = this.sky.update(dt, focus, p);
    this.world.setNight(1 - dayF);

    // collectibles
    this.collectibles.update(dt, this.player.pos, (it) => {
      const gain = it.kind === 'crate' ? 120 : 40;
      this.save.data.money += gain;
      this.save.data.shards += 1;
      this.audio.click();
      this.ui.toast(`+₹${gain}  ·  SIGNAL SHARD ${this.save.data.shards}`, 'ok');
    });

    // missions
    this.missions.trackPlayer(this.player.pos);
    this.missions.update(dt, this.player.pos, !!this.player.vehicle);

    // NPCs
    for (const pd of this.peds) pd.update(dt, this.player.pos);
    for (const an of this.animals) an.update(dt, this.player.pos);
    for (const c of this.traffic) c.update(dt, this.player.pos);
    this.events.update(dt);

    // HUD
    this.ui.updateHUD(this);
    this.ui.drawMinimap(this);

    // proximity hint
    if (!this.player.vehicle) {
      const v = this.nearestVehicle();
      this.ui.hint(v ? `Press ENTER to drive the ${v.cfg.name}` : '');
    } else this.ui.hint('Press ENTER to exit the vehicle');
  }

  interact() {
    // sit / stand on nearest bench-like object (city only), else show info
    const b = biomeAt(this.player.pos.x, this.player.pos.z);
    if (b === 'city') {
      this.player.sitting = !this.player.sitting;
      this.ui.toast(this.player.sitting ? 'RESTING' : 'STOOD UP', 'info');
    } else {
      this.ui.toast(`${b.toUpperCase()} · ${Math.round(heightAt(this.player.pos.x, this.player.pos.z))} m`, 'info');
    }
  }
}

// boot
window.addEventListener('load', () => {
  const game = new Game();
  window.__WF = {
    game,
    ready: true,
    setPreset(id) { game.commitGraphics(id); },
    setTime(h) { game.sky.timeOfDay = h; },
    setWeather(w) { game.sky.setWeather(w); },
    teleport(x, z) { game.player.respawn(x, z); game.player.pos.y = heightAt(x, z); },
    startGame(save = false) { game.startGame(save); },
    enterVehicle(type) {
      const v = game.vehicles.find((vv) => vv.type === type) || game.vehicles[0];
      game.player.pos.set(v.pos.x, v.pos.y, v.pos.z);
      game.player.vehicle = v;
      game.player.root.visible = false;
    },
    hideUI(v) { document.getElementById('hud').classList.toggle('hidden', v); },
    showMenu(v) { document.getElementById('menu').classList.toggle('hidden', !v); },
    screenshotMode(on) {
      document.getElementById('hud').classList.toggle('hidden', on);
    },
    setCam(yaw, pitch, dist) { game.cam.yaw = yaw; game.cam.pitch = pitch; },
    state() { return game.state; },
  };
});
