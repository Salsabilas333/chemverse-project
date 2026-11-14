// Semua event klik/input/scroll.
import { render } from './app.js';
import { pebH } from '../components/content.js';
import { ttl } from '../components/postParts.js';
import { cl, toast } from '../components/ui.js';
import { EXP } from '../data/explore.js';
import { MAT } from '../data/materials.js';
import { termD } from '../features/glossary/glossary.js';
import { act } from '../features/learning-progress/progress.js';
import { rdShow } from '../features/learning-progress/reader.js';
import { handleViewer } from '../features/molecular-visualization/viewer3d.js';
import { handleQuiz, resetChat } from '../features/quiz/quiz.js';
import { expD } from '../pages/Explore.js';
import { settings } from '../pages/Profile.js';
import { S, resetState, sv } from '../services/storage.js';
import { Q, rd, ui } from '../state/ui.js';
import { $ } from '../utils/dom.js';
import { ic } from '../utils/icons.js';

document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset,a=d.a,i=+d.i,k=d.k;
 if(d.v){ui.view=d.v;resetChat();cl();render();scrollTo(0,0);return}
 if(handleQuiz(a,d,i)||handleViewer(a,i))return;
 switch(a){
 case'cl':cl();render();break;
 case'lk':case'bm':{const o=a==='lk'?S.lk:S.bm;o[k]=!o[k];sv();b.innerHTML=ic(a==='lk'?'heart':'bookmark',o[k]);if(o[k])toast(a==='bm'?'Disimpan':'Ditandai menarik');break}
 case'shr':{const x={title:'CHEMVERSE',text:ttl(k)+' · belajar bentuk molekul di CHEMVERSE'};if(navigator.share)navigator.share(x).catch(()=>{});else if(navigator.clipboard)navigator.clipboard.writeText(x.text).then(()=>toast('Teks disalin'),()=>toast('Tidak bisa menyalin'));else toast('Berbagi tidak didukung');break}
 case'rd':rd.i=i;rd.p=0;rdShow();break;
 case'rn':if(rd.p<MAT[rd.i][4].length-1){rd.p++;S.mp[rd.i]=Math.max(S.mp[rd.i]||0,Math.round(rd.p/MAT[rd.i][4].length*100));sv();rdShow()}else{S.mp[rd.i]=100;act('Materi selesai',MAT[rd.i][0]);cl();render()}break;
 case'rp':if(rd.p>0){rd.p--;rdShow()}break;
 case'eo':expD(i);break;
 case'ed':if(!S.ed[i]){S.ed[i]=1;act('Explore selesai',EXP[i][1])}expD(i);break;
 case'cat':ui.xc=d.c;render();break;
 case'tb':ui.mt=i;render();break;
 case'sg':Q.s=d.t;render();break;
 case'sall':Q.s='';render();break;
 case'td':S.rs=[i,...S.rs.filter(x=>x!==i)].slice(0,5);sv();termD(i);break;
 case'set':settings();break;
 case'th':{const r=document.documentElement;r.dataset.theme=(r.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))==='dark'?'light':'dark';break}
 case'rst':if(confirm('Hapus semua progres?')){resetState();cl();render()}break;
 }});
document.addEventListener('input',e=>{const t=e.target,k=t.dataset.s;if(k){Q[k]=t.value;const p=t.selectionStart;render();const n=$('#in-'+k);n.focus();n.setSelectionRange(p,p)}if(t.classList&&t.classList.contains('pebr')){t.closest('.pebx').querySelector('.pebo').innerHTML=pebH(+t.value)}if(t.id==='nm'){S.name=t.value||'chem_siswa';sv()}});
document.addEventListener('scroll',e=>{const c=e.target;if(c.classList&&c.classList.contains('car')){const j=Math.round(c.scrollLeft/c.clientWidth);[...$('#d'+c.dataset.k).children].forEach((x,n)=>x.classList.toggle('on',n===j))}},true);
