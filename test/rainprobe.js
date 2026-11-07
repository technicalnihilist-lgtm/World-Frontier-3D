const puppeteer=require('puppeteer-core'); const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage(); await p.setViewport({width:960,height:540});
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'}); await sleep(9000);
await p.evaluate(()=>window.__WF.startGame(false)); await sleep(2000);
await p.evaluate(()=>window.__WF.setWeather('storm')); await sleep(3000);
console.log(JSON.stringify(await p.evaluate(()=>{
 const s=window.__WF.game.sky;
 return {target:s.weatherTarget, active:+s.precip.active.toFixed(2), drawRange:s.precip.points.geometry.drawRange,
   opacity:+s.precip.material.opacity.toFixed(2), visible:s.precip.points.visible,
   cloud:+s.cloudiness.toFixed(2), pos:s.precip.points.position.toArray().map(Math.round),
   firstY:s.precip.points.geometry.attributes.position.array[1]};
})));
// find a high mountain spot
console.log(JSON.stringify(await p.evaluate(()=>{
 const h=(x,z)=>window.__WF.game.world.groundY(x,z);
 let best=[0,0,0];
 for(let i=0;i<4000;i++){ const x=(Math.random()-0.5)*3000, z=(Math.random()-0.5)*3000; const y=h(x,z);
   if(y>best[2]) best=[Math.round(x),Math.round(z),Math.round(y)]; }
 return best;
})));
await b.close();})();
