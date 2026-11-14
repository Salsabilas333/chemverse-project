// 4 materi ChemFeed (slide).
import { DOM, H4, R1, R2, TRIO, tr } from './contentHelpers.js';

const MAT=[
['Memahami Konsep Bentuk-Bentuk Molekul','📐','var(--b)','8 menit',[
`<b>Apa itu bentuk molekul?</b><br>Susunan tiga dimensi atom-atom penyusun molekul di dalam ruang. Molekul tidak selalu lurus: ada yang linear, segitiga planar, tetrahedral, piramida trigonal, bengkok, dan bentuk lainnya.`,
`<b>Mengapa bentuknya berbeda?</b><br>• Jumlah atom yang terikat pada atom pusat<br>• Jumlah pasangan elektron ikatan (PEI)<br>• Jumlah pasangan elektron bebas (PEB)<br>• Tolakan antardomain elektron di sekitar atom pusat`,
`<b>Bentuk-bentuk molekul (1)</b>${tr(H4,...R1)}`,
`<b>Bentuk-bentuk molekul (2)</b>${tr(H4,...R2)}`,
`<b>Geometri domain vs bentuk molekul</b><br>Geometri domain elektron memperhitungkan <b>semua</b> domain (PEI dan PEB). Bentuk molekul hanya melihat posisi <b>atom</b>.<br>• NH₃: domain tetrahedral, bentuk piramida trigonal<br>• H₂O: domain tetrahedral, bentuk bengkok`,
`<b>Bandingkan: NH₃ dan H₂O</b><div class="cm"><div>{{m:NH₃}}<b>NH₃</b><br>AX₃E · piramida trigonal<br>±107°</div><div>{{m:H₂O}}<b>H₂O</b><br>AX₂E₂ · bengkok<br>±104,5°</div></div>Sama-sama 4 domain, tetapi jumlah PEB berbeda.`,
`<b>Kesimpulan</b><br>Bentuk molekul adalah susunan ruang atom yang dipengaruhi jumlah domain elektron dan tolakannya. Untuk menentukannya kita perlu struktur Lewis, PEI, PEB, dan teori VSEPR.<br>👉 Putar modelnya di Stories!`],
'Tujuan: memahami konsep bentuk molekul, penyebab perbedaannya, dan bentuk-bentuk umumnya.'],
['Menjelaskan Prinsip Dasar Teori VSEPR','⚛️','var(--p)','9 menit',[
`<b>Apa itu VSEPR?</b><br><i>Valence Shell Electron Pair Repulsion</i>: pasangan elektron pada kulit valensi atom pusat saling tolak-menolak dan mengatur posisi sejauh mungkin agar tolakan minimum. Dipakai untuk memprediksi bentuk molekul dari jumlah domain elektron.`,
`<b>Apa itu domain elektron?</b><br>Daerah elektron di sekitar atom pusat. Dihitung <b>1 domain</b> untuk:<br>• satu ikatan tunggal<br>• satu ikatan rangkap dua<br>• satu ikatan rangkap tiga<br>• satu PEB<br>Jumlah domain = domain ikatan + PEB.`,
`<b>5 prinsip dasar</b><br>1. Domain elektron saling tolak-menolak<br>2. Cenderung menempati posisi sejauh mungkin<br>3. Susunannya menentukan geometri domain<br>4. PEB menolak lebih kuat daripada PEI<br>5. Bentuk molekul ditentukan posisi atom terikat`,
`<b>Geometri menurut jumlah domain</b>${DOM}`,
`<b>6 langkah menentukan bentuk</b><ol class="stp"><li>Gambar struktur Lewis</li><li>Tentukan atom pusat</li><li>Hitung PEI dan PEB atom pusat</li><li>Tentukan notasi AXE (A pusat, X terikat, E PEB)</li><li>Tentukan geometri domain</li><li>Tentukan bentuk molekul dari posisi atom</li></ol>`,
`<b>Contoh penerapan</b><div class="cm"><div>{{m:BeCl₂}}<b>BeCl₂</b><br>AX₂ · linear<br>180°</div><div>{{m:BF₃}}<b>BF₃</b><br>AX₃ · segitiga planar<br>120°</div><div>{{m:CH₄}}<b>CH₄</b><br>AX₄ · tetrahedral<br>±109,5°</div></div>Ketiganya tanpa PEB, jadi bentuk molekul sama dengan geometri domain.`,
`<b>Kesimpulan</b><br>VSEPR memprediksi bentuk molekul dari tolakan antardomain elektron. Makin tepat kita menghitung domain pada atom pusat, makin tepat prediksinya.`],
'Tujuan: memahami VSEPR, domain elektron, dan langkah memprediksi bentuk molekul.'],
['Menjelaskan Hubungan PEI dan PEB','🔗','var(--g)','8 menit',[
`<b>Apa itu PEI?</b><br>Pasangan Elektron Ikatan: pasangan elektron yang digunakan bersama oleh dua atom untuk membentuk ikatan kovalen.<br>Contoh: pada CH₄, atom C membentuk 4 ikatan dengan 4 atom H, jadi C memiliki 4 PEI.`,
`<b>Apa itu PEB?</b><br>Pasangan Elektron Bebas: pasangan elektron valensi yang tidak digunakan untuk berikatan. PEB tetap berada di sekitar atom dan memengaruhi susunan domain.<br>• NH₃: 1 PEB pada N<br>• H₂O: 2 PEB pada O`,
`<b>PEI vs PEB</b><div class="cm" style="text-align:left"><div><b>PEI</b><br>• dipakai membentuk ikatan<br>• di antara dua atom<br>• menentukan keterhubungan atom</div><div><b>PEB</b><br>• tidak dipakai berikatan<br>• berada pada atom pemiliknya<br>• memengaruhi tolakan dan bentuk</div></div>`,
`<b>Notasi AXE</b><br>A = atom pusat · X = atom terikat · E = PEB<br>• CH₄ = AX₄: 4 PEI, 0 PEB, tetrahedral<br>• NH₃ = AX₃E: 3 PEI, 1 PEB, piramida trigonal<br>• H₂O = AX₂E₂: 2 PEI, 2 PEB, bengkok`,
`<b>Bagaimana PEB memengaruhi bentuk?</b>${TRIO}PEB memberi tolakan lebih kuat sehingga sudut ikatan mengecil. Ketiganya punya 4 domain, tetapi PEI dan PEB-nya berbeda.`,
`<b>Kesimpulan</b><br>PEI dan PEB sama-sama domain elektron dalam VSEPR, tetapi perannya berbeda: PEI membentuk ikatan antaratom, PEB memengaruhi susunan ruang dan sudut ikatan.`],
'Tujuan: membedakan PEI dan PEB serta memahami pengaruh PEB pada bentuk molekul.'],
['Pengaruh Tolakan Elektron pada Sudut Ikatan','📏','var(--sy)','10 menit',[
`<b>Mengapa pasangan elektron tolak-menolak?</b><br>Elektron bermuatan negatif. Karena sejenis, pasangan elektron di sekitar atom pusat saling menolak, sehingga domain elektron mengatur posisi sejauh mungkin.`,
`<b>Urutan kekuatan tolakan</b><br><span class="bx">PEB–PEB</span> &gt; <span class="bx">PEB–PEI</span> &gt; <span class="bx">PEI–PEI</span><br>• Dua PEB: paling kuat<br>• PEB dan PEI: lebih kuat daripada antar-PEI<br>• Dua PEI: relatif paling lemah`,
`<b>Pengaruh pada sudut ikatan</b>${TRIO}Sudut makin kecil seiring bertambahnya PEB pada atom pusat.`,
`<b>Pengaruh pada bentuk molekul</b><br>Total domain sama (4), bentuk berbeda karena ada PEB:<br>• AX₄: tetrahedral<br>• AX₃E: piramida trigonal<br>• AX₂E₂: bengkok`,
`<b>Geser jumlah PEB</b>{{peb}}`,
`<b>Kesimpulan</b><br>Tolakan elektron menentukan bentuk dan sudut ikatan. PEB menolak lebih kuat daripada PEI sehingga dapat mengubah sudut ikatan dan bentuk molekul.`],
'Tujuan: memahami pengaruh tolakan elektron pada sudut ikatan dan bentuk molekul.']];

export { MAT };
