// Penampil 3D Three.js: kamera pas-ukuran, putar, zoom, PEI/PEB.
import * as THREE from 'three';
import { render } from '../../app/app.js';
import { DIR, EG, M } from '../../data/molecules.js';
import { act } from '../learning-progress/progress.js';
import { AC, PAL } from './palette.js';
import { S, sv } from '../../services/storage.js';
import { $ } from '../../utils/dom.js';

let R,Sc,Cm,G,rx=.3,ry=.5,zoom=7.5,fit=7.5,lw=0,lh=0,zd=false,auto=true,gl=false,sI=0;
const UP=new THREE.Vector3(0,1,0);
const mat=(c,o)=>new THREE.MeshPhysicalMaterial(Object.assign({color:c,roughness:.3,metalness:.05,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.55},o||{}));
function initGL(){if(gl)return;gl=true;const el=$('#cv');R=new THREE.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));el.prepend(R.domElement);
 Sc=new THREE.Scene();Cm=new THREE.PerspectiveCamera(45,1,.1,100);Sc.add(new THREE.HemisphereLight(0xffffff,0xcbd5e1,.5));const L=new THREE.DirectionalLight(0xffffff,.85);L.position.set(4,6,5);Sc.add(L);const L2=new THREE.DirectionalLight(0xdbeafe,.3);L2.position.set(-5,-2,3);Sc.add(L2);
 try{const es=new THREE.Scene(),mk=(w,h,x,y,z,i)=>{const p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(i,i,i),side:THREE.DoubleSide}));p.position.set(x,y,z);p.lookAt(0,0,0);es.add(p)};es.background=new THREE.Color(0xdfe7f3);mk(8,3,0,7,2,3);mk(3,6,-7,1,3,2.2);mk(3,6,7,0,-2,1.4);mk(10,2,0,-6,0,.9);const pm=new THREE.PMREMGenerator(R);Sc.environment=pm.fromScene(es,.03).texture;pm.dispose()}catch(e){}
 try{const sc=document.createElement('canvas');sc.width=sc.height=128;const cx=sc.getContext('2d'),gr=cx.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(15,23,42,.3)');gr.addColorStop(1,'rgba(15,23,42,0)');cx.fillStyle=gr;cx.fillRect(0,0,128,128);const sh=new THREE.Mesh(new THREE.PlaneGeometry(4.4,4.4),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sc),transparent:true,depthWrite:false}));sh.rotation.x=-1.25;sh.position.set(0,-2.45,-2.5);Sc.add(sh)}catch(e){}G=new THREE.Group();Sc.add(G);
 const pts=new Map();el.addEventListener('pointerdown',e=>{pts.set(e.pointerId,e);auto=false;el.setPointerCapture(e.pointerId)});
 el.addEventListener('pointermove',e=>{const o=pts.get(e.pointerId);if(!o)return;if(pts.size===2){const [a,b]=[...pts.values()],d0=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);pts.set(e.pointerId,e);const [c,d]=[...pts.values()];zd=true;zoom=Math.min(fit*1.8,Math.max(fit*.88,zoom*d0/Math.hypot(c.clientX-d.clientX,c.clientY-d.clientY)))}else{ry+=(e.clientX-o.clientX)*.01;rx+=(e.clientY-o.clientY)*.01;pts.set(e.pointerId,e)}});
 ['pointerup','pointercancel'].forEach(t=>el.addEventListener(t,e=>pts.delete(e.pointerId)));
 el.addEventListener('wheel',e=>{e.preventDefault();zd=true;zoom=Math.min(fit*1.8,Math.max(fit*.88,zoom+e.deltaY*.008*fit/7.5))},{passive:false});loop()}
function fitC(){const r=2.75,v=Cm.fov*Math.PI/360,h=Math.atan(Math.tan(v)*Cm.aspect);fit=Math.max(r/Math.sin(v),r/Math.sin(h))*1.05}
function loop(){requestAnimationFrame(loop);if(!$('#sv').classList.contains('on')||document.hidden)return;const el=$('#cv'),w=el.clientWidth,h=el.clientHeight;if(w&&(w!==lw||h!==lh)){lw=w;lh=h;R.setSize(w,h,false);Cm.aspect=w/h;Cm.updateProjectionMatrix();fitC();if(!zd)zoom=fit}
 if(auto)ry+=.004;G.rotation.set(rx,ry,0);Cm.position.set(0,0,zoom);R.render(Sc,Cm)}
function openStory(i){sI=i;$('#sv').classList.add('on');initGL();const m=M[i];rx=.3;ry=.5;zoom=fit;zd=false;auto=true;
 while(G.children.length)G.remove(G.children[0]);
 const Pm=PAL[m.f],CC=AC[Pm[0]],OC=AC[Pm[1]];
 const ph=(c,r,x,y,z,nm)=>{const g=new THREE.Group();g.add(new THREE.Mesh(new THREE.SphereGeometry(r,48,32),mat(c)));if(c===AC.w)g.add(new THREE.Mesh(new THREE.SphereGeometry(r*1.04,32,24),new THREE.MeshBasicMaterial({color:0x94a3b8,side:THREE.BackSide})));g.position.set(x,y,z);g.name=nm;return g};
 G.add(ph(CC,.66,0,0,0,'center'));
 DIR[m.eg].forEach((v,k)=>{const d=new THREE.Vector3(...v).normalize(),qt=new THREE.Quaternion().setFromUnitVectors(UP,d);
  if(m.lp.includes(k)){const lo=new THREE.Mesh(new THREE.SphereGeometry(.5,40,28),mat('#FACC15',{transparent:true,opacity:.7,roughness:.12}));lo.scale.set(.9,1.45,.9);lo.position.copy(d).multiplyScalar(1.05);lo.quaternion.copy(qt);lo.name='pb';G.add(lo);
   let pv=new THREE.Vector3(1,0,0).cross(d);if(pv.lengthSq()<.01)pv=new THREE.Vector3(0,0,1).cross(d);pv.normalize().multiplyScalar(.17);
   [1,-1].forEach(sg=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.12,24,16),mat('#FFFFFF',{roughness:.2}));e.position.copy(d).multiplyScalar(1.05).addScaledVector(pv,sg);e.name='e';G.add(e)})}
  else{const bd=new THREE.Mesh(new THREE.CylinderGeometry(.11,.11,1.9,24),mat('#CBD5E1',{metalness:.5,roughness:.3,clearcoat:0}));bd.position.copy(d).multiplyScalar(.95);bd.quaternion.copy(qt);bd.name='bond';G.add(bd);G.add(ph(OC,.5,d.x*1.9,d.y*1.9,d.z*1.9,'atom'))}});
 $('#lc').style.background=CC;$('#lo').style.background=OC;
 $('#sh').textContent=m.f;$('#sg').innerHTML=M.map((_,k)=>`<i class="${k<=i?'on':''}"></i>`).join('');
 const pei=DIR[m.eg].length-m.lp.length;
 $('#sk').innerHTML=[['Atom pusat',m.c],['PEI',pei],['PEB',m.lp.length],['AXE',m.axe],['Geom. elektron',EG[m.eg]],['Geom. molekul',m.mg],['Sudut',m.ang]].map(a=>`<div><small>${a[0]}</small><b>${a[1]}</b></div>`).join('');
 $('#sw').textContent=m.why;if(!S.sd[i]){S.sd[i]=1;act('Story dilihat',m.f);sv()}}
function closeStory(){$('#sv').classList.remove('on');render()}
function handleViewer(a,i){switch(a){case'so':openStory(i);return true;case'sx':closeStory();return true;case'sn':if(sI<10)openStory(sI+1);return true;case'sp':if(sI>0)openStory(sI-1);return true;case'rv':rx=.3;ry=.5;zoom=fit;zd=false;return true}return false}

export { openStory, closeStory, handleViewer };
