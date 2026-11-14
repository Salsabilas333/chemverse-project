// Geometri VSEPR: arah domain elektron (DIR) dan 11 molekul (M).
import { S } from '../services/storage.js';

const EG={lin:'Linear',tri:'Segitiga planar',tet:'Tetrahedral',tbp:'Bipiramida trigonal',oct:'Oktahedral'},s3=Math.sqrt(3)/2;
const DIR={lin:[[1,0,0],[-1,0,0]],tri:[[1,0,0],[-.5,s3,0],[-.5,-s3,0]],tet:[[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]],tbp:[[0,1,0],[0,-1,0],[1,0,0],[-.5,0,s3],[-.5,0,-s3]],oct:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]};
const M=[
['BeCl₂','Be',0x2ecc71,'lin',[],'Linear','AX₂','180°','Be punya 2 domain elektron, keduanya ikatan. Agar tolakan minimal, keduanya berlawanan arah sehingga molekul lurus.'],
['BF₃','B',0x58e0b0,'tri',[],'Segitiga planar','AX₃','120°','Tiga domain ikatan tersebar rata pada satu bidang. Tanpa PEB, bentuk molekul sama dengan geometri elektron.'],
['CH₄','C',0xf2f2f2,'tet',[],'Tetrahedral','AX₄','109,5°','Empat domain ikatan menjauh ke sudut-sudut tetrahedron, susunan dengan tolakan terkecil untuk 4 domain.'],
['NH₃','N',0xf2f2f2,'tet',[0],'Piramida trigonal','AX₃E','±107°','Satu dari 4 domain adalah PEB. PEB menolak lebih kuat daripada PEI sehingga sudut H–N–H menyempit dari 109,5° menjadi sekitar 107°.'],
['H₂O','O',0xf2f2f2,'tet',[0,1],'Bengkok (V)','AX₂E₂','±104,5°','Dua PEB mendorong dua ikatan O–H mendekat. Geometri elektronnya tetrahedral, bentuk molekulnya bengkok.'],
['PCl₅','P',0x2ecc71,'tbp',[],'Bipiramida trigonal','AX₅','90°, 120°, 180°','Lima domain ikatan: dua aksial dan tiga ekuatorial. Sudut aksial–ekuatorial 90°, antarekuatorial 120°, antaraksial 180°.'],
['SF₄','S',0x9fe0c0,'tbp',[2],'Jungkat-jungkit (seesaw)','AX₄E','<90°, <120°','PEB menempati posisi ekuatorial karena di sana tolakannya paling kecil. Hasilnya bentuk jungkat-jungkit.'],
['ClF₃','Cl',0x9fe0c0,'tbp',[2,3],'Bentuk T','AX₃E₂','<90°','Dua PEB menempati posisi ekuatorial. Tiga atom F tersisa membentuk huruf T.'],
['SF₆','S',0x9fe0c0,'oct',[],'Oktahedral','AX₆','90°, 180°','Enam domain ikatan menempati arah sumbu x, y, z. Sudut bertetangga 90°, berseberangan 180°.'],
['BrF₅','Br',0x9fe0c0,'oct',[3],'Piramida segiempat','AX₅E','<90°','Satu PEB di salah satu puncak oktahedron mendorong lima atom F ke arah berlawanan, membentuk piramida beralas persegi.'],
['XeF₄','Xe',0x9fe0c0,'oct',[2,3],'Segiempat planar','AX₄E₂','90°, 180°','Dua PEB saling berseberangan agar tolakan minimal. Empat atom F membentuk persegi datar di sekeliling Xe.']
].map(a=>({f:a[0],c:a[1],col:a[2],eg:a[3],lp:a[4],mg:a[5],axe:a[6],ang:a[7],why:a[8]}));

export { EG, DIR, M };
