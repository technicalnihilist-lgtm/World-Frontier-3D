const puppeteer=require('puppeteer-core'); const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const OUT='/scratch/work/game/shots';
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1280,720']});
const p=await b.newPage(); await p.setViewport({width:1280,height:720});
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'}); await sleep(9500);
await p.evaluate(()=>window.__WF.startGame(false)); await sleep(3000);
await p.evaluate(()=>{window.__WF.setPreset('high');window.__WF.setTime(16.2);window.__WF.setWeather('storm');});
await sleep(9000); await p.screenshot({path:OUT+'/05_storm_rain.png'}); console.log('storm ok');
await p.evaluate(()=>{window.__WF.setWeather('snow');window.__WF.teleport(950,-1078);window.__WF.setTime(10.2);window.__WF.setCam(2.4,0.22,9);});
await sleep(9000); await p.screenshot({path:OUT+'/08_mountains_snow.png'}); console.log('mountain ok');
await b.close();})();
