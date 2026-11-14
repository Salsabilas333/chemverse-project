// Gambar molekul 2D (SVG) dengan pas-ukuran otomatis (anti terpotong).
import { ex } from '../../data/contentHelpers.js';
import { DIR } from '../../data/molecules.js';
import { AC, PAL, gdef } from './palette.js';

function svgm(m,sq){const a=.6,b=.45,k=74,P=PAL[m.f],CC=AC[P[0]],OC=AC[P[1]],W=sq?180:300,H=180,mg=sq?16:18;
 const its=DIR[m.eg].map((v,i)=>{const L=Math.hypot(...v),u=v.map(c=>c/L),x=u[0]*Math.cos(a)+u[2]*Math.sin(a),z=-u[0]*Math.sin(a)+u[2]*Math.cos(a),y=u[1]*Math.cos(b)-z*Math.sin(b);return{x:x*k,y:-y*k,z:u[1]*Math.sin(b)+z*Math.cos(b),l:m.lp.includes(i)}}).concat([{x:0,y:0,z:0,c:1}]).sort((p,q)=>p.z-q.z);
 const ex=its.map(p=>p.c?{x:0,y:0,r:26,d:1.25}:p.l?{x:p.x*.62,y:p.y*.62,r:19,d:1}:{x:p.x,y:p.y,r:16+p.z*3,d:1.25});
 const x0=Math.min(...ex.map(e=>e.x-e.r)),x1=Math.max(...ex.map(e=>e.x+e.r)),y0=Math.min(...ex.map(e=>e.y-e.r)),y1=Math.max(...ex.map(e=>e.y+e.r*e.d)),cx=(x0+x1)/2,cy=(y0+y1)/2;
 const f=sq?Math.min((W/2-mg)/Math.max(...ex.map(e=>Math.hypot(e.x-cx,e.y-cy)+e.r*e.d)),1.45):Math.min((W-2*mg)/(x1-x0),(H-2*mg)/(y1-y0),1.45);
 svgm.bb={x0:W/2+(x0-cx)*f,x1:W/2+(x1-cx)*f,y0:H/2+(y0-cy)*f,y1:H/2+(y1-cy)*f,W,H,circ:sq?Math.max(...ex.map(e=>Math.hypot(e.x-cx,e.y-cy)+e.r*e.d))*f:0};
 const sph=(x,y,r,col)=>`<ellipse cx="${x}" cy="${y+r*.95}" rx="${r*.95}" ry="${r*.28}" fill="rgba(15,23,42,.14)"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#g${col.slice(1)})"${col===AC.w?' stroke="#94A3B8" stroke-width="1.3"':''}/><ellipse cx="${x-r*.32}" cy="${y-r*.4}" rx="${r*.3}" ry="${r*.18}" fill="#fff" opacity=".75" transform="rotate(-30 ${x} ${y})"/>`;
 let o=`<svg viewBox="0 0 ${W} ${H}" style="overflow:visible" role="img" aria-label="Model ${m.f}"><defs>${gdef(CC)}${gdef(OC)}<radialGradient id="gpb" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#FEF9C3"/><stop offset="1" stop-color="#FACC15"/></radialGradient></defs><g transform="translate(${W/2} ${H/2}) scale(${f}) translate(${-cx} ${-cy})">`;
 its.forEach(p=>{if(p.c){o+=sph(0,0,26,CC)}else if(p.l){const lx=p.x*.62,ly=p.y*.62,an=Math.atan2(p.x,-p.y)*180/Math.PI,kk=Math.hypot(p.x,p.y)||1,ox=p.y/kk*5,oy=-p.x/kk*5;o+=`<g transform="rotate(${an} ${lx} ${ly})"><ellipse cx="${lx}" cy="${ly}" rx="12" ry="19" fill="url(#gpb)" stroke="#CA8A04" stroke-width="1.5" opacity=".92"/></g><circle cx="${lx+ox}" cy="${ly+oy}" r="3.2" fill="#fff"/><circle cx="${lx-ox}" cy="${ly-oy}" r="3.2" fill="#fff"/>`}else{o+=`<line x1="0" y1="0" x2="${p.x}" y2="${p.y}" stroke="#64748B" stroke-width="8" stroke-linecap="round"/><line x1="0" y1="0" x2="${p.x}" y2="${p.y}" stroke="#CBD5E1" stroke-width="5" stroke-linecap="round"/><line x1="0" y1="0" x2="${p.x}" y2="${p.y}" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7" transform="translate(-1.5 -1.5)"/>`+sph(p.x,p.y,16+p.z*3,OC)}});
 return o+'</g></svg>'}

export { svgm };
