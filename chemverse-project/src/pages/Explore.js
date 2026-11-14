// Halaman Explore + detail konten.
import { fx } from '../components/content.js';
import { acts, hd } from '../components/postParts.js';
import { back, sbx, sheet, tile } from '../components/ui.js';
import { EXP } from '../data/explore.js';
import { M } from '../data/molecules.js';
import { BG, ca } from '../data/ui.js';
import { glass } from '../features/molecular-visualization/glassware.js';
import { svgm } from '../features/molecular-visualization/molecule2d.js';
import { S } from '../services/storage.js';
import { Q, ui } from '../state/ui.js';
import { nz } from '../utils/text.js';

const CATS=['Semua','Pemahaman Konsep','Contoh Soal','Pembahasan','Pengayaan','Fakta Kimia','Model 3D'];
function explore(){const q=Q.x.toLowerCase(),T=[...EXP.map((e,i)=>({a:'eo',i,c:e[0],t:e[1],m:e[2],d:S.ed[i],b:e[3]})),...M.map((m,i)=>({a:'so',i,c:'Model 3D',t:m.f+' '+m.mg,m:m.f,d:S.sd[i]}))].filter(x=>(ui.xc==='Semua'||x.c===ui.xc)&&nz(x.t+' '+x.c+' '+(x.b||'').replace(/<[^>]+>/g,' ')).includes(nz(Q.x.trim())));
 return `<div class="top">${sbx('x','Cari konten kimia')}</div><div class="chs">${CATS.map(c=>`<button class="cc${c===ui.xc?' on':''}" data-a="cat" data-c="${c}">${c}</button>`).join('')}</div>`+(T.length?`<div class="gx">${T.map(tile).join('')}</div>`:'<p class="emp">Tidak ada konten yang cocok. Coba kata kunci atau kategori lain.</p>')}
function expD(i){const x=EXP[i],k='e'+i,mo=M.find(m=>m.f===x[2]);sheet(back(x[0]),hd(glass('f',ca(x[0])),BG[ca(x[0])],'chemverse.explore',x[0])+`<div class="sl" style="background:${BG[ca(x[0])]}"><div class="big">${svgm(mo)}</div></div>`+acts(k)+`<div class="pad"><h2>${x[1]}</h2><div class="xb">${fx(x[3])}</div><button class="btn2" data-a="so" data-i="${M.indexOf(mo)}">Lihat model 3D ${mo.f}</button></div>`,`<button class="btn g" style="flex:1" data-a="ed" data-i="${i}" ${S.ed[i]?'disabled':''}>${S.ed[i]?'Sudah selesai ✓':'Tandai selesai'}</button>`)}

export { explore, expD };
