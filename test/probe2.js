const puppeteer=require('puppeteer-core'); const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage(); await p.setViewport({width:960,height:540});
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'}); await sleep(8000);
await p.evaluate(()=>window.__WF.startGame(false)); await sleep(1200);
await p.evaluate(()=>{ window.__WF.game.input.keys['w']=true; window.__log=[]; });
for(let i=0;i<6;i++){ await sleep(400);
  const s=await p.evaluate(()=>({sp:+window.__WF.game.player.speed.toFixed(2),pt:+window.__WF.game.playtime.toFixed(2),
     x:+window.__WF.game.player.pos.x.toFixed(1),z:+window.__WF.game.player.pos.z.toFixed(1),
     dt:+window.__WF.game.fps.toFixed(1),state:window.__WF.game.player.state}));
  console.log(JSON.stringify(s)); }
await b.close();})();
