// ---------------------------------------------------------------
// WORLD FRONTIER 3D - core utilities
// ---------------------------------------------------------------
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (a, b, l, dt) => lerp(a, b, 1 - Math.exp(-l * dt));

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(x, y) {
  let h = x * 374761393 + y * 668265263;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967296;
}

export function valueNoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

export function fbm(x, y, oct = 4) {
  let v = 0, amp = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    v += valueNoise(x * f, y * f) * amp;
    norm += amp; amp *= 0.5; f *= 2.07;
  }
  return v / norm;
}

export function ridged(x, y, oct = 3) {
  let v = 0, amp = 0.5, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) {
    const n = 1 - Math.abs(valueNoise(x * f, y * f) * 2 - 1);
    v += n * n * amp; norm += amp; amp *= 0.5; f *= 2.1;
  }
  return v / norm;
}

// procedural canvas textures (100% generated in code, no third-party assets)
export function makeWindowTexture(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#8d9299'; g.fillRect(0, 0, size, size);
  const cols = 8, rows = 12;
  const cw = size / cols, ch = size / rows;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const lit = Math.random();
      g.fillStyle = lit > 0.72 ? '#ffe9b8' : lit > 0.45 ? '#3b4b5c' : '#25313e';
      g.fillRect(x * cw + cw * 0.16, y * ch + ch * 0.16, cw * 0.68, ch * 0.62);
    }
  }
  g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = 2;
  for (let x = 0; x <= cols; x++) { g.beginPath(); g.moveTo(x * cw, 0); g.lineTo(x * cw, size); g.stroke(); }
  for (let y = 0; y <= rows; y++) { g.beginPath(); g.moveTo(0, y * ch); g.lineTo(size, y * ch); g.stroke(); }
  const t = new (window.THREE ? window.THREE.CanvasTexture : Object)(c);
  return { canvas: c };
}

export function makeRoadTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#4b4f57'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 1400; i++) {
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.05})`;
    g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
  }
  g.fillStyle = 'rgba(240,240,240,.75)';
  for (let y = 6; y < 128; y += 42) g.fillRect(62, y, 4, 22);
  return c;
}
