# CHEMVERSE

Platform belajar **Bentuk Molekul (Teori VSEPR)** untuk siswa SMA, dengan tampilan terinspirasi aplikasi media sosial: Home (Stories + ChemFeed), Explore, DM (latihan gaya chat), Search (glosarium), dan Profile.

## Isi proyek
- 4 materi ChemFeed, 28 konten Explore (konsep, contoh soal, pembahasan, pengayaan, fakta)
- 60 soal DM (4 topik x 15 soal), dengan pembahasan dan skor
- 57 istilah glosarium yang bisa dicari dan diklik
- 11 molekul dengan model 3D interaktif (putar, zoom, PEI dan PEB) serta gambar 2D

## Teknologi
Proyek ini memakai **Vite + JavaScript (ES modules)** dan **Three.js** untuk model 3D. Tidak memakai React, TypeScript, Tailwind, atau Supabase, karena versi CHEMVERSE yang sudah jadi memang ditulis dengan JavaScript biasa. Progres belajar disimpan di **localStorage** browser (belum ada login atau database).

## Yang perlu dipasang
1. **Node.js versi 18 atau lebih baru** (unduh versi LTS di https://nodejs.org).
2. **Visual Studio Code** (https://code.visualstudio.com).
3. Koneksi internet saat menjalankan (font Nunito Sans dari Google Fonts, dan paket npm saat instalasi).

## Cara menjalankan di VS Code
1. Ekstrak file zip, lalu di VS Code pilih **File > Open Folder** dan buka folder `chemverse-project`.
2. Buka terminal: menu **Terminal > New Terminal**.
3. Pasang paket (cukup sekali):
   ```
   npm install
   ```
4. Jalankan server pengembangan:
   ```
   npm run dev
   ```
5. Buka alamat yang tampil di terminal (biasanya http://localhost:5173) di browser. Perubahan kode langsung terlihat tanpa memuat ulang manual.
6. Untuk membuat versi produksi:
   ```
   npm run build
   ```
   Hasilnya ada di folder `dist`. Untuk mencobanya: `npm run preview`.

Folder `dist` bisa diunggah ke hosting statis seperti Vercel atau Netlify (perintah build: `npm run build`, folder keluaran: `dist`).

## Struktur folder
```
index.html                 kerangka halaman (area utama, navigasi bawah, penampil 3D)
package.json               daftar paket dan perintah npm
vite.config.js             pengaturan Vite
public/favicon.svg         ikon tab browser
src/
  main.js                  titik masuk: memuat CSS, menampilkan halaman, memasang event
  app/app.js               memilih halaman aktif + navigasi bawah
  app/events.js            semua klik, input, dan scroll
  pages/                   Home, Explore, DM, Search, Profile
  components/              bagian tampilan bersama (tombol bar, kartu, sheet, slide)
  features/
    molecular-visualization/  gambar 2D, penampil 3D, warna atom, ikon gelas
    quiz/quiz.js              kuis gaya chat DM
    glossary/glossary.js      pencarian dan detail istilah
    learning-progress/        progres, log aktivitas, pembaca materi
  data/                    seluruh isi pelajaran (materi, Explore, soal, glosarium, molekul)
  services/storage.js      simpan/baca progres di browser
  state/ui.js              status tampilan (halaman aktif, filter, pencarian)
  utils/                   ikon, fungsi teks, pintasan DOM
  styles/                  variables.css, base.css, content.css, theme.css, animations.css
```

## Mau mengubah apa? Edit di sini
| Yang ingin diubah | File |
|---|---|
| Soal kuis DM (60 soal) | `src/data/questions.js` |
| Istilah glosarium (57) | `src/data/glossary.js` |
| Materi ChemFeed | `src/data/materials.js` |
| Konten Explore | `src/data/explore.js` |
| Rumus geometri dan daftar molekul | `src/data/molecules.js` |
| Warna atom per molekul | `src/features/molecular-visualization/palette.js` |
| Kamera dan cara model 3D pas di layar | `src/features/molecular-visualization/viewer3d.js` (`fitC`) |
| Gambar molekul 2D | `src/features/molecular-visualization/molecule2d.js` |
| Warna utama dan tema | `src/styles/variables.css` dan `src/styles/theme.css` |
| Tampilan halaman | file di `src/pages/` |

Urutan CSS penting karena file belakangan menimpa file sebelumnya: `variables.css`, `base.css`, `content.css`, `theme.css`, `animations.css` (urutan ini diatur di `src/main.js`).

## Catatan
- Progres (XP, skor, simpanan) tersimpan per browser dan per perangkat. Menghapus data browser akan menghapus progres.
- Versi Three.js dikunci di 0.128.0 agar tampilan 3D sama dengan versi yang sudah diuji.
- `package-lock.json` dibuat otomatis saat Anda menjalankan `npm install` pertama kali.
