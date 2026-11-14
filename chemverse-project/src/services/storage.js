// Penyimpanan progres di localStorage (browser).

let S={mp:{},sd:{},ed:{},qz:{},log:[],name:'chem_siswa',lk:{},bm:{},rs:[]};
try{Object.assign(S,JSON.parse(localStorage.getItem('cvs')||'{}'))}catch(e){}
if(S.v!==3){const old=S.v===2;S.qz={};S.qa={};S.rs=[];if(!old){S.ed={};for(const k of['bm','lk'])for(const x in S[k])if(x[0]==='e')delete S[k][x]}S.v=3}
const sv=()=>{try{localStorage.setItem('cvs',JSON.stringify(S))}catch(e){}},dt=()=>new Date().toLocaleDateString('sv');
function resetState(){S={mp:{},sd:{},ed:{},qz:{},log:[],name:'chem_siswa',lk:{},bm:{},rs:[]};sv()}

export { S, sv, dt, resetState };
