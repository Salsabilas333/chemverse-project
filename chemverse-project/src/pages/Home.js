// Halaman Home: Stories + feed ChemFeed.
import { cap, fx } from '../components/content.js';
import { acts, hd } from '../components/postParts.js';
import { EXP, FEED } from '../data/explore.js';
import { MAT } from '../data/materials.js';
import { M } from '../data/molecules.js';
import { TOP } from '../data/questions.js';
import { ACCT, BG, MO, ca } from '../data/ui.js';
import { EM, glass } from '../features/molecular-visualization/glassware.js';
import { svgm } from '../features/molecular-visualization/molecule2d.js';
import { S } from '../services/storage.js';
import { rd } from '../state/ui.js';
import { ic } from '../utils/icons.js';

function matPost(i){const m=MAT[i],p=S.mp[i]||0,k='m'+i,sl=[`<div class="sl" style="background:${BG[i]}"><div class="big">${svgm(MO[i])}</div><h2>${m[0]}</h2></div>`].concat(m[4].map(t=>`<div class="sl" style="background:${BG[i]}"><div class="tx">${fx(t)}</div></div>`));
 return `<article class="po a${i}">${hd(EM[i],BG[i],'chemverse.'+ACCT[i],'Materi '+(i+1)+' · '+m[3])}<div class="car" data-k="${k}">${sl.join('')}</div><div class="dots" id="d${k}">${sl.map((_,j)=>`<i class="${j?'':'on'}"></i>`).join('')}</div>${acts(k)}<div class="cap"><b>chemverse.${ACCT[i]}</b> ${m[0]}<br><span class="fb">${m[5]}</span> <button class="lnk" data-a="rd" data-i="${i}">selengkapnya</button><div class="fb">${p>=100?'Selesai ✓':p>0?'Dipelajari '+p+'%':'Belum dimulai'}</div></div></article>`}
function expPost(i){const e=EXP[i],k='e'+i;return `<article class="po a${ca(e[0])}">${hd(glass('f',ca(e[0])),BG[ca(e[0])],'chemverse.explore',e[0])}<div class="sl" style="background:${BG[ca(e[0])]}"><div class="big">${svgm(M.find(m=>m.f===e[2]))}</div><h2>${e[1]}</h2></div>${acts(k)}<div class="cap"><b>chemverse.explore</b> ${e[1]}<br><span class="fb">${cap(e)}</span> <button class="lnk" data-a="eo" data-i="${i}">selengkapnya</button>${S.ed[i]?'<div class="fb">Selesai ✓</div>':''}</div></article>`}
function home(){const nx=M.findIndex((_,i)=>!S.sd[i]);
 return `<div class="top"><div class="wm">Chem<b>verse</b></div><button data-v="dm" aria-label="DM">${ic('send')}${TOP.some((_,i)=>!S.qz[i])?'<i class="dot"></i>':''}</button></div>
<div class="sts"><button class="st" data-a="so" data-i="${nx<0?0:nx}"><span class="rg you"><b class="gi">${glass('f',0)}</b><em>+</em></span>Jelajahi</button>${M.map((m,i)=>`<button class="st" data-a="so" data-i="${i}"><span class="rg${S.sd[i]?' seen':''}"><b style="background:${BG[i%4]}">${svgm(m,1)}</b></span>${m.f}</button>`).join('')}</div><hr>
<div class="ft">Your Chemistry Feed</div>${MAT.map((_,i)=>matPost(i)).join('')}<div class="ft">Learn Something New</div>${FEED.map(expPost).join('')}`}

export { home };
