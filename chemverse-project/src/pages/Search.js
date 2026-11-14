// Halaman Search.
import { sbx } from '../components/ui.js';
import { GL, SEC } from '../data/glossary.js';
import { sres, trow } from '../features/glossary/glossary.js';
import { S } from '../services/storage.js';
import { Q } from '../state/ui.js';

const SUG=['PEB','Tetrahedral','AXE','VSEPR','Sudut ikatan','Seesaw'];
function search(){const q=Q.s.trim().toLowerCase();let h=`<div class="top">${sbx('s','Cari istilah kimia')}</div>`;
 if(q){const r=sres(Q.s);h+=`<div class="pad"><button class="btn2" data-a="sall">‹ Kembali ke semua ${GL.length} istilah</button><div class="fb" style="margin-top:6px">${r.length} istilah ditemukan</div></div>`+(r.length?r.map(trow).join(''):'<p class="emp">Tidak ada istilah yang cocok dengan “'+Q.s+'”. Coba “elektron”, “sudut”, atau “bentuk”.</p>')}
 else h+=`<div class="sec">Disarankan</div><div class="chs">${SUG.map(t=>`<button class="cc" data-a="sg" data-t="${t}">${t}</button>`).join('')}</div>`+(S.rs.length?'<div class="sec">Terakhir dicari</div>'+S.rs.map(trow).join(''):'')+`<div class="sec">Semua istilah (${GL.length})</div>`+Object.keys(SEC).map(c=>`<div class="fb sc s${c}" style="padding:10px 14px 2px;font-weight:800">${SEC[c]}</div>`+GL.map((_,i)=>i).filter(i=>GL[i][2]===c).map(trow).join('')).join('');return h}

export { search };
