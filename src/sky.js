// ---------------------------------------------------------------
// SKY, LIGHTING, DAY/NIGHT, WEATHER
// ---------------------------------------------------------------
import * as THREE from 'three';
import { clamp, lerp, smoothstep, mulberry32 } from './util.js';

const SKY_VERT = `
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}`;

const SKY_FRAG = `
uniform vec3 uSunDir, uZenith, uHorizon, uSunColor, uNight;
uniform float uStars, uClouds;
varying vec3 vDir;
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
void main(){
  vec3 d = normalize(vDir);
  float h = clamp(d.y*0.5+0.5, 0.0, 1.0);
  float t = pow(clamp(d.y,0.0,1.0), 0.55);
  vec3 col = mix(uHorizon, uZenith, t);
  // sun disc + glow
  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * pow(sd, 900.0) * 2.2;
  col += uSunColor * pow(sd, 12.0) * 0.28;
  // stars
  if (uStars > 0.01 && d.y > 0.02) {
    vec3 q = floor(d*260.0);
    float s = step(0.9975, hash(q));
    col += vec3(s) * uStars * (0.6 + 0.4*sin(hash(q+1.0)*30.0));
  }
  // thin cloud band
  float band = smoothstep(0.0, 0.35, d.y) * (1.0 - smoothstep(0.5, 0.9, d.y));
  col = mix(col, uNight, band * uClouds * 0.35);
  gl_FragColor = vec4(col, 1.0);
}`;

export class Sky {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.timeOfDay = 9.5;         // hours
    this.daySpeed = 1 / 120;      // 1 in-game minute per 2 real seconds
    this.weather = 'clear';
    this.weatherTarget = 'clear';
    this.cloudiness = 0.25;
    this.fogDensity = 0.0018;
    this.wind = 1.0;
    this.flash = 0;

    this.uniforms = {
      uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.2) },
      uZenith: { value: new THREE.Color('#2f6fb5') },
      uHorizon: { value: new THREE.Color('#bcd6ea') },
      uSunColor: { value: new THREE.Color('#fff3cf') },
      uNight: { value: new THREE.Color('#0a0f1c') },
      uStars: { value: 0 },
      uClouds: { value: 0.25 },
    };
    const skyGeo = new THREE.SphereGeometry(2400, 32, 20);
    this.dome = new THREE.Mesh(skyGeo, new THREE.ShaderMaterial({
      uniforms: this.uniforms, vertexShader: SKY_VERT, fragmentShader: SKY_FRAG,
      side: THREE.BackSide, depthWrite: false, fog: false,
    }));
    this.dome.frustumCulled = false;
    scene.add(this.dome);

    this.sun = new THREE.DirectionalLight(0xfff2d0, 2.2);
    this.sun.castShadow = true;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 400;
    this.sun.shadow.bias = -0.0008;
    this.setShadowQuality(1024, false);
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x4a4436, 0.85);
    scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0xffffff, 0.12);
    scene.add(this.ambient);

    scene.fog = new THREE.FogExp2(0xa8c4d8, 0.0018);

    // ---- clouds ----
    const cloudTex = this.cloudTexture();
    const cloudMat = new THREE.SpriteMaterial({ map: cloudTex, transparent: true, opacity: 0.85, depthWrite: false, fog: false });
    this.clouds = [];
    const rng = mulberry32(99);
    for (let i = 0; i < 46; i++) {
      const s = new THREE.Sprite(cloudMat);
      const r = 900 + rng() * 2200;
      const a = rng() * Math.PI * 2;
      s.position.set(Math.cos(a) * r, 420 + rng() * 320, Math.sin(a) * r);
      const sc = 380 + rng() * 620;
      s.scale.set(sc, sc * 0.55, 1);
      s.userData.speed = 0.6 + rng() * 1.6;
      this.clouds.push(s); scene.add(s);
    }

    // ---- precipitation ----
    this.precip = this.makePrecipitation(2600);
    scene.add(this.precip.points);
    this.rainMat = this.precip.material;

    this.boltLight = new THREE.PointLight(0xdce6ff, 0, 900);
    scene.add(this.boltLight);
  }

  cloudTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(64, 64, 4, 64, 64, 62);
    grd.addColorStop(0, 'rgba(255,255,255,0.95)');
    grd.addColorStop(0.5, 'rgba(255,255,255,0.45)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  makePrecipitation(max) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(max * 3);
    const vel = new Float32Array(max);
    for (let i = 0; i < max; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = Math.random() * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 120;
      vel[i] = 18 + Math.random() * 22;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xdceaf8, size: 0.62, transparent: true, opacity: 0, depthWrite: false,
      sizeAttenuation: true, map: this.dropTexture(), alphaTest: 0.02,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    return { points, material: mat, vel, max, active: 0 };
  }

  dropTexture() {
    const c = document.createElement('canvas');
    c.width = 32; c.height = 32;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(16, 0, 16, 32);
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(0.5, 'rgba(255,255,255,.95)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(13, 0, 6, 32);
    return new THREE.CanvasTexture(c);
  }

  setShadowQuality(size, enabled) {
    this.sun.castShadow = enabled;
    if (enabled) {
      this.sun.shadow.mapSize.set(size, size);
      const d = 70;
      this.sun.shadow.camera.left = -d; this.sun.shadow.camera.right = d;
      this.sun.shadow.camera.top = d; this.sun.shadow.camera.bottom = -d;
      this.sun.shadow.camera.updateProjectionMatrix();
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
  }

  setWeather(w) {
    this.weatherTarget = w;
    this.precip.active = (w === 'rain' || w === 'storm' || w === 'snow') ? 1 : 0;
    if (w === 'rain') { this.cloudiness = 0.85; this.wind = 1.6; }
    else if (w === 'storm') { this.cloudiness = 1.0; this.wind = 2.6; }
    else if (w === 'fog') { this.cloudiness = 0.5; this.wind = 0.4; }
    else if (w === 'snow') { this.cloudiness = 0.9; this.wind = 1.2; }
    else if (w === 'cloudy') { this.cloudiness = 0.6; this.wind = 1.1; }
    else { this.cloudiness = 0.22; this.wind = 0.8; }
  }

  update(dt, camPos, preset) {
    // clock
    this.timeOfDay = (this.timeOfDay + dt * this.daySpeed * 24 / 24 * 24) % 24;
    const ang = ((this.timeOfDay - 6) / 24) * Math.PI * 2;
    const sunDir = new THREE.Vector3(Math.cos(ang) * 0.55, Math.sin(ang), Math.sin(ang * 0.6) * 0.35).normalize();
    this.uniforms.uSunDir.value.copy(sunDir);

    const dayF = clamp(smoothstep(-0.12, 0.22, sunDir.y), 0, 1);
    const duskF = 1 - Math.abs(clamp(sunDir.y * 3.2, -1, 1));

    const zenDay = new THREE.Color('#2c6cb0'), zenNight = new THREE.Color('#05080f');
    const horDay = new THREE.Color('#c3dcf0'), horDusk = new THREE.Color('#f6a768'), horNight = new THREE.Color('#111a2c');
    const zen = zenNight.clone().lerp(zenDay, dayF);
    const hor = horNight.clone().lerp(horDay, dayF).lerp(horDusk, duskF * 0.75 * dayF);
    const grey = new THREE.Color('#8d97a2').lerp(zen, 0.25);
    zen.lerp(grey, this.cloudiness * 0.55);
    hor.lerp(grey, this.cloudiness * 0.45);
    this.uniforms.uZenith.value.copy(zen);
    this.uniforms.uHorizon.value.copy(hor);
    this.uniforms.uSunColor.value.setRGB(1, lerp(0.55, 0.95, dayF), lerp(0.35, 0.82, dayF));
    this.uniforms.uStars.value = clamp(1 - dayF * 2.2, 0, 1);
    this.uniforms.uClouds.value = this.cloudiness;
    this.uniforms.uNight.value.copy(zenNight);

    // lights
    this.sun.position.copy(camPos).add(sunDir.clone().multiplyScalar(180));
    this.sun.target.position.copy(camPos);
    this.sun.intensity = lerp(0.02, 3.4, dayF) * lerp(1, 0.4, this.cloudiness);
    this.sun.color.copy(this.uniforms.uSunColor.value);
    this.hemi.intensity = lerp(0.42, 1.15, dayF) * lerp(1, 0.75, this.cloudiness);
    this.hemi.color.copy(zen).lerp(new THREE.Color(dayF > 0.4 ? '#ffffff' : '#8fb4ff'), 0.35);
    this.ambient.intensity = lerp(0.22, 0.26, dayF) + this.flash * 2.4;

    // dome follows camera
    this.dome.position.copy(camPos);

    // fog
    let targetDensity;
    const base = 1 / Math.max(120, preset.fogFar);
    if (this.weatherTarget === 'fog') targetDensity = base * 2.6;
    else if (this.weatherTarget === 'storm') targetDensity = base * 1.5;
    else if (this.weatherTarget === 'rain') targetDensity = base * 1.2;
    else if (this.weatherTarget === 'snow') targetDensity = base * 1.35;
    else targetDensity = base * 0.9;
    this.fogDensity = lerp(this.fogDensity, targetDensity, 1 - Math.exp(-0.6 * dt));
    this.scene.fog.density = this.fogDensity;
    this.scene.fog.color.copy(hor);

    // clouds drift
    const cs = this.clouds;
    for (let i = 0; i < cs.length; i++) {
      const s = cs[i];
      s.position.x += this.wind * s.userData.speed * dt * 3.2;
      if (s.position.x - camPos.x > 2600) s.position.x -= 5200;
      if (s.position.x - camPos.x < -2600) s.position.x += 5200;
      s.position.z += Math.sin((i + this.timeOfDay) * 0.3) * dt * 0.6;
      s.material.opacity = 0.15 + this.cloudiness * 0.75;
      s.visible = this.cloudiness > 0.12;
    }

    // precipitation
    const w = this.weatherTarget;
    const raining = w === 'rain' || w === 'storm';
    const snowing = w === 'snow';
    const want = raining ? 1 : snowing ? 1 : 0;
    this.precip.active = lerp(this.precip.active, want, 1 - Math.exp(-1.4 * dt));
    const count = Math.floor(this.precip.max * clamp(this.precip.active * (preset.particleCount / 2600 + 0.6), 0, 1));
    this.precip.points.geometry.setDrawRange(0, count);
    this.rainMat.opacity = this.precip.active * 0.95;
    this.rainMat.size = snowing ? 0.95 : 1.05;
    this.rainMat.color.setHex(snowing ? 0xffffff : 0xcfe0f0);

    const p = this.precip.points.geometry.attributes.position;
    const arr = p.array;
    const speed = snowing ? 0.28 : 1.0;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3 + 1] -= this.precip.vel[i] * dt * speed;
      arr[i3] += (snowing ? Math.sin(i + this.timeOfDay * 3) * 2.2 : -2.5) * dt * this.wind;
      if (arr[i3 + 1] < -6) {
        arr[i3] = (Math.random() - 0.5) * 130;
        arr[i3 + 1] = 55 + Math.random() * 12;
        arr[i3 + 2] = (Math.random() - 0.5) * 130;
      }
    }
    p.needsUpdate = true;
    this.precip.points.position.set(camPos.x, camPos.y, camPos.z);

    // lightning
    if (w === 'storm') {
      if (this.flash <= 0 && Math.random() < dt * 0.55) {
        this.flash = 1;
        this.boltLight.position.set(camPos.x + (Math.random() - 0.5) * 400, camPos.y + 180, camPos.z + (Math.random() - 0.5) * 400);
        this.boltLight.intensity = 2600;
        if (this.onThunder) this.onThunder();
      }
    }
    if (this.flash > 0) {
      this.flash = Math.max(0, this.flash - dt * 4.5);
      this.boltLight.intensity = this.flash * 2400;
    }
    this.weather = w;
    return { dayF, sunDir };
  }

  get clockString() {
    const h = Math.floor(this.timeOfDay), m = Math.floor((this.timeOfDay % 1) * 60);
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }
}
