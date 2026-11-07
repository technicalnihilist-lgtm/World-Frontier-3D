(()=>{var Sh=0,rl=1,bh=2;var Oc=1,Fo=2,pi=3,Oi=0,Le=1,Qe=2;var Di=0,Cn=1,al=2,ol=3,ll=4,Eh=5,Zi=100,wh=101,Th=102,cl=103,hl=104,Ah=200,Rh=201,Ch=202,Ph=203,Wa=204,Xa=205,Lh=206,Ih=207,Dh=208,Uh=209,Nh=210,Fh=211,Oh=212,Bh=213,kh=214,zh=0,Hh=1,Gh=2,Js=3,Vh=4,Wh=5,Xh=6,Yh=7,Oo=0,qh=1,Zh=2,Ui=0,Jh=1,$h=2,jh=3,Bo=4,Kh=5,Qh=6;var Bc=300,In=301,Dn=302,Ya=303,qa=304,Ur=306,tn=1e3,ti=1001,Za=1002,Be=1003,ul=1004;var oa=1005;var Ye=1006,tu=1007;var es=1008;var Ni=1009,eu=1010,iu=1011,ko=1012,kc=1013,Li=1014,Ii=1015,is=1016,zc=1017,Hc=1018,ji=1020,nu=1021,ei=1023,su=1024,ru=1025,Ki=1026,Un=1027,au=1028,Gc=1029,ou=1030,Vc=1031,Wc=1033,la=33776,ca=33777,ha=33778,ua=33779,dl=35840,fl=35841,pl=35842,ml=35843,Xc=36196,gl=37492,_l=37496,xl=37808,yl=37809,vl=37810,Ml=37811,Sl=37812,bl=37813,El=37814,wl=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Ll=37821,da=36492,Il=36494,Dl=36495,lu=36283,Ul=36284,Nl=36285,Fl=36286;var $s=2300,js=2301,fa=2302,Ol=2400,Bl=2401,kl=2402;var Yc=3e3,Qi=3001,cu=3200,hu=3201,qc=0,uu=1,qe="",ee="srgb",xi="srgb-linear",zo="display-p3",Nr="display-p3-linear",Ks="linear",te="srgb",Qs="rec709",tr="p3";var an=7680;var zl=519,du=512,fu=513,pu=514,Zc=515,mu=516,gu=517,_u=518,xu=519,Ja=35044;var Hl="300 es",$a=1035,_i=2e3,er=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pa=Math.PI/180,ja=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function yu(s,t){return(s%t+t)%t}function ma(s,t,e){return(1-e)*s+e*t}function Gl(s){return(s&s-1)===0&&s!==0}function Ka(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ot=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=n[0],m=n[3],p=n[6],y=n[1],x=n[4],E=n[7],C=n[2],T=n[5],A=n[8];return r[0]=o*_+a*y+l*C,r[3]=o*m+a*x+l*T,r[6]=o*p+a*E+l*A,r[1]=c*_+h*y+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*E+u*A,r[2]=f*_+d*y+g*C,r[5]=f*m+d*x+g*T,r[8]=f*p+d*E+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ga=new Vt;function Jc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vu(){let s=ir("canvas");return s.style.display="block",s}var Vl={};function jn(s){s in Vl||(Vl[s]=!0,console.warn(s))}var Wl=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[xi]:{transfer:Ks,primaries:Qs,toReference:s=>s,fromReference:s=>s},[ee]:{transfer:te,primaries:Qs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Nr]:{transfer:Ks,primaries:tr,toReference:s=>s.applyMatrix3(Xl),fromReference:s=>s.applyMatrix3(Wl)},[zo]:{transfer:te,primaries:tr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Xl),fromReference:s=>s.applyMatrix3(Wl).convertLinearToSRGB()}},Mu=new Set([xi,Nr]),Zt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=ys[t].toReference,n=ys[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ys[s].primaries},getTransfer:function(s){return s===qe?Ks:ys[s].transfer}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var on,nr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{on===void 0&&(on=ir("canvas")),on.width=t.width,on.height=t.height;let i=on.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=on}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pn(e[i]/255)*255):e[i]=Pn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Su=0,sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(xa(n[o].image)):r.push(xa(n[o]))}else r=xa(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function xa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?nr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bu=0,Ze=class s extends Bi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ti,n=ti,r=Ye,o=es,a=ei,l=Ni,c=s.DEFAULT_ANISOTROPY,h=qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Fi(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qi?ee:qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ee?Qi:Yc}set encoding(t){jn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qi?ee:qe}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Bc;Ze.DEFAULT_ANISOTROPY=1;var se=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,E=(d+1)/2,C=(p+1)/2,T=(h+f)/4,A=(u+_)/4,U=(g+m)/4;return x>E&&x>C?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=T/i,r=A/i):E>C?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=T/n,r=U/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=A/r,n=U/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(jn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qi?ee:qe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Qa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},rr=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var to=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,p*y);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let E=a*y;if(l=l*m+f*E,c=c*m+d*E,h=h*m+g*E,u=u*m+_*E,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new R,Yl=new ai,vi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hn),Ms.subVectors(this.max,Hn),ln.subVectors(t.a,Hn),cn.subVectors(t.b,Hn),hn.subVectors(t.c,Hn),Ti.subVectors(cn,ln),Ai.subVectors(hn,cn),Vi.subVectors(ln,hn);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Vi.z,Vi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Vi.z,0,-Vi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Vi.y,Vi.x,0];return!va(e,ln,cn,hn,Ms)||(e=[1,0,0,0,1,0,0,0,1],!va(e,ln,cn,hn,Ms))?!1:(Ss.crossVectors(Ti,Ai),e=[Ss.x,Ss.y,Ss.z],va(e,ln,cn,hn,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new R,new R,new R,new R,new R,new R,new R,new R],$e=new R,vs=new vi,ln=new R,cn=new R,hn=new R,Ti=new R,Ai=new R,Vi=new R,Hn=new R,Ms=new R,Ss=new R,Wi=new R;function va(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Wi.fromArray(s,r);let a=n.x*Math.abs(Wi.x)+n.y*Math.abs(Wi.y)+n.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Eu=new vi,Gn=new R,Ma=new R,ki=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Eu.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gn.subVectors(t,this.center);let e=Gn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gn.copy(t.center).add(Ma)),this.expandByPoint(Gn.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new R,Sa=new R,bs=new R,Ri=new R,ba=new R,Es=new R,Ea=new R,ar=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Sa.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=Ri.dot(this.direction),l=-Ri.dot(bs),c=Ri.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Sa).addScaledVector(bs,f),d}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),n=hi.dot(hi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,n,r){ba.subVectors(e,t),Es.subVectors(i,t),Ea.crossVectors(ba,Es);let o=this.direction.dot(Ea),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let l=a*this.direction.dot(Es.crossVectors(Ri,Es));if(l<0)return null;let c=a*this.direction.dot(ba.cross(Ri));if(c<0||l+c>o)return null;let h=-a*Ri.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/un.setFromMatrixColumn(t,0).length(),r=1/un.setFromMatrixColumn(t,1).length(),o=1/un.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Tu)}lookAt(t,e,i){let n=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Ci.crossVectors(i,ze),Ci.lengthSq()===0&&(Math.abs(i.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Ci.crossVectors(i,ze)),Ci.normalize(),ws.crossVectors(ze,Ci),n[0]=Ci.x,n[4]=ws.x,n[8]=ze.x,n[1]=Ci.y,n[5]=ws.y,n[9]=ze.y,n[2]=Ci.z,n[6]=ws.z,n[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],E=i[11],C=i[15],T=n[0],A=n[4],U=n[8],v=n[12],b=n[1],D=n[5],N=n[9],J=n[13],L=n[2],F=n[6],V=n[10],Y=n[14],X=n[3],W=n[7],j=n[11],tt=n[15];return r[0]=o*T+a*b+l*L+c*X,r[4]=o*A+a*D+l*F+c*W,r[8]=o*U+a*N+l*V+c*j,r[12]=o*v+a*J+l*Y+c*tt,r[1]=h*T+u*b+f*L+d*X,r[5]=h*A+u*D+f*F+d*W,r[9]=h*U+u*N+f*V+d*j,r[13]=h*v+u*J+f*Y+d*tt,r[2]=g*T+_*b+m*L+p*X,r[6]=g*A+_*D+m*F+p*W,r[10]=g*U+_*N+m*V+p*j,r[14]=g*v+_*J+m*Y+p*tt,r[3]=y*T+x*b+E*L+C*X,r[7]=y*A+x*D+E*F+C*W,r[11]=y*U+x*N+E*V+C*j,r[15]=y*v+x*J+E*Y+C*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,E=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=e*y+i*x+n*E+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(_*f*r-u*m*r-_*n*d+i*m*d+u*n*p-i*f*p)*A,t[2]=(a*m*r-_*l*r+_*n*c-i*m*c-a*n*p+i*l*p)*A,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*A,t[4]=x*A,t[5]=(h*m*r-g*f*r+g*n*d-e*m*d-h*n*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*d+e*l*d)*A,t[8]=E*A,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*A,t[12]=C*A,t[13]=(h*_*n-g*u*n+g*i*f-e*_*f-h*i*m+e*u*m)*A,t[14]=(g*a*n-o*_*n-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,x=l*h,E=l*u,C=i.x,T=i.y,A=i.z;return n[0]=(1-(_+p))*C,n[1]=(d+E)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(d-E)*T,n[5]=(1-(f+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+x)*A,n[9]=(m-y)*A,n[10]=(1-(f+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=un.set(n[0],n[1],n[2]).length(),o=un.set(n[4],n[5],n[6]).length(),a=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],je.copy(this);let c=1/r,h=1/o,u=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=_i){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,g;if(a===_i)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===er)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=_i){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),f=(e+t)*c,d=(i+n)*h,g,_;if(a===_i)g=(o+r)*u,_=-2*u;else if(a===er)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},un=new R,je=new $t,wu=new R(0,0,0),Tu=new R(1,1,1),Ci=new R,ws=new R,ze=new R,ql=new $t,Zl=new ai,or=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};or.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Au=0,Jl=new R,dn=new ai,ui=new $t,Ts=new R,Vn=new R,Ru=new R,Cu=new ai,$l=new R(1,0,0),jl=new R(0,1,0),Kl=new R(0,0,1),Pu={type:"added"},Lu={type:"removed"},Te=class s extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new or,i=new ai,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new $t},normalMatrix:{value:new Vt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.premultiply(dn),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Vn,Ts,this.up):ui.lookAt(Ts,Vn,this.up),this.quaternion.setFromRotationMatrix(ui),n&&(ui.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(ui),this.quaternion.premultiply(dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++){let a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Te.DEFAULT_UP=new R(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=new R,di=new R,wa=new R,fi=new R,fn=new R,pn=new R,Ql=new R,Ta=new R,Aa=new R,Ra=new R,As=!1,$i=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ke.subVectors(t,e),n.cross(Ke);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ke.subVectors(n,e),di.subVectors(i,e),wa.subVectors(t,e);let o=Ke.dot(Ke),a=Ke.dot(di),l=Ke.dot(wa),c=di.dot(di),h=di.dot(wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(t,e,i,n,r,o,a,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(t,e,i,n,r,o,a,l)}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(t,e,i,n){return Ke.subVectors(i,e),di.subVectors(t,e),Ke.cross(di).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Ke.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;fn.subVectors(n,i),pn.subVectors(r,i),Ta.subVectors(t,i);let l=fn.dot(Ta),c=pn.dot(Ta);if(l<=0&&c<=0)return e.copy(i);Aa.subVectors(t,n);let h=fn.dot(Aa),u=pn.dot(Aa);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(fn,o);Ra.subVectors(t,r);let d=fn.dot(Ra),g=pn.dot(Ra);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(pn,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ql.subVectors(r,n),a=(u-h)/(u-h+(d-g)),e.copy(n).addScaledVector(Ql,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(fn,o).addScaledVector(pn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Zt.workingColorSpace){if(t=yu(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,n),this}setStyle(t,e=ee){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ee){let i=$c[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ee){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(we(Ce.r*255,0,255))*65536+Math.round(we(Ce.g*255,0,255))*256+Math.round(we(Ce.b*255,0,255))}getHexString(t=ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);let i=Ce.r,n=Ce.g,r=Ce.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ee){Zt.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,i=Ce.g,n=Ce.b;return t!==ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Rs);let i=ma(Pi.h,Rs.h,e),n=ma(Pi.s,Rs.s,e),r=ma(Pi.l,Rs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new ut;ut.NAMES=$c;var Iu=0,Mi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Cn,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=an,this.stencilZFail=an,this.stencilZPass=an,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==an&&(i.stencilFail=this.stencilFail),this.stencilZFail!==an&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==an&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Si=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new R,Cs=new ot,me=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}};var cr=class extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var hr=class extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Du=0,Xe=new $t,Pa=new Te,mn=new R,He=new vi,Wn=new vi,be=new R,Ee=class s extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?hr:cr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(He.min,Wn.min),He.expandByPoint(be),be.addVectors(He.max,Wn.max),He.expandByPoint(be)):(He.expandByPoint(Wn.min),He.expandByPoint(Wn.max))}He.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(mn.fromBufferAttribute(t,c),be.add(mn)),n=Math.max(n,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new R,h[b]=new R;let u=new R,f=new R,d=new R,g=new ot,_=new ot,m=new ot,p=new R,y=new R;function x(b,D,N){u.fromArray(n,b*3),f.fromArray(n,D*3),d.fromArray(n,N*3),g.fromArray(o,b*2),_.fromArray(o,D*2),m.fromArray(o,N*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(J),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(J),c[b].add(p),c[D].add(p),c[N].add(p),h[b].add(y),h[D].add(y),h[N].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,D=E.length;b<D;++b){let N=E[b],J=N.start,L=N.count;for(let F=J,V=J+L;F<V;F+=3)x(i[F+0],i[F+1],i[F+2])}let C=new R,T=new R,A=new R,U=new R;function v(b){A.fromArray(r,b*3),U.copy(A);let D=c[b];C.copy(D),C.sub(A.multiplyScalar(A.dot(D))).normalize(),T.crossVectors(U,D);let J=T.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=J}for(let b=0,D=E.length;b<D;++b){let N=E[b],J=N.start,L=N.count;for(let F=J,V=J+L;F<V;F+=3)v(i[F+0]),v(i[F+1]),v(i[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new $t,Xi=new ar,Ps=new ki,ec=new R,gn=new R,_n=new R,xn=new R,La=new R,Ls=new R,Is=new ot,Ds=new ot,Us=new ot,ic=new R,nc=new R,sc=new R,Ns=new R,Fs=new R,rt=class extends Te{constructor(t=new Ee,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?Ls.addScaledVector(La,h):Ls.addScaledVector(La.sub(e),h))}e.add(Ls)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Ps.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ps,ec)===null||Xi.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(tc),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,C=x;E<C;E+=3){let T=a.getX(E),A=a.getX(E+1),U=a.getX(E+2);n=Os(this,p,t,i,c,h,u,T,A,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);n=Os(this,o,t,i,c,h,u,y,x,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,C=x;E<C;E+=3){let T=E,A=E+1,U=E+2;n=Os(this,p,t,i,c,h,u,T,A,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,E=m+2;n=Os(this,o,t,i,c,h,u,y,x,E),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Uu(s,t,e,i,n,r,o,a){let l;if(t.side===Le?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===Oi,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fs);return c<e.near||c>e.far?null:{distance:c,point:Fs.clone(),object:s}}function Os(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,gn),s.getVertexPosition(l,_n),s.getVertexPosition(c,xn);let h=Uu(s,t,e,i,gn,_n,xn,Ns);if(h){n&&(Is.fromBufferAttribute(n,a),Ds.fromBufferAttribute(n,l),Us.fromBufferAttribute(n,c),h.uv=$i.getInterpolation(Ns,gn,_n,xn,Is,Ds,Us,new ot)),r&&(Is.fromBufferAttribute(r,a),Ds.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,c),h.uv1=$i.getInterpolation(Ns,gn,_n,xn,Is,Ds,Us,new ot),h.uv2=h.uv1),o&&(ic.fromBufferAttribute(o,a),nc.fromBufferAttribute(o,l),sc.fromBufferAttribute(o,c),h.normal=$i.getInterpolation(Ns,gn,_n,xn,ic,nc,sc,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};$i.getNormal(gn,_n,xn,u.normal),h.face=u}return h}var It=class s extends Ee{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,p,y,x,E,C,T,A,U,v){let b=E/A,D=C/U,N=E/2,J=C/2,L=T/2,F=A+1,V=U+1,Y=0,X=0,W=new R;for(let j=0;j<V;j++){let tt=j*D-J;for(let ht=0;ht<F;ht++){let G=ht*b-N;W[_]=G*y,W[m]=tt*x,W[p]=L,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(ht/A),u.push(1-j/U),Y+=1}}for(let j=0;j<U;j++)for(let tt=0;tt<A;tt++){let ht=f+tt+F*j,G=f+tt+F*(j+1),q=f+(tt+1)+F*(j+1),lt=f+(tt+1)+F*j;l.push(ht,G,lt),l.push(G,q,lt),X+=6}a.addGroup(d,X,v),d+=X,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Nn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Oe(s){let t={};for(let e=0;e<s.length;e++){let i=Nn(s[e]);for(let n in i)t[n]=i[n]}return t}function Nu(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jc(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}var Fu={clone:Nn,merge:Oe},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nn(t.uniforms),this.uniformsGroups=Nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ur=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends ur{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pa*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yn=-90,vn=1,eo=class extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Pe(yn,vn,t,e);n.layers=this.layers,this.add(n);let r=new Pe(yn,vn,t,e);r.layers=this.layers,this.add(r);let o=new Pe(yn,vn,t,e);o.layers=this.layers,this.add(o);let a=new Pe(yn,vn,t,e);a.layers=this.layers,this.add(a);let l=new Pe(yn,vn,t,e);l.layers=this.layers,this.add(l);let c=new Pe(yn,vn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},dr=class extends Ze{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:In,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},io=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(jn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qi?ee:qe),this.texture=new dr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new It(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Nn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:Di});r.uniforms.tEquirect.value=e;let o=new rt(n,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Ye),new eo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Ia=new R,ku=new R,zu=new Vt,mi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ia.subVectors(i,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ia),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zu.getNormalMatrix(t),n=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new ki,Bs=new R,ns=class{constructor(t=new mi,e=new mi,i=new mi,n=new mi,r=new mi,o=new mi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],_=n[10],m=n[11],p=n[12],y=n[13],x=n[14],E=n[15];if(i[0].setComponents(l-r,f-c,m-d,E-p).normalize(),i[1].setComponents(l+r,f+c,m+d,E+p).normalize(),i[2].setComponents(l+o,f+h,m+g,E+y).normalize(),i[3].setComponents(l-o,f-h,m-g,E-y).normalize(),i[4].setComponents(l-a,f-u,m-_,E-x).normalize(),e===_i)i[5].setComponents(l+a,f+u,m+_,E+x).normalize();else if(e===er)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Bs.x=n.normal.x>0?t.max.x:t.min.x,Bs.y=n.normal.y>0?t.max.y:t.min.y,Bs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kc(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hu(s,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var en=class s extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<c;x++){let E=x*u-r;g.push(E,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let x=y+c*p,E=y+c*(p+1),C=y+1+c*(p+1),T=y+1+c*p;d.push(x,E,T),d.push(E,C,T)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ef=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Gu,alphahash_pars_fragment:Vu,alphamap_fragment:Wu,alphamap_pars_fragment:Xu,alphatest_fragment:Yu,alphatest_pars_fragment:qu,aomap_fragment:Zu,aomap_pars_fragment:Ju,batching_pars_vertex:$u,batching_vertex:ju,begin_vertex:Ku,beginnormal_vertex:Qu,bsdfs:td,iridescence_fragment:ed,bumpmap_pars_fragment:id,clipping_planes_fragment:nd,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:ad,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:hd,common:ud,cube_uv_reflection_fragment:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:_d,colorspace_fragment:xd,colorspace_pars_fragment:yd,envmap_fragment:vd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Nd,envmap_vertex:Ed,fog_vertex:wd,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:Rd,gradientmap_pars_fragment:Cd,lightmap_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:kd,lights_physical_fragment:zd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:Vd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Zd,map_fragment:Jd,map_pars_fragment:$d,map_particle_fragment:jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:tf,morphcolor_vertex:ef,morphnormal_vertex:nf,morphtarget_pars_vertex:sf,morphtarget_vertex:rf,normal_fragment_begin:af,normal_fragment_maps:of,normal_pars_fragment:lf,normal_pars_vertex:cf,normal_vertex:hf,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,opaque_fragment:gf,packing:_f,premultiplied_alpha_fragment:xf,project_vertex:yf,dithering_fragment:vf,dithering_pars_fragment:Mf,roughnessmap_fragment:Sf,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:wf,shadowmap_vertex:Tf,shadowmask_pars_fragment:Af,skinbase_vertex:Rf,skinning_pars_vertex:Cf,skinning_vertex:Pf,skinnormal_vertex:Lf,specularmap_fragment:If,specularmap_pars_fragment:Df,tonemapping_fragment:Uf,tonemapping_pars_fragment:Nf,transmission_fragment:Ff,transmission_pars_fragment:Of,uv_pars_fragment:Bf,uv_pars_vertex:kf,uv_vertex:zf,worldpos_vertex:Hf,background_vert:Gf,background_frag:Vf,backgroundCube_vert:Wf,backgroundCube_frag:Xf,cube_vert:Yf,cube_frag:qf,depth_vert:Zf,depth_frag:Jf,distanceRGBA_vert:$f,distanceRGBA_frag:jf,equirect_vert:Kf,equirect_frag:Qf,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:ip,meshbasic_frag:np,meshlambert_vert:sp,meshlambert_frag:rp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:dp,meshphysical_frag:fp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:vp,sprite_frag:Mp},it={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ri={basic:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Oe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Oe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Oe([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Oe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Oe([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Oe([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Oe([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Oe([it.lights,it.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ri.physical={uniforms:Oe([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var ks={r:0,b:0,g:0};function Sp(s,t,e,i,n,r,o){let a=new ut(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ur)?(h===void 0&&(h=new rt(new It(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Nn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==te,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new rt(new en(2,2),new Ge({name:"BackgroundMaterial",uniforms:Nn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ks,jc(s)),i.buffers.color.setClear(ks.r,ks.g,ks.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function bp(s,t,e,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,F,V,Y,X){let W=!1;if(o){let j=_(Y,V,F);c!==j&&(c=j,d(c.object)),W=p(L,Y,V,X),W&&y(L,Y,V,X)}else{let j=F.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=j,W=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,U(L,F,V,Y),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return i.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,F,V){let Y=V.wireframe===!0,X=a[L.id];X===void 0&&(X={},a[L.id]=X);let W=X[F.id];W===void 0&&(W={},X[F.id]=W);let j=W[Y];return j===void 0&&(j=m(f()),W[Y]=j),j}function m(L){let F=[],V=[],Y=[];for(let X=0;X<n;X++)F[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function p(L,F,V,Y){let X=c.attributes,W=F.attributes,j=0,tt=V.getAttributes();for(let ht in tt)if(tt[ht].location>=0){let q=X[ht],lt=W[ht];if(lt===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),q===void 0||q.attribute!==lt||lt&&q.data!==lt.data)return!0;j++}return c.attributesNum!==j||c.index!==Y}function y(L,F,V,Y){let X={},W=F.attributes,j=0,tt=V.getAttributes();for(let ht in tt)if(tt[ht].location>=0){let q=W[ht];q===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let lt={};lt.attribute=q,q&&q.data&&(lt.data=q.data),X[ht]=lt,j++}c.attributes=X,c.attributesNum=j,c.index=Y}function x(){let L=c.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function E(L){C(L,0)}function C(L,F){let V=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,Y[L]===0&&(s.enableVertexAttribArray(L),Y[L]=1),X[L]!==F&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),X[L]=F)}function T(){let L=c.newAttributes,F=c.enabledAttributes;for(let V=0,Y=F.length;V<Y;V++)F[V]!==L[V]&&(s.disableVertexAttribArray(V),F[V]=0)}function A(L,F,V,Y,X,W,j){j===!0?s.vertexAttribIPointer(L,F,V,X,W):s.vertexAttribPointer(L,F,V,Y,X,W)}function U(L,F,V,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let X=Y.attributes,W=V.getAttributes(),j=F.defaultAttributeValues;for(let tt in W){let ht=W[tt];if(ht.location>=0){let G=X[tt];if(G===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let q=G.normalized,lt=G.itemSize,xt=e.get(G);if(xt===void 0)continue;let _t=xt.buffer,Dt=xt.type,Nt=xt.bytesPerElement,Tt=i.isWebGL2===!0&&(Dt===s.INT||Dt===s.UNSIGNED_INT||G.gpuType===kc);if(G.isInterleavedBufferAttribute){let Xt=G.data,O=Xt.stride,De=G.offset;if(Xt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<ht.locationSize;Mt++)C(ht.location+Mt,Xt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let Mt=0;Mt<ht.locationSize;Mt++)E(ht.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Mt=0;Mt<ht.locationSize;Mt++)A(ht.location+Mt,lt/ht.locationSize,Dt,q,O*Nt,(De+lt/ht.locationSize*Mt)*Nt,Tt)}else{if(G.isInstancedBufferAttribute){for(let Xt=0;Xt<ht.locationSize;Xt++)C(ht.location+Xt,G.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Xt=0;Xt<ht.locationSize;Xt++)E(ht.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Xt=0;Xt<ht.locationSize;Xt++)A(ht.location+Xt,lt/ht.locationSize,Dt,q,lt*Nt,lt/ht.locationSize*Xt*Nt,Tt)}}else if(j!==void 0){let q=j[tt];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(ht.location,q);break;case 3:s.vertexAttrib3fv(ht.location,q);break;case 4:s.vertexAttrib4fv(ht.location,q);break;default:s.vertexAttrib1fv(ht.location,q)}}}}T()}function v(){N();for(let L in a){let F=a[L];for(let V in F){let Y=F[V];for(let X in Y)g(Y[X].object),delete Y[X];delete F[V]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;let F=a[L.id];for(let V in F){let Y=F[V];for(let X in Y)g(Y[X].object),delete Y[X];delete F[V]}delete a[L.id]}function D(L){for(let F in a){let V=a[F];if(V[L.id]===void 0)continue;let Y=V[L.id];for(let X in Y)g(Y[X].object),delete Y[X];delete V[L.id]}}function N(){J(),h=!0,c!==l&&(c=l,d(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:J,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:E,disableUnusedAttributes:T}}function Ep(s,t,e,i){let n=i.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(n)d=s,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function wp(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||t.has("OES_texture_float"),C=x&&E,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:T}}function Tp(s){let t=this,e=null,i=0,n=!1,r=!1,o=new mi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,x=y*4,E=p.clippingState||null;l.value=E,E=h(g,f,x,d);for(let C=0;C!==x;++C)E[C]=e[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==_;++x,E+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ap(s){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=In:a===qa&&(o.mapping=Dn),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ya||a===qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new io(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var fr=class extends ur{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},An=4,rc=[.125,.215,.35,.446,.526,.582],Ji=20,Da=new fr,ac=new ut,Ua=null,Na=0,Fa=0,qi=(1+Math.sqrt(5))/2,Mn=1/qi,oc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qi,Mn),new R(0,qi,-Mn),new R(Mn,0,qi),new R(-Mn,0,qi),new R(qi,Mn,0),new R(-qi,Mn,0)],pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===In||t.mapping===Dn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:is,format:ei,colorSpace:xi,depthBuffer:!1},n=lc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(r)),this._blurMaterial=Cp(r,t,e)}return n}_compileMaterial(t){let e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,n){let a=new Pe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ac),h.toneMapping=Ui,h.autoClear=!1;let d=new Si({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new rt(new It,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(ac),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;zs(n,y*x,p>2?x:0,x,x),h.setRenderTarget(n),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===In||t.mapping===Dn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Da)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=oc[(n-1)%oc.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],y=0;for(let A=0;A<Ji;++A){let U=A/_,v=Math.exp(-U*U/2);p.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let E=this._sizeLods[n],C=3*E*(n>x-An?n-x+An:0),T=4*(this._cubeSize-E);zs(e,C,T,3*E,2*E),l.setRenderTarget(e),l.render(u,Da)}};function Rp(s){let t=[],e=[],i=[],n=s,r=s-An+1+rc.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-An?l=rc[o-s+An-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,U=T>2?0:-1,v=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(v,_*g*T),x.set(f,m*g*T);let b=[T,T,T,T,T,T];E.set(b,p*g*T)}let C=new Ee;C.setAttribute("position",new me(y,_)),C.setAttribute("uv",new me(x,m)),C.setAttribute("faceIndex",new me(E,p)),t.push(C),n>An&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lc(s,t,e){let i=new yi(s,t,e);return i.texture.mapping=Ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Cp(s,t,e){let i=new Float32Array(Ji),n=new R(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cc(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hc(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ya||l===qa,h=l===In||l===Dn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new pr(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new pr(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Lp(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ip(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,E=y.length;x<E;x+=3){let C=y[x+0],T=y[x+1],A=y[x+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){let C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;let m=new(Jc(f)?hr:cr)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dp(s,t,e,i){let n=i.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(n)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Up(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Np(s,t){return s[0]-t[0]}function Fp(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Op(s,t,e){let i={},n=new Float32Array(8),r=new WeakMap,o=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),E===!0&&(U=3);let v=h.attributes.position.count*U,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let D=new Float32Array(v*b*4*g),N=new rr(D,v,b,g);N.type=Ii,N.needsUpdate=!0;let J=U*4;for(let F=0;F<g;F++){let V=C[F],Y=T[F],X=A[F],W=v*b*4*F;for(let j=0;j<V.count;j++){let tt=j*J;y===!0&&(o.fromBufferAttribute(V,j),D[W+tt+0]=o.x,D[W+tt+1]=o.y,D[W+tt+2]=o.z,D[W+tt+3]=0),x===!0&&(o.fromBufferAttribute(Y,j),D[W+tt+4]=o.x,D[W+tt+5]=o.y,D[W+tt+6]=o.z,D[W+tt+7]=0),E===!0&&(o.fromBufferAttribute(X,j),D[W+tt+8]=o.x,D[W+tt+9]=o.y,D[W+tt+10]=o.z,D[W+tt+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:N,size:new ot(v,b)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<d;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort(Fp);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Np);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let E=a[x],C=E[0],T=E[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),n[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),n[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function Bp(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var mr=class extends Ze{constructor(t,e,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:Ki,h!==Ki&&h!==Un)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ki&&(i=Li),i===void 0&&h===Un&&(i=ji),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qc=new Ze,th=new mr(1,1);th.compareFunction=Zc;var eh=new rr,ih=new to,nh=new dr,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function kn(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=uc[n];if(r===void 0&&(r=new Float32Array(n),uc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Fr(s,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function kp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Hp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Gp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Vp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;mc.set(i),s.uniformMatrix2fv(this.addr,!1,mc),ye(e,i)}}function Wp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;pc.set(i),s.uniformMatrix3fv(this.addr,!1,pc),ye(e,i)}}function Xp(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,i))return;fc.set(i),s.uniformMatrix4fv(this.addr,!1,fc),ye(e,i)}}function Yp(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Zp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Jp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function $p(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Kp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Qp(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function tm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?th:Qc;e.setTexture2D(t||r,n)}function em(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ih,n)}function im(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||nh,n)}function nm(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||eh,n)}function sm(s){switch(s){case 5126:return kp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return Yp;case 35667:case 35671:return qp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return $p;case 36294:return jp;case 36295:return Kp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(s,t){s.uniform1fv(this.addr,t)}function am(s,t){let e=kn(t,this.size,2);s.uniform2fv(this.addr,e)}function om(s,t){let e=kn(t,this.size,3);s.uniform3fv(this.addr,e)}function lm(s,t){let e=kn(t,this.size,4);s.uniform4fv(this.addr,e)}function cm(s,t){let e=kn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hm(s,t){let e=kn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function um(s,t){let e=kn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dm(s,t){s.uniform1iv(this.addr,t)}function fm(s,t){s.uniform2iv(this.addr,t)}function pm(s,t){s.uniform3iv(this.addr,t)}function mm(s,t){s.uniform4iv(this.addr,t)}function gm(s,t){s.uniform1uiv(this.addr,t)}function _m(s,t){s.uniform2uiv(this.addr,t)}function xm(s,t){s.uniform3uiv(this.addr,t)}function ym(s,t){s.uniform4uiv(this.addr,t)}function vm(s,t,e){let i=this.cache,n=t.length,r=Fr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Qc,r[o])}function Mm(s,t,e){let i=this.cache,n=t.length,r=Fr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||ih,r[o])}function Sm(s,t,e){let i=this.cache,n=t.length,r=Fr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||nh,r[o])}function bm(s,t,e){let i=this.cache,n=t.length,r=Fr(e,n);xe(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||eh,r[o])}function Em(s){switch(s){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}var no=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sm(e.type)}},so=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Em(e.type)}},ro=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function gc(s,t){s.seq.push(t),s.map[t.id]=t}function wm(s,t,e){let i=s.name,n=i.length;for(Oa.lastIndex=0;;){let r=Oa.exec(i),o=Oa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){gc(e,c===void 0?new no(a,s,t):new so(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ro(a),gc(e,u)),e=u}}}var Ln=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);wm(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function _c(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Tm=37297,Am=0;function Rm(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Cm(s){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s),i;switch(t===e?i="":t===tr&&e===Qs?i="LinearDisplayP3ToLinearSRGB":t===Qs&&e===tr&&(i="LinearSRGBToLinearDisplayP3"),s){case xi:case Nr:return[i,"LinearTransferOETF"];case ee:case zo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function xc(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Rm(s.getShaderSource(t),o)}else return n}function Pm(s,t){let e=Cm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lm(s,t){let e;switch(t){case Jh:e="Linear";break;case $h:e="Reinhard";break;case jh:e="OptimizedCineon";break;case Bo:e="ACESFilmic";break;case Qh:e="AgX";break;case Kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Im(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rn).join(`
`)}function Dm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rn).join(`
`)}function Um(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Nm(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Rn(s){return s!==""}function yc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace(Fm,Bm)}var Om=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bm(s,t){let e=Ot[t];if(e===void 0){let i=Om.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}var km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(s){return s.replace(km,zm)}function zm(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Sc(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case In:case Dn:t="ENVMAP_TYPE_CUBE";break;case Ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Dn&&(t="ENVMAP_MODE_REFRACTION"),t}function Wm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function Xm(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ym(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hm(e),c=Gm(e),h=Vm(e),u=Wm(e),f=Xm(e),d=e.isWebGL2?"":Im(e),g=Dm(e),_=Um(r),m=n.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rn).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rn).join(`
`),y.length>0&&(y+=`
`)):(p=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),y=[d,Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Ui?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rn).join(`
`)),o=ao(o),o=yc(o,e),o=vc(o,e),a=ao(a),a=yc(a,e),a=vc(a,e),o=Mc(o),a=Mc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let E=x+p+o,C=x+y+a,T=_c(n,n.VERTEX_SHADER,E),A=_c(n,n.FRAGMENT_SHADER,C);n.attachShader(m,T),n.attachShader(m,A),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function U(N){if(s.debug.checkShaderErrors){let J=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(T).trim(),F=n.getShaderInfoLog(A).trim(),V=!0,Y=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,T,A);else{let X=xc(n,T,"vertex"),W=xc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+X+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||F==="")&&(Y=!1);Y&&(N.diagnostics={runnable:V,programLog:J,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:y}})}n.deleteShader(T),n.deleteShader(A),v=new Ln(n,m),b=Nm(n,m)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(m,Tm)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var qm=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new lo(t),e.set(t,i)),i}},lo=class{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}};function Zm(s,t,e,i,n,r,o){let a=new lr,l=new oo,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,D,N,J){let L=N.fog,F=J.geometry,V=v.isMeshStandardMaterial?N.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),X=Y&&Y.mapping===Ur?Y.image.height:null,W=g[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=j!==void 0?j.length:0,ht=0;F.morphAttributes.position!==void 0&&(ht=1),F.morphAttributes.normal!==void 0&&(ht=2),F.morphAttributes.color!==void 0&&(ht=3);let G,q,lt,xt;if(W){let Ue=ri[W];G=Ue.vertexShader,q=Ue.fragmentShader}else G=v.vertexShader,q=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),xt=l.getFragmentShaderID(v);let _t=s.getRenderTarget(),Dt=J.isInstancedMesh===!0,Nt=J.isBatchedMesh===!0,Tt=!!v.map,Xt=!!v.matcap,O=!!Y,De=!!v.aoMap,Mt=!!v.lightMap,Pt=!!v.bumpMap,pt=!!v.normalMap,ae=!!v.displacementMap,Bt=!!v.emissiveMap,w=!!v.metalnessMap,M=!!v.roughnessMap,k=v.anisotropy>0,K=v.clearcoat>0,$=v.iridescence>0,Q=v.sheen>0,mt=v.transmission>0,at=k&&!!v.anisotropyMap,dt=K&&!!v.clearcoatMap,Et=K&&!!v.clearcoatNormalMap,kt=K&&!!v.clearcoatRoughnessMap,Z=$&&!!v.iridescenceMap,qt=$&&!!v.iridescenceThicknessMap,Wt=Q&&!!v.sheenColorMap,Ct=Q&&!!v.sheenRoughnessMap,yt=!!v.specularMap,ft=!!v.specularColorMap,Ft=!!v.specularIntensityMap,Yt=mt&&!!v.transmissionMap,le=mt&&!!v.thicknessMap,Ht=!!v.gradientMap,et=!!v.alphaMap,P=v.alphaTest>0,nt=!!v.alphaHash,st=!!v.extensions,At=!!F.attributes.uv1,St=!!F.attributes.uv2,jt=!!F.attributes.uv3,Kt=Ui;return v.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:q,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Nt,instancing:Dt,instancingColor:Dt&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:xi,map:Tt,matcap:Xt,envMap:O,envMapMode:O&&Y.mapping,envMapCubeUVHeight:X,aoMap:De,lightMap:Mt,bumpMap:Pt,normalMap:pt,displacementMap:f&&ae,emissiveMap:Bt,normalMapObjectSpace:pt&&v.normalMapType===uu,normalMapTangentSpace:pt&&v.normalMapType===qc,metalnessMap:w,roughnessMap:M,anisotropy:k,anisotropyMap:at,clearcoat:K,clearcoatMap:dt,clearcoatNormalMap:Et,clearcoatRoughnessMap:kt,iridescence:$,iridescenceMap:Z,iridescenceThicknessMap:qt,sheen:Q,sheenColorMap:Wt,sheenRoughnessMap:Ct,specularMap:yt,specularColorMap:ft,specularIntensityMap:Ft,transmission:mt,transmissionMap:Yt,thicknessMap:le,gradientMap:Ht,opaque:v.transparent===!1&&v.blending===Cn,alphaMap:et,alphaTest:P,alphaHash:nt,combine:v.combine,mapUv:Tt&&_(v.map.channel),aoMapUv:De&&_(v.aoMap.channel),lightMapUv:Mt&&_(v.lightMap.channel),bumpMapUv:Pt&&_(v.bumpMap.channel),normalMapUv:pt&&_(v.normalMap.channel),displacementMapUv:ae&&_(v.displacementMap.channel),emissiveMapUv:Bt&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:at&&_(v.anisotropyMap.channel),clearcoatMapUv:dt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(v.sheenRoughnessMap.channel),specularMapUv:yt&&_(v.specularMap.channel),specularColorMapUv:ft&&_(v.specularColorMap.channel),specularIntensityMapUv:Ft&&_(v.specularIntensityMap.channel),transmissionMapUv:Yt&&_(v.transmissionMap.channel),thicknessMapUv:le&&_(v.thicknessMap.channel),alphaMapUv:et&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pt||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:St,vertexUv3s:jt,pointsUvs:J.isPoints===!0&&!!F.attributes.uv&&(Tt||et),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===Le,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:st&&v.extensions.derivatives===!0,extensionFragDepth:st&&v.extensions.fragDepth===!0,extensionDrawBuffers:st&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(b,v),x(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){let b=g[v.type],D;if(b){let N=ri[b];D=Fu.clone(N.uniforms)}else D=v.uniforms;return D}function C(v,b){let D;for(let N=0,J=c.length;N<J;N++){let L=c[N];if(L.cacheKey===b){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Ym(s,b,v,r),c.push(D)),D}function T(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:U}}function Jm(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function $m(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function bc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ec(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||$m),i.length>1&&i.sort(f||bc),n.length>1&&n.sort(f||bc)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function jm(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Ec,s.set(i,[o])):n>=r.length?(o=new Ec,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Km(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ut};break;case"SpotLight":e={position:new R,direction:new R,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Qm(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var tg=0;function eg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ig(s,t){let e=new Km,i=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);let r=new R,o=new $t,a=new $t;function l(h,u){let f=0,d=0,g=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,E=0,C=0,T=0,A=0,U=0,v=0;h.sort(eg);let b=u===!0?Math.PI:1;for(let N=0,J=h.length;N<J;N++){let L=h[N],F=L.color,V=L.intensity,Y=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*V*b,d+=F.g*V*b,g+=F.b*V*b;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],V);v++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){let j=L.shadow,tt=i.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[_]=tt,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=L.shadow.matrix,E++}n.directional[_]=W,_++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(V*b),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[p]=W;let j=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[p]=j.matrix,L.castShadow){let tt=i.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[p]=tt,n.spotShadowMap[p]=X,T++}p++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=W,y++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*b),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,tt=i.get(L);tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=L.shadow.matrix,C++}n.point[m]=W,m++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(V*b),W.groundColor.copy(L.groundColor).multiplyScalar(V*b),n.hemi[x]=W,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;let D=n.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==E||D.numPointShadows!==C||D.numSpotShadows!==T||D.numSpotMaps!==A||D.numLightProbes!==v)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+A-U,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=v,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=E,D.numPointShadows=C,D.numSpotShadows=T,D.numSpotMaps=A,D.numLightProbes=v,n.version=tg++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let E=h[y];if(E.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(E.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let C=n.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function wc(s,t){let e=new ig(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ng(s,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new wc(s,t),e.set(r,[l])):o>=a.length?(l=new wc(s,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var co=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ho=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(s,t,e){let i=new ns,n=new ot,r=new ot,o=new se,a=new co({depthPacking:hu}),l=new ho,c={},h=e.maxTextureSize,u={[Oi]:Le,[Le]:Oi,[Qe]:Qe},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(T,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let J=p!==pi&&this.type===pi,L=p===pi&&this.type!==pi;for(let F=0,V=T.length;F<V;F++){let Y=T[F],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let W=X.getFrameExtents();if(n.multiply(W),r.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/W.x),n.x=r.x*W.x,X.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/W.y),n.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||J===!0||L===!0){let tt=this.type!==pi?{minFilter:Be,magFilter:Be}:{};X.map!==null&&X.map.dispose(),X.map=new yi(n.x,n.y,tt),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let j=X.getViewportCount();for(let tt=0;tt<j;tt++){let ht=X.getViewport(tt);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(o),X.updateMatrices(Y,tt),i=X.getFrustum(),E(A,U,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&y(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,D)};function y(T,A){let U=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,U,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,U,d,_,null)}function x(T,A,U,v){let b=null,D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=U.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=b.uuid,J=A.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let F=L[J];F===void 0&&(F=b.clone(),L[J]=F,A.addEventListener("dispose",C)),b=F}if(b.visible=A.visible,b.wireframe=A.wireframe,v===pi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=s.properties.get(b);N.light=U}return b}function E(T,A,U,v,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===pi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let J=t.update(T),L=T.material;if(Array.isArray(L)){let F=J.groups;for(let V=0,Y=F.length;V<Y;V++){let X=F[V],W=L[X.materialIndex];if(W&&W.visible){let j=x(T,W,v,b);T.onBeforeShadow(s,T,A,U,J,j,X),s.renderBufferDirect(U,null,J,j,T,X),T.onAfterShadow(s,T,A,U,J,j,X)}}}else if(L.visible){let F=x(T,L,v,b);T.onBeforeShadow(s,T,A,U,J,F,null),s.renderBufferDirect(U,null,J,F,T,null),T.onAfterShadow(s,T,A,U,J,F,null)}}let N=T.children;for(let J=0,L=N.length;J<L;J++)E(N[J],A,U,v,b)}function C(T){T.target.removeEventListener("dispose",C);for(let U in c){let v=c[U],b=T.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function og(s,t,e){let i=e.isWebGL2;function n(){let P=!1,nt=new se,st=null,At=new se(0,0,0,0);return{setMask:function(St){st!==St&&!P&&(s.colorMask(St,St,St,St),st=St)},setLocked:function(St){P=St},setClear:function(St,jt,Kt,Me,Ue){Ue===!0&&(St*=Me,jt*=Me,Kt*=Me),nt.set(St,jt,Kt,Me),At.equals(nt)===!1&&(s.clearColor(St,jt,Kt,Me),At.copy(nt))},reset:function(){P=!1,st=null,At.set(-1,0,0,0)}}}function r(){let P=!1,nt=null,st=null,At=null;return{setTest:function(St){St?Nt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(St){nt!==St&&!P&&(s.depthMask(St),nt=St)},setFunc:function(St){if(st!==St){switch(St){case zh:s.depthFunc(s.NEVER);break;case Hh:s.depthFunc(s.ALWAYS);break;case Gh:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Vh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=St}},setLocked:function(St){P=St},setClear:function(St){At!==St&&(s.clearDepth(St),At=St)},reset:function(){P=!1,nt=null,st=null,At=null}}}function o(){let P=!1,nt=null,st=null,At=null,St=null,jt=null,Kt=null,Me=null,Ue=null;return{setTest:function(Qt){P||(Qt?Nt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!P&&(s.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,Ne,si){(st!==Qt||At!==Ne||St!==si)&&(s.stencilFunc(Qt,Ne,si),st=Qt,At=Ne,St=si)},setOp:function(Qt,Ne,si){(jt!==Qt||Kt!==Ne||Me!==si)&&(s.stencilOp(Qt,Ne,si),jt=Qt,Kt=Ne,Me=si)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Ue!==Qt&&(s.clearStencil(Qt),Ue=Qt)},reset:function(){P=!1,nt=null,st=null,At=null,St=null,jt=null,Kt=null,Me=null,Ue=null}}}let a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,E=null,C=null,T=null,A=null,U=null,v=new ut(0,0,0),b=0,D=!1,N=null,J=null,L=null,F=null,V=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=W>=2);let tt=null,ht={},G=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),lt=new se().fromArray(G),xt=new se().fromArray(q);function _t(P,nt,st,At){let St=new Uint8Array(4),jt=s.createTexture();s.bindTexture(P,jt),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<st;Kt++)i&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(nt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(nt+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return jt}let Dt={};Dt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Dt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Dt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(s.DEPTH_TEST),l.setFunc(Js),Bt(!1),w(rl),Nt(s.CULL_FACE),pt(Di);function Nt(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Tt(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Xt(P,nt){return d[P]!==nt?(s.bindFramebuffer(P,nt),d[P]=nt,i&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=nt),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=nt)),!0):!1}function O(P,nt){let st=_,At=!1;if(P)if(st=g.get(nt),st===void 0&&(st=[],g.set(nt,st)),P.isWebGLMultipleRenderTargets){let St=P.texture;if(st.length!==St.length||st[0]!==s.COLOR_ATTACHMENT0){for(let jt=0,Kt=St.length;jt<Kt;jt++)st[jt]=s.COLOR_ATTACHMENT0+jt;st.length=St.length,At=!0}}else st[0]!==s.COLOR_ATTACHMENT0&&(st[0]=s.COLOR_ATTACHMENT0,At=!0);else st[0]!==s.BACK&&(st[0]=s.BACK,At=!0);At&&(e.isWebGL2?s.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function De(P){return m!==P?(s.useProgram(P),m=P,!0):!1}let Mt={[Zi]:s.FUNC_ADD,[wh]:s.FUNC_SUBTRACT,[Th]:s.FUNC_REVERSE_SUBTRACT};if(i)Mt[cl]=s.MIN,Mt[hl]=s.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Mt[cl]=P.MIN_EXT,Mt[hl]=P.MAX_EXT)}let Pt={[Ah]:s.ZERO,[Rh]:s.ONE,[Ch]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[Nh]:s.SRC_ALPHA_SATURATE,[Dh]:s.DST_COLOR,[Lh]:s.DST_ALPHA,[Ph]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[Uh]:s.ONE_MINUS_DST_COLOR,[Ih]:s.ONE_MINUS_DST_ALPHA,[Fh]:s.CONSTANT_COLOR,[Oh]:s.ONE_MINUS_CONSTANT_COLOR,[Bh]:s.CONSTANT_ALPHA,[kh]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(P,nt,st,At,St,jt,Kt,Me,Ue,Qt){if(P===Di){p===!0&&(Tt(s.BLEND),p=!1);return}if(p===!1&&(Nt(s.BLEND),p=!0),P!==Eh){if(P!==y||Qt!==D){if((x!==Zi||T!==Zi)&&(s.blendEquation(s.FUNC_ADD),x=Zi,T=Zi),Qt)switch(P){case Cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.ONE,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,C=null,A=null,U=null,v.set(0,0,0),b=0,y=P,D=Qt}return}St=St||nt,jt=jt||st,Kt=Kt||At,(nt!==x||St!==T)&&(s.blendEquationSeparate(Mt[nt],Mt[St]),x=nt,T=St),(st!==E||At!==C||jt!==A||Kt!==U)&&(s.blendFuncSeparate(Pt[st],Pt[At],Pt[jt],Pt[Kt]),E=st,C=At,A=jt,U=Kt),(Me.equals(v)===!1||Ue!==b)&&(s.blendColor(Me.r,Me.g,Me.b,Ue),v.copy(Me),b=Ue),y=P,D=!1}function ae(P,nt){P.side===Qe?Tt(s.CULL_FACE):Nt(s.CULL_FACE);let st=P.side===Le;nt&&(st=!st),Bt(st),P.blending===Cn&&P.transparent===!1?pt(Di):pt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let At=P.stencilWrite;c.setTest(At),At&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Nt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(P){N!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),N=P)}function w(P){P!==Sh?(Nt(s.CULL_FACE),P!==J&&(P===rl?s.cullFace(s.BACK):P===bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),J=P}function M(P){P!==L&&(X&&s.lineWidth(P),L=P)}function k(P,nt,st){P?(Nt(s.POLYGON_OFFSET_FILL),(F!==nt||V!==st)&&(s.polygonOffset(nt,st),F=nt,V=st)):Tt(s.POLYGON_OFFSET_FILL)}function K(P){P?Nt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function $(P){P===void 0&&(P=s.TEXTURE0+Y-1),tt!==P&&(s.activeTexture(P),tt=P)}function Q(P,nt,st){st===void 0&&(tt===null?st=s.TEXTURE0+Y-1:st=tt);let At=ht[st];At===void 0&&(At={type:void 0,texture:void 0},ht[st]=At),(At.type!==P||At.texture!==nt)&&(tt!==st&&(s.activeTexture(st),tt=st),s.bindTexture(P,nt||Dt[P]),At.type=P,At.texture=nt)}function mt(){let P=ht[tt];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(P){lt.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function Yt(P){xt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function le(P,nt){let st=u.get(nt);st===void 0&&(st=new WeakMap,u.set(nt,st));let At=st.get(P);At===void 0&&(At=s.getUniformBlockIndex(nt,P.name),st.set(P,At))}function Ht(P,nt){let At=u.get(nt).get(P);h.get(nt)!==At&&(s.uniformBlockBinding(nt,At,P.__bindingPointIndex),h.set(nt,At))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},tt=null,ht={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,E=null,C=null,T=null,A=null,U=null,v=new ut(0,0,0),b=0,D=!1,N=null,J=null,L=null,F=null,V=null,lt.set(0,0,s.canvas.width,s.canvas.height),xt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:Tt,bindFramebuffer:Xt,drawBuffers:O,useProgram:De,setBlending:pt,setMaterial:ae,setFlipSided:Bt,setCullFace:w,setLineWidth:M,setPolygonOffset:k,setScissorTest:K,activeTexture:$,bindTexture:Q,unbindTexture:mt,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:yt,texImage3D:ft,updateUBOMapping:le,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:Ct,texSubImage2D:Et,texSubImage3D:kt,compressedTexSubImage2D:Z,compressedTexSubImage3D:qt,scissor:Ft,viewport:Yt,reset:et}}function lg(s,t,e,i,n,r,o){let a=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):ir("canvas")}function _(w,M,k,K){let $=1;if((w.width>K||w.height>K)&&($=K/Math.max(w.width,w.height)),$<1||M===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let Q=M?Ka:Math.floor,mt=Q($*w.width),at=Q($*w.height);u===void 0&&(u=g(mt,at));let dt=k?g(mt,at):u;return dt.width=mt,dt.height=at,dt.getContext("2d").drawImage(w,0,0,mt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+mt+"x"+at+")."),dt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Gl(w.width)&&Gl(w.height)}function p(w){return a?!1:w.wrapS!==ti||w.wrapT!==ti||w.minFilter!==Be&&w.minFilter!==Ye}function y(w,M){return w.generateMipmaps&&M&&w.minFilter!==Be&&w.minFilter!==Ye}function x(w){s.generateMipmap(w)}function E(w,M,k,K,$=!1){if(a===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RGBA){let mt=$?Ks:Zt.getTransfer(K);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=mt===te?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function C(w,M,k){return y(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Be&&w.minFilter!==Ye?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){return w===Be||w===ul||w===oa?s.NEAREST:s.LINEAR}function A(w){let M=w.target;M.removeEventListener("dispose",A),v(M),M.isVideoTexture&&h.delete(M)}function U(w){let M=w.target;M.removeEventListener("dispose",U),D(M)}function v(w){let M=i.get(w);if(M.__webglInit===void 0)return;let k=w.source,K=f.get(k);if(K){let $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(w),Object.keys(K).length===0&&f.delete(k)}i.remove(w)}function b(w){let M=i.get(w);s.deleteTexture(M.__webglTexture);let k=w.source,K=f.get(k);delete K[M.__cacheKey],o.memory.textures--}function D(w){let M=w.texture,k=i.get(w),K=i.get(M);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(k.__webglFramebuffer[$]))for(let Q=0;Q<k.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(k.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(k.__webglFramebuffer[$]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[$])}else{if(Array.isArray(k.__webglFramebuffer))for(let $=0;$<k.__webglFramebuffer.length;$++)s.deleteFramebuffer(k.__webglFramebuffer[$]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let $=0;$<k.__webglColorRenderbuffer.length;$++)k.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,Q=M.length;$<Q;$++){let mt=i.get(M[$]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(M[$])}i.remove(M),i.remove(w)}let N=0;function J(){N=0}function L(){let w=N;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),N+=1,w}function F(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function V(w,M){let k=i.get(w);if(w.isVideoTexture&&ae(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,w,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function Y(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){lt(k,w,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function X(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){lt(k,w,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function W(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){xt(k,w,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let j={[tn]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},tt={[Be]:s.NEAREST,[ul]:s.NEAREST_MIPMAP_NEAREST,[oa]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[tu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},ht={[du]:s.NEVER,[xu]:s.ALWAYS,[fu]:s.LESS,[Zc]:s.LEQUAL,[pu]:s.EQUAL,[_u]:s.GEQUAL,[mu]:s.GREATER,[gu]:s.NOTEQUAL};function G(w,M,k){if(k?(s.texParameteri(w,s.TEXTURE_WRAP_S,j[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,j[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,j[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,tt[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,tt[M.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==ti||M.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,T(M.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Be&&M.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Be||M.minFilter!==oa&&M.minFilter!==es||M.type===Ii&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===is&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(s.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function q(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));let K=M.source,$=f.get(K);$===void 0&&($={},f.set(K,$));let Q=F(M);if(Q!==w.__cacheKey){$[Q]===void 0&&($[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[Q].usedTimes++;let mt=$[w.__cacheKey];mt!==void 0&&($[w.__cacheKey].usedTimes--,mt.usedTimes===0&&b(M)),w.__cacheKey=Q,w.__webglTexture=$[Q].texture}return k}function lt(w,M,k){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);let $=q(w,M),Q=M.source;e.bindTexture(K,w.__webglTexture,s.TEXTURE0+k);let mt=i.get(Q);if(Q.version!==mt.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let at=Zt.getPrimaries(Zt.workingColorSpace),dt=M.colorSpace===qe?null:Zt.getPrimaries(M.colorSpace),Et=M.colorSpace===qe||at===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let kt=p(M)&&m(M.image)===!1,Z=_(M.image,kt,!1,n.maxTextureSize);Z=Bt(M,Z);let qt=m(Z)||a,Wt=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type),yt=E(M.internalFormat,Wt,Ct,M.colorSpace,M.isVideoTexture);G(K,M,qt);let ft,Ft=M.mipmaps,Yt=a&&M.isVideoTexture!==!0&&yt!==Xc,le=mt.__version===void 0||$===!0,Ht=C(M,Z,qt);if(M.isDepthTexture)yt=s.DEPTH_COMPONENT,a?M.type===Ii?yt=s.DEPTH_COMPONENT32F:M.type===Li?yt=s.DEPTH_COMPONENT24:M.type===ji?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:M.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ki&&yt===s.DEPTH_COMPONENT&&M.type!==ko&&M.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Li,Ct=r.convert(M.type)),M.format===Un&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ji,Ct=r.convert(M.type))),le&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,yt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,yt,Z.width,Z.height,0,Wt,Ct,null));else if(M.isDataTexture)if(Ft.length>0&&qt){Yt&&le&&e.texStorage2D(s.TEXTURE_2D,Ht,yt,Ft[0].width,Ft[0].height);for(let et=0,P=Ft.length;et<P;et++)ft=Ft[et],Yt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ft.width,ft.height,Wt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,et,yt,ft.width,ft.height,0,Wt,Ct,ft.data);M.generateMipmaps=!1}else Yt?(le&&e.texStorage2D(s.TEXTURE_2D,Ht,yt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,Wt,Ct,Z.data)):e.texImage2D(s.TEXTURE_2D,0,yt,Z.width,Z.height,0,Wt,Ct,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,yt,Ft[0].width,Ft[0].height,Z.depth);for(let et=0,P=Ft.length;et<P;et++)ft=Ft[et],M.format!==ei?Wt!==null?Yt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,Z.depth,Wt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,yt,ft.width,ft.height,Z.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,Z.depth,Wt,Ct,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,yt,ft.width,ft.height,Z.depth,0,Wt,Ct,ft.data)}else{Yt&&le&&e.texStorage2D(s.TEXTURE_2D,Ht,yt,Ft[0].width,Ft[0].height);for(let et=0,P=Ft.length;et<P;et++)ft=Ft[et],M.format!==ei?Wt!==null?Yt?e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,ft.width,ft.height,Wt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,et,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,ft.width,ft.height,Wt,Ct,ft.data):e.texImage2D(s.TEXTURE_2D,et,yt,ft.width,ft.height,0,Wt,Ct,ft.data)}else if(M.isDataArrayTexture)Yt?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,yt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Ct,Z.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,Z.width,Z.height,Z.depth,0,Wt,Ct,Z.data);else if(M.isData3DTexture)Yt?(le&&e.texStorage3D(s.TEXTURE_3D,Ht,yt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Wt,Ct,Z.data)):e.texImage3D(s.TEXTURE_3D,0,yt,Z.width,Z.height,Z.depth,0,Wt,Ct,Z.data);else if(M.isFramebufferTexture){if(le)if(Yt)e.texStorage2D(s.TEXTURE_2D,Ht,yt,Z.width,Z.height);else{let et=Z.width,P=Z.height;for(let nt=0;nt<Ht;nt++)e.texImage2D(s.TEXTURE_2D,nt,yt,et,P,0,Wt,Ct,null),et>>=1,P>>=1}}else if(Ft.length>0&&qt){Yt&&le&&e.texStorage2D(s.TEXTURE_2D,Ht,yt,Ft[0].width,Ft[0].height);for(let et=0,P=Ft.length;et<P;et++)ft=Ft[et],Yt?e.texSubImage2D(s.TEXTURE_2D,et,0,0,Wt,Ct,ft):e.texImage2D(s.TEXTURE_2D,et,yt,Wt,Ct,ft);M.generateMipmaps=!1}else Yt?(le&&e.texStorage2D(s.TEXTURE_2D,Ht,yt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Ct,Z)):e.texImage2D(s.TEXTURE_2D,0,yt,Wt,Ct,Z);y(M,qt)&&x(K),mt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xt(w,M,k){if(M.image.length!==6)return;let K=q(w,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);let Q=i.get($);if($.version!==Q.__version||K===!0){e.activeTexture(s.TEXTURE0+k);let mt=Zt.getPrimaries(Zt.workingColorSpace),at=M.colorSpace===qe?null:Zt.getPrimaries(M.colorSpace),dt=M.colorSpace===qe||mt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Et=M.isCompressedTexture||M.image[0].isCompressedTexture,kt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let et=0;et<6;et++)!Et&&!kt?Z[et]=_(M.image[et],!1,!0,n.maxCubemapSize):Z[et]=kt?M.image[et].image:M.image[et],Z[et]=Bt(M,Z[et]);let qt=Z[0],Wt=m(qt)||a,Ct=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),ft=E(M.internalFormat,Ct,yt,M.colorSpace),Ft=a&&M.isVideoTexture!==!0,Yt=Q.__version===void 0||K===!0,le=C(M,qt,Wt);G(s.TEXTURE_CUBE_MAP,M,Wt);let Ht;if(Et){Ft&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,ft,qt.width,qt.height);for(let et=0;et<6;et++){Ht=Z[et].mipmaps;for(let P=0;P<Ht.length;P++){let nt=Ht[P];M.format!==ei?Ct!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,0,0,nt.width,nt.height,Ct,nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,ft,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,0,0,nt.width,nt.height,Ct,yt,nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P,ft,nt.width,nt.height,0,Ct,yt,nt.data)}}}else{Ht=M.mipmaps,Ft&&Yt&&(Ht.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,ft,Z[0].width,Z[0].height));for(let et=0;et<6;et++)if(kt){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Z[et].width,Z[et].height,Ct,yt,Z[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ft,Z[et].width,Z[et].height,0,Ct,yt,Z[et].data);for(let P=0;P<Ht.length;P++){let st=Ht[P].image[et].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,0,0,st.width,st.height,Ct,yt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,ft,st.width,st.height,0,Ct,yt,st.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct,yt,Z[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ft,Ct,yt,Z[et]);for(let P=0;P<Ht.length;P++){let nt=Ht[P];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,0,0,Ct,yt,nt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,P+1,ft,Ct,yt,nt.image[et])}}}y(M,Wt)&&x(s.TEXTURE_CUBE_MAP),Q.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _t(w,M,k,K,$,Q){let mt=r.convert(k.format,k.colorSpace),at=r.convert(k.type),dt=E(k.internalFormat,mt,at,k.colorSpace);if(!i.get(M).__hasExternalTextures){let kt=Math.max(1,M.width>>Q),Z=Math.max(1,M.height>>Q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Q,dt,kt,Z,M.depth,0,mt,at,null):e.texImage2D($,Q,dt,kt,Z,0,mt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),pt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,i.get(k).__webglTexture,0,Pt(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,i.get(k).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(w,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let K=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||pt(M)){let $=M.depthTexture;$&&$.isDepthTexture&&($.type===Ii?K=s.DEPTH_COMPONENT32F:$.type===Li&&(K=s.DEPTH_COMPONENT24));let Q=Pt(M);pt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let K=Pt(M);k&&pt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):pt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let K=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0;$<K.length;$++){let Q=K[$],mt=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),dt=E(Q.internalFormat,mt,at,Q.colorSpace),Et=Pt(M);k&&pt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,dt,M.width,M.height):pt(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let K=i.get(M.depthTexture).__webglTexture,$=Pt(M);if(M.depthTexture.format===Ki)pt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Un)pt(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Tt(w){let M=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),Dt(M.__webglDepthbuffer[K],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Dt(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(w,M,k){let K=i.get(w);M!==void 0&&_t(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Tt(w)}function O(w){let M=w.texture,k=i.get(w),K=i.get(M);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++);let $=w.isWebGLCubeRenderTarget===!0,Q=w.isWebGLMultipleRenderTargets===!0,mt=m(w)||a;if($){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let dt=0;dt<M.mipmaps.length;dt++)k.__webglFramebuffer[at][dt]=s.createFramebuffer()}else k.__webglFramebuffer[at]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)k.__webglFramebuffer[at]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Q)if(n.drawBuffers){let at=w.texture;for(let dt=0,Et=at.length;dt<Et;dt++){let kt=i.get(at[dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&pt(w)===!1){let at=Q?M:[M];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<at.length;dt++){let Et=at[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let kt=r.convert(Et.format,Et.colorSpace),Z=r.convert(Et.type),qt=E(Et.internalFormat,kt,Z,Et.colorSpace,w.isXRRenderTarget===!0),Wt=Pt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,qt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),G(s.TEXTURE_CUBE_MAP,M,mt);for(let at=0;at<6;at++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(k.__webglFramebuffer[at][dt],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else _t(k.__webglFramebuffer[at],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(M,mt)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){let at=w.texture;for(let dt=0,Et=at.length;dt<Et;dt++){let kt=at[dt],Z=i.get(kt);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture),G(s.TEXTURE_2D,kt,mt),_t(k.__webglFramebuffer,w,kt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),y(kt,mt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?at=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,K.__webglTexture),G(at,M,mt),a&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)_t(k.__webglFramebuffer[dt],w,M,s.COLOR_ATTACHMENT0,at,dt);else _t(k.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,at,0);y(M,mt)&&x(at),e.unbindTexture()}w.depthBuffer&&Tt(w)}function De(w){let M=m(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,$=k.length;K<$;K++){let Q=k[K];if(y(Q,M)){let mt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=i.get(Q).__webglTexture;e.bindTexture(mt,at),x(mt),e.unbindTexture()}}}function Mt(w){if(a&&w.samples>0&&pt(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,K=w.height,$=s.COLOR_BUFFER_BIT,Q=[],mt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=i.get(w),dt=w.isWebGLMultipleRenderTargets===!0;if(dt)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){Q.push(s.COLOR_ATTACHMENT0+Et),w.depthBuffer&&Q.push(mt);let kt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(kt===!1&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[Et]),kt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[mt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[mt])),dt){let Z=i.get(M[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,at.__webglColorRenderbuffer[Et]);let kt=i.get(M[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Pt(w){return Math.min(n.maxSamples,w.samples)}function pt(w){let M=i.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Bt(w,M){let k=w.colorSpace,K=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===$a||k!==xi&&k!==qe&&(Zt.getTransfer(k)===te?a===!1?t.has("EXT_sRGB")===!0&&K===ei?(w.format=$a,w.minFilter=Ye,w.generateMipmaps=!1):M=nr.sRGBToLinear(M):(K!==ei||$!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=L,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=pt}function cg(s,t,e){let i=e.isWebGL2;function n(r,o=qe){let a,l=Zt.getTransfer(o);if(r===Ni)return s.UNSIGNED_BYTE;if(r===zc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eu)return s.BYTE;if(r===iu)return s.SHORT;if(r===ko)return s.UNSIGNED_SHORT;if(r===kc)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===is)return i?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===nu)return s.ALPHA;if(r===ei)return s.RGBA;if(r===su)return s.LUMINANCE;if(r===ru)return s.LUMINANCE_ALPHA;if(r===Ki)return s.DEPTH_COMPONENT;if(r===Un)return s.DEPTH_STENCIL;if(r===$a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===au)return s.RED;if(r===Gc)return s.RED_INTEGER;if(r===ou)return s.RG;if(r===Vc)return s.RG_INTEGER;if(r===Wc)return s.RGBA_INTEGER;if(r===la||r===ca||r===ha||r===ua)if(l===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===la)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===la)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dl||r===fl||r===pl||r===ml)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===gl||r===_l)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===gl)return l===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===_l)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xl||r===yl||r===vl||r===Ml||r===Sl||r===bl||r===El||r===wl||r===Tl||r===Al||r===Rl||r===Cl||r===Pl||r===Ll)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===xl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ml)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===El)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Al)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ll)return l===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===da||r===Il||r===Dl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===da)return l===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Il)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lu||r===Ul||r===Nl||r===Fl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===da)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?i?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}var uo=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pe=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},Kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fo=class extends Bi{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],E=new ot,C=null,T=new Pe;T.layers.enable(1),T.viewport=new se;let A=new Pe;A.layers.enable(2),A.viewport=new se;let U=[T,A],v=new uo;v.layers.enable(1),v.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=y[G];return q===void 0&&(q=new Kn,y[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=y[G];return q===void 0&&(q=new Kn,y[G]=q),q.getGripSpace()},this.getHand=function(G){let q=y[G];return q===void 0&&(q=new Kn,y[G]=q),q.getHandSpace()};function N(G){let q=x.indexOf(G.inputSource);if(q===-1)return;let lt=y[q];lt!==void 0&&(lt.update(G.inputSource,G.frame,c||o),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",L);for(let G=0;G<y.length;G++){let q=x[G];q!==null&&(x[G]=null,y[G].disconnect(q))}b=null,D=null,t.setRenderTarget(m),d=null,f=null,u=null,n=null,p=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",J),n.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,q),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new yi(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,lt=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=_.stencil?Un:Ki,lt=_.stencil?ji:Li);let _t={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(_t),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new yi(f.textureWidth,f.textureHeight,{format:ei,type:Ni,depthTexture:new mr(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Dt=t.properties.get(p);Dt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),ht.setContext(n),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(G){for(let q=0;q<G.removed.length;q++){let lt=G.removed[q],xt=x.indexOf(lt);xt>=0&&(x[xt]=null,y[xt].disconnect(lt))}for(let q=0;q<G.added.length;q++){let lt=G.added[q],xt=x.indexOf(lt);if(xt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=x.length){x.push(lt),xt=Dt;break}else if(x[Dt]===null){x[Dt]=lt,xt=Dt;break}if(xt===-1)break}let _t=y[xt];_t&&_t.connect(lt)}}let F=new R,V=new R;function Y(G,q,lt){F.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);let xt=F.distanceTo(V),_t=q.projectionMatrix.elements,Dt=lt.projectionMatrix.elements,Nt=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),Xt=(_t[9]+1)/_t[5],O=(_t[9]-1)/_t[5],De=(_t[8]-1)/_t[0],Mt=(Dt[8]+1)/Dt[0],Pt=Nt*De,pt=Nt*Mt,ae=xt/(-De+Mt),Bt=ae*-De;q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Bt),G.translateZ(ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let w=Nt+ae,M=Tt+ae,k=Pt-Bt,K=pt+(xt-Bt),$=Xt*Tt/M*w,Q=O*Tt/M*w;G.projectionMatrix.makePerspective(k,K,$,Q,w,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;v.near=A.near=T.near=G.near,v.far=A.far=T.far=G.far,(b!==v.near||D!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,D=v.far);let q=G.parent,lt=v.cameras;X(v,q);for(let xt=0;xt<lt.length;xt++)X(lt[xt],q);lt.length===2?Y(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),W(G,v,q)};function W(G,q,lt){lt===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ja*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let j=null;function tt(G,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let xt=!1;lt.length!==v.cameras.length&&(v.cameras.length=0,xt=!0);for(let _t=0;_t<lt.length;_t++){let Dt=lt[_t],Nt=null;if(d!==null)Nt=d.getViewport(Dt);else{let Xt=u.getViewSubImage(f,Dt);Nt=Xt.viewport,_t===0&&(t.setRenderTargetTextures(p,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(p))}let Tt=U[_t];Tt===void 0&&(Tt=new Pe,Tt.layers.enable(_t),Tt.viewport=new se,U[_t]=Tt),Tt.matrix.fromArray(Dt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Dt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),_t===0&&(v.matrix.copy(Tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),xt===!0&&v.cameras.push(Tt)}}for(let lt=0;lt<y.length;lt++){let xt=x[lt],_t=y[lt];xt!==null&&_t!==void 0&&_t.update(xt,q,c||o)}j&&j(G,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}let ht=new Kc;ht.setAnimationLoop(tt),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}};function ug(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function dg(s,t,e,i){let n={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let E=x.program;i.uniformBlockBinding(y,E)}function c(y,x){let E=n[y.id];E===void 0&&(g(y),E=h(y),n[y.id]=E,y.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(y,C);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let E=s.createBuffer(),C=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=n[y.id],E=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=E.length;T<A;T++){let U=Array.isArray(E[T])?E[T]:[E[T]];for(let v=0,b=U.length;v<b;v++){let D=U[v];if(d(D,T,v,C)===!0){let N=D.__offset,J=Array.isArray(D.value)?D.value:[D.value],L=0;for(let F=0;F<J.length;F++){let V=J[F],Y=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,N+L,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,E,C){let T=y.value,A=x+"_"+E;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let U=C[A];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return C[A]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(y){let x=y.uniforms,E=0,C=16;for(let A=0,U=x.length;A<U;A++){let v=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,D=v.length;b<D;b++){let N=v[b],J=Array.isArray(N.value)?N.value:[N.value];for(let L=0,F=J.length;L<F;L++){let V=J[L],Y=_(V),X=E%C;X!==0&&C-X<Y.boundary&&(E+=C-X),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=Y.storage}}}let T=E%C;return T>0&&(E+=C-T),y.__size=E,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}var ss=class{constructor(t={}){let{canvas:e=vu(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ee,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;let x=this,E=!1,C=0,T=0,A=null,U=-1,v=null,b=new se,D=new se,N=null,J=new ut(0),L=0,F=e.width,V=e.height,Y=1,X=null,W=null,j=new se(0,0,F,V),tt=new se(0,0,F,V),ht=!1,G=new ns,q=!1,lt=!1,xt=null,_t=new $t,Dt=new ot,Nt=new R,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return A===null?Y:1}let O=i;function De(S,I){for(let z=0;z<S.length;z++){let H=S[z],B=e.getContext(H,I);if(B!==null)return B}return null}try{let S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){let I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),O=De(I,S),O===null)throw De(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Mt,Pt,pt,ae,Bt,w,M,k,K,$,Q,mt,at,dt,Et,kt,Z,qt,Wt,Ct,yt,ft,Ft,Yt;function le(){Mt=new Lp(O),Pt=new wp(O,Mt,t),Mt.init(Pt),ft=new cg(O,Mt,Pt),pt=new og(O,Mt,Pt),ae=new Up(O),Bt=new Jm,w=new lg(O,Mt,pt,Bt,Pt,ft,ae),M=new Ap(x),k=new Pp(x),K=new Hu(O,Pt),Ft=new bp(O,Mt,K,Pt),$=new Ip(O,K,ae,Ft),Q=new Bp(O,$,K,ae),Wt=new Op(O,Pt,w),kt=new Tp(Bt),mt=new Zm(x,M,k,Mt,Pt,Ft,kt),at=new ug(x,Bt),dt=new jm,Et=new ng(Mt,Pt),qt=new Sp(x,M,k,pt,Q,f,l),Z=new ag(x,Q,Pt),Yt=new dg(O,ae,Pt,pt),Ct=new Ep(O,Mt,ae,Pt),yt=new Dp(O,Mt,ae,Pt),ae.programs=mt.programs,x.capabilities=Pt,x.extensions=Mt,x.properties=Bt,x.renderLists=dt,x.shadowMap=Z,x.state=pt,x.info=ae}le();let Ht=new fo(x,O);this.xr=Ht,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(F,V,!1))},this.getSize=function(S){return S.set(F,V)},this.setSize=function(S,I,z=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,V=I,e.width=Math.floor(S*Y),e.height=Math.floor(I*Y),z===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(F*Y,V*Y).floor()},this.setDrawingBufferSize=function(S,I,z){F=S,V=I,Y=z,e.width=Math.floor(S*z),e.height=Math.floor(I*z),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,I,z,H){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,I,z,H),pt.viewport(b.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,I,z,H){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,I,z,H),pt.scissor(D.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){pt.setScissorTest(ht=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(S=!0,I=!0,z=!0){let H=0;if(S){let B=!1;if(A!==null){let ct=A.texture.format;B=ct===Wc||ct===Vc||ct===Gc}if(B){let ct=A.texture.type,gt=ct===Ni||ct===Li||ct===ko||ct===ji||ct===zc||ct===Hc,bt=qt.getClearColor(),Rt=qt.getClearAlpha(),zt=bt.r,Lt=bt.g,Ut=bt.b;gt?(d[0]=zt,d[1]=Lt,d[2]=Ut,d[3]=Rt,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=zt,g[1]=Lt,g[2]=Ut,g[3]=Rt,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}I&&(H|=O.DEPTH_BUFFER_BIT),z&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),Et.dispose(),Bt.dispose(),M.dispose(),k.dispose(),Q.dispose(),Ft.dispose(),Yt.dispose(),mt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ue),Ht.removeEventListener("sessionend",Qt),xt&&(xt.dispose(),xt=null),Ne.stop()};function et(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let S=ae.autoReset,I=Z.enabled,z=Z.autoUpdate,H=Z.needsUpdate,B=Z.type;le(),ae.autoReset=S,Z.enabled=I,Z.autoUpdate=z,Z.needsUpdate=H,Z.type=B}function nt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){let I=S.target;I.removeEventListener("dispose",st),At(I)}function At(S){St(S),Bt.remove(S)}function St(S){let I=Bt.get(S).programs;I!==void 0&&(I.forEach(function(z){mt.releaseProgram(z)}),S.isShaderMaterial&&mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,z,H,B,ct){I===null&&(I=Tt);let gt=B.isMesh&&B.matrixWorld.determinant()<0,bt=xh(S,I,z,H,B);pt.setMaterial(H,gt);let Rt=z.index,zt=1;if(H.wireframe===!0){if(Rt=$.getWireframeAttribute(z),Rt===void 0)return;zt=2}let Lt=z.drawRange,Ut=z.attributes.position,ue=Lt.start*zt,ke=(Lt.start+Lt.count)*zt;ct!==null&&(ue=Math.max(ue,ct.start*zt),ke=Math.min(ke,(ct.start+ct.count)*zt)),Rt!==null?(ue=Math.max(ue,0),ke=Math.min(ke,Rt.count)):Ut!=null&&(ue=Math.max(ue,0),ke=Math.min(ke,Ut.count));let Se=ke-ue;if(Se<0||Se===1/0)return;Ft.setup(B,H,bt,z,Rt);let li,oe=Ct;if(Rt!==null&&(li=K.get(Rt),oe=yt,oe.setIndex(li)),B.isMesh)H.wireframe===!0?(pt.setLineWidth(H.wireframeLinewidth*Xt()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(B.isLine){let Gt=H.linewidth;Gt===void 0&&(Gt=1),pt.setLineWidth(Gt*Xt()),B.isLineSegments?oe.setMode(O.LINES):B.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else B.isPoints?oe.setMode(O.POINTS):B.isSprite&&oe.setMode(O.TRIANGLES);if(B.isBatchedMesh)oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)oe.renderInstances(ue,Se,B.count);else if(z.isInstancedBufferGeometry){let Gt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,na=Math.min(z.instanceCount,Gt);oe.renderInstances(ue,Se,na)}else oe.render(ue,Se)};function jt(S,I,z){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,xs(S,I,z),S.side=Oi,S.needsUpdate=!0,xs(S,I,z),S.side=Qe):xs(S,I,z)}this.compile=function(S,I,z=null){z===null&&(z=S),m=Et.get(z),m.init(),y.push(m),z.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),S!==z&&S.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let H=new Set;return S.traverse(function(B){let ct=B.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){let bt=ct[gt];jt(bt,z,B),H.add(bt)}else jt(ct,z,B),H.add(ct)}),y.pop(),m=null,H},this.compileAsync=function(S,I,z=null){let H=this.compile(S,I,z);return new Promise(B=>{function ct(){if(H.forEach(function(gt){Bt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){B(S);return}setTimeout(ct,10)}Mt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Kt=null;function Me(S){Kt&&Kt(S)}function Ue(){Ne.stop()}function Qt(){Ne.start()}let Ne=new Kc;Ne.setAnimationLoop(Me),typeof self!="undefined"&&Ne.setContext(self),this.setAnimationLoop=function(S){Kt=S,Ht.setAnimationLoop(S),S===null?Ne.stop():Ne.start()},Ht.addEventListener("sessionstart",Ue),Ht.addEventListener("sessionend",Qt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(I),I=Ht.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,A),m=Et.get(S,y.length),m.init(),y.push(m),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,q=kt.init(this.clippingPlanes,lt),_=dt.get(S,p.length),_.init(),p.push(_),si(S,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,q===!0&&kt.beginShadows();let z=m.state.shadowsArray;if(Z.render(z,S,I),q===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(_,S),m.setupLights(x._useLegacyLights),I.isArrayCamera){let H=I.cameras;for(let B=0,ct=H.length;B<ct;B++){let gt=H[B];Qo(_,S,gt,gt.viewport)}}else Qo(_,S,I);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,I),Ft.resetDefaultState(),U=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function si(S,I,z,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){H&&Nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);let gt=Q.update(S),bt=S.material;bt.visible&&_.push(S,gt,bt,z,Nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){let gt=Q.update(S),bt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Nt.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(bt)){let Rt=gt.groups;for(let zt=0,Lt=Rt.length;zt<Lt;zt++){let Ut=Rt[zt],ue=bt[Ut.materialIndex];ue&&ue.visible&&_.push(S,gt,ue,z,Nt.z,Ut)}}else bt.visible&&_.push(S,gt,bt,z,Nt.z,null)}}let ct=S.children;for(let gt=0,bt=ct.length;gt<bt;gt++)si(ct[gt],I,z,H)}function Qo(S,I,z,H){let B=S.opaque,ct=S.transmissive,gt=S.transparent;m.setupLightsView(z),q===!0&&kt.setGlobalState(x.clippingPlanes,z),ct.length>0&&_h(B,ct,I,z),H&&pt.viewport(b.copy(H)),B.length>0&&_s(B,I,z),ct.length>0&&_s(ct,I,z),gt.length>0&&_s(gt,I,z),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function _h(S,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let ct=Pt.isWebGL2;xt===null&&(xt=new yi(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?is:Ni,minFilter:es,samples:ct?4:0})),x.getDrawingBufferSize(Dt),ct?xt.setSize(Dt.x,Dt.y):xt.setSize(Ka(Dt.x),Ka(Dt.y));let gt=x.getRenderTarget();x.setRenderTarget(xt),x.getClearColor(J),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let bt=x.toneMapping;x.toneMapping=Ui,_s(S,z,H),w.updateMultisampleRenderTarget(xt),w.updateRenderTargetMipmap(xt);let Rt=!1;for(let zt=0,Lt=I.length;zt<Lt;zt++){let Ut=I[zt],ue=Ut.object,ke=Ut.geometry,Se=Ut.material,li=Ut.group;if(Se.side===Qe&&ue.layers.test(H.layers)){let oe=Se.side;Se.side=Le,Se.needsUpdate=!0,tl(ue,z,H,ke,Se,li),Se.side=oe,Se.needsUpdate=!0,Rt=!0}}Rt===!0&&(w.updateMultisampleRenderTarget(xt),w.updateRenderTargetMipmap(xt)),x.setRenderTarget(gt),x.setClearColor(J,L),x.toneMapping=bt}function _s(S,I,z){let H=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ct=S.length;B<ct;B++){let gt=S[B],bt=gt.object,Rt=gt.geometry,zt=H===null?gt.material:H,Lt=gt.group;bt.layers.test(z.layers)&&tl(bt,I,z,Rt,zt,Lt)}}function tl(S,I,z,H,B,ct){S.onBeforeRender(x,I,z,H,B,ct),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,I,z,H,S,ct),B.transparent===!0&&B.side===Qe&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,x.renderBufferDirect(z,I,H,B,S,ct),B.side=Oi,B.needsUpdate=!0,x.renderBufferDirect(z,I,H,B,S,ct),B.side=Qe):x.renderBufferDirect(z,I,H,B,S,ct),S.onAfterRender(x,I,z,H,B,ct)}function xs(S,I,z){I.isScene!==!0&&(I=Tt);let H=Bt.get(S),B=m.state.lights,ct=m.state.shadowsArray,gt=B.state.version,bt=mt.getParameters(S,B.state,ct,I,z),Rt=mt.getProgramCacheKey(bt),zt=H.programs;H.environment=S.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(S.isMeshStandardMaterial?k:M).get(S.envMap||H.environment),zt===void 0&&(S.addEventListener("dispose",st),zt=new Map,H.programs=zt);let Lt=zt.get(Rt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===gt)return il(S,bt),Lt}else bt.uniforms=mt.getUniforms(S),S.onBuild(z,bt,x),S.onBeforeCompile(bt,x),Lt=mt.acquireProgram(bt,Rt),zt.set(Rt,Lt),H.uniforms=bt.uniforms;let Ut=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=kt.uniform),il(S,bt),H.needsLights=vh(S),H.lightsStateVersion=gt,H.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function el(S){if(S.uniformsList===null){let I=S.currentProgram.getUniforms();S.uniformsList=Ln.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function il(S,I){let z=Bt.get(S);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function xh(S,I,z,H,B){I.isScene!==!0&&(I=Tt),w.resetTextureUnits();let ct=I.fog,gt=H.isMeshStandardMaterial?I.environment:null,bt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,Rt=(H.isMeshStandardMaterial?k:M).get(H.envMap||gt),zt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!z.morphAttributes.position,ue=!!z.morphAttributes.normal,ke=!!z.morphAttributes.color,Se=Ui;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=x.toneMapping);let li=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=li!==void 0?li.length:0,Gt=Bt.get(H),na=m.state.lights;if(q===!0&&(lt===!0||S!==v)){let We=S===v&&H.id===U;kt.setState(H,S,We)}let ce=!1;H.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==na.state.version||Gt.outputColorSpace!==bt||B.isBatchedMesh&&Gt.batching===!1||!B.isBatchedMesh&&Gt.batching===!0||B.isInstancedMesh&&Gt.instancing===!1||!B.isInstancedMesh&&Gt.instancing===!0||B.isSkinnedMesh&&Gt.skinning===!1||!B.isSkinnedMesh&&Gt.skinning===!0||B.isInstancedMesh&&Gt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Gt.instancingColor===!1&&B.instanceColor!==null||Gt.envMap!==Rt||H.fog===!0&&Gt.fog!==ct||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==kt.numPlanes||Gt.numIntersection!==kt.numIntersection)||Gt.vertexAlphas!==zt||Gt.vertexTangents!==Lt||Gt.morphTargets!==Ut||Gt.morphNormals!==ue||Gt.morphColors!==ke||Gt.toneMapping!==Se||Pt.isWebGL2===!0&&Gt.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,Gt.__version=H.version);let Hi=Gt.currentProgram;ce===!0&&(Hi=xs(H,I,B));let nl=!1,zn=!1,sa=!1,Ae=Hi.getUniforms(),Gi=Gt.uniforms;if(pt.useProgram(Hi.program)&&(nl=!0,zn=!0,sa=!0),H.id!==U&&(U=H.id,zn=!0),nl||v!==S){Ae.setValue(O,"projectionMatrix",S.projectionMatrix),Ae.setValue(O,"viewMatrix",S.matrixWorldInverse);let We=Ae.map.cameraPosition;We!==void 0&&We.setValue(O,Nt.setFromMatrixPosition(S.matrixWorld)),Pt.logarithmicDepthBuffer&&Ae.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ae.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,zn=!0,sa=!0)}if(B.isSkinnedMesh){Ae.setOptional(O,B,"bindMatrix"),Ae.setOptional(O,B,"bindMatrixInverse");let We=B.skeleton;We&&(Pt.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ae.setValue(O,"boneTexture",We.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ae.setOptional(O,B,"batchingTexture"),Ae.setValue(O,"batchingTexture",B._matricesTexture,w));let ra=z.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&Pt.isWebGL2===!0)&&Wt.update(B,z,Hi),(zn||Gt.receiveShadow!==B.receiveShadow)&&(Gt.receiveShadow=B.receiveShadow,Ae.setValue(O,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Gi.envMap.value=Rt,Gi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),zn&&(Ae.setValue(O,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&yh(Gi,sa),ct&&H.fog===!0&&at.refreshFogUniforms(Gi,ct),at.refreshMaterialUniforms(Gi,H,Y,V,xt),Ln.upload(O,el(Gt),Gi,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ln.upload(O,el(Gt),Gi,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ae.setValue(O,"center",B.center),Ae.setValue(O,"modelViewMatrix",B.modelViewMatrix),Ae.setValue(O,"normalMatrix",B.normalMatrix),Ae.setValue(O,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let We=H.uniformsGroups;for(let aa=0,Mh=We.length;aa<Mh;aa++)if(Pt.isWebGL2){let sl=We[aa];Yt.update(sl,Hi),Yt.bind(sl,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function yh(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function vh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,z){Bt.get(S.texture).__webglTexture=I,Bt.get(S.depthTexture).__webglTexture=z;let H=Bt.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){let z=Bt.get(S);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,z=0){A=S,C=I,T=z;let H=!0,B=null,ct=!1,gt=!1;if(S){let Rt=Bt.get(S);Rt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Rt.__webglFramebuffer===void 0?w.setupRenderTarget(S):Rt.__hasExternalTextures&&w.rebindTextures(S,Bt.get(S.texture).__webglTexture,Bt.get(S.depthTexture).__webglTexture);let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);let Lt=Bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?B=Lt[I][z]:B=Lt[I],ct=!0):Pt.isWebGL2&&S.samples>0&&w.useMultisampledRTT(S)===!1?B=Bt.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?B=Lt[z]:B=Lt,b.copy(S.viewport),D.copy(S.scissor),N=S.scissorTest}else b.copy(j).multiplyScalar(Y).floor(),D.copy(tt).multiplyScalar(Y).floor(),N=ht;if(pt.bindFramebuffer(O.FRAMEBUFFER,B)&&Pt.drawBuffers&&H&&pt.drawBuffers(S,B),pt.viewport(b),pt.scissor(D),pt.setScissorTest(N),ct){let Rt=Bt.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Rt.__webglTexture,z)}else if(gt){let Rt=Bt.get(S.texture),zt=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,z||0,zt)}U=-1},this.readRenderTargetPixels=function(S,I,z,H,B,ct,gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(bt=bt[gt]),bt){pt.bindFramebuffer(O.FRAMEBUFFER,bt);try{let Rt=S.texture,zt=Rt.format,Lt=Rt.type;if(zt!==ei&&ft.convert(zt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Lt===is&&(Mt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Lt!==Ni&&ft.convert(Lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===Ii&&(Pt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&z>=0&&z<=S.height-B&&O.readPixels(I,z,H,B,ft.convert(zt),ft.convert(Lt),ct)}finally{let Rt=A!==null?Bt.get(A).__webglFramebuffer:null;pt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(S,I,z=0){let H=Math.pow(2,-z),B=Math.floor(I.image.width*H),ct=Math.floor(I.image.height*H);w.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,S.x,S.y,B,ct),pt.unbindTexture()},this.copyTextureToTexture=function(S,I,z,H=0){let B=I.image.width,ct=I.image.height,gt=ft.convert(z.format),bt=ft.convert(z.type);w.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,S.x,S.y,B,ct,gt,bt,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,gt,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,S.x,S.y,gt,bt,I.image),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,z,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=S.max.x-S.min.x+1,gt=S.max.y-S.min.y+1,bt=S.max.z-S.min.z+1,Rt=ft.convert(H.format),zt=ft.convert(H.type),Lt;if(H.isData3DTexture)w.setTexture3D(H,0),Lt=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),Lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Ut=O.getParameter(O.UNPACK_ROW_LENGTH),ue=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ke=O.getParameter(O.UNPACK_SKIP_PIXELS),Se=O.getParameter(O.UNPACK_SKIP_ROWS),li=O.getParameter(O.UNPACK_SKIP_IMAGES),oe=z.isCompressedTexture?z.mipmaps[B]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,oe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Lt,B,I.x,I.y,I.z,ct,gt,bt,Rt,zt,oe.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Lt,B,I.x,I.y,I.z,ct,gt,bt,Rt,oe.data)):O.texSubImage3D(Lt,B,I.x,I.y,I.z,ct,gt,bt,Rt,zt,oe),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ke),O.pixelStorei(O.UNPACK_SKIP_ROWS,Se),O.pixelStorei(O.UNPACK_SKIP_IMAGES,li),B===0&&H.generateMipmaps&&O.generateMipmap(Lt),pt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),pt.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,pt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===zo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ee?Qi:Yc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qi?ee:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},po=class extends ss{};po.prototype.isWebGL1Renderer=!0;var gr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _r=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},xr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fe=new R,rs=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),i=Jt(i,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},as=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sn,Xn=new R,bn=new R,En=new R,wn=new ot,Yn=new ot,sh=new $t,Hs=new R,qn=new R,Gs=new R,Tc=new ot,Ba=new ot,Ac=new ot,yr=class extends Te{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",Sn===void 0){Sn=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xr(e,5);Sn.setIndex([0,1,2,0,2,3]),Sn.setAttribute("position",new rs(i,3,0,!1)),Sn.setAttribute("uv",new rs(i,2,3,!1))}this.geometry=Sn,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bn.setFromMatrixScale(this.matrixWorld),sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),En.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bn.multiplyScalar(-En.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Vs(Hs.set(-.5,-.5,0),En,o,bn,n,r),Vs(qn.set(.5,-.5,0),En,o,bn,n,r),Vs(Gs.set(.5,.5,0),En,o,bn,n,r),Tc.set(0,0),Ba.set(1,0),Ac.set(1,1);let a=t.ray.intersectTriangle(Hs,qn,Gs,!1,Xn);if(a===null&&(Vs(qn.set(-.5,.5,0),En,o,bn,n,r),Ba.set(0,1),a=t.ray.intersectTriangle(Hs,Gs,qn,!1,Xn),a===null))return;let l=t.ray.origin.distanceTo(Xn);l<t.near||l>t.far||e.push({distance:l,point:Xn.clone(),uv:$i.getInterpolation(Xn,Hs,qn,Gs,Tc,Ba,Ac,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Vs(s,t,e,i,n,r){wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Yn.x=r*wn.x-n*wn.y,Yn.y=n*wn.x+r*wn.y):Yn.copy(wn),s.copy(t),s.x+=Yn.x,s.y+=Yn.y,s.applyMatrix4(sh)}var os=class extends me{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Tn=new $t,Rc=new $t,Ws=[],Cc=new vi,fg=new $t,Zn=new rt,Jn=new ki,ls=class extends rt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,fg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),Cc.copy(t.boundingBox).applyMatrix4(Tn),this.boundingBox.union(Cc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),Jn.copy(t.boundingSphere).applyMatrix4(Tn),this.boundingSphere.union(Jn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Zn.geometry=this.geometry,Zn.material=this.material,Zn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jn.copy(this.boundingSphere),Jn.applyMatrix4(i),t.ray.intersectsSphere(Jn)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Tn),Rc.multiplyMatrices(i,Tn),Zn.matrixWorld=Rc,Zn.raycast(t,Ws);for(let o=0,a=Ws.length;o<a;o++){let l=Ws[o];l.instanceId=r,l.object=this,e.push(l)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var cs=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pc=new $t,mo=new ar,Xs=new ki,Ys=new R,vr=class extends Te{constructor(t=new Ee,e=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(n),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Pc.copy(n).invert(),mo.copy(t.ray).applyMatrix4(Pc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Ys.fromBufferAttribute(u,m),Lc(Ys,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ys.fromBufferAttribute(u,g),Lc(Ys,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lc(s,t,e,i,n,r,o){let a=mo.distanceSqToPoint(s);if(a<e){let l=new R;mo.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var bi=class extends Ze{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(o-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ot:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],r=[],o=[],a=new R,l=new $t;for(let d=0;d<=t;d++){let g=d/t;n[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(we(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(we(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hs=class extends Je{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let i=e||new ot,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},go=class extends hs{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Go(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,n(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var qs=new R,ka=new Go,za=new Go,Ha=new Go,_o=class extends Je{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(qs.subVectors(n[0],n[1]).add(n[0]),c=qs);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(qs.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ka.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),za.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Ha.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),za.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ha.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ka.calc(l),za.calc(l),Ha.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ic(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function pg(s,t){let e=1-s;return e*e*t}function mg(s,t){return 2*(1-s)*s*t}function gg(s,t){return s*s*t}function Qn(s,t,e,i){return pg(s,t)+mg(s,e)+gg(s,i)}function _g(s,t){let e=1-s;return e*e*e*t}function xg(s,t){let e=1-s;return 3*e*e*s*t}function yg(s,t){return 3*(1-s)*s*s*t}function vg(s,t){return s*s*s*t}function ts(s,t,e,i,n){return _g(s,t)+xg(s,e)+yg(s,i)+vg(s,n)}var Mr=class extends Je{constructor(t=new ot,e=new ot,i=new ot,n=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ot){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ts(t,n.x,r.x,o.x,a.x),ts(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends Je{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ts(t,n.x,r.x,o.x,a.x),ts(t,n.y,r.y,o.y,a.y),ts(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sr=class extends Je{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Je{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends Je{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Qn(t,n.x,r.x,o.x),Qn(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Je{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Qn(t,n.x,r.x,o.x),Qn(t,n.y,r.y,o.y),Qn(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends Je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Ic(a,l.x,c.x,h.x,u.x),Ic(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ot().fromArray(n))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:_o,CubicBezierCurve:Mr,CubicBezierCurve3:xo,EllipseCurve:hs,LineCurve:Sr,LineCurve3:yo,QuadraticBezierCurve:br,QuadraticBezierCurve3:vo,SplineCurve:Er}),Mo=class extends Je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Dc[n.type]().fromJSON(n))}return this}},So=class extends Mo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Sr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new br(this.currentPoint.clone(),new ot(t,e),new ot(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Mr(this.currentPoint.clone(),new ot(t,e),new ot(i,n),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Er(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let c=new hs(t,e,i,n,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bo=class s extends Ee{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=we(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new ot,d=new R,g=new R,_=new R,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=i+y*h*n,E=Math.sin(x),C=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*E,u.y=t[T].y,u.z=t[T].x*C,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let A=l[3*T+0]*E,U=l[3*T+1],v=l[3*T+0]*C;c.push(A,U,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let E=x+y*t.length,C=E,T=E+t.length,A=E+t.length+1,U=E+1;r.push(C,T,U),r.push(A,U,T)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},us=class s extends bo{constructor(t=1,e=1,i=4,n=8){let r=new So;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Ei=class s extends Ee{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=i/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function y(){let E=new R,C=new R,T=0,A=(e-t)/i;for(let U=0;U<=r;U++){let v=[],b=U/r,D=b*(e-t)+t;for(let N=0;N<=n;N++){let J=N/n,L=J*l+a,F=Math.sin(L),V=Math.cos(L);C.x=D*F,C.y=-b*i+m,C.z=D*V,u.push(C.x,C.y,C.z),E.set(F,A,V).normalize(),f.push(E.x,E.y,E.z),d.push(J,1-b),v.push(g++)}_.push(v)}for(let U=0;U<n;U++)for(let v=0;v<r;v++){let b=_[v][U],D=_[v+1][U],N=_[v+1][U+1],J=_[v][U+1];h.push(b,D,J),h.push(D,N,J),T+=6}c.addGroup(p,T,0),p+=T}function x(E){let C=g,T=new ot,A=new R,U=0,v=E===!0?t:e,b=E===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let D=g;for(let N=0;N<=n;N++){let L=N/n*l+a,F=Math.cos(L),V=Math.sin(L);A.x=v*V,A.y=m*b,A.z=v*F,u.push(A.x,A.y,A.z),f.push(0,b,0),T.x=F*.5+.5,T.y=V*.5*b+.5,d.push(T.x,T.y),g++}for(let N=0;N<n;N++){let J=C+N,L=D+N;E===!0?h.push(L,L+1,J):h.push(L+1,L,J),U+=3}c.addGroup(p,U,E===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fn=class s extends Ei{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class s extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,E=new R,C=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],E),d(e[T+2],C),l(x,E,C,y)}function l(y,x,E,C){let T=C+1,A=[];for(let U=0;U<=T;U++){A[U]=[];let v=y.clone().lerp(E,U/T),b=x.clone().lerp(E,U/T),D=T-U;for(let N=0;N<=D;N++)N===0&&U===T?A[U][N]=v:A[U][N]=v.clone().lerp(b,N/D)}for(let U=0;U<T;U++)for(let v=0;v<2*(T-U)-1;v++){let b=Math.floor(v/2);v%2===0?(f(A[U][b+1]),f(A[U+1][b]),f(A[U][b])):(f(A[U][b+1]),f(A[U+1][b+1]),f(A[U+1][b]))}}function c(y){let x=new R;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(y),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let E=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(E,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],E=o[y+2],C=o[y+4],T=Math.max(x,E,C),A=Math.min(x,E,C);T>.9&&A<.1&&(x<.2&&(o[y+0]+=1),E<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){let E=y*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){let y=new R,x=new R,E=new R,C=new R,T=new ot,A=new ot,U=new ot;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),T.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),C.copy(y).add(x).add(E).divideScalar(3);let D=m(C);_(T,b+0,y,D),_(A,b+2,x,D),_(U,b+4,E,D)}}function _(y,x,E,C){C<0&&y.x===1&&(o[x]=y.x-1),E.x===0&&E.z===0&&(o[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Tr=class s extends wr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ar=class s extends wr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ii=class s extends Ee{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let y=[],x=p/i,E=0;p===0&&o===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(n+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(n+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+E,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let x=h[p][y+1],E=h[p][y],C=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&d.push(x,E,T),(p!==i-1||l<Math.PI)&&d.push(E,C,T)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rr=class s extends Ee{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){let _=g/n*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){let _=(n+1)*d+g-1,m=(n+1)*(d-1)+g-1,p=(n+1)*(d-1)+g,y=(n+1)*d+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ge=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Zs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Mg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var On=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eo=class extends On{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bl:r=t,a=2*e-i;break;case kl:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bl:o=t,l=2*i-e;break;case kl:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,E=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[c+C]+x*o[l+C]+E*o[u+C];return r}},wo=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},To=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ni=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $s:e=this.InterpolantFactoryMethodDiscrete;break;case js:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Mg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=js;var nn=class extends ni{};nn.prototype.ValueTypeName="bool";nn.prototype.ValueBufferType=Array;nn.prototype.DefaultInterpolation=$s;nn.prototype.InterpolantFactoryMethodLinear=void 0;nn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends ni{};Ao.prototype.ValueTypeName="color";var Ro=class extends ni{};Ro.prototype.ValueTypeName="number";var Co=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},ds=class extends ni{InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=js;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var sn=class extends ni{};sn.prototype.ValueTypeName="string";sn.prototype.ValueBufferType=Array;sn.prototype.DefaultInterpolation=$s;sn.prototype.InterpolantFactoryMethodLinear=void 0;sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends ni{};Po.prototype.ValueTypeName="vector";var Lo=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Sg=new Lo,Io=class{constructor(t){this.manager=t!==void 0?t:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bn=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Cr=class extends Bn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ga=new $t,Uc=new R,Nc=new R,Pr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),Ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Fc=new $t,$n=new R,Va=new R,Do=class extends Pr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$n.setFromMatrixPosition(t.matrixWorld),i.position.copy($n),Va.copy(i.position),Va.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Va),i.updateMatrixWorld(),n.makeTranslation(-$n.x,-$n.y,-$n.z),Fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}},Lr=class extends Bn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Uo=class extends Pr{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Bn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Uo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Dr=class extends Bn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vo="\\[\\]\\.:\\/",bg=new RegExp("["+Vo+"]","g"),Wo="[^"+Vo+"]",Eg="[^"+Vo.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",Wo),Tg=/(WCOD+)?/.source.replace("WCOD",Eg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),Cg=new RegExp("^"+wg+Tg+Ag+Rg+"$"),Pg=["material","materials","bones","map"],No=class{constructor(t,e,i){let n=i||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ne=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(t){let e=Cg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Pg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=No;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Ve={low:{id:"low",label:"LOW",renderScale:.72,shadows:!1,shadowSize:512,antialias:!1,viewChunks:2,fogNear:90,fogFar:260,treeDensity:.32,grassDensity:0,waterDetail:0,particleCount:260,buildingDetail:0,anisotropy:1,maxTraffic:6,maxPeds:14,pixelBudget:1,lodDist:120,ao:!1},medium:{id:"medium",label:"MEDIUM",renderScale:.9,shadows:!0,shadowSize:1024,antialias:!1,viewChunks:3,fogNear:140,fogFar:420,treeDensity:.6,grassDensity:0,waterDetail:1,particleCount:700,buildingDetail:1,anisotropy:2,maxTraffic:12,maxPeds:26,pixelBudget:1.4,lodDist:200,ao:!1},high:{id:"high",label:"HIGH",renderScale:1,shadows:!0,shadowSize:2048,antialias:!0,viewChunks:4,fogNear:220,fogFar:700,treeDensity:.9,grassDensity:.35,waterDetail:2,particleCount:1400,buildingDetail:2,anisotropy:4,maxTraffic:20,maxPeds:42,pixelBudget:2,lodDist:320,ao:!0},ultra:{id:"ultra",label:"ULTRA HIGH",renderScale:1,shadows:!0,shadowSize:4096,antialias:!0,viewChunks:5,fogNear:320,fogFar:1e3,treeDensity:1.25,grassDensity:.8,waterDetail:3,particleCount:2600,buildingDetail:3,anisotropy:8,maxTraffic:30,maxPeds:60,pixelBudget:2.6,lodDist:460,ao:!0}},Lg={graphics:"low",masterVolume:.85,musicVolume:.6,sfxVolume:.8,ambientVolume:.7,cameraSensitivity:1,aimSensitivity:1,autoSave:!0,language:"English",buttonSize:1,buttonOpacity:.85,joystickSensitivity:1,brightness:1,resolution:"Auto",fpsLimit:60,shadows:"auto",showFps:!1},Or="worldfrontier3d.save.v1",rh="worldfrontier3d.settings.v1",Br=class{constructor(){this.values={...Lg},this.load()}get preset(){return Ve[this.values.graphics]||Ve.low}set(t,e){this.values[t]=e,this.save(),this.onChange&&this.onChange(t,e)}save(){try{localStorage.setItem(rh,JSON.stringify(this.values))}catch{}}load(){try{let t=localStorage.getItem(rh);t&&Object.assign(this.values,JSON.parse(t))}catch{}Ve[this.values.graphics]||(this.values.graphics="low")}},kr=class{constructor(){this.data=this.fresh()}fresh(){return{version:1,started:!1,savedAt:null,player:{x:12,y:0,z:60,heading:0},money:500,shards:0,items:{medkit:1,repairkit:1},vehiclesOwned:["sedan"],currentVehicle:null,missions:{completed:[],active:null,progress:{}},collectibles:[],explored:[],playtime:0,day:1}}has(){try{return!!localStorage.getItem(Or)}catch{return!1}}load(){try{let t=localStorage.getItem(Or);if(t){let e=JSON.parse(t);return this.data=Object.assign(this.fresh(),e),!0}}catch{}return!1}save(t={}){Object.assign(this.data,t),this.data.savedAt=Date.now();try{return localStorage.setItem(Or,JSON.stringify(this.data)),!0}catch{return!1}}reset(){this.data=this.fresh();try{localStorage.removeItem(Or)}catch{}}};function Xo(){let s=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4,e=0;return s>=8?e+=2:s>=6?e+=1:s<=2&&(e-=2),t>=8?e+=2:t>=6?e+=1:t<=4&&(e-=1),e}function ah(s){let t=Xo();return s==="ultra"?t<3:s==="high"?t<1:s==="medium"?t<-1:!1}function ps(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=oh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=oh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function oh(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new me(o,e,i);return n!==void 0&&(l.gpuType=n),l}var re=(s,t,e)=>s<t?t:s>e?e:s,Ie=(s,t,e)=>s+(t-s)*e,zi=(s,t,e)=>{let i=re((e-s)/(t-s),0,1);return i*i*(3-2*i)},de=(s,t,e,i)=>Ie(s,t,1-Math.exp(-e*i));function oi(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function zr(s,t){let e=s*374761393+t*668265263;return e=(e^e>>13)*1274126177,((e^e>>16)>>>0)/4294967296}function lh(s,t){let e=Math.floor(s),i=Math.floor(t),n=s-e,r=t-i,o=n*n*(3-2*n),a=r*r*(3-2*r),l=zr(e,i),c=zr(e+1,i),h=zr(e,i+1),u=zr(e+1,i+1);return Ie(Ie(l,c,o),Ie(h,u,o),a)}function ms(s,t,e=4){let i=0,n=.5,r=1,o=0;for(let a=0;a<e;a++)i+=lh(s*r,t*r)*n,o+=n,n*=.5,r*=2.07;return i/o}function ch(s,t,e=3){let i=0,n=.5,r=1,o=0;for(let a=0;a<e;a++){let l=1-Math.abs(lh(s*r,t*r)*2-1);i+=l*l*n,o+=n,n*=.5,r*=2.1}return i/o}function hh(){let s=document.createElement("canvas");s.width=128,s.height=128;let t=s.getContext("2d");t.fillStyle="#4b4f57",t.fillRect(0,0,128,128);for(let e=0;e<1400;e++)t.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,t.fillRect(Math.random()*128,Math.random()*128,2,2);t.fillStyle="rgba(240,240,240,.75)";for(let e=6;e<128;e+=42)t.fillRect(62,e,4,22);return s}var he=100,_e=0,ve=470;function wt(s,t){let e=Math.hypot(s,t),i=(ms(s*.0016+11.3,t*.0016-7.1,4)-.45)*130;i+=(ms(s*.0075,t*.0075,3)-.5)*12;let n=zi(700,1500,e);if(i+=ch(s*.0021,t*.0021,3)*210*n,i-=zi(-300,-1600,s)*70,e<ve){let r=zi(ve,ve*.55,e);i=Ie(i,8,r*.95)}return i}function rn(s,t){let e=wt(s,t),i=Math.hypot(s,t);if(e<_e-.4)return"ocean";if(e<_e+2.6)return"beach";if(i<ve)return"city";if(e>120)return"snow";let n=ms(s*9e-4+100,t*9e-4-50,3),r=ms(s*.0013-300,t*.0013+200,3);return e>78&&n<.5?"snow":n>.6&&r<.44?"desert":r>.5?"forest":"plains"}var Hr={ocean:new ut("#26343a"),beach:new ut("#d9c7a1"),plains:new ut("#6f9448"),forest:new ut("#3c6330"),desert:new ut("#c9ae79"),snow:new ut("#e9eef3"),city:new ut("#787c80"),rock:new ut("#8b8578")};function uh(s,t){let i=wt(s+2.5,t)-wt(s-2.5,t),n=wt(s,t+2.5)-wt(s,t-2.5);return Math.min(1,Math.hypot(i,n)/(2.5*2))}var Gr=null;function Ig(){if(Gr)return Gr;let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.fillStyle="#b9bec6",t.fillRect(0,0,256,256);let e=8,i=12,n=256/e,r=256/i;for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=Math.random();t.fillStyle=c>.62?"#ffe9bb":c>.32?"#5d7488":"#33465a",t.fillRect(l*n+n*.14,a*r+r*.16,n*.7,r*.6)}t.strokeStyle="rgba(0,0,0,.3)",t.lineWidth=2;for(let a=0;a<=e;a++)t.beginPath(),t.moveTo(a*n,0),t.lineTo(a*n,256),t.stroke();for(let a=0;a<=i;a++)t.beginPath(),t.moveTo(0,a*r),t.lineTo(256,a*r),t.stroke();let o=new bi(s);return o.wrapS=o.wrapT=tn,o.colorSpace=ee,Gr=o,o}var Yo=null;function Dg(){if(Yo)return Yo;let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,256,256);let e=8,i=12,n=256/e,r=256/i;for(let a=0;a<i;a++)for(let l=0;l<e;l++){let c=Math.random();c>.42&&(t.fillStyle=c>.8?"#fff2c8":c>.6?"#ffd98a":"#b8d0e8",t.fillRect(l*n+n*.14,a*r+r*.16,n*.7,r*.6))}let o=new bi(s);return o.wrapS=o.wrapT=tn,o.colorSpace=ee,Yo=o,o}var Vr=null;function dh(){if(Vr)return Vr;let s=new bi(hh());return s.wrapS=s.wrapT=tn,s.repeat.set(1,6),s.colorSpace=ee,Vr=s,s}var qo=class{constructor(){let t=new en(6e3,6e3,96,96);t.rotateX(-Math.PI/2),this.uniforms={uTime:{value:0},uDetail:{value:0},uDeep:{value:new ut("#123c4f")},uShallow:{value:new ut("#3f93a8")},uSunDir:{value:new R(.5,.8,.2)},uSunColor:{value:new ut("#fff2d0")},uFogColor:{value:new ut("#a8c4d8")},uFogDensity:{value:.002}};let e=new Ge({uniforms:this.uniforms,transparent:!1,vertexShader:`
        uniform float uTime; uniform float uDetail;
        varying vec3 vPos; varying vec3 vN;
        void main(){
          vec3 p = position;
          float amp = uDetail > 0.5 ? 0.35 + uDetail*0.18 : 0.12;
          float t = uTime;
          p.y += sin(p.x*0.08 + t*1.4)*amp + sin(p.z*0.11 - t*1.1)*amp*0.8;
          if (uDetail > 1.5) p.y += sin((p.x+p.z)*0.31 + t*2.3)*amp*0.35;
          vPos = (modelMatrix * vec4(p,1.0)).xyz;
          float dx = cos(p.x*0.08 + t*1.4)*amp*0.08;
          float dz = cos(p.z*0.11 - t*1.1)*amp*0.11;
          vN = normalize(vec3(-dx, 1.0, -dz));
          gl_Position = projectionMatrix * viewMatrix * vec4(vPos,1.0);
        }`,fragmentShader:`
        uniform vec3 uDeep,uShallow,uSunColor,uSunDir,uFogColor; uniform float uFogDensity,uTime;
        varying vec3 vPos; varying vec3 vN;
        void main(){
          vec3 V = normalize(cameraPosition - vPos);
          float fres = pow(1.0 - max(dot(V, normalize(vN)),0.0), 3.0);
          vec3 col = mix(uDeep, uShallow, clamp(vN.y*0.6,0.0,1.0));
          col = mix(col, vec3(0.55,0.72,0.86), fres*0.75);
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(normalize(vN), H),0.0), 90.0);
          col += uSunColor * spec * 0.9;
          float d = length(cameraPosition - vPos);
          col = mix(col, uFogColor, clamp(d*uFogDensity, 0.0, 0.92));
          gl_FragColor = vec4(col, 1.0);
        }`});this.mesh=new rt(t,e),this.mesh.position.y=_e,this.mesh.frustumCulled=!1}update(t,e,i,n){this.uniforms.uTime.value=e,this.uniforms.uDetail.value=n.waterDetail,this.mesh.position.x=Math.round(i.x/200)*200,this.mesh.position.z=Math.round(i.z/200)*200}},Zo=class{constructor(t,e,i){this.world=t,this.cx=e,this.cz=i,this.group=null}key(){return this.cx+","+this.cz}build(t,e){this.dispose();let i=new pe,n=this.cx*he,r=this.cz*he,o=n+he/2,a=r+he/2,l=rn(o,a),c=oi(this.cx*73856093^this.cz*19349663),h=e?24:10,u=new en(he,he,h,h);u.rotateX(-Math.PI/2);let f=u.attributes.position,d=new Float32Array(f.count*3),g=new ut;for(let y=0;y<f.count;y++){let x=f.getX(y)+o,E=f.getZ(y)+a,C=wt(x,E);f.setY(y,C);let T=rn(x,E),A=uh(x,E);g.copy(Hr[T]||Hr.plains),A>.42&&g.lerp(Hr.rock,zi(.42,.85,A)),T==="snow"&&A>.6&&g.lerp(Hr.rock,.5);let U=.9+c()*.2;d[y*3]=g.r*U,d[y*3+1]=g.g*U,d[y*3+2]=g.b*U}u.setAttribute("color",new me(d,3)),u.computeVertexNormals();let _=new ge({vertexColors:!0}),m=new rt(u,_);return m.receiveShadow=t.shadows,m.position.set(o,0,a),m.matrixAutoUpdate=!1,m.updateMatrix(),i.add(m),Math.hypot(o,a)<ve+40&&this.buildCity(i,t,c,n,r,e),this.buildHighways(i,t,n,r),this.buildVegetation(i,t,c,l,e,n,r,o,a),e>0&&l!=="city"&&this.buildRocks(i,c,l,n,r),this.group=i,i}buildCity(t,e,i,n,r,o){let a=[],l=new It(1,1,1),c=40;for(let f=Math.floor(n/c)*c;f<n+he;f+=c)for(let d=Math.floor(r/c)*c;d<r+he;d+=c){if(Math.hypot(f+20,d+20)>ve)continue;let g=f+8,_=d+8,m=c-16,p=c-16;if(g<n||g>n+he||_<r||_>r+he)continue;let y=1+Math.floor(i()*(o?e.buildingDetail>1?3:2:1));for(let x=0;x<y;x++){let E=m/y*(.72+i()*.24),C=p*(.62+i()*.34),T=g+m/y*x+E/2+.4,A=_+p/2+(i()-.5)*3,U=Math.hypot(T,A),v=zi(ve,60,U),b=7+i()*14+v*(26+i()*52);i()<.04&&(b+=40);let D=wt(T,A)-1.5,N=l.clone();N.scale(E,b,C),N.translate(T,D+b/2,A);let J=N.attributes.uv;for(let L=0;L<J.count;L++)J.setXY(L,J.getX(L)*(E/7),J.getY(L)*(b/7));if(a.push(N),o&&e.buildingDetail>1&&i()<.5){let L=l.clone();L.scale(E*.4,2.2,C*.4),L.translate(T,D+b+1.1,A),a.push(L)}}}if(a.length){let f=ps(a,!1),d=new ge({map:Ig(),emissiveMap:Dg(),emissive:new ut(16777215),emissiveIntensity:0});this.buildingMat=d;let g=new rt(f,d);g.castShadow=e.shadows,g.receiveShadow=e.shadows,g.matrixAutoUpdate=!1,g.updateMatrix(),t.add(g),a.forEach(_=>_.dispose())}let h=[],u=40;for(let f=Math.floor(n/u)*u;f<=n+he;f+=u)Math.abs(f)>ve||h.push(this.roadStrip(f,r,10,he,!0));for(let f=Math.floor(r/u)*u;f<=r+he;f+=u)Math.abs(f)>ve||h.push(this.roadStrip(n,f,10,he,!1));if(h.length){let f=ps(h,!1),d=new rt(f,new ge({map:dh(),color:16777215}));d.receiveShadow=e.shadows,d.matrixAutoUpdate=!1,d.updateMatrix(),t.add(d),h.forEach(g=>g.dispose())}}roadStrip(t,e,i,n,r){let a=new en(i,n,1,8);a.rotateX(-Math.PI/2);let l=a.attributes.position;for(let c=0;c<l.count;c++){let h=l.getX(c),u=l.getZ(c),f=r?t+h:t+i/2+h,d=r?e+n/2+u:e+u;l.setY(c,wt(f,d)+.12)}return a.computeVertexNormals(),r?a.translate(t,0,e+n/2):a.translate(t+i/2,0,e),a}buildHighways(t,e,i,n){let r=[];for(let o of[-620,620])i<=o+20&&i+he>=o-20&&r.push(this.roadStrip(o,n,18,he,!0));if(r.length){let o=ps(r,!1),a=new rt(o,new ge({map:dh(),color:12567495}));a.receiveShadow=e.shadows,a.matrixAutoUpdate=!1,a.updateMatrix(),t.add(a),r.forEach(l=>l.dispose())}}buildVegetation(t,e,i,n,r,o,a,l,c){if(n==="city"||n==="ocean")return;let h=e.treeDensity;n==="forest"&&(h*=1.5),n==="desert"&&(h*=.22),n==="snow"&&(h*=.4),n==="beach"&&(h*=.25),r||(h*=.35);let u=Math.floor(h*46);if(u<=0)return;let f=[];for(let U=0;U<u;U++){let v=o+i()*he,b=a+i()*he,D=wt(v,b);D<_e+1.2||uh(v,b)>.55||f.push([v,D,b,.7+i()*.9,i()])}if(!f.length)return;let d=new Ei(.28,.42,3.2,5);d.translate(0,1.6,0);let g=new Fn(2.3,5.4,6);g.translate(0,5.2,0);let _=new ge({color:5981746}),m=new ge({color:16777215,vertexColors:!1}),p=new ls(d,_,f.length),y=new ls(g,m,f.length);y.castShadow=e.shadows,p.castShadow=e.shadows;let x=new $t,E=new ai,C=new R,T=new R,A=new ut;f.forEach(([U,v,b,D,N],J)=>{T.set(U,v,b),C.set(D,D*(.8+N*.6),D),E.setFromAxisAngle(new R(0,1,0),N*Math.PI*2),x.compose(T,E,C),p.setMatrixAt(J,x),y.setMatrixAt(J,x),n==="desert"?A.setHSL(.12,.35,.45+N*.1):n==="snow"?A.setHSL(.35,.15,.42+N*.12):A.setHSL(.26+N*.05,.42,.24+N*.14),y.setColorAt(J,A)}),p.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),t.add(p),t.add(y)}buildRocks(t,e,i,n,r){let o=[],a=new Tr(1,0),l=2+Math.floor(e()*4);for(let f=0;f<l;f++){let d=n+e()*he,g=r+e()*he,_=wt(d,g);if(_<_e+.5)continue;let m=.7+e()*2.2,p=a.clone();p.scale(m,m*(.5+e()*.6),m),p.rotateY(e()*6.28),p.translate(d,_+m*.25,g),o.push(p)}if(!o.length)return;let c=ps(o,!1),h=new ge({color:i==="desert"?12099964:9145222}),u=new rt(c,h);u.matrixAutoUpdate=!1,u.updateMatrix(),t.add(u),o.forEach(f=>f.dispose())}dispose(){this.group&&(this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.map!==Gr&&i.map,i.dispose()})}),this.group.parent&&this.group.parent.remove(this.group),this.group=null)}},Wr=class{constructor(t){this.scene=t,this.chunks=new Map,this.water=new qo,t.add(this.water.mesh),this.preset=null,this.root=new pe,t.add(this.root)}update(t,e,i,n){this.preset!==e&&(this.preset=e,this.rebuildAll());let r=Math.floor(t.x/he),o=Math.floor(t.z/he),a=e.viewChunks,l=new Set;for(let c=-a;c<=a;c++)for(let h=-a;h<=a;h++){let u=Math.hypot(h,c);if(u>a+.35)continue;let f=r+h,d=o+c,g=f+","+d;if(l.add(g),!this.chunks.has(g)){let _=new Zo(this,f,d);_.build(e,u<=a-1.2?1:0),this.chunks.set(g,_),this.root.add(_.group)}}for(let[c,h]of this.chunks)l.has(c)||(h.dispose(),this.chunks.delete(c));this.water.update(i,n,t,e)}rebuildAll(){for(let t of this.chunks.values())t.dispose();this.chunks.clear()}setNight(t){let e=re(t,0,1);for(let i of this.chunks.values())i.buildingMat&&(i.buildingMat.emissiveIntensity=e*1.15)}isWater(t,e){return wt(t,e)<_e}groundY(t,e){return Math.max(wt(t,e),_e)}};var Ug=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}`,Ng=`
uniform vec3 uSunDir, uZenith, uHorizon, uSunColor, uNight;
uniform float uStars, uClouds;
varying vec3 vDir;
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
void main(){
  vec3 d = normalize(vDir);
  float h = clamp(d.y*0.5+0.5, 0.0, 1.0);
  float t = pow(clamp(d.y,0.0,1.0), 0.55);
  vec3 col = mix(uHorizon, uZenith, t);
  // sun disc + glow
  float sd = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * pow(sd, 900.0) * 2.2;
  col += uSunColor * pow(sd, 12.0) * 0.28;
  // stars
  if (uStars > 0.01 && d.y > 0.02) {
    vec3 q = floor(d*260.0);
    float s = step(0.9975, hash(q));
    col += vec3(s) * uStars * (0.6 + 0.4*sin(hash(q+1.0)*30.0));
  }
  // thin cloud band
  float band = smoothstep(0.0, 0.35, d.y) * (1.0 - smoothstep(0.5, 0.9, d.y));
  col = mix(col, uNight, band * uClouds * 0.35);
  gl_FragColor = vec4(col, 1.0);
}`,Xr=class{constructor(t,e){this.scene=t,this.renderer=e,this.timeOfDay=9.5,this.daySpeed=1/120,this.weather="clear",this.weatherTarget="clear",this.cloudiness=.25,this.fogDensity=.0018,this.wind=1,this.flash=0,this.uniforms={uSunDir:{value:new R(.4,.8,.2)},uZenith:{value:new ut("#2f6fb5")},uHorizon:{value:new ut("#bcd6ea")},uSunColor:{value:new ut("#fff3cf")},uNight:{value:new ut("#0a0f1c")},uStars:{value:0},uClouds:{value:.25}};let i=new ii(2400,32,20);this.dome=new rt(i,new Ge({uniforms:this.uniforms,vertexShader:Ug,fragmentShader:Ng,side:Le,depthWrite:!1,fog:!1})),this.dome.frustumCulled=!1,t.add(this.dome),this.sun=new Ir(16773840,2.2),this.sun.castShadow=!0,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=400,this.sun.shadow.bias=-8e-4,this.setShadowQuality(1024,!1),t.add(this.sun),t.add(this.sun.target),this.hemi=new Cr(12572927,4867126,.85),t.add(this.hemi),this.ambient=new Dr(16777215,.12),t.add(this.ambient),t.fog=new gr(11060440,.0018);let n=this.cloudTexture(),r=new as({map:n,transparent:!0,opacity:.85,depthWrite:!1,fog:!1});this.clouds=[];let o=oi(99);for(let a=0;a<46;a++){let l=new yr(r),c=900+o()*2200,h=o()*Math.PI*2;l.position.set(Math.cos(h)*c,420+o()*320,Math.sin(h)*c);let u=380+o()*620;l.scale.set(u,u*.55,1),l.userData.speed=.6+o()*1.6,this.clouds.push(l),t.add(l)}this.precip=this.makePrecipitation(2600),t.add(this.precip.points),this.rainMat=this.precip.material,this.boltLight=new Lr(14477055,0,900),t.add(this.boltLight)}cloudTexture(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),i=e.createRadialGradient(64,64,4,64,64,62);i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(.5,"rgba(255,255,255,0.45)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,128,128);let n=new bi(t);return n.colorSpace=ee,n}makePrecipitation(t){let e=new Ee,i=new Float32Array(t*3),n=new Float32Array(t);for(let a=0;a<t;a++)i[a*3]=(Math.random()-.5)*120,i[a*3+1]=Math.random()*60,i[a*3+2]=(Math.random()-.5)*120,n[a]=18+Math.random()*22;e.setAttribute("position",new me(i,3));let r=new cs({color:14478072,size:.62,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,map:this.dropTexture(),alphaTest:.02}),o=new vr(e,r);return o.frustumCulled=!1,{points:o,material:r,vel:n,max:t,active:0}}dropTexture(){let t=document.createElement("canvas");t.width=32,t.height=32;let e=t.getContext("2d"),i=e.createLinearGradient(16,0,16,32);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.5,"rgba(255,255,255,.95)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(13,0,6,32),new bi(t)}setShadowQuality(t,e){if(this.sun.castShadow=e,e){this.sun.shadow.mapSize.set(t,t);let i=70;this.sun.shadow.camera.left=-i,this.sun.shadow.camera.right=i,this.sun.shadow.camera.top=i,this.sun.shadow.camera.bottom=-i,this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}}setWeather(t){this.weatherTarget=t,this.precip.active=t==="rain"||t==="storm"||t==="snow"?1:0,t==="rain"?(this.cloudiness=.85,this.wind=1.6):t==="storm"?(this.cloudiness=1,this.wind=2.6):t==="fog"?(this.cloudiness=.5,this.wind=.4):t==="snow"?(this.cloudiness=.9,this.wind=1.2):t==="cloudy"?(this.cloudiness=.6,this.wind=1.1):(this.cloudiness=.22,this.wind=.8)}update(t,e,i){this.timeOfDay=(this.timeOfDay+t*this.daySpeed*24/24*24)%24;let n=(this.timeOfDay-6)/24*Math.PI*2,r=new R(Math.cos(n)*.55,Math.sin(n),Math.sin(n*.6)*.35).normalize();this.uniforms.uSunDir.value.copy(r);let o=re(zi(-.12,.22,r.y),0,1),a=1-Math.abs(re(r.y*3.2,-1,1)),l=new ut("#2c6cb0"),c=new ut("#05080f"),h=new ut("#c3dcf0"),u=new ut("#f6a768"),f=new ut("#111a2c"),d=c.clone().lerp(l,o),g=f.clone().lerp(h,o).lerp(u,a*.75*o),_=new ut("#8d97a2").lerp(d,.25);d.lerp(_,this.cloudiness*.55),g.lerp(_,this.cloudiness*.45),this.uniforms.uZenith.value.copy(d),this.uniforms.uHorizon.value.copy(g),this.uniforms.uSunColor.value.setRGB(1,Ie(.55,.95,o),Ie(.35,.82,o)),this.uniforms.uStars.value=re(1-o*2.2,0,1),this.uniforms.uClouds.value=this.cloudiness,this.uniforms.uNight.value.copy(c),this.sun.position.copy(e).add(r.clone().multiplyScalar(180)),this.sun.target.position.copy(e),this.sun.intensity=Ie(.02,3.4,o)*Ie(1,.4,this.cloudiness),this.sun.color.copy(this.uniforms.uSunColor.value),this.hemi.intensity=Ie(.42,1.15,o)*Ie(1,.75,this.cloudiness),this.hemi.color.copy(d).lerp(new ut(o>.4?"#ffffff":"#8fb4ff"),.35),this.ambient.intensity=Ie(.22,.26,o)+this.flash*2.4,this.dome.position.copy(e);let m,p=1/Math.max(120,i.fogFar);this.weatherTarget==="fog"?m=p*2.6:this.weatherTarget==="storm"?m=p*1.5:this.weatherTarget==="rain"?m=p*1.2:this.weatherTarget==="snow"?m=p*1.35:m=p*.9,this.fogDensity=Ie(this.fogDensity,m,1-Math.exp(-.6*t)),this.scene.fog.density=this.fogDensity,this.scene.fog.color.copy(g);let y=this.clouds;for(let D=0;D<y.length;D++){let N=y[D];N.position.x+=this.wind*N.userData.speed*t*3.2,N.position.x-e.x>2600&&(N.position.x-=5200),N.position.x-e.x<-2600&&(N.position.x+=5200),N.position.z+=Math.sin((D+this.timeOfDay)*.3)*t*.6,N.material.opacity=.15+this.cloudiness*.75,N.visible=this.cloudiness>.12}let x=this.weatherTarget,E=x==="rain"||x==="storm",C=x==="snow",T=E||C?1:0;this.precip.active=Ie(this.precip.active,T,1-Math.exp(-1.4*t));let A=Math.floor(this.precip.max*re(this.precip.active*(i.particleCount/2600+.6),0,1));this.precip.points.geometry.setDrawRange(0,A),this.rainMat.opacity=this.precip.active*.95,this.rainMat.size=C?.95:1.05,this.rainMat.color.setHex(C?16777215:13623536);let U=this.precip.points.geometry.attributes.position,v=U.array,b=C?.28:1;for(let D=0;D<A;D++){let N=D*3;v[N+1]-=this.precip.vel[D]*t*b,v[N]+=(C?Math.sin(D+this.timeOfDay*3)*2.2:-2.5)*t*this.wind,v[N+1]<-6&&(v[N]=(Math.random()-.5)*130,v[N+1]=55+Math.random()*12,v[N+2]=(Math.random()-.5)*130)}return U.needsUpdate=!0,this.precip.points.position.set(e.x,e.y,e.z),x==="storm"&&this.flash<=0&&Math.random()<t*.55&&(this.flash=1,this.boltLight.position.set(e.x+(Math.random()-.5)*400,e.y+180,e.z+(Math.random()-.5)*400),this.boltLight.intensity=2600,this.onThunder&&this.onThunder()),this.flash>0&&(this.flash=Math.max(0,this.flash-t*4.5),this.boltLight.intensity=this.flash*2400),this.weather=x,{dayF:o,sunDir:r}}get clockString(){let t=Math.floor(this.timeOfDay),e=Math.floor(this.timeOfDay%1*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}};var fh=14198904,Jo=3108751,$o=2831168,Yr=class{constructor(t){this.scene=t,this.root=new pe,this.pos=new R(12,0,60),this.vel=new R,this.heading=0,this.onGround=!0,this.state="idle",this.speed=0,this.walkPhase=0,this.radius=.42,this.height=1.75,this.crouch=0,this.swimming=!1,this.sitting=!1,this.climbing=!1,this.vehicle=null,this.health=100,this.stamina=100,this.build(),t.add(this.root)}build(){let t=h=>new ge({color:h}),e=new pe;this.body=new pe,e.add(this.body);let i=new rt(new It(.62,.72,.34),t(Jo));i.position.y=1.18,i.castShadow=!0,this.body.add(i);let n=new rt(new It(.55,.22,.32),t($o));n.position.y=.78,this.body.add(n);let r=new rt(new ii(.21,12,10),t(fh));r.position.y=1.72,r.castShadow=!0,this.head=r,this.body.add(r);let o=new rt(new ii(.215,12,8,0,6.3,0,1.2),t(2365970));o.position.y=1.735,this.body.add(o);let a=new rt(new It(.06,.07,.07),t(fh));a.position.set(0,1.71,-.2),this.body.add(a);let l=new It(.16,.62,.18);this.armL=new rt(l,t(Jo)),this.armL.position.set(-.38,1.18,0),this.armR=new rt(l,t(Jo)),this.armR.position.set(.38,1.18,0),this.armL.castShadow=this.armR.castShadow=!0,this.body.add(this.armL,this.armR);let c=new It(.2,.76,.22);this.legL=new rt(c,t($o)),this.legL.position.set(-.15,.42,0),this.legR=new rt(c,t($o)),this.legR.position.set(.15,.42,0),this.legL.castShadow=this.legR.castShadow=!0,this.body.add(this.legL,this.legR),[this.armL,this.armR].forEach(h=>{h.geometry.translate(0,-.31,0),h.position.y=1.48}),[this.legL,this.legR].forEach(h=>{h.geometry.translate(0,-.38,0),h.position.y=.8}),this.root.add(e),this.model=e}respawn(t,e){this.pos.set(t,wt(t,e)+.1,e),this.vel.set(0,0,0)}update(t,e,i,n,r){let o=wt(this.pos.x,this.pos.z),a=o<_e-.4;if(this.vehicle){this.syncInVehicle(),this.animate(t,0);return}let l=e.run?1:0,c=e.crouch;this.crouch=de(this.crouch,c?1:0,12,t);let h=i.yaw,u=e.moveX,f=e.moveZ,d=Math.hypot(u,f);d>1&&(u/=d,f/=d);let g=Math.cos(h)*u-Math.sin(h)*f,_=Math.sin(h)*u+Math.cos(h)*f,m=3.4;l&&this.stamina>2&&(m=7.2),e.sprint&&this.stamina>2&&(m=10.5),this.crouch>.5&&(m=1.7),a&&(m=2.6),this.climbing&&(m=1.2);let p=Math.hypot(g,_)>.05,y=g*m,x=_*m,E=this.onGround?12:4;this.vel.x=de(this.vel.x,y,E,t),this.vel.z=de(this.vel.z,x,E,t);let C=(l||e.sprint)&&p&&this.onGround&&!a;if(this.stamina=re(this.stamina+(C?-18:14)*t,0,100),a){this.swimming=!0;let A=_e+.55;this.pos.y=de(this.pos.y,A+(e.jump?.6:0),6,t),this.vel.y=0,this.onGround=!1}else this.swimming=!1,this.vel.y-=22*t,e.jump&&this.onGround&&(this.vel.y=7.4,this.onGround=!1),this.pos.y+=this.vel.y*t,this.pos.y<=o+.02&&(this.pos.y=o,this.vel.y=0,this.onGround=!0);let T=wt(this.pos.x+g,this.pos.z+_)-o;this.climbing=!a&&T>.55&&(e.jump||this.climbing)&&p,this.climbing&&(this.pos.y+=2.1*t,this.vel.y=0,this.pos.x+=g*.5*t,this.pos.z+=_*.5*t),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,p&&(this.heading=Math.atan2(this.vel.x,this.vel.z)),this.speed=Math.hypot(this.vel.x,this.vel.z),this.root.position.copy(this.pos),this.root.rotation.y=this.heading,this.animate(t,this.speed),this.state=this.swimming?"swimming":this.climbing?"climbing":this.onGround?this.crouch>.5?"crouching":this.speed>8?"sprinting":this.speed>4.5?"running":this.speed>.4?"walking":"idle":"jumping"}animate(t,e){let i=re(e/6,0,1.25);this.walkPhase+=t*(3+e*1.5);let n=Math.sin(this.walkPhase*2.2),r=Math.sin(this.walkPhase*2.2+Math.PI);this.swimming?(this.armL.rotation.x=-1.4+Math.sin(this.walkPhase*3)*.7,this.armR.rotation.x=-1.4+Math.sin(this.walkPhase*3+1)*.7,this.legL.rotation.x=Math.sin(this.walkPhase*3)*.4,this.legR.rotation.x=Math.sin(this.walkPhase*3+1)*.4,this.body.rotation.x=-1.1,this.body.position.y=0):this.sitting?(this.body.rotation.x=0,this.body.position.y=-.35,this.legL.rotation.x=-1.5,this.legR.rotation.x=-1.5,this.armL.rotation.x=-.6,this.armR.rotation.x=-.6):this.climbing?(this.body.rotation.x=0,this.armL.rotation.x=-2.2+n*.6,this.armR.rotation.x=-2.2+r*.6,this.legL.rotation.x=n*.7,this.legR.rotation.x=r*.7):(this.body.rotation.x=0,this.body.position.y=-this.crouch*.45,this.legL.rotation.x=n*i*.85,this.legR.rotation.x=r*i*.85,this.armL.rotation.x=r*i*.7,this.armR.rotation.x=n*i*.7,this.body.position.y+=Math.abs(Math.sin(this.walkPhase*2.2))*i*.05)}syncInVehicle(){let t=this.vehicle;this.root.position.copy(t.root.position),this.root.position.y+=.6,this.root.rotation.y=t.heading,this.root.visible=!1}},Fg={sedan:{name:"Sedan",kind:"car",w:1.9,h:1.35,l:4.4,color:10134706,maxSpeed:34,accel:12,turn:1.7,mass:1,seats:4},sports:{name:"Sports Car",kind:"car",w:2,h:1.1,l:4.3,color:12597547,maxSpeed:52,accel:20,turn:1.9,mass:.85,seats:2},supercar:{name:"Supercar",kind:"car",w:2.05,h:1,l:4.6,color:15844367,maxSpeed:66,accel:26,turn:2,mass:.8,seats:2},bike:{name:"Motorcycle",kind:"bike",w:.8,h:1.1,l:2.1,color:2238513,maxSpeed:44,accel:22,turn:2.4,mass:.4,seats:1},scooter:{name:"Scooter",kind:"bike",w:.7,h:1,l:1.8,color:4172277,maxSpeed:22,accel:12,turn:2.6,mass:.3,seats:1},bus:{name:"City Bus",kind:"big",w:2.6,h:3.1,l:11,color:3050327,maxSpeed:24,accel:7,turn:1,mass:3,seats:30},truck:{name:"Truck",kind:"big",w:2.5,h:3,l:8.5,color:13849600,maxSpeed:26,accel:8,turn:1.2,mass:2.6,seats:2},boat:{name:"Motorboat",kind:"boat",w:2.4,h:1.2,l:6,color:15528177,maxSpeed:30,accel:10,turn:1.4,mass:1.4,seats:4},heli:{name:"Helicopter",kind:"air",w:3,h:2.2,l:6.5,color:3426654,maxSpeed:55,accel:14,turn:1.6,mass:1.6,seats:3},plane:{name:"Light Plane",kind:"air",w:9,h:2.2,l:8,color:14673641,maxSpeed:85,accel:16,turn:1.1,mass:2,seats:2}},wi=class{constructor(t,e){this.type=t,this.cfg=Fg[t],this.scene=e,this.root=new pe,this.pos=new R,this.speed=0,this.heading=0,this.steer=0,this.pitch=0,this.roll=0,this.damage=0,this.fuel=100,this.wheels=[],this.rotor=null,this.built=!1,this.build(),e.add(this.root)}build(){let t=this.cfg,e=(l,c={})=>new ge({color:l,...c}),i=new pe,n=e(t.color),r=e(2240572,{transparent:!0,opacity:.72}),o=e(1710620),a=new ge({color:16773808,emissive:16769162,emissiveIntensity:.6});if(t.kind==="air"){let l=new rt(new us(t.h*.32,t.l*.6,6,10),n);l.rotation.z=Math.PI/2,l.position.y=t.h*.5,i.add(l);let c=new rt(new ii(t.h*.34,10,8),r);c.position.set(0,t.h*.62,-t.l*.18),c.scale.set(1,.8,1.5),i.add(c);let h=new rt(new It(.25,t.h*.9,t.l*.4),n);if(h.position.set(0,t.h*.55,t.l*.45),i.add(h),this.type==="heli"){let u=new rt(new It(t.w*2.2,.06,.34),o);u.position.y=t.h*1.05,i.add(u),this.rotor=u;let f=new rt(new It(.08,.9,.14),o);f.position.set(.2,t.h*.6,t.l*.6),i.add(f),this.tailRotor=f;let d=new It(.12,.1,t.l*.7);[-.6,.6].forEach(g=>{let _=new rt(d,o);_.position.set(g,.08,0),i.add(_);let m=new rt(new It(.1,.5,.1),o);m.position.set(g,.3,0),i.add(m)})}else{let u=new rt(new It(t.w*2,.16,1.5),n);u.position.set(0,t.h*.5,-.2),i.add(u);let f=new rt(new It(.14,1.1,.9),n);f.position.set(0,t.h*.85,t.l*.45),i.add(f);let d=new rt(new It(.1,1.6,.08),o);d.position.set(0,t.h*.5,-t.l*.52),i.add(d),this.rotor=d}}else if(t.kind==="boat"){let l=new rt(new It(t.w,t.h*.55,t.l),n);l.position.y=t.h*.3,i.add(l);let c=new rt(new Fn(t.w*.5,t.l*.45,4),n);c.rotation.x=-Math.PI/2,c.rotation.y=Math.PI/4,c.position.set(0,t.h*.3,-t.l*.62),c.scale.set(1,1,.55),i.add(c);let h=new rt(new It(t.w*.7,t.h*.5,t.l*.32),r);h.position.set(0,t.h*.72,t.l*.05),i.add(h)}else if(t.kind==="bike"){let l=new rt(new It(t.w*.5,t.h*.35,t.l*.75),n);l.position.y=t.h*.45,i.add(l);let c=new rt(new It(t.w*.45,t.h*.2,t.l*.3),n);c.position.set(0,t.h*.62,-.1),i.add(c);let h=new rt(new It(t.w*.4,.12,t.l*.3),o);h.position.set(0,t.h*.68,t.l*.18),i.add(h);let u=new rt(new It(t.w*.9,.07,.07),o);u.position.set(0,t.h*.78,-t.l*.32),i.add(u);let f=new rt(new us(.16,.5,4,8),e(2899536));f.position.set(0,t.h*.95,t.l*.1),i.add(f)}else{let l=t.h,c=new rt(new It(t.w,l*.45,t.l),n);if(c.position.y=l*.42,i.add(c),t.kind==="big"){let g=new rt(new It(t.w*.95,l*.5,t.l*.28),r);g.position.set(0,l*.78,-t.l*.32),i.add(g);let _=new rt(new It(t.w*.98,l*.62,t.l*.6),n);_.position.set(0,l*.72,t.l*.14),i.add(_)}else{let g=new rt(new It(t.w*.86,l*.38,t.l*.45),r);g.position.set(0,l*.72,t.l*.02),i.add(g);let _=new rt(new It(t.w*.82,l*.1,t.l*.4),n);if(_.position.set(0,l*.92,t.l*.02),i.add(_),this.type==="supercar"||this.type==="sports"){let m=new rt(new It(t.w*.9,.08,.4),o);m.position.set(0,l*.78,t.l*.48),i.add(m)}}[-1,1].forEach(g=>{let _=new rt(new It(.28,.16,.08),a);_.position.set(g*t.w*.32,l*.45,-t.l*.5),i.add(_);let m=new rt(new It(.24,.12,.06),new ge({color:16724770,emissive:8917248,emissiveIntensity:.7}));m.position.set(g*t.w*.34,l*.45,t.l*.5),i.add(m)});let h=t.kind==="big"?.55:t.kind==="bike"?.34:.36,u=new Ei(h,h,.26,10);u.rotateZ(Math.PI/2);let f=e(1052690);(t.kind==="big"?[-.34,-.14,.26,.44]:[-.32,.32]).forEach(g=>{[-1,1].forEach(_=>{let m=new rt(u,f);m.position.set(_*(t.w*.5),h,g*t.l),m.castShadow=!0,i.add(m),this.wheels.push(m)})})}i.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),this.model=i,this.root.add(i),this.built=!0}place(t,e,i=0){this.pos.set(t,wt(t,e)+.15,e),this.heading=i,this.speed=0,this.root.position.copy(this.pos),this.root.rotation.y=i}update(t,e,i,n=!0){let r=this.cfg,o=r.kind==="air",a=r.kind==="boat",l=r.kind==="bike",c=n&&e.throttle||0,h=n&&e.steer||0,u=n&&e.brake||0;n||(c=e.throttle||0,h=e.steer||0);let f=r.maxSpeed*(1-this.damage*.004),d=r.accel;u>.1?this.speed=de(this.speed,0,4.5*u,t):c!==0?this.speed+=c*d*t*(1-Math.abs(this.speed)/(f*1.35)):this.speed=de(this.speed,0,o?.3:.9,t),this.speed=re(this.speed,-f*.35,f);let g=re(Math.abs(this.speed)/6,0,1);this.steer=de(this.steer,h,8,t),this.heading+=this.steer*r.turn*t*g*Math.sign(this.speed||1)*(l?1.25:1);let _=Math.sin(this.heading),m=Math.cos(this.heading),p=this.pos.x+_*this.speed*t,y=this.pos.z+m*this.speed*t;if(o){let x=n?e.jump?1:e.crouch?-1:0:0;this.pos.y+=x*18*t+(this.speed>12?1.6*t:0),this.pos.y=re(this.pos.y,wt(p,y)+1.2,700),this.pos.x=p,this.pos.z=y,this.rotor&&(this.rotor.rotation.y+=t*34),this.tailRotor&&(this.tailRotor.rotation.x+=t*40),this.pitch=de(this.pitch,-this.speed*.004-x*.1,4,t),this.roll=de(this.roll,-this.steer*.28,5,t)}else if(a){let x=wt(p,y)<_e;this.pos.x=p,this.pos.z=y;let E=_e+.35+Math.sin(performance.now()*.002)*.12;this.pos.y=de(this.pos.y,x?E:wt(p,y)+.4,5,t),x||(this.speed=de(this.speed,0,2,t)),this.pitch=de(this.pitch,-this.speed*.006,3,t),this.roll=de(this.roll,this.steer*.2*g,4,t)}else{this.pos.x=p,this.pos.z=y;let x=wt(this.pos.x,this.pos.z),E=Math.max(x,_e-.2)+.15;this.pos.y=de(this.pos.y,E,10,t);let C=wt(this.pos.x+_*3,this.pos.z+m*3),T=wt(this.pos.x-_*3,this.pos.z-m*3);this.pitch=de(this.pitch,re((T-C)*.12,-.4,.4),6,t),this.roll=de(this.roll,-this.steer*re(this.speed/f,0,1)*.14,5,t);let A=this.speed*t*2.2;this.wheels.forEach(U=>{U.rotation.x+=A})}return this.root.position.copy(this.pos),this.root.rotation.set(this.pitch,this.heading,this.roll,"YXZ"),!o&&Math.abs(this.speed)>f*.75&&wt(this.pos.x,this.pos.z)>this.pos.y+1.6&&(this.speed*=.3,this.damage=Math.min(100,this.damage+6)),this}get speedKmh(){return Math.abs(this.speed)*3.6}},ph=[3108751,9383727,3116895,7294863,13619151,3355443,14200944],qr=class{constructor(t,e){this.root=new pe;let i=ph[Math.floor(e()*ph.length)],n=c=>new ge({color:c}),r=new rt(new It(.5,.65,.3),n(i));r.position.y=1.15,this.root.add(r);let o=new rt(new ii(.18,8,8),n(14198904));o.position.y=1.6,this.root.add(o);let a=new It(.17,.7,.19);a.translate(0,-.35,0),this.legL=new rt(a,n(2831168)),this.legL.position.set(-.13,.8,0),this.legR=new rt(a,n(2831168)),this.legR.position.set(.13,.8,0);let l=new It(.13,.55,.15);l.translate(0,-.27,0),this.armL=new rt(l,n(i)),this.armL.position.set(-.32,1.42,0),this.armR=new rt(l,n(i)),this.armR.position.set(.32,1.42,0),this.root.add(this.legL,this.legR,this.armL,this.armR),this.root.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),t.add(this.root),this.phase=e()*6,this.speed=1.1+e()*.7,this.target=new R,this.alert=0}update(t,e){let i=new R().subVectors(this.target,this.root.position);i.y=0,i.length()<1.2&&this.pickTarget(),i.normalize();let r=this.root.position.distanceTo(e);this.alert=de(this.alert,r<7?1:0,3,t);let o=this.speed*(1-this.alert*.55);this.root.position.addScaledVector(i,o*t),this.root.position.y=wt(this.root.position.x,this.root.position.z),this.root.rotation.y=Math.atan2(i.x,i.z)+this.alert*Math.atan2(e.x-this.root.position.x,e.z-this.root.position.z)*.6,this.phase+=t*(3+o*1.6);let a=Math.sin(this.phase*2);this.legL.rotation.x=a*.6,this.legR.rotation.x=-a*.6,this.armL.rotation.x=-a*.5,this.armR.rotation.x=a*.5}pickTarget(t=Math.random){let e=t()*Math.PI*2,i=12+t()*40;this.target.set(this.root.position.x+Math.cos(e)*i,0,this.root.position.z+Math.sin(e)*i)}},Zr=class{constructor(t,e){this.root=new pe;let i=new rt(new It(.55,.6,1.25),new ge({color:9071434}));i.position.y=.95,this.root.add(i);let n=new rt(new It(.24,.55,.24),new ge({color:9071434}));n.position.set(0,1.35,-.55),this.root.add(n);let r=new rt(new It(.26,.26,.5),new ge({color:10255448}));r.position.set(0,1.6,-.75),this.root.add(r);let o=new It(.12,.72,.12);o.translate(0,-.36,0),this.legs=[],[[-.2,-.42],[.2,-.42],[-.2,.42],[.2,.42]].forEach(([a,l])=>{let c=new rt(o,new ge({color:7033398}));c.position.set(a,.72,l),this.root.add(c),this.legs.push(c)}),this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),t.add(this.root),this.phase=e()*6,this.speed=1.4+e(),this.target=new R,this.flee=0}update(t,e){let i=this.root.position.distanceTo(e);this.flee=de(this.flee,i<16?1:0,2,t);let n=new R().subVectors(this.target,this.root.position);if(n.y=0,n.length()<1.5&&this.pickTarget(),n.normalize(),this.flee>.3){let a=new R().subVectors(this.root.position,e).setY(0).normalize();n.lerp(a,this.flee).normalize()}let r=this.speed*(1+this.flee*3.5);this.root.position.addScaledVector(n,r*t),this.root.position.y=wt(this.root.position.x,this.root.position.z),this.root.rotation.y=Math.atan2(n.x,n.z),this.phase+=t*(4+r);let o=Math.sin(this.phase*2);this.legs.forEach((a,l)=>{a.rotation.x=o*.7*(l%2?1:-1)})}pickTarget(t=Math.random){let e=t()*Math.PI*2,i=15+t()*45;this.target.set(this.root.position.x+Math.cos(e)*i,0,this.root.position.z+Math.sin(e)*i)}},Jr=class{constructor(t,e){let i=["sedan","sports","truck","bus"],n=i[Math.floor(e()*i.length)];this.v=new wi(n,t),this.axis=e()<.5?"x":"z",this.dir=e()<.5?1:-1,this.speed=8+e()*8,this.lane=3,this.stuck=0,this.alive=!0}spawn(t,e,i){let r=Math.round((this.axis==="x"?e:t)/40)*40;this.axis==="x"?this.v.place(t,r+this.dir*this.lane,this.dir>0?Math.PI/2:-Math.PI/2):this.v.place(r+this.dir*this.lane,e,this.dir>0?0:Math.PI),this.v.speed=this.speed}update(t,e){let n=this.v.pos,r=this.axis==="x"?Math.abs(n.z/40%1-0):Math.abs(n.x/40%1-0),o=1;n.distanceTo(e)<14&&(o=.2),Math.random()<t*.15&&(this.axis=this.axis==="x"?"z":"x",this.dir=Math.random()<.5?1:-1),this.v.update(t,{throttle:o,steer:0,brake:0},null,!1);let a=this.axis==="x"?this.dir*this.lane:this.dir*this.lane,l=this.axis==="x"?Math.round(n.z/40)*40+a-n.z:Math.round(n.x/40)*40+a-n.x,c=(this.axis==="x",l);this.v.heading+=re(c*.03,-.05,.05),Math.hypot(n.x,n.z)>ve+60&&(this.axis=this.axis==="x"?"z":"x",this.dir=-this.dir)}dispose(t){t.remove(this.v.root)}};var $r=class{constructor(t,e){this.camera=t,this.yaw=0,this.pitch=.28,this.dist=7,this.targetDist=7,this.sensitivity=1,this.pos=new R,this.look=new R,this.shake=0}rotate(t,e){this.yaw-=t*.0032*this.sensitivity,this.pitch=re(this.pitch+e*.0028*this.sensitivity,-.35,1.15)}update(t,e,i,n){let r=i==="vehicle"?11.5:i==="air"?18:7,o=i==="vehicle"?2.2:i==="air"?4:1.55;this.targetDist=r,this.dist=de(this.dist,this.targetDist,4,t);let a=new R(e.x,e.y+o,e.z),l=Math.cos(this.pitch),c=Math.sin(this.pitch),h=new R(a.x+Math.sin(this.yaw)*this.dist*l,a.y+c*this.dist,a.z+Math.cos(this.yaw)*this.dist*l),u=wt(h.x,h.z)+1.2;h.y<u&&(h.y=u),this.pos.lerp(h,1-Math.exp(-14*t)),this.look.lerp(a,1-Math.exp(-18*t)),this.camera.position.copy(this.pos),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2),this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake),this.camera.lookAt(this.look)}},jr=class{constructor(t,e=3589887){this.group=new pe;let i=new Si({color:e,transparent:!0,opacity:.34,depthWrite:!1,side:Qe}),n=new rt(new Ei(1.4,1.4,26,14,1,!0),i);n.position.y=13;let r=new rt(new Rr(2.4,.16,8,28),new Si({color:e}));r.rotation.x=Math.PI/2,r.position.y=.6,this.group.add(n,r),this.group.visible=!1,t.add(this.group),this.t=0}showAt(t,e,i){this.group.position.set(t,wt(t,e),e),this.group.visible=!0,i!==void 0&&this.group.traverse(n=>{n.material&&n.material.color.setHex(i)})}hide(){this.group.visible=!1}update(t){this.group.visible&&(this.t+=t,this.group.children[1].rotation.z+=t*1.4,this.group.children[0].material.opacity=.22+Math.sin(this.t*3)*.1)}},gs=[{id:"m_delivery1",type:"delivery",title:"Courier Run",desc:"Pick up the parcel at the depot, deliver it to the harbour office.",reward:450,time:240},{id:"m_race1",type:"race",title:"Highway Sprint",desc:"Hit all 5 checkpoints on the ring road before the timer runs out.",reward:800,time:150},{id:"m_collect1",type:"collect",title:"Signal Hunt",desc:"Recover 3 signal shards scattered around the city outskirts.",reward:600,time:300},{id:"m_explore1",type:"explore",title:"Northern Peaks",desc:"Reach the mountain viewpoint to the north.",reward:350,time:400},{id:"m_delivery2",type:"delivery",title:"Farm Supplies",desc:"Haul supplies from the city market to the countryside farm.",reward:500,time:260},{id:"m_race2",type:"race",title:"Dock Circuit",desc:"Clear 4 checkpoints around the docks area.",reward:700,time:140},{id:"m_explore2",type:"explore",title:"Coastal Watch",desc:"Find the lighthouse on the western coast.",reward:400,time:420}],Kr=class{constructor(t,e,i){this.scene=t,this.save=e,this.ui=i,this.beacon=new jr(t,3589887),this.raceBeacon=new jr(t,16763955),this.active=null,this.rng=oi(2024),this.markers=[]}available(){let t=this.save.data.missions.completed||[];return gs.filter(e=>!t.includes(e.id))}missionPoints(t){let e=oi(t.id.split("").reduce((n,r)=>n+r.charCodeAt(0),7)),i=(n,r,o)=>{let a=o+e()*1.2,l=n+e()*(r-n);return{x:Math.cos(a)*l,z:Math.sin(a)*l}};if(t.type==="delivery")return[i(40,120,.4),i(160,300,2.1)];if(t.type==="race"){let n=[];for(let r=0;r<5;r++){let o=r/5*Math.PI*2;n.push({x:Math.cos(o)*(150+e()*90),z:Math.sin(o)*(150+e()*90)})}return n}return t.type==="collect"?[i(60,140,1.2),i(60,200,3.4),i(60,200,5.2)]:[i(320,460,1)]}start(t){let e=this.missionPoints(t);this.active={def:t,points:e,index:0,elapsed:0,collected:0,done:!1,failed:!1,state:"travel"},this.save.data.missions.active=t.id,this.ui.toast(`MISSION STARTED: ${t.title}`,"ok"),this.updateMarkers()}updateMarkers(){if(this.markers.forEach(e=>this.scene.remove(e)),this.markers=[],!this.active){this.beacon.hide(),this.raceBeacon.hide();return}let t=this.active.points[this.active.index];t&&this.beacon.showAt(t.x,t.z,3589887)}update(t,e,i){if(this.beacon.update(t),this.raceBeacon.update(t),!this.active)return;let n=this.active;n.elapsed+=t;let r=n.def,o=n.points[n.index];if(!o)return;if(Math.hypot(e.x-o.x,e.z-o.z)<(r.type==="race"?16:6)){if(n.index++,r.type==="collect"&&n.collected++,n.index>=n.points.length){this.complete();return}this.updateMarkers(),this.ui.toast(r.type==="race"?"CHECKPOINT!":"OBJECTIVE UPDATED","ok")}r.time&&n.elapsed>r.time&&this.fail()}complete(){let t=this.active.def;this.save.data.missions.completed.push(t.id),this.save.data.money+=t.reward,this.save.data.missions.active=null,this.active=null,this.beacon.hide(),this.ui.toast(`MISSION COMPLETE: ${t.title}  +\u20B9${t.reward}`,"ok"),this.onComplete&&this.onComplete(t)}fail(){let t=this.active.def;this.active=null,this.beacon.hide(),this.save.data.missions.active=null,this.ui.toast(`MISSION FAILED: ${t.title}`,"bad")}get hudText(){if(!this.active)return null;let t=this.active,e=t.def.time?Math.max(0,t.def.time-t.elapsed):null;return{title:t.def.title,objective:t.def.type==="race"?`Checkpoint ${t.index+1}/${t.points.length}`:t.def.type==="collect"?`Shard ${t.collected}/${t.points.length}`:t.def.type==="delivery"?t.index===0?"Collect the cargo":"Deliver the cargo":"Reach the marker",timer:e,distance:Math.hypot(this._px-t.points[t.index].x,this._pz-t.points[t.index].z)}}trackPlayer(t){this._px=t.x,this._pz=t.z}},Qr=class{constructor(t,e){this.scene=t,this.save=e,this.items=[];let i=oi(4242);this.geo=new Ar(.55,0),this.mat=new Si({color:6742271}),this.glowMat=new Si({color:6742271,transparent:!0,opacity:.22,depthWrite:!1});for(let n=0;n<28;n++){let r=i()*Math.PI*2,o=70+i()*700,a=Math.cos(r)*o,l=Math.sin(r)*o;if(wt(a,l)<_e+1){n--;continue}this.add(a,l,"shard")}this.t=0}add(t,e,i="shard"){let n=new pe,r=new rt(this.geo,this.mat.clone()),o=new rt(new ii(1.3,10,8),this.glowMat.clone());n.add(r,o),n.position.set(t,wt(t,e)+1.4,e),this.scene.add(n),this.items.push({group:n,mesh:r,x:t,z:e,kind:i,taken:!1})}update(t,e,i){this.t+=t;for(let n of this.items){if(n.taken)continue;n.mesh.rotation.y+=t*1.6,n.mesh.rotation.x+=t*.6,n.group.position.y=wt(n.x,n.z)+1.4+Math.sin(this.t*2+n.x)*.22,Math.hypot(e.x-n.x,e.z-n.z)<3.2&&(n.taken=!0,n.group.visible=!1,i(n))}}get remaining(){return this.items.filter(t=>!t.taken).length}reset(){this.items.forEach(t=>{t.taken=!1,t.group.visible=!0})}},ta=class{constructor(t){this.game=t,this.timer=45,this.log=[]}update(t){if(this.timer-=t,this.timer>0)return;this.timer=70+Math.random()*90;let e=Math.random();if(e<.34){let i=["clear","cloudy","rain","fog"],n=i[Math.floor(Math.random()*i.length)];this.game.sky.setWeather(n),this.game.ui.toast(`WEATHER CHANGE: ${n.toUpperCase()}`,"info")}else if(e<.7){let i=this.game.player.pos,n=Math.random()*Math.PI*2,r=26+Math.random()*30,o=i.x+Math.cos(n)*r,a=i.z+Math.sin(n)*r;wt(o,a)>_e+.5&&(this.game.collectibles.add(o,a,"crate"),this.game.ui.toast("SUPPLY CRATE SPOTTED NEARBY","info"))}else{let i=this.game.player.pos,n=Math.random()*Math.PI*2,r=20+Math.random()*24,o=i.x+Math.cos(n)*r,a=i.z+Math.sin(n)*r;this.game.spawnVehicleNear(o,a),this.game.ui.toast("A VEHICLE HAS BEEN ABANDONED NEARBY","info")}}};var mh=[{title:"File:Airliner Passengers at the Kumasi International Airport.jpg",creator:"bagaball",license:"CC BY 2.0",page:"https://commons.wikimedia.org/wiki/File:Airliner_Passengers_at_the_Kumasi_International_Airport.jpg",category:"aircraft"},{title:"File:Copenhagen Airport passenger terminal aerial.jpg",creator:"Alexander Jonsson",license:"GFDL 1.2",page:"https://commons.wikimedia.org/wiki/File:Copenhagen_Airport_passenger_terminal_aerial.jpg",category:"aircraft"},{title:"File:Worlds largest passenger airliner visits Scotland - geograph.org.uk - 1474533.jpg",creator:"Calum McRoberts",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Worlds_largest_passenger_airliner_visits_Scotland_-_geograph.org.uk_-_1474533.jpg",category:"aircraft"},{title:"File:Koh Mak (island), Thailand, Palm trees on the beach.jpg",creator:"Vyacheslav Argenberg",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Koh_Mak_(island),_Thailand,_Palm_trees_on_the_beach.jpg",category:"beach"},{title:"File:Koh Mak (island), Thailand, Palms on the beach.jpg",creator:"Vyacheslav Argenberg",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Koh_Mak_(island),_Thailand,_Palms_on_the_beach.jpg",category:"beach"},{title:"File:Koh Mak (island), Thailand, Sunset on the beach with palms.jpg",creator:"Vyacheslav Argenberg",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Koh_Mak_(island),_Thailand,_Sunset_on_the_beach_with_palms.jpg",category:"beach"},{title:"File:Lima Peru City Skyline Modern Skyscrapers 2013.jpg",creator:"Hector Becerra",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Lima_Peru_City_Skyline_Modern_Skyscrapers_2013.jpg",category:"city"},{title:"File:Lima Peru City Skyline Modern Skyscrapers.jpg",creator:"Hector Becerra",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Lima_Peru_City_Skyline_Modern_Skyscrapers.jpg",category:"city"},{title:"File:New York City (New York, USA), Manhattan, Skyline -- 2012 -- 6696.jpg",creator:"Dietmar Rabich",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:New_York_City_(New_York,_USA),_Manhattan,_Skyline_--_2012_--_6696.jpg",category:"city"},{title:"File:014 Wild Red Deer Switzerland Photo by Giles Laurent.jpg",creator:"Giles Laurent",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:014_Wild_Red_Deer_Switzerland_Photo_by_Giles_Laurent.jpg",category:"deer"},{title:"File:015 Wild Red Deer Switzerland Photo by Giles Laurent.jpg",creator:"Giles Laurent",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:015_Wild_Red_Deer_Switzerland_Photo_by_Giles_Laurent.jpg",category:"deer"},{title:"File:Fallow Deer in the German wood.jpg",creator:"Michael G\xE4bler",license:"CC BY 3.0",page:"https://commons.wikimedia.org/wiki/File:Fallow_Deer_in_the_German_wood.jpg",category:"deer"},{title:"File:Dunes, D\xE9sert du Thar.jpg",creator:"Cl\xE9ment Bardot",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Dunes,_D%C3%A9sert_du_Thar.jpg",category:"desert"},{title:"File:Mesquite Sand Dunes in Death Valley.jpg",creator:"Brocken Inaglory",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Mesquite_Sand_Dunes_in_Death_Valley.jpg",category:"desert"},{title:"File:Namib-Naukluft Sand Dunes (2011).jpg",creator:"Yathin S Krishnappa",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Namib-Naukluft_Sand_Dunes_(2011).jpg",category:"desert"},{title:"File:A strand of deciduous trees in Tollymore Park - geograph.org.uk - 6343607.jpg",creator:"Eric Jones",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:A_strand_of_deciduous_trees_in_Tollymore_Park_-_geograph.org.uk_-_6343607.jpg",category:"forest"},{title:"File:Crychan Forest, some deciduous trees in spring green - geograph.org.uk - 5760545.jpg",creator:"Andrew Hill",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Crychan_Forest,_some_deciduous_trees_in_spring_green_-_geograph.org.uk_-_5760545.jpg",category:"forest"},{title:"File:Path separating deciduous and coniferous trees in the Forest of Dean - geograph.org.uk - 8284736.jpg",creator:"Gareth James",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Path_separating_deciduous_and_coniferous_trees_in_the_Forest_of_Dean_-_geograph.org.uk_-_8284736.jpg",category:"forest"},{title:"File:Helicopter at The Museum Of Army Flying - geograph.org.uk - 1313096.jpg",creator:"Steve Daniels",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Helicopter_at_The_Museum_Of_Army_Flying_-_geograph.org.uk_-_1313096.jpg",category:"helicopter"},{title:"File:Helicopter, Museum of Army Flying - geograph.org.uk - 1714896.jpg",creator:"Trish Steel",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Helicopter,_Museum_of_Army_Flying_-_geograph.org.uk_-_1714896.jpg",category:"helicopter"},{title:"File:Royal Air Force Chinook helicopter firing flares over Afghanistan MOD 45158742.jpg",creator:"Cpl Lee Goddard",license:"OGL 2",page:"https://commons.wikimedia.org/wiki/File:Royal_Air_Force_Chinook_helicopter_firing_flares_over_Afghanistan_MOD_45158742.jpg",category:"helicopter"},{title:"File:Auckland State Highway One.jpg",creator:`Ingolfson at English Wikipedia

(Original text: Uploader.)`,license:"Public domain",page:"https://commons.wikimedia.org/wiki/File:Auckland_State_Highway_One.jpg",category:"highway"},{title:"File:Frankfurter Kreuz Luftbild, Motorway interchange near Frankfurt airport.jpg",creator:"Kprateek88",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Frankfurter_Kreuz_Luftbild,_Motorway_interchange_near_Frankfurt_airport.jpg",category:"highway"},{title:"File:The M8 motorway from the air - geograph.org.uk - 6144450.jpg",creator:"Thomas Nugent",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:The_M8_motorway_from_the_air_-_geograph.org.uk_-_6144450.jpg",category:"highway"},{title:"File:Gurudongmar Lake Sikkim, India (edit).jpg",creator:`Original:  Yoghya

Derivative work:  UnpetitproleX`,license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Gurudongmar_Lake_Sikkim,_India_(edit).jpg",category:"lake"},{title:"File:Mountains Reflection Sani Zanskar Oct22 A7C 04247.jpg",creator:"This Photo was taken by Timothy A. Gonsalves.  Feel free to use my pho",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Mountains_Reflection_Sani_Zanskar_Oct22_A7C_04247.jpg",category:"lake"},{title:"File:Zagedan Lakes, Mountain cirque, Caucasus Mountains.jpg",creator:"Vyacheslav Argenberg",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Zagedan_Lakes,_Mountain_cirque,_Caucasus_Mountains.jpg",category:"lake"},{title:"File:A gift shop at Kochilei Market, Rasulgarh.jpg",creator:"Soumendra Kumar Sahoo",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:A_gift_shop_at_Kochilei_Market,_Rasulgarh.jpg",category:"market"},{title:"File:Patel Brothers Farmers Market, Hicksville New York.jpg",creator:"Kenneth C. Zirkel",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Patel_Brothers_Farmers_Market,_Hicksville_New_York.jpg",category:"market"},{title:"File:Shops on Market Jew Street, Penzance, Cornwall - August 2022.jpg",creator:"Mutney",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Shops_on_Market_Jew_Street,_Penzance,_Cornwall_-_August_2022.jpg",category:"market"},{title:"File:Historic building at University of Allahabad, Prayagraj, India.jpg",creator:"Sanskritidubey",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Historic_building_at_University_of_Allahabad,_Prayagraj,_India.jpg",category:"monument"},{title:"File:Historic heritage sites of Kerala with GPS coordinates.jpg",creator:"Ms Sarah Welch",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Historic_heritage_sites_of_Kerala_with_GPS_coordinates.jpg",category:"monument"},{title:"File:Landscape and Historic Architecture in Chittorgarh Fort, Rajasthan, India.jpg",creator:"Himesh23",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Landscape_and_Historic_Architecture_in_Chittorgarh_Fort,_Rajasthan,_India.jpg",category:"monument"},{title:"File:Ktm motorcycle side view 114275 3840x2160.jpg",creator:"Arunsmokiofficial",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Ktm_motorcycle_side_view_114275_3840x2160.jpg",category:"motorcycle"},{title:"File:Motorcycle parked on the side of the street.jpg",creator:"mycurrency.com",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Motorcycle_parked_on_the_side_of_the_street.jpg",category:"motorcycle"},{title:"File:Viktor Tsoi on a motorcycle, side view, 2024.jpg",creator:`English:  Andrew Krizhanovsky
\u0420\u0443\u0441\u0441\u043A\u0438\u0439:  \u0410\u043D\u0434\u0440\u0435\u0439 \u041A\u0440\u0438\u0436\u0430\u043D\u043E\u0432\u0441\u043A\u0438\u0439`,license:"Public domain",page:"https://commons.wikimedia.org/wiki/File:Viktor_Tsoi_on_a_motorcycle,_side_view,_2024.jpg",category:"motorcycle"},{title:"File:Himalaya mountain range with peaks covered in snow during summers.jpg",creator:"Asdelhi95",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Himalaya_mountain_range_with_peaks_covered_in_snow_during_summers.jpg",category:"mountain"},{title:"File:Mountains in snow, Mountain lake, Chola Valley, Nepal, Himalayas.jpg",creator:"Vyacheslav Argenberg",license:"CC BY 4.0",page:"https://commons.wikimedia.org/wiki/File:Mountains_in_snow,_Mountain_lake,_Chola_Valley,_Nepal,_Himalayas.jpg",category:"mountain"},{title:"File:Road Padum Zanskar Range Jun24 A7CR 00818.jpg",creator:"This Photo was taken by Timothy A. Gonsalves.  Feel free to use my pho",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Road_Padum_Zanskar_Range_Jun24_A7CR_00818.jpg",category:"mountain"},{title:"File:2019-08-13 02 LEYNIR - IMO 9126388.jpg",creator:"Gordon Leggett",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:2019-08-13_02_LEYNIR_-_IMO_9126388.jpg",category:"rain"},{title:"File:Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.jpg",creator:"Florencejemi",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Clouds_come_floating_into_my_life,_no_longer_to_carry_rain_or_usher_storm,_but_to_add_color_to_my_sunset_sky.jpg",category:"rain"},{title:"File:Rain clouds moving in Chula Vista.JPG",creator:"iXavier",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Rain_clouds_moving_in_Chula_Vista.JPG",category:"rain"},{title:"File:Murtaza Abad Hunza Village in Winter Covered in Snow..jpg",creator:"Hajat Chand Hunzai",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Murtaza_Abad_Hunza_Village_in_Winter_Covered_in_Snow..jpg",category:"snow"},{title:"File:Snow-covered village and hills, Mihama, February 2014.jpg",creator:"NevinThompson",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Snow-covered_village_and_hills,_Mihama,_February_2014.jpg",category:"snow"},{title:"File:Village , valleys and mountains coved with snow in winter season.jpg",creator:"Pratihas Sharma",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Village_,_valleys_and_mountains_coved_with_snow_in_winter_season.jpg",category:"snow"},{title:"File:Automotodrom Grobnik Croatia osiguranje FIM Sidecar World Championship 2013 16062013 roberta f.jpg",creator:"Roberta F.",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:Automotodrom_Grobnik_Croatia_osiguranje_FIM_Sidecar_World_Championship_2013_16062013_roberta_f.jpg",category:"sportscar"},{title:"File:FIM Sidecar 2010 Sachsenring.jpg",creator:"Neuwieser",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:FIM_Sidecar_2010_Sachsenring.jpg",category:"sportscar"},{title:"File:Norton-Watsonian sidecar that won the 1952 World Sidecar Championship with Cyril Smith (49254446053).jpg",creator:"David Merrett from Daventry, England",license:"CC BY 2.0",page:"https://commons.wikimedia.org/wiki/File:Norton-Watsonian_sidecar_that_won_the_1952_World_Sidecar_Championship_with_Cyril_Smith_(49254446053).jpg",category:"sportscar"},{title:"File:Car park and Traffic Street - geograph.org.uk - 8119229.jpg",creator:"DS Pugh",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Car_park_and_Traffic_Street_-_geograph.org.uk_-_8119229.jpg",category:"street"},{title:"File:DSC 7564- a city street filled with lots of traffic.jpg",creator:"Pattaya Patrol",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:DSC_7564-_a_city_street_filled_with_lots_of_traffic.jpg",category:"street"},{title:"File:Traffic in main streets of Bangui, CAR, 2014.jpg",creator:"Bagassi Koura (VOA)",license:"Public domain",page:"https://commons.wikimedia.org/wiki/File:Traffic_in_main_streets_of_Bangui,_CAR,_2014.jpg",category:"street"},{title:"File:30th Street Station Philadelphia July 2016 002 edit.jpg",creator:"King of Hearts",license:"CC BY-SA 3.0",page:"https://commons.wikimedia.org/wiki/File:30th_Street_Station_Philadelphia_July_2016_002_edit.jpg",category:"train"},{title:"File:Braunton (Devon, UK), Old Railway Station, Station House -- 2013 -- 00190.jpg",creator:"Dietmar Rabich",license:"CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Braunton_(Devon,_UK),_Old_Railway_Station,_Station_House_--_2013_--_00190.jpg",category:"train"},{title:"File:Railway station Kreiensen 1963.JPG",creator:"Michael G\xE4bler",license:"CC BY 3.0",page:"https://commons.wikimedia.org/wiki/File:Railway_station_Kreiensen_1963.JPG",category:"train"},{title:"File:Lorry parked in a field - geograph.org.uk - 1534787.jpg",creator:"Evelyn Simak",license:"CC BY-SA 2.0",page:"https://commons.wikimedia.org/wiki/File:Lorry_parked_in_a_field_-_geograph.org.uk_-_1534787.jpg",category:"truck"},{title:"File:Tipper lorry in Russia.jpg",creator:"\u0414\u0430\u043D\u0438\u043B\u0430",license:"CC BY 2.0",page:"https://commons.wikimedia.org/wiki/File:Tipper_lorry_in_Russia.jpg",category:"truck"},{title:"File:Water tank lorry in Austria.jpg",creator:"Roberto Verzo",license:"CC BY 2.0",page:"https://commons.wikimedia.org/wiki/File:Water_tank_lorry_in_Austria.jpg",category:"truck"}],gh=["https://commons.wikimedia.org","https://en.wikipedia.org","https://www.mediawiki.org/wiki/API:Main_page","https://www.wikidata.org"];var vt=s=>document.getElementById(s),ea=class{constructor(t){this.moveX=0,this.moveZ=0,this.run=!1,this.sprint=!1,this.crouch=!1,this.jumpPressed=!1,this.usePressed=!1,this.vehiclePressed=!1,this.throttle=0,this.brake=0,this.steer=0,this.camDX=0,this.camDY=0,this.keys={},this.stickActive=!1,this.joySensitivity=1,this.bindKeyboard(),this.bindTouch(t)}bindKeyboard(){addEventListener("keydown",t=>{let e=t.key.toLowerCase();this.keys[e]||(this.keys[e]=!0,e===" "&&(this.jumpPressed=!0,t.preventDefault()),e==="e"&&(this.usePressed=!0),e==="f"&&(this.vehiclePressed=!0),["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(e)&&t.preventDefault())}),addEventListener("keyup",t=>{this.keys[t.key.toLowerCase()]=!1})}bindTouch(t){let e=vt("stick"),i=vt("knob"),n=()=>e.clientWidth*.34,r=null,o=0,a=0,l=p=>{var E;let y=p.changedTouches?p.changedTouches[0]:p;r=(E=y.identifier)!=null?E:"m",this.stickActive=!0;let x=e.getBoundingClientRect();o=x.left+x.width/2,a=x.top+x.height/2,c(y)},c=p=>{if(!this.stickActive)return;let y=p.clientX-o,x=p.clientY-a,E=n(),C=Math.hypot(y,x);C>E&&(y=y/C*E,x=x/C*E),i.style.transform=`translate(${y}px,${x}px)`,this.moveX=y/E*this.joySensitivity,this.moveZ=x/E*this.joySensitivity},h=()=>{this.stickActive=!1,i.style.transform="translate(0,0)",this.moveX=0,this.moveZ=0};e.addEventListener("touchstart",p=>{p.preventDefault(),l(p)},{passive:!1}),e.addEventListener("touchmove",p=>{p.preventDefault(),c(p.changedTouches[0])},{passive:!1}),e.addEventListener("touchend",p=>{p.preventDefault(),h()},{passive:!1}),e.addEventListener("touchcancel",h),e.addEventListener("mousedown",p=>{p.preventDefault(),l(p)}),addEventListener("mousemove",p=>{this.stickActive&&c(p)}),addEventListener("mouseup",()=>{this.stickActive&&h()});let u=null,f=0,d=0,g=p=>{var y;u=(y=p.identifier)!=null?y:"m",f=p.clientX,d=p.clientY},_=p=>{u!==null&&(this.camDX+=p.clientX-f,this.camDY+=p.clientY-d,f=p.clientX,d=p.clientY)};t.addEventListener("touchstart",p=>{let y=p.changedTouches[0];g(y)},{passive:!0}),t.addEventListener("touchmove",p=>{for(let y of p.changedTouches)_(y)},{passive:!0}),t.addEventListener("touchend",()=>{u=null}),t.addEventListener("mousedown",p=>g(p)),addEventListener("mousemove",p=>{u!==null&&!this.stickActive&&_(p)}),addEventListener("mouseup",()=>{u=null});let m=(p,y,x)=>{let E=vt(p);E&&(E.addEventListener("touchstart",C=>{C.preventDefault(),y()},{passive:!1}),E.addEventListener("touchend",C=>{C.preventDefault(),x&&x()},{passive:!1}),E.addEventListener("mousedown",C=>{C.preventDefault(),y()}),addEventListener("mouseup",()=>x&&x()))};m("btnJump",()=>{this.jumpPressed=!0,this.jumpHeld=!0},()=>{this.jumpHeld=!1}),m("btnRun",()=>{this.run=!0,this.sprint=!0},()=>{this.run=!1,this.sprint=!1}),m("btnCrouch",()=>{this.crouch=!0},()=>{this.crouch=!1}),m("btnUse",()=>{this.usePressed=!0}),m("btnVehicle",()=>{this.vehiclePressed=!0}),m("btnGas",()=>{this.gasHeld=!0},()=>{this.gasHeld=!1}),m("btnBrake",()=>{this.brakeHeld=!0},()=>{this.brakeHeld=!1})}poll(){let t=this.keys,e=this.moveX,i=this.moveZ;(t.w||t.arrowup)&&(i-=1),(t.s||t.arrowdown)&&(i+=1),(t.a||t.arrowleft)&&(e-=1),(t.d||t.arrowright)&&(e+=1);let n=this.run||t.shift,r=this.crouch||t.c,o=this.jumpPressed||t[" "]&&!this._spaceHeld;t[" "]?this._spaceHeld=!0:this._spaceHeld=!1;let a=this.usePressed,l=this.vehiclePressed,c=(this.gasHeld?1:0)+(t.w||t.arrowup?1:0),h=(this.brakeHeld?1:0)+(t.s||t.arrowdown?1:0),u=this.stickActive?this.moveX:t.a||t.arrowleft?-1:t.d||t.arrowright?1:0,f={moveX:e,moveZ:i,run:n,sprint:n,crouch:r,jump:o||this.jumpHeld,use:a,vehicle:l,throttle:Math.min(1,c),brake:Math.min(1,h),steer:u};return this.jumpPressed=!1,this.usePressed=!1,this.vehiclePressed=!1,f}consumeCamera(){let t={dx:this.camDX,dy:this.camDY};return this.camDX=0,this.camDY=0,t}},ia=class{constructor(t){this.game=t,this.stack=[],this.timers=[],this.bind(),this.buildCredits(),this.refreshMenu(),this.bindSettingsInputs()}show(t){["menu","pause","settings","credits","controlsHelp","mapScreen","inventory","missionScreen","loader"].forEach(e=>vt(e).classList.add("hidden")),t&&vt(t).classList.remove("hidden")}push(t){this.stack.push(t),this.show(t)}back(){this.stack.pop();let t=this.stack[this.stack.length-1];t?this.show(t):this.show(null),!t&&this.game.state==="menu"&&this.show("menu"),!t&&this.game.state==="paused"&&this.show("pause")}bind(){document.body.addEventListener("click",t=>{let e=t.target.closest("[data-act]");e&&this.game.action(e.dataset.act)}),document.querySelectorAll(".tab").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".tabbody").forEach(e=>e.classList.remove("active")),t.classList.add("active"),document.querySelector(`.tabbody[data-body="${t.dataset.tab}"]`).classList.add("active")})}),document.querySelectorAll(".preset").forEach(t=>{t.addEventListener("click",()=>this.game.setGraphics(t.dataset.preset))})}bindSettingsInputs(){let t=this.game.settings,e=(c,h,u=100,f=!1)=>{let d=vt(c);if(!d)return;let g=()=>{let _=parseFloat(d.value),m=f?1/(_/100):_/u;t.set(h,m);let p=d.parentElement.querySelector("output");p&&(p.textContent=d.value+(h.includes("Volume")||h.includes("brightness")?"%":"")),this.applyLive(h)};if(d.addEventListener("input",g),d.type==="range"){let _=t.values[h];typeof _=="number"&&(d.value=f?100/_:Math.round(_*u));let m=d.parentElement.querySelector("output");m&&(m.textContent=d.value)}};e("s_master","masterVolume"),e("s_music","musicVolume"),e("s_sfx","sfxVolume"),e("s_ambient","ambientVolume"),e("s_cam","cameraSensitivity"),e("s_cam2","cameraSensitivity"),e("s_aim","aimSensitivity"),e("s_joy","joystickSensitivity"),e("s_bsize","buttonSize"),e("s_bop","buttonOpacity"),e("s_bright","brightness");let i=(c,h)=>{let u=vt(c);u&&(u.checked=!!t.values[h],u.addEventListener("change",()=>{t.set(h,u.checked),this.applyLive(h)}))};i("s_fps","showFps"),i("s_autosave","autoSave");let n=vt("s_lang");n.value=t.values.language,n.addEventListener("change",()=>t.set("language",n.value));let r=vt("s_res");r.value=t.values.resolution,r.addEventListener("change",()=>{t.set("resolution",r.value),this.game.applyResolution()});let o=vt("s_fpslimit");o.value=t.values.fpsLimit+" FPS",o.addEventListener("change",()=>{t.set("fpsLimit",parseInt(o.value))});let a=vt("s_draw");a.value=100,a.addEventListener("input",()=>{this.game.drawDistanceScale=parseFloat(a.value)/100;let c=a.parentElement.querySelector("output");c&&(c.textContent=a.value+"%"),this.game.applyGraphics(!0)});let l=vt("s_resScale");l.value=100,l.addEventListener("input",()=>{this.game.renderScaleOverride=parseFloat(l.value)/100;let c=l.parentElement.querySelector("output");c&&(c.textContent=l.value+"%"),this.game.applyResolution()})}applyLive(t){let e=this.game.settings;t==="brightness"&&(document.body.style.filter=`brightness(${e.values.brightness})`),t==="buttonSize"&&document.documentElement.style.setProperty("--bsize",e.values.buttonSize),t==="buttonOpacity"&&document.documentElement.style.setProperty("--bop",e.values.buttonOpacity),t==="joystickSensitivity"&&this.game.input&&(this.game.input.joySensitivity=e.values.joystickSensitivity),t==="cameraSensitivity"&&this.game.cam&&(this.game.cam.sensitivity=e.values.cameraSensitivity),t==="showFps"&&vt("hudFps").classList.toggle("hidden",!e.values.showFps)}refreshMenu(){vt("menuPreset").textContent="GRAPHICS: "+Ve[this.game.settings.values.graphics].label,vt("hudPreset").textContent=Ve[this.game.settings.values.graphics].label,document.querySelectorAll(".preset").forEach(i=>{i.classList.toggle("active",i.dataset.preset===this.game.settings.values.graphics)});let t=vt("presetNote"),e=Xo();t.textContent=e<0?"This device looks low-end. LOW is strongly recommended \u2014 HIGH and ULTRA may drop frames or heat the phone.":e<3?"LOW is the default. MEDIUM and HIGH suit mid-range phones; ULTRA needs a recent flagship.":"Your device looks capable. ULTRA is available, but LOW still gives the best battery life.",vt("hudFps").classList.toggle("hidden",!this.game.settings.values.showFps)}toast(t,e="info"){let i=document.createElement("div");i.className="toast "+e,i.textContent=t,vt("toasts").appendChild(i),setTimeout(()=>i.remove(),3200)}hint(t){let e=vt("hint");if(!t){e.classList.remove("show");return}e.textContent=t,e.classList.add("show")}dialog(t,e,i,n=!1,r){vt("dlgTitle").textContent=t,vt("dlgText").textContent=e,vt("dialog").classList.remove("hidden"),vt("dlgNo").classList.toggle("hidden",!n);let o=vt("dlgOk"),a=vt("dlgNo"),l=()=>{vt("dialog").classList.add("hidden"),o.onclick=null,a.onclick=null};o.onclick=()=>{l(),i&&i()},a.onclick=()=>{l(),r&&r()}}updateHUD(t){let e=t.save.data;vt("hudMoney").textContent="\u20B9"+e.money.toLocaleString("en-IN"),vt("hudShards").textContent=e.shards,vt("hudClock").textContent=t.sky.clockString,vt("hudWeather").textContent=t.sky.weather.toUpperCase(),vt("hudPreset").textContent=Ve[t.settings.values.graphics].label,vt("hudFps").textContent=Math.round(t.fps)+" FPS";let i=t.missions.hudText,n=vt("missionHud");i?(n.classList.remove("hidden"),vt("mTitle").textContent=i.title,vt("mObj").textContent=i.objective,vt("mDist").textContent=Math.round(i.distance)+" m",vt("mTimer").textContent=i.timer!=null?Math.floor(i.timer/60)+":"+String(Math.floor(i.timer%60)).padStart(2,"0"):""):n.classList.add("hidden");let r=!!t.player.vehicle;vt("speedo").classList.toggle("hidden",!r),vt("pedals").classList.toggle("hidden",!r),document.querySelector(".actions").classList.toggle("hidden",r),r&&(vt("speedVal").textContent=Math.round(t.player.vehicle.speedKmh)),vt("btnVehicle").textContent=r?"EXIT":"ENTER"}drawMinimap(t){let e=vt("minimap"),i=e.getContext("2d"),n=e.width,r=e.height;i.clearRect(0,0,n,r);let o=n/420,a=t.player.pos.x,l=t.player.pos.z;i.save(),i.translate(n/2,r/2),i.fillStyle="#16241a",i.fillRect(-n/2,-r/2,n,r);for(let c=-8;c<=8;c++)for(let h=-8;h<=8;h++){let u=a+h*26,f=l+c*26,d=rn(u,f);i.fillStyle=d==="ocean"?"#123a52":d==="city"?"#3a3f45":d==="forest"?"#22401f":d==="desert"?"#4a3f2a":d==="snow"?"#5a6470":d==="beach"?"#4a4432":"#26381f",i.fillRect((h*26-a)*o-13*o,(c*26-l)*o-13*o,26*o+1,26*o+1)}if(i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=1,i.beginPath(),i.arc(-a*o,-l*o,ve*o,0,7),i.stroke(),i.strokeStyle="rgba(255,255,255,.22)",[-620,620].forEach(c=>{i.beginPath(),i.moveTo((c-a)*o,-r/2),i.lineTo((c-a)*o,r/2),i.stroke()}),t.collectibles.items.forEach(c=>{c.taken||(i.fillStyle="#4fd1ff",i.fillRect((c.x-a)*o-1.5,(c.z-l)*o-1.5,3,3))}),t.missions.active){let c=t.missions.active.points[t.missions.active.index];c&&(i.fillStyle="#ff8a3d",i.beginPath(),i.arc((c.x-a)*o,(c.z-l)*o,4,0,7),i.fill())}i.rotate(-t.player.heading+Math.PI),i.fillStyle="#ffffff",i.beginPath(),i.moveTo(0,-6),i.lineTo(4,5),i.lineTo(0,2.5),i.lineTo(-4,5),i.closePath(),i.fill(),i.restore(),i.fillStyle="rgba(255,255,255,.5)",i.font="11px sans-serif",i.fillText("N",n/2-3,12)}drawBigMap(t){let e=vt("bigmap"),i=e.getContext("2d"),n=e.width,r=e.height;i.fillStyle="#0a1017",i.fillRect(0,0,n,r);let o=2400,a=n/o,l=d=>n/2+d*a,c=d=>r/2+d*a,h=40;for(let d=-o/2;d<o/2;d+=h)for(let g=-o/2;g<o/2;g+=h){let _=rn(g,d),m=wt(g,d);i.fillStyle=m<_e?m<-12?"#0d2b3e":"#17475f":_==="city"?"#3c4147":_==="forest"?"#1f3a1c":_==="desert"?"#4b4029":_==="snow"?"#6b7684":_==="beach"?"#4d4633":m>90?"#3f3a30":"#2a3d22",i.fillRect(l(g),c(d),h*a+1,h*a+1)}i.strokeStyle="rgba(230,230,230,.5)",i.lineWidth=2,[-620,620].forEach(d=>{i.beginPath(),i.moveTo(l(d),0),i.lineTo(l(d),r),i.stroke()}),i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=1;for(let d=-11;d<=11;d++)Math.abs(d*40)>ve||(i.beginPath(),i.moveTo(l(d*40),c(-ve)),i.lineTo(l(d*40),c(ve)),i.stroke(),i.beginPath(),i.moveTo(l(-ve),c(d*40)),i.lineTo(l(ve),c(d*40)),i.stroke());if(i.strokeStyle="rgba(255,138,61,.65)",i.lineWidth=2,i.beginPath(),i.arc(l(0),c(0),ve*a,0,7),i.stroke(),t.collectibles.items.forEach(d=>{d.taken||(i.fillStyle="#4fd1ff",i.beginPath(),i.arc(l(d.x),c(d.z),3,0,7),i.fill())}),t.missions.active){let d=t.missions.active.points[t.missions.active.index];d&&(i.fillStyle="#ff8a3d",i.beginPath(),i.arc(l(d.x),c(d.z),7,0,7),i.fill(),i.strokeStyle="#ff8a3d",i.lineWidth=2,i.beginPath(),i.arc(l(d.x),c(d.z),14,0,7),i.stroke())}let u=l(t.player.pos.x),f=c(t.player.pos.z);i.fillStyle="#fff",i.beginPath(),i.arc(u,f,5,0,7),i.fill(),i.strokeStyle="rgba(255,255,255,.4)",i.lineWidth=1,i.beginPath(),i.arc(u,f,12,0,7),i.stroke(),i.fillStyle="rgba(255,255,255,.55)",i.font="13px sans-serif",i.fillText("CITY CENTRE",l(-70),c(-24)),i.fillText("WEST COAST",l(-1e3),c(120)),i.fillText("NORTHERN PEAKS",l(-120),c(-980)),i.fillStyle="rgba(255,255,255,.35)",i.font="11px sans-serif",i.fillText("N \u2191",n-30,20)}renderMissionList(t){let e=vt("missionList");e.innerHTML="";let i=t.save.data.missions.completed||[];gs.forEach(n=>{let r=i.includes(n.id),o=document.createElement("div");o.className="mcard"+(r?" done":""),o.innerHTML=`<div><h4>${n.title}</h4><p>${n.desc}</p></div>
        <div style="display:flex;align-items:center;gap:12px">
        <span class="rew">\u20B9${n.reward}</span>
        ${r?'<span class="rew" style="color:#4fd1ff">DONE</span>':`<button data-mid="${n.id}">START</button>`}</div>`,e.appendChild(o)}),e.querySelectorAll("button[data-mid]").forEach(n=>{n.onclick=()=>{t.startMission(n.dataset.mid),this.show(null),this.stack=[]}})}renderInventory(t){let e=t.save.data;vt("invMoney").textContent="\u20B9"+e.money.toLocaleString("en-IN"),vt("invShards").textContent=e.shards,vt("invMed").textContent=e.items.medkit,vt("invRep").textContent=e.items.repairkit,vt("invVeh").textContent=e.vehiclesOwned.join(", ")}buildCredits(){let t=mh.map(e=>`<li><b>${e.title.replace("File:","")}</b> \u2014 ${e.creator} \xB7 <a href="${e.page}" target="_blank" rel="noopener">${e.license}</a>
       <br><a href="${e.page}" target="_blank" rel="noopener">${e.page}</a></li>`).join("");vt("creditBody").innerHTML=`
      <h3>Game</h3>
      <p><b>WORLD FRONTIER \u2013 3D OPEN WORLD</b><br>Version 1.0.0 \xB7 build 1107</p>
      <h3>Credits</h3>
      <ul>
        <li>Game Concept &amp; Game Design \u2014 World Frontier project</li>
        <li>Development Team \u2014 World Frontier project</li>
        <li>AI Development Agent \u2014 Sarvam AI assistant (code, world generation, systems)</li>
        <li>3D Modeling \u2014 all meshes generated procedurally in-engine (no third-party models)</li>
        <li>Environment Design \u2014 procedural terrain, city and biome systems</li>
        <li>Animation \u2014 procedural character, animal and vehicle animation</li>
        <li>Sound Design \u2014 synthesised engine/ambient audio (WebAudio, generated at runtime)</li>
        <li>Wikipedia Research \u2014 <a href="https://en.wikipedia.org" target="_blank" rel="noopener">en.wikipedia.org</a></li>
        <li>Wikimedia Commons Assets \u2014 <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">commons.wikimedia.org</a></li>
      </ul>
      <h3>Reference research (Wikimedia Commons)</h3>
      <p>These photographs were studied as visual references for architecture, vehicles, terrain and wildlife.
      No Commons image is shipped inside the game as a texture or model; every asset is generated in code.
      Each file is listed with its creator and the licence reported by the Commons API at the time of research.</p>
      <ul>${t}</ul>
      <h3>Licences &amp; attribution</h3>
      <p>Individual image creators and licence names are listed above with a link to the file description page,
      which carries the full licence text and any attribution requirements.
      Reference material was used for study only; verify each licence before redistributing any image.</p>
      <h3>Special Thanks</h3>
      <p>The Wikipedia and Wikimedia Commons contributor communities; the three.js and Android open-source projects.</p>
      <h3>Disclaimer</h3>
      <p>This game is an independent project and is not officially affiliated with Wikipedia or the Wikimedia Foundation.</p>
      <h3>Links</h3>
      <p>${gh.map(e=>`<a href="${e}" target="_blank" rel="noopener">${e}</a>`).join("<br>")}</p>`}};var jo=class{constructor(t){this.settings=t,this.ctx=null,this.enabled=!1}init(){if(!this.ctx)try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.settings.values.masterVolume,this.master.connect(this.ctx.destination),this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=420,this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=60,this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="square",this.engineOsc2.frequency.value=91,this.engineOsc.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOsc.start(),this.engineOsc2.start();let e=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),i=e.getChannelData(0);for(let n=0;n<i.length;n++)i[n]=(Math.random()*2-1)*.5;this.noise=this.ctx.createBufferSource(),this.noise.buffer=e,this.noise.loop=!0,this.noiseFilter=this.ctx.createBiquadFilter(),this.noiseFilter.type="bandpass",this.noiseFilter.frequency.value=700,this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.value=0,this.noise.connect(this.noiseFilter),this.noiseFilter.connect(this.noiseGain),this.noiseGain.connect(this.master),this.noise.start(),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master),[110,164.81,220,329.63].forEach((n,r)=>{let o=this.ctx.createOscillator();o.type="sine",o.frequency.value=n;let a=this.ctx.createGain();a.gain.value=.05/(r+1),o.connect(a),a.connect(this.musicGain),o.start()}),this.enabled=!0,this.applyVolumes()}catch(t){console.warn("audio unavailable",t)}}applyVolumes(){if(!this.ctx)return;let t=this.settings.values;this.master.gain.value=t.masterVolume,this.musicGain.gain.value=t.musicVolume*.12,this.noiseGain.gain.value=t.ambientVolume*.06}engine(t,e,i){if(!this.ctx||!this.enabled)return;let n=this.settings.values,r=t?n.sfxVolume*.16:0;this.engineGain.gain.setTargetAtTime(r,this.ctx.currentTime,.15);let o=48+e/Math.max(1,i)*120;this.engineOsc.frequency.setTargetAtTime(o,this.ctx.currentTime,.08),this.engineOsc2.frequency.setTargetAtTime(o*1.5,this.ctx.currentTime,.08),this.engineFilter.frequency.setTargetAtTime(380+e/Math.max(1,i)*900,this.ctx.currentTime,.1)}weather(t,e){if(!this.ctx)return;let i=this.settings.values,n=t==="rain"||t==="storm";this.noiseGain.gain.setTargetAtTime(i.ambientVolume*(n?.22:.05),this.ctx.currentTime,.6),this.noiseFilter.frequency.setTargetAtTime(n?1800:500,this.ctx.currentTime,.6)}thunder(){if(!this.ctx||!this.enabled)return;let t=this.settings.values,e=this.ctx.currentTime,i=this.ctx.createOscillator();i.type="sine",i.frequency.value=42;let n=this.ctx.createGain();n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(t.sfxVolume*.35,e+.05),n.gain.exponentialRampToValueAtTime(.001,e+2.2),i.connect(n),n.connect(this.master),i.start(e),i.stop(e+2.3)}click(){if(!this.ctx||!this.enabled)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.value=660;let i=this.ctx.createGain();i.gain.setValueAtTime(this.settings.values.sfxVolume*.06,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.12),e.connect(i),i.connect(this.master),e.start(t),e.stop(t+.13)}},Ko=class{constructor(){this.canvas=document.getElementById("gl"),this.renderer=new ss({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Fo,this.renderer.outputColorSpace=ee,this.renderer.toneMapping=Bo,this.renderer.toneMappingExposure=1.22,this.scene=new _r,this.camera=new Pe(62,innerWidth/innerHeight,.1,3400),this.settings=new Br,this.save=new kr,this.audio=new jo(this.settings),this.sky=new Xr(this.scene,this.renderer),this.sky.onThunder=()=>this.audio.thunder(),this.world=new Wr(this.scene),this.player=new Yr(this.scene),this.cam=new $r(this.camera,this.canvas),this.cam.sensitivity=this.settings.values.cameraSensitivity,this.vehicles=[],this.traffic=[],this.peds=[],this.animals=[],this.rng=oi(777),this.missions=new Kr(this.scene,this.save,null),this.collectibles=new Qr(this.scene,this.save),this.state="loading",this.paused=!1,this.fps=60,this.frames=0,this.fpsTime=0,this.time=0,this.playtime=0,this.drawDistanceScale=1,this.renderScaleOverride=1,this.effCache={},this.effKey="",this.ui=new ia(this),this.missions.ui=this.ui,this.input=new ea(this.canvas),this.input.joySensitivity=this.settings.values.joystickSensitivity,this.events=new ta(this),this.spawnWorldEntities(),this.applyGraphics(),this.applyResolution(),this.bindActions(),addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.last=performance.now(),this.autosaveTimer=0,this.bootstrap(),requestAnimationFrame(t=>this.loop(t))}spawnWorldEntities(){let t={x:41,z:61};this.player.respawn(t.x,t.z),this.player.pos.y=wt(t.x,t.z),this.cam.yaw=Math.PI*.9,this.cam.pos.set(t.x+8,wt(t.x,t.z)+5,t.z+8),[["sedan",20,52,.4],["sports",-26,68,2.2],["supercar",46,74,1.1],["bike",30,44,.2],["truck",-46,40,2.6],["bus",62,30,.1],["scooter",-14,84,1.9]].forEach(([l,c,h,u])=>{let f=new wi(l,this.scene);f.place(c,h,u),f.owned=!0,this.vehicles.push(f)});let i=new wi("heli",this.scene);i.place(78,92,0),i.pos.y+=0,this.vehicles.push(i);let n=new wi("plane",this.scene);n.place(-120,120,.6),this.vehicles.push(n);let r=new wi("boat",this.scene),o=-800,a=0;for(let l=0;l<400;l++){let c=this.rng()*Math.PI*2,h=600+this.rng()*900,u=Math.cos(c)*h,f=Math.sin(c)*h;if(wt(u,f)<_e-3){o=u,a=f;break}}r.place(o,a,0),this.vehicles.push(r),this.save.data.vehiclesOwned=["sedan","sports","bike","truck","bus","scooter","supercar","heli","plane","boat"];for(let l=0;l<26;l++){let c=new qr(this.scene,this.rng),h=this.rng()*Math.PI*2,u=30+this.rng()*260;c.root.position.set(Math.cos(h)*u,0,Math.sin(h)*u),c.root.position.y=wt(c.root.position.x,c.root.position.z),c.pickTarget(()=>this.rng()),this.peds.push(c)}for(let l=0;l<14;l++){let c=new Zr(this.scene,this.rng),h=this.rng()*Math.PI*2,u=240+this.rng()*700;c.root.position.set(Math.cos(h)*u,0,Math.sin(h)*u),c.root.position.y=wt(c.root.position.x,c.root.position.z),c.pickTarget(()=>this.rng()),this.animals.push(c)}for(let l=0;l<10;l++){let c=new Jr(this.scene,this.rng);c.spawn((this.rng()-.5)*300,(this.rng()-.5)*300,this.rng),this.traffic.push(c)}}spawnVehicleNear(t,e){let i=["sedan","sports","bike","truck","supercar","scooter"],n=i[Math.floor(Math.random()*i.length)],r=new wi(n,this.scene);return r.place(t,e,Math.random()*6.28),r.owned=!1,this.vehicles.push(r),r}effectivePreset(){let t=this.settings.values.graphics+"|"+this.drawDistanceScale.toFixed(2);if(this.effKey===t)return this.effCache;let e=Ve[this.settings.values.graphics]||Ve.low,i={...e};return i.viewChunks=Math.max(1,Math.round(e.viewChunks*re(this.drawDistanceScale,.5,1))),i.fogFar=e.fogFar*re(this.drawDistanceScale,.5,1),i.fogNear=e.fogNear*re(this.drawDistanceScale,.5,1),this.effCache=i,this.effKey=t,i}applyGraphics(t=!1){let e=this.effectivePreset();this.renderer.shadowMap.enabled=e.shadows,this.sky.setShadowQuality(e.shadowSize,e.shadows),this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(i=>{i.isMesh&&i.material&&i.material.map&&(i.material.map.anisotropy=e.anisotropy)}),this.applyResolution(),this.ui.refreshMenu(),t&&this.world.rebuildAll()}applyResolution(){let t=this.effectivePreset(),e=Math.min(devicePixelRatio||1,2.5),i=t.renderScale*this.renderScaleOverride,n=this.settings.values.resolution;n==="720p"?i=Math.min(i,720/Math.max(innerWidth,innerHeight)):n==="1080p"?i=Math.min(i,1080/Math.max(innerWidth,innerHeight)):n==="1440p"&&(i=Math.min(i,1440/Math.max(innerWidth,innerHeight))),this.renderer.setPixelRatio(re(e*i,.5,2.5)),this.renderer.setSize(innerWidth,innerHeight,!1)}setGraphics(t){if(Ve[t]||(t="low"),ah(t)){this.ui.dialog("Device warning",`Your device reports ${navigator.deviceMemory||"?"} GB RAM and ${navigator.hardwareConcurrency||"?"} cores. ${Ve[t].label} may run slowly or heat the phone. You can try it, or stay on LOW.`,()=>this.commitGraphics(t),!0,()=>this.ui.back());return}this.commitGraphics(t)}commitGraphics(t){this.settings.set("graphics",t),this.applyGraphics(!0),this.ui.refreshMenu(),this.ui.toast("GRAPHICS: "+Ve[t].label,"ok"),this.ui.show(this.stackTop()||null)}stackTop(){return this.ui.stack[this.ui.stack.length-1]||null}bindActions(){document.getElementById("btnPause").onclick=()=>this.pause(),document.getElementById("btnMap").onclick=()=>{this.ui.drawBigMap(this),this.ui.push("mapScreen")},document.getElementById("btnInv").onclick=()=>{this.ui.renderInventory(this),this.ui.push("inventory")},document.getElementById("btnMission").onclick=()=>{this.ui.renderMissionList(this),this.ui.push("missionScreen")},["pointerdown","keydown"].forEach(t=>addEventListener(t,()=>this.audio.init(),{once:!0}))}action(t){switch(this.audio.init(),this.audio.click(),t){case"play":this.startGame(!1);break;case"continue":this.startGame(!0);break;case"newgame":this.ui.dialog("New game","Start over? Current progress will be erased.",()=>{this.save.reset(),this.startGame(!1)},!0);break;case"settings":this.ui.push("settings");break;case"graphics":this.ui.push("settings"),document.querySelector('.tab[data-tab="graphics"]').click();break;case"controls":this.ui.push("controlsHelp");break;case"credits":this.ui.push("credits");break;case"exit":this.ui.dialog("Exit","On Android the app will close. On the web this tab cannot close itself.",()=>{try{window.AndroidBridge&&window.AndroidBridge.exitApp&&window.AndroidBridge.exitApp()}catch{}});break;case"resume":this.resume();break;case"savegame":this.saveGame(!0);break;case"restart":this.restart();break;case"mainmenu":this.toMenu();break;case"back":this.ui.back();break;case"closemap":case"closeinv":case"closemissions":this.ui.back();break}}bootstrap(){let t=0,e=["Generating terrain\u2026","Raising the city\u2026","Planting forests\u2026","Loading traffic\u2026","Ready"],i=()=>{t+=22,document.getElementById("loadfill").style.width=Math.min(100,t)+"%",document.getElementById("loadtext").textContent=e[Math.min(e.length-1,Math.floor(t/22))],t<100?setTimeout(i,90):setTimeout(()=>{this.state="menu",this.ui.show("menu")},160)};setTimeout(i,120)}startGame(t){if(t&&this.save.has()){this.save.load();let e=this.save.data;this.player.respawn(e.player.x,e.player.z),this.player.heading=e.player.heading||0,this.ui.toast("SAVE LOADED","ok")}else!t&&this.save.has()?(this.save.load(),this.player.respawn(this.save.data.player.x,this.save.data.player.z)):this.save.reset();this.state="playing",this.paused=!1,this.ui.stack=[],this.ui.show(null),document.getElementById("hud").classList.remove("hidden"),this.audio.init(),this.audio.enabled||this.ui.toast("Tap once more for sound","info"),this.ui.toast("WELCOME TO WORLD FRONTIER","ok"),this.player.root.visible=!0,this.save.data.started=!0}pause(){this.state==="playing"&&(this.state="paused",document.getElementById("pausePos").textContent=`x ${this.player.pos.x.toFixed(0)} \xB7 z ${this.player.pos.z.toFixed(0)}`,document.getElementById("pauseTime").textContent=this.formatTime(this.playtime),document.getElementById("pauseMissions").textContent=this.save.data.missions.completed.length,this.ui.push("pause"),this.saveGame(!1))}resume(){this.state="playing",this.ui.stack=[],this.ui.show(null),document.getElementById("hud").classList.remove("hidden")}restart(){this.ui.dialog("Restart","Reload this session from the start point?",()=>{this.player.vehicle=null,this.player.root.visible=!0,this.player.respawn(41,61),this.vehicles.forEach(t=>{t.pos.set(t.pos.x,wt(t.pos.x,t.pos.z)+.15,t.pos.z)}),this.missions.active=null,this.missions.beacon.hide(),this.save.data.money=500,this.save.data.shards=0,this.save.data.missions.completed=[],this.collectibles.reset(),this.sky.timeOfDay=9.5,this.sky.setWeather("clear"),this.resume(),this.ui.toast("SESSION RESTARTED","ok")},!0)}toMenu(){this.state="menu",this.ui.stack=[],this.ui.show("menu"),document.getElementById("hud").classList.add("hidden"),this.saveGame(!1)}saveGame(t){let e=this.save.save({player:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,heading:this.player.heading},playtime:this.playtime,shards:this.save.data.shards});t&&this.ui.toast(e?"GAME SAVED":"SAVE FAILED",e?"ok":"bad")}startMission(t){let e=gs.find(i=>i.id===t);e&&this.missions.start(e)}formatTime(t){let e=Math.floor(t/3600),i=Math.floor(t%3600/60);return`${e}h ${String(i).padStart(2,"0")}m`}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.applyResolution()}nearestVehicle(){let t=null,e=5.2,i=this.player.pos;for(let n of this.vehicles){let r=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);r<e&&(e=r,t=n)}return t}toggleVehicle(){if(this.player.vehicle){let t=this.player.vehicle;this.player.vehicle=null,this.player.root.visible=!0;let e=2.6,i=Math.cos(t.heading)*e,n=-Math.sin(t.heading)*e;this.player.pos.set(t.pos.x+i,wt(t.pos.x+i,t.pos.z+n)+.1,t.pos.z+n),this.player.vel.set(0,0,0),this.ui.toast("EXITED "+t.cfg.name.toUpperCase(),"info")}else{let t=this.nearestVehicle();if(!t){this.ui.toast("NO VEHICLE NEARBY","bad");return}this.player.vehicle=t,this.player.root.visible=!1,this.ui.toast("ENTERED "+t.cfg.name.toUpperCase(),"ok")}}loop(t){requestAnimationFrame(n=>this.loop(n));let e=(t-this.last)/1e3;this.last=t,e>.1&&(e=.1),this.time+=e,this.frames++,this.fpsTime+=(t-(this.lastReal||t))/1e3,this.lastReal=t,this.fpsTime>.5&&(this.fps=this.frames/this.fpsTime,this.frames=0,this.fpsTime=0,this.state==="playing"&&this.adaptPerformance());let i=this.settings.values.fpsLimit||60;this.fpsLimitAcc===void 0&&(this.fpsLimitAcc=0),this.fpsLimitAcc+=e,!(this.fpsLimitAcc<1/i-.001)&&(this.fpsLimitAcc=0,this.state==="playing"?(this.playtime+=e,this.updateGameplay(e),this.autosaveTimer+=e,this.autosaveTimer>30&&(this.autosaveTimer=0,this.settings.values.autoSave&&this.saveGame(!1))):this.updateMenuScene(e),this.renderer.render(this.scene,this.camera))}adaptPerformance(){this.fps<24&&this.renderer.getPixelRatio()>.6?this.renderer.setPixelRatio(Math.max(.6,this.renderer.getPixelRatio()-.08)):this.fps>55&&this.renderer.getPixelRatio()<2&&this.settings.values.graphics!=="low"&&this.renderer.setPixelRatio(Math.min(2,this.renderer.getPixelRatio()+.02))}updateMenuScene(t){let e=this.effectivePreset(),i=this.time*.045,n=Math.cos(i)*300,r=Math.sin(i)*300;this.world.update(new R(n,20,r),e,t,this.time);let{dayF:o}=this.sky.update(t,new R(n,20,r),e);this.world.setNight(1-o),this.camera.position.set(n+Math.cos(i*1.4)*60,wt(n,r)+95,r+Math.sin(i*1.4)*60),this.camera.lookAt(0,wt(0,0)+24,0),this.peds.forEach(a=>a.update(t,this.camera.position)),this.audio.engine(!1,0,1),this.audio.weather(this.sky.weather,this.sky.wind)}updateGameplay(t){let e=this.input.poll(),i=this.input.consumeCamera();this.cam.rotate(i.dx,i.dy);let n=this.effectivePreset();if(this.player.vehicle){let a=this.player.vehicle;a.update(t,{throttle:e.throttle,brake:e.brake,steer:e.steer,jump:e.jump,crouch:e.crouch},this.world,!0),this.cam.update(t,a.pos,a.cfg.kind==="air"?"air":"vehicle",this.world),this.player.pos.copy(a.pos),this.player.heading=a.heading,this.audio.engine(!0,Math.abs(a.speed),a.cfg.maxSpeed),e.vehicle&&this.toggleVehicle()}else this.player.update(t,{moveX:e.moveX,moveZ:e.moveZ,run:e.run,sprint:e.sprint,crouch:e.crouch,jump:e.jump},this.cam,this.world,n),this.cam.update(t,this.player.pos,"foot",this.world),this.audio.engine(!1,0,1),e.vehicle&&this.toggleVehicle(),e.use&&this.interact();this.audio.weather(this.sky.weather,this.sky.wind);let r=this.player.pos;this.world.update(r,n,t,this.time);let{dayF:o}=this.sky.update(t,r,n);this.world.setNight(1-o),this.collectibles.update(t,this.player.pos,a=>{let l=a.kind==="crate"?120:40;this.save.data.money+=l,this.save.data.shards+=1,this.audio.click(),this.ui.toast(`+\u20B9${l}  \xB7  SIGNAL SHARD ${this.save.data.shards}`,"ok")}),this.missions.trackPlayer(this.player.pos),this.missions.update(t,this.player.pos,!!this.player.vehicle);for(let a of this.peds)a.update(t,this.player.pos);for(let a of this.animals)a.update(t,this.player.pos);for(let a of this.traffic)a.update(t,this.player.pos);if(this.events.update(t),this.ui.updateHUD(this),this.ui.drawMinimap(this),this.player.vehicle)this.ui.hint("Press ENTER to exit the vehicle");else{let a=this.nearestVehicle();this.ui.hint(a?`Press ENTER to drive the ${a.cfg.name}`:"")}}interact(){let t=rn(this.player.pos.x,this.player.pos.z);t==="city"?(this.player.sitting=!this.player.sitting,this.ui.toast(this.player.sitting?"RESTING":"STOOD UP","info")):this.ui.toast(`${t.toUpperCase()} \xB7 ${Math.round(wt(this.player.pos.x,this.player.pos.z))} m`,"info")}};window.addEventListener("load",()=>{let s=new Ko;window.__WF={game:s,ready:!0,setPreset(t){s.commitGraphics(t)},setTime(t){s.sky.timeOfDay=t},setWeather(t){s.sky.setWeather(t)},teleport(t,e){s.player.respawn(t,e),s.player.pos.y=wt(t,e)},startGame(t=!1){s.startGame(t)},enterVehicle(t){let e=s.vehicles.find(i=>i.type===t)||s.vehicles[0];s.player.pos.set(e.pos.x,e.pos.y,e.pos.z),s.player.vehicle=e,s.player.root.visible=!1},hideUI(t){document.getElementById("hud").classList.toggle("hidden",t)},showMenu(t){document.getElementById("menu").classList.toggle("hidden",!t)},screenshotMode(t){document.getElementById("hud").classList.toggle("hidden",t)},setCam(t,e,i){s.cam.yaw=t,s.cam.pitch=e},state(){return s.state}}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
