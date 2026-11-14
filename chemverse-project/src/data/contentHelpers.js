// Pembuat tabel/contoh soal untuk konten.

const tr=(...r)=>`<table class="tb">${r.map((x,i)=>`<tr>${x.map(c=>i?`<td>${c}</td>`:`<th>${c}</th>`).join('')}</tr>`).join('')}</table>`;
const ex=(q,s,a)=>`<p><b>Pertanyaan:</b> ${q}</p><ol class="stp">${s.map(x=>`<li>${x}</li>`).join('')}</ol><p class="ans"><b>Jawaban:</b> ${a}</p>`;
const H4=['Bentuk','AXE','Contoh','Sudut'];
const R1=[['Linear','AX₂','BeCl₂, CO₂','180°'],['Segitiga planar','AX₃','BF₃','120°'],['Tetrahedral','AX₄','CH₄','±109,5°'],['Piramida trigonal','AX₃E','NH₃','±107°'],['Bengkok','AX₂E₂','H₂O','±104,5°']];
const R2=[['Bipiramida trigonal','AX₅','PCl₅','90°, 120°'],['Jungkat-jungkit','AX₄E','SF₄','terdistorsi'],['Bentuk T','AX₃E₂','ClF₃','terdistorsi'],['Oktahedral','AX₆','SF₆','90°, 180°'],['Piramida segiempat','AX₅E','BrF₅','terdistorsi'],['Segiempat planar','AX₄E₂','XeF₄','90°, 180°']];
const DOM=tr(['Domain','Geometri domain','Sudut ideal'],['2','Linear','180°'],['3','Segitiga planar','120°'],['4','Tetrahedral','109,5°'],['5','Bipiramida trigonal','90° dan 120°'],['6','Oktahedral','90°']);
const TRIO=`<div class="cm"><div>{{m:CH₄}}<b>CH₄</b><br>AX₄ · tetrahedral<br>109,5°</div><div>{{m:NH₃}}<b>NH₃</b><br>AX₃E · piramida trigonal<br>±107°</div><div>{{m:H₂O}}<b>H₂O</b><br>AX₂E₂ · bengkok<br>±104,5°</div></div>`;

export { tr, ex, H4, R1, R2, DOM, TRIO };
