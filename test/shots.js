const puppeteer=require('puppeteer-core'); const fs=require('fs');
const OUT='/scratch/work/shots'; fs.mkdirSync(OUT,{recursive:true});
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',
  args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1280,720']});
const p=await b.newPage(); await p.setViewport({width:1280,height:720});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'});
await sleep(9000);
await p.screenshot({path:OUT+'/01_menu.png'});

await p.evaluate(()=>window.__WF.startGame(false));
await sleep(4000);

const shots=[
  ['03_low_street', ()=>{}],
  ['04_high_preset', ()=>{ window.__WF.setPreset('high'); }],
  ['05_ultra_night', ()=>{ window.__WF.setPreset('ultra'); window.__WF.setTime(20.6); }],
  ['06_rain_storm', ()=>{ window.__WF.setPreset('high'); window.__WF.setTime(15.2); window.__WF.setWeather('storm'); }],
  ['07_driving', ()=>{ window.__WF.setWeather('clear'); window.__WF.setTime(17.4); window.__WF.enterVehicle('supercar'); }],
  ['08_countryside', ()=>{ window.__WF.setPreset('high'); window.__WF.teleport(-260, 320); window.__WF.setTime(11.5); }],
];
for(const [name,fn] of shots){
  await p.evaluate(fn); await sleep(6500);
  await p.screenshot({path:OUT+'/'+name+'.png'});
  const st=await p.evaluate(()=>({fps:Math.round(window.__WF.game.fps),chunks:window.__WF.game.world.chunks.size,preset:window.__WF.game.settings.values.graphics}));
  console.log(name, JSON.stringify(st));
}
console.log('errors',errs.length, errs.slice(0,3));
await b.close();})();
