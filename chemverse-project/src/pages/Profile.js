// Halaman Profile + pengaturan.
import { back, bar, sheet, tile } from '../components/ui.js';
import { EXP } from '../data/explore.js';
import { MAT } from '../data/materials.js';
import { M } from '../data/molecules.js';
import { TOP } from '../data/questions.js';
import { MO } from '../data/ui.js';
import { cnt, matDone, pct } from '../features/learning-progress/progress.js';
import { S, dt } from '../services/storage.js';
import { rd, ui } from '../state/ui.js';
import { ic } from '../utils/icons.js';
import { esc } from '../utils/text.js';

function me(){const P=pct(),lv=P<34?'Pemula':P<67?'Menengah':'Mahir';
 let h=`<div class="top"><b class="un">${S.name}</b><button data-a="set" aria-label="Pengaturan">${ic('gear')}</button></div><div class="ph"><span class="rg big"><b style="font-size:34px;background:var(--y)">${(S.name[0]||'C').toUpperCase()}</b></span><div class="stt"><div><b>${matDone()}</b>Materi selesai</div><div><b>${Object.keys(S.qz).length}</b>Latihan selesai</div><div><b>${cnt(S.sd)+cnt(S.ed)}</b>Konten dipelajari</div></div></div><div class="bio"><b>${S.name}</b><br>Chemistry Explorer 🧪<div class="fb">Level ${lv} · ${P}% progres</div><button class="btn2" data-a="set">Edit Profil</button></div><div class="tabs">${[['grid','Learning Posts'],['bookmark','Saved'],['chart','Progress']].map((t,j)=>`<button class="${ui.mt===j?'on':''}" data-a="tb" data-i="${j}" aria-label="${t[1]}">${ic(t[0],0,ui.mt===j?2.6:2)}</button>`).join('')}</div>`;
 if(ui.mt===0){const L=[...MAT.map((m,i)=>({a:'rd',i,c:'Materi',t:m[0],m:MO[i].f,d:S.mp[i]>=100})).filter(x=>x.d),...M.map((m,i)=>({a:'so',i,c:'Model 3D',t:m.f,m:m.f,d:S.sd[i]})).filter(x=>x.d),...EXP.map((e,i)=>({a:'eo',i,c:e[0],t:e[1],m:e[2],d:S.ed[i],b:e[3]})).filter(x=>x.d)];h+=L.length?`<div class="gx">${L.map(tile).join('')}</div>`:'<p class="emp">Belum ada konten. Selesaikan materi di Home atau buka Stories untuk mengisi grid ini.</p>'}
 if(ui.mt===1){const L=Object.keys(S.bm).filter(k=>S.bm[k]).map(k=>k[0]==='m'?{a:'rd',i:+k.slice(1),c:'Materi',t:MAT[+k.slice(1)][0],m:MO[+k.slice(1)].f}:{a:'eo',i:+k.slice(1),c:EXP[+k.slice(1)][0],t:EXP[+k.slice(1)][1],m:EXP[+k.slice(1)][2]});h+=L.length?`<div class="gx">${L.map(tile).join('')}</div>`:'<p class="emp">Belum ada yang disimpan. Tekan ikon penanda pada post di Home.</p>'}
 if(ui.mt===2){const td=S.log.filter(l=>l.d===dt());h+=`<div class="pad"><b>Skor latihan</b>${TOP.map((t,i)=>`<div class="fb" style="margin-top:6px">${t}: ${S.qz[i]?'<b>'+S.qz[i].s+'/'+S.qz[i].t+'</b>':'belum dikerjakan'}</div>`+bar(S.qz[i]?S.qz[i].s/S.qz[i].t*100:0)).join('')}</div><div class="pad"><b>Laporan harian · ${dt()}</b>${td.length?td.map(l=>`<div class="fb">• ${l.t}: ${l.n}</div>`).join(''):'<div class="fb">Belum ada aktivitas hari ini.</div>'}</div><div class="pad"><b>Riwayat belajar</b>${S.log.length?S.log.slice(-15).reverse().map(l=>`<div class="fb">${l.d} · ${l.t}: ${l.n}</div>`).join(''):'<div class="fb">Belum ada riwayat.</div>'}</div>`}
 return h}
function settings(){sheet(back('Pengaturan'),`<div class="pad"><label class="fb" for="nm">Nama pengguna</label><input class="in" id="nm" value="${esc(S.name)}"><button class="btn2" data-a="th">Ganti tema terang/gelap</button><button class="btn2 r" data-a="rst">Hapus semua data belajar</button><p class="fb">Data tersimpan di perangkat ini saja. Login dan database belum aktif di versi halaman ini.</p></div>`)}

export { me, settings };
