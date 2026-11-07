const puppeteer = require('puppeteer-core');
const fs = require('fs');
const OUT = '/scratch/work/game/shots';
fs.mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const b = await puppeteer.launch({
    executablePath: '/usr/local/bin/chromium', headless: 'new',
    args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--window-size=1280,720'],
  });
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 720 });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file:///scratch/work/game/dist/index.html', { waitUntil: 'load' });
  await sleep(10000);

  const shot = async (name) => { await p.screenshot({ path: `${OUT}/${name}.png` }); console.log('shot', name); };

  await shot('01_main_menu');

  // settings + credits screens (menu context)
  await p.evaluate(() => { window.__WF.game.action('graphics'); });
  await sleep(600); await shot('09_graphics_settings');
  await p.evaluate(() => { window.__WF.game.ui.stack = []; window.__WF.game.ui.show('menu'); });
  await sleep(400);
  await p.evaluate(() => { window.__WF.game.action('credits'); });
  await sleep(700); await shot('10_credits');
  await p.evaluate(() => { window.__WF.game.ui.stack = []; window.__WF.game.ui.show('menu'); });
  await sleep(300);

  await p.evaluate(() => window.__WF.startGame(false));
  await sleep(4000);

  await shot('02_city_low');

  await p.evaluate(() => { window.__WF.setPreset('high'); });
  await sleep(6000); await shot('03_city_high');

  await p.evaluate(() => { window.__WF.setPreset('ultra'); window.__WF.setTime(20.4); });
  await sleep(7000); await shot('04_night_ultra');

  await p.evaluate(() => { window.__WF.setPreset('high'); window.__WF.setTime(16.2); window.__WF.setWeather('storm'); });
  await sleep(7000); await shot('05_storm_rain');

  await p.evaluate(() => { window.__WF.setWeather('clear'); window.__WF.setTime(17.6); window.__WF.enterVehicle('supercar'); });
  await sleep(6000); await shot('06_driving');

  await p.evaluate(() => { window.__WF.game.player.vehicle = null; window.__WF.game.player.root.visible = true; window.__WF.teleport(700, 820); window.__WF.setTime(11.4); });
  await sleep(7000); await shot('07_countryside');

  await p.evaluate(() => { window.__WF.setWeather('snow'); window.__WF.teleport(-900, 1500); });
  await sleep(7000); await shot('08_mountains_snow');

  await p.evaluate(() => { window.__WF.setWeather('clear'); window.__WF.game.ui.drawBigMap(window.__WF.game); window.__WF.game.ui.push('mapScreen'); });
  await sleep(900); await shot('11_world_map');
  await p.evaluate(() => { window.__WF.game.ui.stack = []; window.__WF.game.ui.show(null); });

  const st = await p.evaluate(() => ({
    preset: window.__WF.game.settings.values.graphics,
    chunks: window.__WF.game.world.chunks.size,
    biomeAt700_820: window.__WF.game.player.pos.toArray().map(Math.round),
  }));
  console.log(JSON.stringify(st), 'errors', errs.length);
  await b.close();
})();
