// Bagian post: header, ikon aksi.
import { EXP } from '../data/explore.js';
import { MAT } from '../data/materials.js';
import { act } from '../features/learning-progress/progress.js';
import { S } from '../services/storage.js';
import { ic } from '../utils/icons.js';

const hd=(av,bg,n,sub)=>`<div class="hd"><i class="av2" style="background:${bg}">${av}</i><div><b>${n}</b><div class="fb">${sub}</div></div></div>`;
const acts=k=>`<div class="act"><button data-a="lk" data-k="${k}" aria-label="Tandai menarik">${ic('heart',S.lk[k])}</button><button data-a="shr" data-k="${k}" aria-label="Bagikan">${ic('send')}</button><button data-a="bm" data-k="${k}" aria-label="Simpan" style="margin-left:auto">${ic('bookmark',S.bm[k])}</button></div>`;
const ttl=k=>k[0]==='m'?MAT[+k.slice(1)][0]:EXP[+k.slice(1)][1];

export { hd, acts, ttl };
