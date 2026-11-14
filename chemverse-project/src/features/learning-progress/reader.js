// Pembaca materi per halaman.
import { fx } from '../../components/content.js';
import { back, bar, sheet } from '../../components/ui.js';
import { MAT } from '../../data/materials.js';
import { rd } from '../../state/ui.js';

function rdShow(){const m=MAT[rd.i];sheet(back('Materi '+(rd.i+1)),`<div class="pad"><h2>${m[0]}</h2><div class="fb">Halaman ${rd.p+1} dari ${m[4].length}</div>${bar((rd.p+1)/m[4].length*100)}<div class="rdt">${fx(m[4][rd.p])}</div></div>`,`<button class="btn2" data-a="rp" ${rd.p?'':'disabled'}>Kembali</button><button class="btn ${rd.p<m[4].length-1?'':'g'}" style="flex:1" data-a="rn">${rd.p<m[4].length-1?'Lanjut':'Selesai ✓'}</button>`)}

export { rdShow };
