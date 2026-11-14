// Pencarian glosarium dan detail istilah.
import { back, sheet, tile } from '../../components/ui.js';
import { EXP } from '../../data/explore.js';
import { GL, REL, SEC } from '../../data/glossary.js';
import { MAT } from '../../data/materials.js';
import { M } from '../../data/molecules.js';
import { BG } from '../../data/ui.js';
import { rd } from '../../state/ui.js';
import { nz } from '../../utils/text.js';

const trow=i=>`<button class="rw" data-a="td" data-i="${i}"><i class="av2" style="background:${BG[i%4]}">${GL[i][0][0]}</i><div><b>${GL[i][0]}</b><div class="fb">${GL[i][1].slice(0,64)}…</div></div></button>`;
function sres(q){q=nz(q.trim());return GL.map((g,i)=>{const t=nz(g[0]),d=nz(g[1]);return[i,t===q?0:t.startsWith(q)?1:t.includes(q)?2:d.includes(q)?3:9]}).filter(x=>x[1]<9).sort((a,b)=>a[1]-b[1]||a[0]-b[0]).map(x=>x[0])}
function mols(g){const t=nz(g[0]+' '+g[1]);let r=M.filter(m=>t.includes(nz(m.f)));if(!r.length)r=M.filter(m=>nz(m.mg).split(' (')[0]===nz(g[0]).split(' (')[0]);if(!r.length)r=M.filter(m=>t.includes(nz(m.axe)));if(!r.length&&/peb|bebas/.test(t))r=[M[3],M[4]];if(!r.length&&/vsepr|tolakan|sudut/.test(t))r=[M[2],M[3],M[4]];return r.slice(0,4)}
function termD(i){const g=GL[i],m=mols(g),rl=(REL[g[0]]||[]).map(n=>GL.findIndex(x=>x[0]===n)).filter(j=>j>=0),rr=rl.length?rl:GL.map((_,j)=>j).filter(j=>j!==i&&Math.abs(j-i)<=2&&GL[j][2]===g[2]),pi={A:0,B:2,C:1,D:0,F:0}[g[2]],ei=g[2]==='E'?27:g[2]==='F'?EXP.findIndex(e=>e[0]==='Contoh Soal'&&nz(e[1]).includes(nz(g[0]))):-1;
 sheet(back('Istilah'),`<div class="pad"><span class="bx s${g[2]}">${SEC[g[2]]}</span><h2 style="margin-top:6px">${g[0]}</h2><p>${g[1]}</p>${m.length?'<b>Contoh molekul</b></div><div class="gx">'+m.map((x,n)=>tile({a:'so',i:M.indexOf(x),c:'Model 3D',t:x.f,m:x.f},n+1)).join('')+'</div><div class="pad">':''}${rr.length?'<b>Istilah terkait</b></div>'+rr.map(trow).join('')+'<div class="pad">':''}${pi!=null?`<button class="btn2" data-a="rd" data-i="${pi}">Buka materi: ${MAT[pi][0]}</button>`:''}${ei>=0?`<button class="btn2 g" data-a="eo" data-i="${ei}">Lihat di Explore</button>`:''}</div>`)}

export { trow, sres, termD };
