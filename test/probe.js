const puppeteer=require('puppeteer-core');
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/local/bin/chromium',headless:'new',args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage(); await p.setViewport({width:1280,height:720});
await p.goto('file:///scratch/work/game/dist/index.html',{waitUntil:'load'});
await new Promise(r=>setTimeout(r,7000));
const out=await p.evaluate(()=>{
  const g=window.__WF.game; const res={meshes:0,instanced:0,boxes:[],y:g.player.pos.y};
  g.world.chunks.forEach((ch,key)=>{
    ch.group.children.forEach(o=>{
      if(o.isInstancedMesh) res.instanced++;
      else if(o.isMesh){res.meshes++; if(res.boxes.length<6){const bb=o.geometry.boundingBox||(o.geometry.computeBoundingBox(),o.geometry.boundingBox); res.boxes.push([key, Math.round(bb.min.x),Math.round(bb.max.x),Math.round(bb.min.y),Math.round(bb.max.y),Math.round(bb.min.z),Math.round(bb.max.z)]);}}
    });
  });
  return res;
});
console.log(JSON.stringify(out,null,1));
await b.close();})();
