// Log aktivitas dan perhitungan progres.
import { S, dt, sv } from '../../services/storage.js';

const act=(t,n)=>{S.log.push({d:dt(),t,n});sv()},cnt=o=>Object.values(o).filter(Boolean).length;
const matDone=()=>Object.values(S.mp).filter(v=>v>=100).length;
const pct=()=>Math.round((matDone()+cnt(S.sd)+cnt(S.ed)+Object.keys(S.qz).length)/25*100);

export { act, cnt, matDone, pct };
