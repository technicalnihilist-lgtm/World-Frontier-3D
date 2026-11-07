// ---------------------------------------------------------------
// Graphics presets + settings + save system
// ---------------------------------------------------------------
export const PRESETS = {
  low: {
    id: 'low', label: 'LOW',
    renderScale: 0.72, shadows: false, shadowSize: 512, antialias: false,
    viewChunks: 2, fogNear: 90, fogFar: 260, treeDensity: 0.32, grassDensity: 0,
    waterDetail: 0, particleCount: 260, buildingDetail: 0, anisotropy: 1,
    maxTraffic: 6, maxPeds: 14, pixelBudget: 1.0, lodDist: 120, ao: false,
  },
  medium: {
    id: 'medium', label: 'MEDIUM',
    renderScale: 0.9, shadows: true, shadowSize: 1024, antialias: false,
    viewChunks: 3, fogNear: 140, fogFar: 420, treeDensity: 0.6, grassDensity: 0,
    waterDetail: 1, particleCount: 700, buildingDetail: 1, anisotropy: 2,
    maxTraffic: 12, maxPeds: 26, pixelBudget: 1.4, lodDist: 200, ao: false,
  },
  high: {
    id: 'high', label: 'HIGH',
    renderScale: 1.0, shadows: true, shadowSize: 2048, antialias: true,
    viewChunks: 4, fogNear: 220, fogFar: 700, treeDensity: 0.9, grassDensity: 0.35,
    waterDetail: 2, particleCount: 1400, buildingDetail: 2, anisotropy: 4,
    maxTraffic: 20, maxPeds: 42, pixelBudget: 2.0, lodDist: 320, ao: true,
  },
  ultra: {
    id: 'ultra', label: 'ULTRA HIGH',
    renderScale: 1.0, shadows: true, shadowSize: 4096, antialias: true,
    viewChunks: 5, fogNear: 320, fogFar: 1000, treeDensity: 1.25, grassDensity: 0.8,
    waterDetail: 3, particleCount: 2600, buildingDetail: 3, anisotropy: 8,
    maxTraffic: 30, maxPeds: 60, pixelBudget: 2.6, lodDist: 460, ao: true,
  },
};

export const DEFAULT_SETTINGS = {
  graphics: 'low',          // DEFAULT MUST BE LOW
  masterVolume: 0.85, musicVolume: 0.6, sfxVolume: 0.8, ambientVolume: 0.7,
  cameraSensitivity: 1.0, aimSensitivity: 1.0, autoSave: true, language: 'English',
  buttonSize: 1.0, buttonOpacity: 0.85, joystickSensitivity: 1.0,
  brightness: 1.0, resolution: 'Auto', fpsLimit: 60,
  shadows: 'auto', showFps: false,
};

const SAVE_KEY = 'worldfrontier3d.save.v1';
const SET_KEY = 'worldfrontier3d.settings.v1';

export class Settings {
  constructor() {
    this.values = { ...DEFAULT_SETTINGS };
    this.load();
  }
  get preset() { return PRESETS[this.values.graphics] || PRESETS.low; }
  set(k, v) { this.values[k] = v; this.save(); if (this.onChange) this.onChange(k, v); }
  save() { try { localStorage.setItem(SET_KEY, JSON.stringify(this.values)); } catch (e) {} }
  load() {
    try {
      const raw = localStorage.getItem(SET_KEY);
      if (raw) Object.assign(this.values, JSON.parse(raw));
    } catch (e) {}
    // hard rule: never boot into ultra
    if (!PRESETS[this.values.graphics]) this.values.graphics = 'low';
  }
}

export class SaveSystem {
  constructor() { this.data = this.fresh(); }
  fresh() {
    return {
      version: 1, started: false, savedAt: null,
      player: { x: 12, y: 0, z: 60, heading: 0 },
      money: 500, shards: 0, items: { medkit: 1, repairkit: 1 },
      vehiclesOwned: ['sedan'], currentVehicle: null,
      missions: { completed: [], active: null, progress: {} },
      collectibles: [], explored: [], playtime: 0, day: 1,
    };
  }
  has() { try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; } }
  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) { const d = JSON.parse(raw); this.data = Object.assign(this.fresh(), d); return true; }
    } catch (e) {}
    return false;
  }
  save(extra = {}) {
    Object.assign(this.data, extra);
    this.data.savedAt = Date.now();
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.data)); return true; }
    catch (e) { return false; }
  }
  reset() { this.data = this.fresh(); try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
}

// device capability probe -> warning when a preset is too heavy
export function deviceClass() {
  const mem = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  let score = 0;
  if (mem >= 8) score += 2; else if (mem >= 6) score += 1; else if (mem <= 2) score -= 2;
  if (cores >= 8) score += 2; else if (cores >= 6) score += 1; else if (cores <= 4) score -= 1;
  return score; // <0 low-end, 0-2 mid, 3+ high
}
export function presetTooHeavy(presetId) {
  const s = deviceClass();
  if (presetId === 'ultra') return s < 3;
  if (presetId === 'high') return s < 1;
  if (presetId === 'medium') return s < -1;
  return false;
}
