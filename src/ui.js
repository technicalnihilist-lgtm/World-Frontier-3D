// ---------------------------------------------------------------
// UI: screens, HUD, touch input, keyboard, maps, credits
// ---------------------------------------------------------------
import { PRESETS, presetTooHeavy, deviceClass } from './settings.js';
import { heightAt, WATER_LEVEL, CITY_RADIUS, biomeAt } from './world.js';
import { MISSION_DEFS } from './gameplay.js';
import { CREDITS_REFS, CREDIT_LINKS } from './credits_data.js';

const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------
export class Input {
  constructor(canvas) {
    this.moveX = 0; this.moveZ = 0;
    this.run = false; this.sprint = false; this.crouch = false;
    this.jumpPressed = false; this.usePressed = false; this.vehiclePressed = false;
    this.throttle = 0; this.brake = 0; this.steer = 0;
    this.camDX = 0; this.camDY = 0;
    this.keys = {};
    this.stickActive = false;
    this.joySensitivity = 1;
    this.bindKeyboard();
    this.bindTouch(canvas);
  }

  bindKeyboard() {
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys[k]) return;
      this.keys[k] = true;
      if (k === ' ') { this.jumpPressed = true; e.preventDefault(); }
      if (k === 'e') this.usePressed = true;
      if (k === 'f') this.vehiclePressed = true;
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) e.preventDefault();
    });
    addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });
  }

  bindTouch(canvas) {
    // ---- joystick ----
    const stick = $('stick'), knob = $('knob');
    const R = () => stick.clientWidth * 0.34;
    let sid = null, cx = 0, cy = 0;
    const start = (e) => {
      const t = e.changedTouches ? e.changedTouches[0] : e;
      sid = t.identifier ?? 'm'; this.stickActive = true;
      const r = stick.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      move(t);
    };
    const move = (t) => {
      if (!this.stickActive) return;
      let dx = t.clientX - cx, dy = t.clientY - cy;
      const max = R();
      const d = Math.hypot(dx, dy);
      if (d > max) { dx = dx / d * max; dy = dy / d * max; }
      knob.style.transform = `translate(${dx}px,${dy}px)`;
      this.moveX = (dx / max) * this.joySensitivity;
      this.moveZ = (dy / max) * this.joySensitivity;
    };
    const end = () => { this.stickActive = false; knob.style.transform = 'translate(0,0)'; this.moveX = 0; this.moveZ = 0; };
    stick.addEventListener('touchstart', (e) => { e.preventDefault(); start(e); }, { passive: false });
    stick.addEventListener('touchmove', (e) => { e.preventDefault(); move(e.changedTouches[0]); }, { passive: false });
    stick.addEventListener('touchend', (e) => { e.preventDefault(); end(); }, { passive: false });
    stick.addEventListener('touchcancel', end);
    stick.addEventListener('mousedown', (e) => { e.preventDefault(); start(e); });
    addEventListener('mousemove', (e) => { if (this.stickActive) move(e); });
    addEventListener('mouseup', () => { if (this.stickActive) end(); });

    // ---- camera drag on canvas ----
    let camId = null, lx = 0, ly = 0;
    const cStart = (t) => { camId = t.identifier ?? 'm'; lx = t.clientX; ly = t.clientY; };
    const cMove = (t) => {
      if (camId === null) return;
      this.camDX += (t.clientX - lx); this.camDY += (t.clientY - ly);
      lx = t.clientX; ly = t.clientY;
    };
    canvas.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; cStart(t); }, { passive: true });
    canvas.addEventListener('touchmove', (e) => { for (const t of e.changedTouches) cMove(t); }, { passive: true });
    canvas.addEventListener('touchend', () => { camId = null; });
    canvas.addEventListener('mousedown', (e) => cStart(e));
    addEventListener('mousemove', (e) => { if (camId !== null && !this.stickActive) cMove(e); });
    addEventListener('mouseup', () => { camId = null; });

    // ---- buttons ----
    const hold = (id, on, off) => {
      const el = $(id); if (!el) return;
      el.addEventListener('touchstart', (e) => { e.preventDefault(); on(); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); off && off(); }, { passive: false });
      el.addEventListener('mousedown', (e) => { e.preventDefault(); on(); });
      addEventListener('mouseup', () => off && off());
    };
    hold('btnJump', () => { this.jumpPressed = true; this.jumpHeld = true; }, () => { this.jumpHeld = false; });
    hold('btnRun', () => { this.run = true; this.sprint = true; }, () => { this.run = false; this.sprint = false; });
    hold('btnCrouch', () => { this.crouch = true; }, () => { this.crouch = false; });
    hold('btnUse', () => { this.usePressed = true; });
    hold('btnVehicle', () => { this.vehiclePressed = true; });
    hold('btnGas', () => { this.gasHeld = true; }, () => { this.gasHeld = false; });
    hold('btnBrake', () => { this.brakeHeld = true; }, () => { this.brakeHeld = false; });
  }

  poll() {
    const k = this.keys;
    let mx = this.moveX, mz = this.moveZ;
    if (k['w'] || k['arrowup']) mz -= 1;
    if (k['s'] || k['arrowdown']) mz += 1;
    if (k['a'] || k['arrowleft']) mx -= 1;
    if (k['d'] || k['arrowright']) mx += 1;
    const run = this.run || k['shift'];
    const crouch = this.crouch || k['c'];
    const jump = this.jumpPressed || (k[' '] && !this._spaceHeld);
    if (k[' ']) this._spaceHeld = true; else this._spaceHeld = false;
    const use = this.usePressed;
    const veh = this.vehiclePressed;
    const throttle = (this.gasHeld ? 1 : 0) + (k['w'] || k['arrowup'] ? 1 : 0);
    const brake = (this.brakeHeld ? 1 : 0) + (k['s'] || k['arrowdown'] ? 1 : 0);
    const steer = this.stickActive ? this.moveX : (k['a'] || k['arrowleft'] ? -1 : k['d'] || k['arrowright'] ? 1 : 0);
    const out = {
      moveX: mx, moveZ: mz, run, sprint: run, crouch,
      jump: jump || this.jumpHeld, use, vehicle: veh,
      throttle: Math.min(1, throttle), brake: Math.min(1, brake), steer,
    };
    this.jumpPressed = false; this.usePressed = false; this.vehiclePressed = false;
    return out;
  }

  consumeCamera() {
    const d = { dx: this.camDX, dy: this.camDY };
    this.camDX = 0; this.camDY = 0;
    return d;
  }
}

// ------------------------------------------------------------------
export class UI {
  constructor(game) {
    this.game = game;
    this.stack = [];
    this.timers = [];
    this.bind();
    this.buildCredits();
    this.refreshMenu();
    this.bindSettingsInputs();
  }

  show(id) {
    ['menu', 'pause', 'settings', 'credits', 'controlsHelp', 'mapScreen', 'inventory', 'missionScreen', 'loader']
      .forEach((s) => $(s).classList.add('hidden'));
    if (id) $(id).classList.remove('hidden');
  }
  push(id) { this.stack.push(id); this.show(id); }
  back() {
    this.stack.pop();
    const prev = this.stack[this.stack.length - 1];
    if (prev) this.show(prev); else this.show(null);
    if (!prev && this.game.state === 'menu') this.show('menu');
    if (!prev && this.game.state === 'paused') this.show('pause');
  }

  bind() {
    document.body.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      this.game.action(b.dataset.act);
    });
    document.querySelectorAll('.tab').forEach((t) => {
      t.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((x) => x.classList.remove('active'));
        document.querySelectorAll('.tabbody').forEach((x) => x.classList.remove('active'));
        t.classList.add('active');
        document.querySelector(`.tabbody[data-body="${t.dataset.tab}"]`).classList.add('active');
      });
    });
    document.querySelectorAll('.preset').forEach((p) => {
      p.addEventListener('click', () => this.game.setGraphics(p.dataset.preset));
    });
  }

  bindSettingsInputs() {
    const s = this.game.settings;
    const link = (id, key, mul = 100, invert = false) => {
      const el = $(id); if (!el) return;
      const set = () => {
        const v = parseFloat(el.value);
        const val = invert ? 1 / (v / 100) : v / mul;
        s.set(key, val);
        const out = el.parentElement.querySelector('output');
        if (out) out.textContent = el.value + (key.includes('Volume') || key.includes('brightness') ? '%' : '');
        this.applyLive(key);
      };
      el.addEventListener('input', set);
      // init from settings
      if (el.type === 'range') {
        const cur = s.values[key];
        if (typeof cur === 'number') el.value = invert ? 100 / cur : Math.round(cur * mul);
        const out = el.parentElement.querySelector('output');
        if (out) out.textContent = el.value;
      }
    };
    link('s_master', 'masterVolume'); link('s_music', 'musicVolume');
    link('s_sfx', 'sfxVolume'); link('s_ambient', 'ambientVolume');
    link('s_cam', 'cameraSensitivity'); link('s_cam2', 'cameraSensitivity');
    link('s_aim', 'aimSensitivity'); link('s_joy', 'joystickSensitivity');
    link('s_bsize', 'buttonSize'); link('s_bop', 'buttonOpacity');
    link('s_bright', 'brightness');

    const bindCheck = (id, key) => {
      const el = $(id); if (!el) return;
      el.checked = !!s.values[key];
      el.addEventListener('change', () => { s.set(key, el.checked); this.applyLive(key); });
    };
    bindCheck('s_fps', 'showFps'); bindCheck('s_autosave', 'autoSave');

    const lang = $('s_lang');
    lang.value = s.values.language;
    lang.addEventListener('change', () => s.set('language', lang.value));

    const res = $('s_res');
    res.value = s.values.resolution;
    res.addEventListener('change', () => { s.set('resolution', res.value); this.game.applyResolution(); });

    const fps = $('s_fpslimit');
    fps.value = s.values.fpsLimit + ' FPS';
    fps.addEventListener('change', () => { s.set('fpsLimit', parseInt(fps.value)); });

    const draw = $('s_draw');
    draw.value = 100;
    draw.addEventListener('input', () => {
      this.game.drawDistanceScale = parseFloat(draw.value) / 100;
      const out = draw.parentElement.querySelector('output');
      if (out) out.textContent = draw.value + '%';
      this.game.applyGraphics(true);
    });
    const rs = $('s_resScale');
    rs.value = 100;
    rs.addEventListener('input', () => {
      this.game.renderScaleOverride = parseFloat(rs.value) / 100;
      const out = rs.parentElement.querySelector('output');
      if (out) out.textContent = rs.value + '%';
      this.game.applyResolution();
    });
  }

  applyLive(key) {
    const s = this.game.settings;
    if (key === 'brightness') document.body.style.filter = `brightness(${s.values.brightness})`;
    if (key === 'buttonSize') document.documentElement.style.setProperty('--bsize', s.values.buttonSize);
    if (key === 'buttonOpacity') document.documentElement.style.setProperty('--bop', s.values.buttonOpacity);
    if (key === 'joystickSensitivity' && this.game.input) this.game.input.joySensitivity = s.values.joystickSensitivity;
    if (key === 'cameraSensitivity' && this.game.cam) this.game.cam.sensitivity = s.values.cameraSensitivity;
    if (key === 'showFps') $('hudFps').classList.toggle('hidden', !s.values.showFps);
  }

  refreshMenu() {
    $('menuPreset').textContent = 'GRAPHICS: ' + PRESETS[this.game.settings.values.graphics].label;
    $('hudPreset').textContent = PRESETS[this.game.settings.values.graphics].label;
    document.querySelectorAll('.preset').forEach((p) => {
      p.classList.toggle('active', p.dataset.preset === this.game.settings.values.graphics);
    });
    const note = $('presetNote');
    const dc = deviceClass();
    note.textContent = dc < 0
      ? 'This device looks low-end. LOW is strongly recommended — HIGH and ULTRA may drop frames or heat the phone.'
      : dc < 3
      ? 'LOW is the default. MEDIUM and HIGH suit mid-range phones; ULTRA needs a recent flagship.'
      : 'Your device looks capable. ULTRA is available, but LOW still gives the best battery life.';
    $('hudFps').classList.toggle('hidden', !this.game.settings.values.showFps);
  }

  toast(msg, kind = 'info') {
    const el = document.createElement('div');
    el.className = 'toast ' + kind;
    el.textContent = msg;
    $('toasts').appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  hint(text) {
    const h = $('hint');
    if (!text) { h.classList.remove('show'); return; }
    h.textContent = text; h.classList.add('show');
  }

  dialog(title, text, onOk, withCancel = false, onCancel) {
    $('dlgTitle').textContent = title;
    $('dlgText').textContent = text;
    $('dialog').classList.remove('hidden');
    $('dlgNo').classList.toggle('hidden', !withCancel);
    const ok = $('dlgOk'), no = $('dlgNo');
    const close = () => {
      $('dialog').classList.add('hidden');
      ok.onclick = null; no.onclick = null;
    };
    ok.onclick = () => { close(); onOk && onOk(); };
    no.onclick = () => { close(); onCancel && onCancel(); };
  }

  // ---------------- HUD ----------------
  updateHUD(g) {
    const d = g.save.data;
    $('hudMoney').textContent = '₹' + d.money.toLocaleString('en-IN');
    $('hudShards').textContent = d.shards;
    $('hudClock').textContent = g.sky.clockString;
    $('hudWeather').textContent = g.sky.weather.toUpperCase();
    $('hudPreset').textContent = PRESETS[g.settings.values.graphics].label;
    $('hudFps').textContent = Math.round(g.fps) + ' FPS';

    const m = g.missions.hudText;
    const mh = $('missionHud');
    if (m) {
      mh.classList.remove('hidden');
      $('mTitle').textContent = m.title;
      $('mObj').textContent = m.objective;
      $('mDist').textContent = Math.round(m.distance) + ' m';
      $('mTimer').textContent = m.timer != null ? Math.floor(m.timer / 60) + ':' + String(Math.floor(m.timer % 60)).padStart(2, '0') : '';
    } else mh.classList.add('hidden');

    const inVeh = !!g.player.vehicle;
    $('speedo').classList.toggle('hidden', !inVeh);
    $('pedals').classList.toggle('hidden', !inVeh);
    document.querySelector('.actions').classList.toggle('hidden', inVeh);
    if (inVeh) $('speedVal').textContent = Math.round(g.player.vehicle.speedKmh);
    $('btnVehicle').textContent = inVeh ? 'EXIT' : 'ENTER';
  }

  drawMinimap(g) {
    const c = $('minimap'), ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);
    const scale = W / 420;
    const px = g.player.pos.x, pz = g.player.pos.z;
    ctx.save();
    ctx.translate(W / 2, H / 2);
    // ground
    ctx.fillStyle = '#16241a';
    ctx.fillRect(-W / 2, -H / 2, W, H);
    // biome blobs
    for (let y = -8; y <= 8; y++) {
      for (let x = -8; x <= 8; x++) {
        const wx = px + x * 26, wz = pz + y * 26;
        const b = biomeAt(wx, wz);
        ctx.fillStyle = b === 'ocean' ? '#123a52' : b === 'city' ? '#3a3f45'
          : b === 'forest' ? '#22401f' : b === 'desert' ? '#4a3f2a'
          : b === 'snow' ? '#5a6470' : b === 'beach' ? '#4a4432' : '#26381f';
        ctx.fillRect((x * 26 - px) * scale - 13 * scale, (y * 26 - pz) * scale - 13 * scale, 26 * scale + 1, 26 * scale + 1);
      }
    }
    // city ring
    ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(-px * scale, -pz * scale, CITY_RADIUS * scale, 0, 7); ctx.stroke();
    // highways
    ctx.strokeStyle = 'rgba(255,255,255,.22)';
    [-620, 620].forEach((hx) => {
      ctx.beginPath(); ctx.moveTo((hx - px) * scale, -H / 2); ctx.lineTo((hx - px) * scale, H / 2); ctx.stroke();
    });
    // collectibles
    g.collectibles.items.forEach((it) => {
      if (it.taken) return;
      ctx.fillStyle = '#4fd1ff';
      ctx.fillRect((it.x - px) * scale - 1.5, (it.z - pz) * scale - 1.5, 3, 3);
    });
    // mission marker
    if (g.missions.active) {
      const p = g.missions.active.points[g.missions.active.index];
      if (p) {
        ctx.fillStyle = '#ff8a3d';
        ctx.beginPath(); ctx.arc((p.x - px) * scale, (p.z - pz) * scale, 4, 0, 7); ctx.fill();
      }
    }
    // player
    ctx.rotate(-g.player.heading + Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(4, 5); ctx.lineTo(0, 2.5); ctx.lineTo(-4, 5); ctx.closePath(); ctx.fill();
    ctx.restore();
    // north
    ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.font = '11px sans-serif'; ctx.fillText('N', W / 2 - 3, 12);
  }

  drawBigMap(g) {
    const c = $('bigmap'), ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    ctx.fillStyle = '#0a1017'; ctx.fillRect(0, 0, W, H);
    const span = 2400, sc = W / span;
    const toX = (x) => W / 2 + x * sc, toZ = (z) => H / 2 + z * sc;
    // terrain sampling
    const step = 40;
    for (let z = -span / 2; z < span / 2; z += step) {
      for (let x = -span / 2; x < span / 2; x += step) {
        const b = biomeAt(x, z);
        const h = heightAt(x, z);
        ctx.fillStyle = h < WATER_LEVEL ? (h < -12 ? '#0d2b3e' : '#17475f')
          : b === 'city' ? '#3c4147' : b === 'forest' ? '#1f3a1c'
          : b === 'desert' ? '#4b4029' : b === 'snow' ? '#6b7684'
          : b === 'beach' ? '#4d4633' : h > 90 ? '#3f3a30' : '#2a3d22';
        ctx.fillRect(toX(x), toZ(z), step * sc + 1, step * sc + 1);
      }
    }
    // highways
    ctx.strokeStyle = 'rgba(230,230,230,.5)'; ctx.lineWidth = 2;
    [-620, 620].forEach((hx) => { ctx.beginPath(); ctx.moveTo(toX(hx), 0); ctx.lineTo(toX(hx), H); ctx.stroke(); });
    // city grid
    ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 1;
    for (let k = -11; k <= 11; k++) {
      if (Math.abs(k * 40) > CITY_RADIUS) continue;
      ctx.beginPath(); ctx.moveTo(toX(k * 40), toZ(-CITY_RADIUS)); ctx.lineTo(toX(k * 40), toZ(CITY_RADIUS)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(toX(-CITY_RADIUS), toZ(k * 40)); ctx.lineTo(toX(CITY_RADIUS), toZ(k * 40)); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,138,61,.65)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(toX(0), toZ(0), CITY_RADIUS * sc, 0, 7); ctx.stroke();
    // collectibles
    g.collectibles.items.forEach((it) => {
      if (it.taken) return;
      ctx.fillStyle = '#4fd1ff'; ctx.beginPath(); ctx.arc(toX(it.x), toZ(it.z), 3, 0, 7); ctx.fill();
    });
    // mission
    if (g.missions.active) {
      const p = g.missions.active.points[g.missions.active.index];
      if (p) {
        ctx.fillStyle = '#ff8a3d';
        ctx.beginPath(); ctx.arc(toX(p.x), toZ(p.z), 7, 0, 7); ctx.fill();
        ctx.strokeStyle = '#ff8a3d'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(toX(p.x), toZ(p.z), 14, 0, 7); ctx.stroke();
      }
    }
    // player
    const px = toX(g.player.pos.x), pz = toZ(g.player.pos.z);
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(px, pz, 5, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(px, pz, 12, 0, 7); ctx.stroke();
    // labels
    ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.font = '13px sans-serif';
    ctx.fillText('CITY CENTRE', toX(-70), toZ(-24));
    ctx.fillText('WEST COAST', toX(-1000), toZ(120));
    ctx.fillText('NORTHERN PEAKS', toX(-120), toZ(-980));
    ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.font = '11px sans-serif';
    ctx.fillText('N ↑', W - 30, 20);
  }

  renderMissionList(g) {
    const box = $('missionList');
    box.innerHTML = '';
    const done = g.save.data.missions.completed || [];
    MISSION_DEFS.forEach((m) => {
      const isDone = done.includes(m.id);
      const card = document.createElement('div');
      card.className = 'mcard' + (isDone ? ' done' : '');
      card.innerHTML = `<div><h4>${m.title}</h4><p>${m.desc}</p></div>
        <div style="display:flex;align-items:center;gap:12px">
        <span class="rew">₹${m.reward}</span>
        ${isDone ? '<span class="rew" style="color:#4fd1ff">DONE</span>'
                 : `<button data-mid="${m.id}">START</button>`}</div>`;
      box.appendChild(card);
    });
    box.querySelectorAll('button[data-mid]').forEach((b) => {
      b.onclick = () => { g.startMission(b.dataset.mid); this.show(null); this.stack = []; };
    });
  }

  renderInventory(g) {
    const d = g.save.data;
    $('invMoney').textContent = '₹' + d.money.toLocaleString('en-IN');
    $('invShards').textContent = d.shards;
    $('invMed').textContent = d.items.medkit;
    $('invRep').textContent = d.items.repairkit;
    $('invVeh').textContent = d.vehiclesOwned.join(', ');
  }

  buildCredits() {
    const rows = CREDITS_REFS.map((r) =>
      `<li><b>${r.title.replace('File:', '')}</b> — ${r.creator} · <a href="${r.page}" target="_blank" rel="noopener">${r.license}</a>
       <br><a href="${r.page}" target="_blank" rel="noopener">${r.page}</a></li>`).join('');
    $('creditBody').innerHTML = `
      <h3>Game</h3>
      <p><b>WORLD FRONTIER – 3D OPEN WORLD</b><br>Version 1.0.0 · build 1107</p>
      <h3>Credits</h3>
      <ul>
        <li>Game Concept &amp; Game Design — World Frontier project</li>
        <li>Development Team — World Frontier project</li>
        <li>AI Development Agent — Sarvam AI assistant (code, world generation, systems)</li>
        <li>3D Modeling — all meshes generated procedurally in-engine (no third-party models)</li>
        <li>Environment Design — procedural terrain, city and biome systems</li>
        <li>Animation — procedural character, animal and vehicle animation</li>
        <li>Sound Design — synthesised engine/ambient audio (WebAudio, generated at runtime)</li>
        <li>Wikipedia Research — <a href="https://en.wikipedia.org" target="_blank" rel="noopener">en.wikipedia.org</a></li>
        <li>Wikimedia Commons Assets — <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">commons.wikimedia.org</a></li>
      </ul>
      <h3>Reference research (Wikimedia Commons)</h3>
      <p>These photographs were studied as visual references for architecture, vehicles, terrain and wildlife.
      No Commons image is shipped inside the game as a texture or model; every asset is generated in code.
      Each file is listed with its creator and the licence reported by the Commons API at the time of research.</p>
      <ul>${rows}</ul>
      <h3>Licences &amp; attribution</h3>
      <p>Individual image creators and licence names are listed above with a link to the file description page,
      which carries the full licence text and any attribution requirements.
      Reference material was used for study only; verify each licence before redistributing any image.</p>
      <h3>Special Thanks</h3>
      <p>The Wikipedia and Wikimedia Commons contributor communities; the three.js and Android open-source projects.</p>
      <h3>Disclaimer</h3>
      <p>This game is an independent project and is not officially affiliated with Wikipedia or the Wikimedia Foundation.</p>
      <h3>Links</h3>
      <p>${CREDIT_LINKS.map((l) => `<a href="${l}" target="_blank" rel="noopener">${l}</a>`).join('<br>')}</p>`;
  }
}
