// Ikon gelas kimia dan avatar topik.
import { AQ, mix } from './palette.js';

function glass(k,ci){const c=AQ[ci],id='gv'+k+ci,G0='fill="rgba(226,232,240,.6)" stroke="#94A3B8" stroke-width="1.5" stroke-linejoin="round"',hl='<path d="M17.5 8v9" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>';
 const Sh={f:'<path d="M15 4h10v3h-1.5v10L33 33a3 3 0 0 1-2.6 4.5H9.6A3 3 0 0 1 7 33l9.5-16V7H15z" '+G0+'/><path d="M11.8 27h16.4l4.4 7.3a1.8 1.8 0 0 1-1.5 2.7H8.9a1.8 1.8 0 0 1-1.5-2.7z" fill="url(#'+id+')"/>'+hl+'<circle cx="16" cy="32" r="1.6" fill="#fff" opacity=".7"/>',t:'<rect x="14" y="3.5" width="12" height="33" rx="6" '+G0+'/><path d="M15 21h10v10a5 5 0 0 1-10 0z" fill="url(#'+id+')"/>'+hl,b:'<path d="M8 5h24l-2.2 30a3 3 0 0 1-3 2.8H13.2a3 3 0 0 1-3-2.8z" '+G0+'/><path d="M9.4 21h21.2l-.9 13.6a2 2 0 0 1-2 1.8H12.3a2 2 0 0 1-2-1.8z" fill="url(#'+id+')"/>'+hl}[k];
 return '<svg viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" x2="1"><stop offset="0" stop-color="'+mix(c,'w',.45)+'"/><stop offset=".55" stop-color="'+c+'"/><stop offset="1" stop-color="'+mix(c,'k',.3)+'"/></linearGradient></defs>'+Sh+'</svg>'}
const EM=[glass('f',0),glass('t',1),glass('b',2),glass('f',3)];

export { glass, EM };
