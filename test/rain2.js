const puppeteer=require('puppeteer-core'); const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const OUT='/scratch/work/game/shots';
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1280,720']});
const p=await b.newPage(); await p.setViewport({width:1280,height:720});
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'}); await sleep(9500);
await p.evaluate(()=>window.__WF.startGame(false)); await sleep(2500);
await p.evaluate(()=>{window.__WF.setPreset('high');window.__WF.setTime(19.8);window.__WF.setWeather('rain');window.__WF.setCam(2.1,0.05,8);});
await sleep(10000);
console.log(JSON.stringify(await p.evaluate(()=>{const s=window.__WF.game.sky;return{count:s.precip.points.geometry.drawRange.count,op:+s.precip.material.opacity.toFixed(2),size:s.precip.material.size};})));
await p.screenshot({path:OUT+'/05_storm_rain.png'}); console.log('ok');
await b.close();})();
