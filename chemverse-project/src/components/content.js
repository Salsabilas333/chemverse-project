// Render konten slide: molekul mini, slider PEB.
import { svgm } from '../features/molecular-visualization/molecule2d.js';
import { byF } from '../utils/text.js';

const pebH=v=>{const a=[['CH₄','AX₄','tetrahedral','109,5°'],['NH₃','AX₃E','piramida trigonal','±107°'],['H₂O','AX₂E₂','bengkok','±104,5°']][v];return `<div class="cm"><div><span class="bx">${v} PEB</span><span class="mm">${svgm(byF(a[0]))}</span><b>${a[0]}</b><br>${a[1]} · ${a[2]}<br>Sudut ${a[3]}</div></div>`};
const fx=t=>t.replace(/\{\{m:([^}]+)\}\}/g,(_,f)=>`<span class="mm">${svgm(byF(f))}</span>`).replace(/\{\{peb\}\}/g,()=>`<div class="pebx"><input type="range" class="pebr" min="0" max="2" value="0" aria-label="Jumlah PEB"><div class="pebo">${pebH(0)}</div></div>`);
const cap=e=>e[3].replace(/\{\{[^}]+\}\}/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().slice(0,90)+'…';

export { pebH, fx, cap };
