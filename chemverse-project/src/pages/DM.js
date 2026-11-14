// Inbox DM.
import { sbx } from '../components/ui.js';
import { QZ, TOP } from '../data/questions.js';
import { BG } from '../data/ui.js';
import { EM } from '../features/molecular-visualization/glassware.js';
import { S } from '../services/storage.js';
import { Q } from '../state/ui.js';
import { ic } from '../utils/icons.js';

function inbox(){const q=Q.d.toLowerCase();return `<div class="top"><b class="un">${S.name} ▾</b>${ic('send')}</div><div class="pad"><h2>Messages</h2>${sbx('d','Cari pesan')}</div>`+TOP.map((t,i)=>({t,i})).filter(x=>x.t.toLowerCase().includes(q)).map(({t,i})=>{const r=S.qz[i];return `<button class="rw" data-a="ds" data-i="${i}"><i class="av2 lg2" style="background:${BG[i]}">${EM[i]}</i><div style="flex:1"><b>${t}</b><div class="fb pv">Chemi: ${r?'Skormu '+r.s+'/'+r.t+'. Ketuk untuk mengulang.':'Yuk mulai latihan, ada '+QZ.filter(x=>x[0]===t).length+' soal 👋'}</div></div>${r?'<span class="fb">✓</span>':'<i class="bd"></i>'}</button>`}).join('')}

export { inbox };
