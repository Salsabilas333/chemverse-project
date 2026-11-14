// Kuis gaya chat DM: soal, umpan balik, skor.
import { back, bar, cl, sheet } from '../../components/ui.js';
import { QZ, TOP } from '../../data/questions.js';
import { BG } from '../../data/ui.js';
import { act } from '../learning-progress/progress.js';
import { EM } from '../molecular-visualization/glassware.js';
import { S } from '../../services/storage.js';
import { $ } from '../../utils/dom.js';
import { ic } from '../../utils/icons.js';

function chat(){const t=TOP[dm.t],qs=QZ.filter(x=>x[0]===t),av=`<i class="av2" style="background:${BG[dm.t]}">${EM[dm.t]}</i>`;
 const msgs=dm.msgs.map(m=>m.c==='u'?`<div class="mu"><span>${m.t}</span></div>`:`<div class="ma">${av}<span class="${m.c||''}">${m.t}</span></div>`).join('');
 const q0=qs[dm.i],sa=q0&&q0[5]==='s',foot=dm.r?`<button class="btn" data-a="ds" data-i="${dm.t}">Ulangi latihan</button>`:sa&&dm.sel==null?`<input class="in" id="sa" placeholder="Ketik jawabanmu…" aria-label="Jawaban"><button class="btn" style="flex:1" data-a="dsub">Kirim jawaban</button>`:sa&&dm.sel==='g'?[['Lengkap dan benar (2 poin)',2],['Sebagian benar (1 poin)',1],['Belum tepat (0 poin)',0]].map(g=>`<button class="qr" data-a="dg" data-j="${g[1]}">${g[0]}</button>`).join(''):!sa&&dm.sel==null?q0[2].map((o,j)=>`<button class="qr" data-a="da" data-j="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join(''):`<button class="btn y" data-a="dn">${dm.i+1<qs.length?'Pertanyaan berikutnya':'Lihat hasil'}</button>`;
 sheet(`<div class="hrow"><button data-a="cl" aria-label="Kembali">${ic('back')}</button>${av}<div><b>${t}</b><div class="fb">Chemi · Asisten Kimia</div></div></div>${bar(dm.r?100:dm.i/qs.length*100)}`,`<div style="padding:10px 0">${msgs}</div>`,foot,1)}
function dsT(i){const qs=QZ.filter(x=>x[0]===TOP[i]);dm={t:i,i:0,sel:null,ok:0,ans:[],msgs:[{t:'Hai! Aku Chemi 👋 Kita latihan topik “'+TOP[i]+'”, '+qs.length+' soal.'},{t:'1. '+qs[0][1]}]};chat()}
let dm=null;
function resetChat(){dm=null}
function handleQuiz(a,d,i){switch(a){
 case'ds':dsT(i);return true;
 case'da':if(dm.sel==null){const qs=QZ.filter(x=>x[0]===TOP[dm.t]),x=qs[dm.i],j=+d.j,ok=j===x[3];dm.sel=j;dm.ok+=ok?1:0;dm.ans.push({q:x[1],a:x[2][j],ok});dm.msgs.push({t:x[2][j],c:'u'},{t:(ok?'✅ Tepat! ':'❌ Belum tepat. Jawaban benar: <b>'+x[2][x[3]]+'</b>. ')+x[4],c:ok?'ok':'no'});chat()}return true;
 case'dsub':{const x=QZ.filter(y=>y[0]===TOP[dm.t])[dm.i],v=($('#sa').value||'').trim();dm.sel='g';dm.cur=v;dm.msgs.push({t:v||'(tidak menjawab)',c:'u'},{t:'📘 Jawaban acuan: '+x[4]+'<br>Bandingkan dengan jawabanmu, lalu nilai sendiri ya:'});chat();return true}
 case'dg':{const x=QZ.filter(y=>y[0]===TOP[dm.t])[dm.i],p=+d.j;dm.sel='d';dm.ok+=p;dm.ans.push({q:x[1],a:dm.cur,p});dm.msgs.push({t:['Belum tepat','Sebagian benar','Lengkap dan benar'][p]+' ('+p+' poin)',c:'u'},{t:p===2?'Mantap! 🎉':'Tidak apa-apa. Baca lagi jawaban acuan ya.',c:p===2?'ok':'no'});chat();return true}
 case'dn':{const qs=QZ.filter(x=>x[0]===TOP[dm.t]);dm.sel=null;if(dm.i+1<qs.length){dm.i++;dm.msgs.push({t:(dm.i+1)+'. '+qs[dm.i][1]})}else{const mx=qs.reduce((a,y)=>a+(y[5]==='s'?2:1),0),r0=dm.ok/mx;dm.r={s:dm.ok,t:mx};S.qz[dm.t]=dm.r;S.qa[dm.t]=dm.ans;act('Latihan DM',TOP[dm.t]+' ('+dm.ok+'/'+mx+')');dm.msgs.push({t:'Selesai! Skormu '+dm.ok+' dari '+mx+' poin (nilai '+Math.round(r0*100)+'/100). '+(r0>=.8?'Excellent! Kamu sudah memahami konsep bentuk molekul dengan baik.':r0>=.5?'Good progress! Coba pelajari kembali bagian yang masih belum kamu kuasai.':'Keep learning! Yuk, ulangi materi dan coba tantang dirimu lagi.')+' Hasil tersimpan di Profil.'})}chat();return true}
}return false}

export { handleQuiz, resetChat };
