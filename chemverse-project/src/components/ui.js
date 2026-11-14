// Komponen UI bersama: bar, toast, tile, kolom cari, sheet.
import { M } from '../data/molecules.js';
import { BG } from '../data/ui.js';
import { svgm } from '../features/molecular-visualization/molecule2d.js';
import { Q } from '../state/ui.js';
import { $ } from '../utils/dom.js';
import { ic } from '../utils/icons.js';
import { esc } from '../utils/text.js';

const bar=p=>`<div class="bar"><i style="width:${p}%"></i></div>`;
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1600)}
const tile=(x,n)=>`<button class="tl${n%7===0?' big':''}" data-a="${x.a}" data-i="${x.i}" style="background:${BG[n%4]}" aria-label="${x.t}">${svgm(M.find(m=>m.f===x.m))}<span class="lb">${x.c==='Model 3D'?x.m:x.c}</span>${x.d?'<span class="ck">✓</span>':''}</button>`;
const sbx=(k,ph)=>`<div class="sbx">${ic('search')}<input data-s="${k}" id="in-${k}" placeholder="${ph}" value="${esc(Q[k])}" aria-label="${ph}"></div>`;
function sheet(head,body,foot,bottom){const o=$('#ov');o.innerHTML=`<div class="shh">${head}</div><div class="shb">${body}</div>${foot?`<div class="shf">${foot}</div>`:''}`;o.classList.add('on');const s=o.querySelector('.shb');s.scrollTop=bottom?s.scrollHeight:0}
const cl=()=>$('#ov').classList.remove('on'),back=t=>`<div class="hrow"><button data-a="cl" aria-label="Kembali">${ic('back')}</button><b>${t}</b></div>`;

export { bar, toast, tile, sbx, sheet, cl, back };
