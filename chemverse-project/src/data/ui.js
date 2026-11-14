// Warna latar kartu, indeks kategori.
import { M } from './molecules.js';

const BG=['#DBEAFE','#DCFCE7','#FEF3C7','#FEE2E2'],ACCT=['konsep.molekul','teori.vsepr','pei.peb','sudut.ikatan'],MO=[M[2],M[1],M[3],M[4]];
const ca=c=>({'Pemahaman Konsep':0,'Contoh Soal':1,'Pembahasan':2,'Pengayaan':3,'Fakta Kimia':0,'Model 3D':1})[c]||0;

export { BG, ACCT, MO, ca };
