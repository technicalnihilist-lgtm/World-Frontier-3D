const puppeteer = require('puppeteer-core');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({
    executablePath: '/usr/local/bin/chromium', headless: 'new',
    args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file:///scratch/work/game/dist/index.html', { waitUntil: 'load' });
  await sleep(8000);
  const R = {};
  R.defaultPreset = await p.evaluate(() => window.__WF.game.settings.values.graphics);
  await p.evaluate(() => window.__WF.startGame(false));
  await sleep(1500);

  const p0 = await p.evaluate(() => window.__WF.game.player.pos.toArray());
  await p.evaluate(() => { window.__WF.game.input.keys['w'] = true; });
  await sleep(1800);
  await p.evaluate(() => { window.__WF.game.input.keys['w'] = false; });
  const p1 = await p.evaluate(() => window.__WF.game.player.pos.toArray());
  R.walkDistance = +Math.hypot(p1[0] - p0[0], p1[2] - p0[2]).toFixed(2);
  R.state = await p.evaluate(() => window.__WF.game.player.state);

  await p.evaluate(() => { window.__WF.game.input.jumpPressed = true; });
  await sleep(250);
  R.jumped = await p.evaluate(() => window.__WF.game.player.pos.y >
    window.__WF.game.world.groundY(window.__WF.game.player.pos.x, window.__WF.game.player.pos.z) + 0.2);

  await p.evaluate(() => { const g = window.__WF.game; const v = g.vehicles[0]; g.player.pos.set(v.pos.x + 1, v.pos.y, v.pos.z); });
  await sleep(400);
  await p.evaluate(() => { window.__WF.game.input.vehiclePressed = true; });
  await sleep(600);
  R.inVehicle = await p.evaluate(() => !!window.__WF.game.player.vehicle);

  const v0 = await p.evaluate(() => window.__WF.game.player.vehicle.pos.toArray());
  await p.evaluate(() => { window.__WF.game.input.gasHeld = true; });
  await sleep(2500);
  await p.evaluate(() => { window.__WF.game.input.gasHeld = false; });
  const v1 = await p.evaluate(() => window.__WF.game.player.vehicle.pos.toArray());
  R.driveDistance = +Math.hypot(v1[0] - v0[0], v1[2] - v0[2]).toFixed(2);
  R.speedKmh = await p.evaluate(() => Math.round(window.__WF.game.player.vehicle.speedKmh));

  await p.evaluate(() => window.__WF.game.startMission('m_delivery1'));
  await sleep(400);
  R.missionActive = await p.evaluate(() => !!window.__WF.game.missions.active);
  R.beaconVisible = await p.evaluate(() => window.__WF.game.missions.beacon.group.visible);

  await p.evaluate(() => window.__WF.game.pause());
  await sleep(400);
  R.pausedState = await p.evaluate(() => window.__WF.game.state);
  R.pauseMenuVisible = await p.evaluate(() => !document.getElementById('pause').classList.contains('hidden'));
  await p.evaluate(() => window.__WF.game.resume());
  await sleep(300);
  R.resumed = await p.evaluate(() => window.__WF.game.state);

  await p.evaluate(() => window.__WF.game.saveGame(true));
  R.saved = await p.evaluate(() => !!localStorage.getItem('worldfrontier3d.save.v1'));

  await p.evaluate(() => window.__WF.setPreset('medium'));
  await sleep(800);
  R.presetAfter = await p.evaluate(() => window.__WF.game.settings.values.graphics);
  R.shadowsOn = await p.evaluate(() => window.__WF.game.renderer.shadowMap.enabled);
  R.chunksAfter = await p.evaluate(() => window.__WF.game.world.chunks.size);
  R.menuHidden = await p.evaluate(() => document.getElementById('menu').classList.contains('hidden'));

  console.log(JSON.stringify(R, null, 1));
  console.log('errors', errs.length, errs.slice(0, 3));
  await b.close();
})();
