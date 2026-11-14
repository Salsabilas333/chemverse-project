// Fungsi teks: esc, normalisasi pencarian (nz), pencarian molekul (byF).
import { M } from '../data/molecules.js';

const esc=s=>s.replace(/"/g,'&quot;');
const nz=s=>s.toLowerCase().replace(/[₀-₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)),byF=f=>M.find(m=>m.f===f);

export { esc, nz, byF };
