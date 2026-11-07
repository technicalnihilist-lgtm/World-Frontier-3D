// ---------------------------------------------------------------
// WORLD: procedural terrain, biomes, city, roads, vegetation, water
// ---------------------------------------------------------------
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clamp, lerp, smoothstep, fbm, ridged, mulberry32, makeRoadTexture } from './util.js';

export const CHUNK = 100;         // metres
export const WATER_LEVEL = 0;
export const CITY_RADIUS = 470;

// ---------- pure world functions (shared by every system) ----------
export function heightAt(x, z) {
  const d = Math.hypot(x, z);
  let h = (fbm(x * 0.0016 + 11.3, z * 0.0016 - 7.1, 4) - 0.45) * 130;
  h += (fbm(x * 0.0075, z * 0.0075, 3) - 0.5) * 12;
  const mMask = smoothstep(700, 1500, d);
  h += ridged(x * 0.0021, z * 0.0021, 3) * 210 * mMask;
  // ocean basin on the far west
  h -= smoothstep(-300, -1600, x) * 70;
  // city plateau
  if (d < CITY_RADIUS) {
    const t = smoothstep(CITY_RADIUS, CITY_RADIUS * 0.55, d);
    h = lerp(h, 8, t * 0.95);
  }
  return h;
}

export function biomeAt(x, z) {
  const h = heightAt(x, z);
  const d = Math.hypot(x, z);
  if (h < WATER_LEVEL - 0.4) return 'ocean';
  if (h < WATER_LEVEL + 2.6) return 'beach';
  if (d < CITY_RADIUS) return 'city';
  if (h > 120) return 'snow';
  const temp = fbm(x * 0.0009 + 100, z * 0.0009 - 50, 3);
  const moist = fbm(x * 0.0013 - 300, z * 0.0013 + 200, 3);
  if (h > 78 && temp < 0.5) return 'snow';
  if (temp > 0.6 && moist < 0.44) return 'desert';
  if (moist > 0.5) return 'forest';
  return 'plains';
}

const PALETTE = {
  ocean: new THREE.Color('#26343a'), beach: new THREE.Color('#d9c7a1'),
  plains: new THREE.Color('#6f9448'), forest: new THREE.Color('#3c6330'),
  desert: new THREE.Color('#c9ae79'), snow: new THREE.Color('#e9eef3'),
  city: new THREE.Color('#787c80'), rock: new THREE.Color('#8b8578'),
};

function slopeAt(x, z) {
  const e = 2.5;
  const dx = heightAt(x + e, z) - heightAt(x - e, z);
  const dz = heightAt(x, z + e) - heightAt(x, z - e);
  return Math.min(1, Math.hypot(dx, dz) / (e * 2));
}

// ---------- shared materials ----------
let sharedWindowTex = null;
function windowTexture() {
  if (sharedWindowTex) return sharedWindowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#b9bec6'; g.fillRect(0, 0, 256, 256);
  const cols = 8, rows = 12, cw = 256 / cols, ch = 256 / rows;
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const r = Math.random();
    g.fillStyle = r > 0.62 ? '#ffe9bb' : r > 0.32 ? '#5d7488' : '#33465a';
    g.fillRect(x * cw + cw * 0.14, y * ch + ch * 0.16, cw * 0.7, ch * 0.6);
  }
  g.strokeStyle = 'rgba(0,0,0,.3)'; g.lineWidth = 2;
  for (let x = 0; x <= cols; x++) { g.beginPath(); g.moveTo(x * cw, 0); g.lineTo(x * cw, 256); g.stroke(); }
  for (let y = 0; y <= rows; y++) { g.beginPath(); g.moveTo(0, y * ch); g.lineTo(256, y * ch); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  sharedWindowTex = t;
  return t;
}

let sharedEmissiveTex = null;
function emissiveWindowTexture() {
  if (sharedEmissiveTex) return sharedEmissiveTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#000000'; g.fillRect(0, 0, 256, 256);
  const cols = 8, rows = 12, cw = 256 / cols, ch = 256 / rows;
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const r = Math.random();
    if (r > 0.42) {
      g.fillStyle = r > 0.8 ? '#fff2c8' : r > 0.6 ? '#ffd98a' : '#b8d0e8';
      g.fillRect(x * cw + cw * 0.14, y * ch + ch * 0.16, cw * 0.7, ch * 0.6);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  sharedEmissiveTex = t;
  return t;
}

let roadTex = null;
function roadTexture() {
  if (roadTex) return roadTex;
  const t = new THREE.CanvasTexture(makeRoadTexture());
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1, 6);
  t.colorSpace = THREE.SRGBColorSpace;
  roadTex = t;
  return t;
}

// ---------- water ----------
export class Water {
  constructor() {
    const geo = new THREE.PlaneGeometry(6000, 6000, 96, 96);
    geo.rotateX(-Math.PI / 2);
    this.uniforms = {
      uTime: { value: 0 }, uDetail: { value: 0 },
      uDeep: { value: new THREE.Color('#123c4f') },
      uShallow: { value: new THREE.Color('#3f93a8') },
      uSunDir: { value: new THREE.Vector3(0.5, 0.8, 0.2) },
      uSunColor: { value: new THREE.Color('#fff2d0') },
      uFogColor: { value: new THREE.Color('#a8c4d8') },
      uFogDensity: { value: 0.002 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, transparent: false,
      vertexShader: `
        uniform float uTime; uniform float uDetail;
        varying vec3 vPos; varying vec3 vN;
        void main(){
          vec3 p = position;
          float amp = uDetail > 0.5 ? 0.35 + uDetail*0.18 : 0.12;
          float t = uTime;
          p.y += sin(p.x*0.08 + t*1.4)*amp + sin(p.z*0.11 - t*1.1)*amp*0.8;
          if (uDetail > 1.5) p.y += sin((p.x+p.z)*0.31 + t*2.3)*amp*0.35;
          vPos = (modelMatrix * vec4(p,1.0)).xyz;
          float dx = cos(p.x*0.08 + t*1.4)*amp*0.08;
          float dz = cos(p.z*0.11 - t*1.1)*amp*0.11;
          vN = normalize(vec3(-dx, 1.0, -dz));
          gl_Position = projectionMatrix * viewMatrix * vec4(vPos,1.0);
        }`,
      fragmentShader: `
        uniform vec3 uDeep,uShallow,uSunColor,uSunDir,uFogColor; uniform float uFogDensity,uTime;
        varying vec3 vPos; varying vec3 vN;
        void main(){
          vec3 V = normalize(cameraPosition - vPos);
          float fres = pow(1.0 - max(dot(V, normalize(vN)),0.0), 3.0);
          vec3 col = mix(uDeep, uShallow, clamp(vN.y*0.6,0.0,1.0));
          col = mix(col, vec3(0.55,0.72,0.86), fres*0.75);
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(normalize(vN), H),0.0), 90.0);
          col += uSunColor * spec * 0.9;
          float d = length(cameraPosition - vPos);
          col = mix(col, uFogColor, clamp(d*uFogDensity, 0.0, 0.92));
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.y = WATER_LEVEL;
    this.mesh.frustumCulled = false;
  }
  update(dt, t, camPos, preset) {
    this.uniforms.uTime.value = t;
    this.uniforms.uDetail.value = preset.waterDetail;
    this.mesh.position.x = Math.round(camPos.x / 200) * 200;
    this.mesh.position.z = Math.round(camPos.z / 200) * 200;
  }
}

// ---------- chunk ----------
class Chunk {
  constructor(world, cx, cz) { this.world = world; this.cx = cx; this.cz = cz; this.group = null; }
  key() { return this.cx + ',' + this.cz; }

  build(preset, detail) {
    this.dispose();
    const g = new THREE.Group();
    const ox = this.cx * CHUNK, oz = this.cz * CHUNK;
    const centerX = ox + CHUNK / 2, centerZ = oz + CHUNK / 2;
    const biome = biomeAt(centerX, centerZ);
    const rng = mulberry32((this.cx * 73856093) ^ (this.cz * 19349663));

    // ---- terrain mesh ----
    const seg = detail ? 24 : 10;
    const geo = new THREE.PlaneGeometry(CHUNK, CHUNK, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + centerX, z = pos.getZ(i) + centerZ;
      const h = heightAt(x, z);
      pos.setY(i, h);
      const b = biomeAt(x, z);
      const slope = slopeAt(x, z);
      c.copy(PALETTE[b] || PALETTE.plains);
      if (slope > 0.42) c.lerp(PALETTE.rock, smoothstep(0.42, 0.85, slope));
      if (b === 'snow' && slope > 0.6) c.lerp(PALETTE.rock, 0.5);
      const v = 0.9 + rng() * 0.2;
      colors[i * 3] = c.r * v; colors[i * 3 + 1] = c.g * v; colors[i * 3 + 2] = c.b * v;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const terrainMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const terrain = new THREE.Mesh(geo, terrainMat);
    terrain.receiveShadow = preset.shadows;
    terrain.position.set(centerX, 0, centerZ);
    terrain.matrixAutoUpdate = false;
    terrain.updateMatrix();
    g.add(terrain);

    // ---- city buildings + roads ----
    const isCity = Math.hypot(centerX, centerZ) < CITY_RADIUS + 40;
    if (isCity) this.buildCity(g, preset, rng, ox, oz, detail);
    this.buildHighways(g, preset, ox, oz);

    // ---- vegetation ----
    this.buildVegetation(g, preset, rng, biome, detail, ox, oz, centerX, centerZ);

    // ---- rocks ----
    if (detail > 0 && biome !== 'city') this.buildRocks(g, rng, biome, ox, oz);

    this.group = g;
    return g;
  }

  buildCity(g, preset, rng, ox, oz, detail) {
    const geos = [];
    const BOX = new THREE.BoxGeometry(1, 1, 1);
    const step = 40;
    for (let gx = Math.floor(ox / step) * step; gx < ox + CHUNK; gx += step) {
      for (let gz = Math.floor(oz / step) * step; gz < oz + CHUNK; gz += step) {
        if (Math.hypot(gx + 20, gz + 20) > CITY_RADIUS) continue;
        // building block sits inside the road grid
        const bx = gx + 8, bz = gz + 8, bw = step - 16, bd = step - 16;
        if (bx < ox || bx > ox + CHUNK || bz < oz || bz > oz + CHUNK) continue;
        const lots = 1 + Math.floor(rng() * (detail ? (preset.buildingDetail > 1 ? 3 : 2) : 1));
        for (let l = 0; l < lots; l++) {
          const w = (bw / lots) * (0.72 + rng() * 0.24);
          const d = bd * (0.62 + rng() * 0.34);
          const px = bx + (bw / lots) * l + w / 2 + 0.4;
          const pz = bz + bd / 2 + (rng() - 0.5) * 3;
          const centreDist = Math.hypot(px, pz);
          const tall = smoothstep(CITY_RADIUS, 60, centreDist);
          let h = 7 + rng() * 14 + tall * (26 + rng() * 52);
          if (rng() < 0.04) h += 40; // occasional tower
          const base = heightAt(px, pz) - 1.5;
          const bg = BOX.clone();
          bg.scale(w, h, d);
          bg.translate(px, base + h / 2, pz);
          const uv = bg.attributes.uv;
          for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (w / 7), uv.getY(i) * (h / 7));
          geos.push(bg);
          // rooftop block
          if (detail && preset.buildingDetail > 1 && rng() < 0.5) {
            const rg = BOX.clone();
            rg.scale(w * 0.4, 2.2, d * 0.4);
            rg.translate(px, base + h + 1.1, pz);
            geos.push(rg);
          }
        }
      }
    }
    if (geos.length) {
      const merged = mergeGeometries(geos, false);
      const mat = new THREE.MeshLambertMaterial({
        map: windowTexture(), emissiveMap: emissiveWindowTexture(),
        emissive: new THREE.Color(0xffffff), emissiveIntensity: 0,
      });
      this.buildingMat = mat;
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = preset.shadows; mesh.receiveShadow = preset.shadows;
      mesh.matrixAutoUpdate = false; mesh.updateMatrix();
      g.add(mesh);
      geos.forEach((x) => x.dispose());
    }
    // roads inside the city
    const roadGeos = [];
    const step2 = 40;
    for (let gx = Math.floor(ox / step2) * step2; gx <= ox + CHUNK; gx += step2) {
      if (Math.abs(gx) > CITY_RADIUS) continue;
      roadGeos.push(this.roadStrip(gx, oz, 10, CHUNK, true));
    }
    for (let gz = Math.floor(oz / step2) * step2; gz <= oz + CHUNK; gz += step2) {
      if (Math.abs(gz) > CITY_RADIUS) continue;
      roadGeos.push(this.roadStrip(ox, gz, 10, CHUNK, false));
    }
    if (roadGeos.length) {
      const rm = mergeGeometries(roadGeos, false);
      const mesh = new THREE.Mesh(rm, new THREE.MeshLambertMaterial({ map: roadTexture(), color: 0xffffff }));
      mesh.receiveShadow = preset.shadows;
      mesh.matrixAutoUpdate = false; mesh.updateMatrix();
      g.add(mesh);
      roadGeos.forEach((x) => x.dispose());
    }
  }

  // a road strip following terrain height
  roadStrip(x0, z0, width, length, alongZ) {
    const segs = 8;
    const geo = new THREE.PlaneGeometry(width, length, 1, segs);
    geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const lx = p.getX(i), lz = p.getZ(i);
      const wx = alongZ ? x0 + lx : x0 + width / 2 + lx;
      const wz = alongZ ? z0 + length / 2 + lz : z0 + lz;
      p.setY(i, heightAt(wx, wz) + 0.12);
    }
    geo.computeVertexNormals();
    if (alongZ) geo.translate(x0, 0, z0 + length / 2);
    else geo.translate(x0 + width / 2, 0, z0);
    return geo;
  }

  buildHighways(g, preset, ox, oz) {
    const geos = [];
    for (const hx of [-620, 620]) {
      if (ox <= hx + 20 && ox + CHUNK >= hx - 20) {
        geos.push(this.roadStrip(hx, oz, 18, CHUNK, true));
      }
    }
    if (geos.length) {
      const m = mergeGeometries(geos, false);
      const mesh = new THREE.Mesh(m, new THREE.MeshLambertMaterial({ map: roadTexture(), color: 0xbfc3c7 }));
      mesh.receiveShadow = preset.shadows;
      mesh.matrixAutoUpdate = false; mesh.updateMatrix();
      g.add(mesh);
      geos.forEach((x) => x.dispose());
    }
  }

  buildVegetation(g, preset, rng, biome, detail, ox, oz, cx, cz) {
    if (biome === 'city' || biome === 'ocean') return;
    let density = preset.treeDensity;
    if (biome === 'forest') density *= 1.5;
    if (biome === 'desert') density *= 0.22;
    if (biome === 'snow') density *= 0.4;
    if (biome === 'beach') density *= 0.25;
    if (!detail) density *= 0.35;
    const count = Math.floor(density * 46);
    if (count <= 0) return;

    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = ox + rng() * CHUNK, z = oz + rng() * CHUNK;
      const h = heightAt(x, z);
      if (h < WATER_LEVEL + 1.2) continue;
      if (slopeAt(x, z) > 0.55) continue;
      positions.push([x, h, z, 0.7 + rng() * 0.9, rng()]);
    }
    if (!positions.length) return;

    const trunkGeo = new THREE.CylinderGeometry(0.28, 0.42, 3.2, 5);
    trunkGeo.translate(0, 1.6, 0);
    const leafGeo = new THREE.ConeGeometry(2.3, 5.4, 6);
    leafGeo.translate(0, 5.2, 0);

    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5b4632 });
    const leafMat = new THREE.MeshLambertMaterial({ color: 0xffffff, vertexColors: false });
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, positions.length);
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, positions.length);
    leaves.castShadow = preset.shadows; trunks.castShadow = preset.shadows;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const col = new THREE.Color();
    positions.forEach(([x, h, z, sc, r], i) => {
      p.set(x, h, z); s.set(sc, sc * (0.8 + r * 0.6), sc);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r * Math.PI * 2);
      m.compose(p, q, s);
      trunks.setMatrixAt(i, m); leaves.setMatrixAt(i, m);
      if (biome === 'desert') col.setHSL(0.12, 0.35, 0.45 + r * 0.1);
      else if (biome === 'snow') col.setHSL(0.35, 0.15, 0.42 + r * 0.12);
      else col.setHSL(0.26 + r * 0.05, 0.42, 0.24 + r * 0.14);
      leaves.setColorAt(i, col);
    });
    trunks.instanceMatrix.needsUpdate = true; leaves.instanceMatrix.needsUpdate = true;
    if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
    g.add(trunks); g.add(leaves);
  }

  buildRocks(g, rng, biome, ox, oz) {
    const geos = [];
    const base = new THREE.IcosahedronGeometry(1, 0);
    const n = 2 + Math.floor(rng() * 4);
    for (let i = 0; i < n; i++) {
      const x = ox + rng() * CHUNK, z = oz + rng() * CHUNK;
      const h = heightAt(x, z);
      if (h < WATER_LEVEL + 0.5) continue;
      const s = 0.7 + rng() * 2.2;
      const geo = base.clone();
      geo.scale(s, s * (0.5 + rng() * 0.6), s);
      geo.rotateY(rng() * 6.28);
      geo.translate(x, h + s * 0.25, z);
      geos.push(geo);
    }
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    const mat = new THREE.MeshLambertMaterial({ color: biome === 'desert' ? 0xb8a17c : 0x8b8b86 });
    const mesh = new THREE.Mesh(merged, mat);
    mesh.matrixAutoUpdate = false; mesh.updateMatrix();
    g.add(mesh);
    geos.forEach((x) => x.dispose());
  }

  dispose() {
    if (!this.group) return;
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((mm) => { if (mm.map !== sharedWindowTex && mm.map !== roadTex) mm.dispose(); else mm.dispose(); });
      }
    });
    if (this.group.parent) this.group.parent.remove(this.group);
    this.group = null;
  }
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.chunks = new Map();
    this.water = new Water();
    scene.add(this.water.mesh);
    this.preset = null;
    this.root = new THREE.Group();
    scene.add(this.root);
  }

  update(camPos, preset, dt, t) {
    if (this.preset !== preset) { this.preset = preset; this.rebuildAll(); }
    const ccx = Math.floor(camPos.x / CHUNK), ccz = Math.floor(camPos.z / CHUNK);
    const R = preset.viewChunks;
    const wanted = new Set();
    for (let dz = -R; dz <= R; dz++) {
      for (let dx = -R; dx <= R; dx++) {
        const d = Math.hypot(dx, dz);
        if (d > R + 0.35) continue;
        const cx = ccx + dx, cz = ccz + dz;
        const key = cx + ',' + cz;
        wanted.add(key);
        if (!this.chunks.has(key)) {
          const ch = new Chunk(this, cx, cz);
          ch.build(preset, d <= R - 1.2 ? 1 : 0);
          this.chunks.set(key, ch);
          this.root.add(ch.group);
        }
      }
    }
    for (const [key, ch] of this.chunks) {
      if (!wanted.has(key)) { ch.dispose(); this.chunks.delete(key); }
    }
    this.water.update(dt, t, camPos, preset);
  }

  rebuildAll() {
    for (const ch of this.chunks.values()) ch.dispose();
    this.chunks.clear();
  }

  setNight(f) {
    const v = clamp(f, 0, 1);
    for (const ch of this.chunks.values()) {
      if (ch.buildingMat) ch.buildingMat.emissiveIntensity = v * 1.15;
    }
  }

  isWater(x, z) { return heightAt(x, z) < WATER_LEVEL; }
  groundY(x, z) { return Math.max(heightAt(x, z), WATER_LEVEL); }
}
