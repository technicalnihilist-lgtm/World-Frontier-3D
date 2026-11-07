const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME = process.env.CHROME || '/usr/bin/chromium';
const URL = 'file:///scratch/work/game/dist/index.html';
const OUT = '/scratch/work/shots';
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: [
      '--no-sandbox', '--disable-setuid-sandbox',
      '--use-gl=angle', '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
      '--enable-webgl', '--ignore-gpu-blocklist',
      '--window-size=1280,720',
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', (m) => {
    const t = m.text();
    if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + t);
    else console.log('LOG:', t.slice(0, 200));
  });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

  await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 9000));

  const info = await page.evaluate(() => ({
    ready: !!window.__WF,
    state: window.__WF ? window.__WF.state() : 'none',
    fps: window.__WF ? Math.round(window.__WF.game.fps) : 0,
    chunks: window.__WF ? window.__WF.game.world.chunks.size : 0,
    canvas: document.getElementById('gl') ? document.getElementById('gl').width : 0,
    gl: (() => { try { const c = document.createElement('canvas'); return !!c.getContext('webgl2'); } catch (e) { return false; } })(),
  }));
  console.log('INFO', JSON.stringify(info));

  await page.screenshot({ path: path.join(OUT, '01_menu.png') });

  // start the game
  await page.evaluate(() => window.__WF.startGame(false));
  await new Promise((r) => setTimeout(r, 6000));
  const s2 = await page.evaluate(() => ({
    state: window.__WF.state(),
    fps: Math.round(window.__WF.game.fps),
    chunks: window.__WF.game.world.chunks.size,
    pos: window.__WF.game.player.pos.toArray().map((v) => Math.round(v)),
    vehicles: window.__WF.game.vehicles.length,
  }));
  console.log('GAME', JSON.stringify(s2));
  await page.screenshot({ path: path.join(OUT, '02_gameplay_low.png') });

  console.log('ERRORS(' + errors.length + '):');
  errors.slice(0, 25).forEach((e) => console.log('  ' + e.slice(0, 300)));
  await browser.close();
})();
