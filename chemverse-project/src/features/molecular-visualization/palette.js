// Warna atom per molekul + gradien.

const AC={r:'#DC2626',g:'#16A34A',b:'#2563EB',y:'#FACC15',k:'#1F2937',w:'#F1F5F9'},AQ=['#2563EB','#16A34A','#FACC15','#DC2626'];
const PAL={'BeCl₂':['k','g'],'BF₃':['r','g'],'CH₄':['k','w'],'NH₃':['b','w'],'H₂O':['r','w'],'PCl₅':['b','g'],'SF₄':['r','b'],'ClF₃':['r','g'],'SF₆':['b','r'],'BrF₅':['k','r'],'XeF₄':['k','b']};
const mix=(h,t,a)=>{const n=parseInt(h.slice(1),16),T=t==='w'?255:0;return '#'+[n>>16,n>>8&255,n&255].map(v=>Math.round(v+(T-v)*a).toString(16).padStart(2,'0')).join('')};
const gdef=h=>`<radialGradient id="g${h.slice(1)}" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="${mix(h,'w',.7)}"/><stop offset=".5" stop-color="${h}"/><stop offset="1" stop-color="${mix(h,'k',.4)}"/></radialGradient>`;

export { AC, AQ, PAL, mix, gdef };
