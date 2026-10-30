import { Question } from '../types';

export const KONTEKS_PAGAR = `Suatu kompleks X memiliki kebiasaan membuat pagar rumah dengan desain yang unik. Hampir seluruh warga kompleks X menyusun pagar membentuk pola barisan. Desain pagar rumah tersebut disusun menggunakan 2 jenis batu bata, yang jika dari depan batu bata tersebut terlihat berbentuk segitiga dan persegi panjang. Batu bata tersebut disusun membentuk pola seperti gambar di bawah.`;

export const questionsAljabar: Question[] = [
  {
    no: 6,
    elemen: 'Aljabar',
    subelemen: 'Bentuk Aljabar',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait bentuk aljabar dan sifat-sifat operasinya (komutatif, asosiatif, distributif).',
    indikator: 'Mengidentifikasi unsur-unsur pembentuk suatu bentuk aljabar.',
    tipe: 'KATEGORI',
    kolomKategori: ['Benar', 'Salah'],
    teks: 'Diketahui bentuk aljabar berikut ini.\n\n$$2ab - b^2 + 3a^2 b + ab^2 - 5$$\n\nBerdasarkan informasi tersebut, manakah di antara pernyataan berikut ini yang benar? Tentukan Benar atau Salah pada setiap pernyataan berikut terkait bentuk aljabar tersebut!',
    figure: 'soal-6-algebra',
    pernyataan: [
      'Terdapat 2 variabel yaitu a dan b.',
      'Konstanta pada bentuk aljabar tersebut adalah 5.',
      'Bilangan 2, -1, 3, dan 1 merupakan koefisien.'
    ],
    kunci: [0, 1, 0], // Benar, Salah, Benar
    pembahasan: [
      'Diketahui bentuk aljabar: $$2ab - b^2 + 3a^2b + ab^2 - 5$$',
      'Pernyataan 1: Variabel pada bentuk aljabar tersebut adalah huruf-huruf peubah, yaitu $a$ dan $b$. Jadi hanya ada 2 variabel. (BENAR)',
      'Pernyataan 2: Konstanta adalah suku yang tidak memuat variabel, yaitu suku terakhir: $-5$. Pernyataan menyebutkan 5 (seharusnya $-5$). (SALAH)',
      'Pernyataan 3: Koefisien adalah faktor pengali dari variabel pada masing-masing suku:\\n• Suku $2ab$ koefisiennya $2$\\n• Suku $-b^2$ koefisiennya $-1$\\n• Suku $+3a^2b$ koefisiennya $3$\\n• Suku $+ab^2$ koefisiennya $1$\\nMaka $2, -1, 3,$ dan $1$ adalah koefisien. (BENAR)',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan 1: Benar\\nPernyataan 2: Salah\\nPernyataan 3: Benar'
    ],
    penjelasanKunci: '1 Benar (variabel a dan b); 2 Salah (konstanta adalah -5); 3 Benar (koefisien 2, -1, 3, 1).',
    codeId: '25MATALJALBM47SP-000000-2032'
  },
  {
    no: 7,
    elemen: 'Aljabar',
    subelemen: 'Fungsi',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait relasi dan fungsi (domain, kodomain, range) dan penyajiannya.',
    indikator: 'Mengelompokkan berbagai bentuk penyajian relasi ke dalam fungsi atau bukan fungsi.',
    tipe: 'KATEGORI',
    kolomKategori: ['Fungsi', 'Bukan Fungsi'],
    teks: 'Perhatikan diagram panah berikut ini!\n\nApakah diagram 1, diagram 2, dan diagram 3 merupakan fungsi? Tentukan fungsi atau bukan fungsi pada setiap diagram berikut!',
    figure: 'soal-7-arrows',
    pernyataan: [
      'Diagram 1',
      'Diagram 2',
      'Diagram 3'
    ],
    kunci: [1, 1, 0], // Diagram 1: Bukan (1), Diagram 2: Bukan (1), Diagram 3: Fungsi (0)
    pembahasan: [
      'Definisi Fungsi: Relasi dari himpunan A ke himpunan B disebut fungsi jika **setiap anggota himpunan daerah asal (A) memiliki tepat satu pasangan** di himpunan daerah kawan (B).',
      'Analisis **Diagram 1**:\\n• Himpunan $A = \\{5, 9, 13, 17\\}$\\n• Titik $9$ tidak memiliki pasangan panah sama sekali ke himpunan B.\\n• Karena ada anggota A yang tidak memiliki kawan, Diagram 1 **BUKAN FUNGSI**.',
      'Analisis **Diagram 2**:\\n• Titik $13$ memiliki dua cabang panah (ke $r$ dan ke $s$).\\n• Karena anggota A memiliki lebih dari satu kawan, Diagram 2 **BUKAN FUNGSI**.',
      'Analisis **Diagram 3**:\\n• $5 \\rightarrow p$, $9 \\rightarrow r$, $13 \\rightarrow s$, $17 \\rightarrow p$\\n• Setiap anggota A (5, 9, 13, 17) memiliki tepat satu kawan di B (boleh berbagi kawan yang sama di $p$).\\n• Maka Diagram 3 adalah **FUNGSI**.',
      'Kesimpulan / Jawaban Akhir:\\nDiagram 1: Bukan Fungsi\\nDiagram 2: Bukan Fungsi\\nDiagram 3: Fungsi'
    ],
    penjelasanKunci: 'Diagram 1 bukan fungsi (9 tidak berpasangan), Diagram 2 bukan fungsi (13 punya 2 cabang), Diagram 3 fungsi.',
    codeId: '25MATALJFNGM48SP-000000-1920'
  },
  {
    no: 8,
    elemen: 'Aljabar',
    subelemen: 'Fungsi',
    kompetensi: 'Menyajikan, menganalisis, dan menyelesaikan masalah dengan menggunakan relasi, fungsi, dan persamaan linear beserta grafiknya.',
    indikator: 'Menginterpretasi grafik fungsi linear dan memberikan beberapa kesimpulan menggunakan konsep relasi, fungsi, persamaan linear, dan grafiknya.',
    tipe: 'KATEGORI',
    kolomKategori: ['Benar', 'Salah'],
    teks: 'Pembayaran air PDAM setiap rumah berbeda-beda tergantung banyaknya pemakaian air. Biaya pemasangan awal adalah Rp800.000,00. Tarif pemakaian air berdasarkan banyak air yang digunakan dengan pemasangan awal dapat dilihat pada grafik berikut.\n\nSeseorang menghabiskan biaya Rp920.000,00 dalam 1 bulan pemakaian dengan pemasangan baru. Berdasarkan informasi tersebut, manakah di antara pernyataan berikut ini yang benar? Tentukan Benar atau Salah pada setiap pernyataan berikut terkait kondisi tersebut!',
    figure: 'soal-8-water-graph',
    pernyataan: [
      'Jumlah pemakaian air mencapai 60 m³.',
      'Orang tersebut akan menghabiskan biaya sebesar Rp120.000,00 jika tanpa pemasangan baru.',
      'Tarif dapat mencapai 1 juta jika pemakaian air kurang dari 90 m³ dengan pemasangan baru.'
    ],
    kunci: [0, 0, 1], // Benar, Benar, Salah
    pembahasan: [
      'Langkah 1: Menentukan persamaan fungsi tarif dari grafik linear.\\n• Titik $(0, 800.000)$ dan $(10, 820.000)$:\\n$$\\text{Gradien } m = \\frac{820.000 - 800.000}{10 - 0} = \\frac{20.000}{10} = 2.000\\text{ Rupiah/m}^3$$\\n• Persamaan tarif: $$y = 800.000 + 2.000x$$ dengan $x$ dalam $\\text{m}^3$.',
      'Pernyataan 1: Total biaya $= \\text{Rp}920.000,00$\\n$$920.000 = 800.000 + 2.000x \\implies 2.000x = 120.000 \\implies x = 60\\text{ m}^3$$\\nJumlah pemakaian air adalah 60 m³. (BENAR)',
      'Pernyataan 2: Tanpa pemasangan baru, biaya hanya tarif pemakaian air murni:\\n$$\\text{Biaya} = 60\\text{ m}^3 \\times \\text{Rp}2.000 = \\text{Rp}120.000,00\\text{ (BENAR)}$$',
      'Pernyataan 3: Untuk mencapai tarif Rp1.000.000,00:\\n$$1.000.000 = 800.000 + 2.000x \\implies 2.000x = 200.000 \\implies x = 100\\text{ m}^3$$\\nJika pemakaian air kurang dari $90\\text{ m}^3$, tarifnya maksimal $800.000 + 2.000(90) = \\text{Rp}980.000,00$, belum mencapai 1 juta. (SALAH)',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan 1: Benar\\nPernyataan 2: Benar\\nPernyataan 3: Salah'
    ],
    penjelasanKunci: '1 Benar (pemakaian 60 m³); 2 Benar (60 × 2.000 = Rp120.000); 3 Salah (butuh 100 m³ untuk capai 1 juta).',
    codeId: '24NUM22ALJRDFAllK8-000000-5827'
  },
  {
    no: 9,
    elemen: 'Aljabar',
    subelemen: 'Fungsi',
    kompetensi: 'Menggunakan sistem koordinat kartesius.',
    indikator: 'Menyelesaikan permasalahan dengan menerapkan konsep sistem koordinat kartesius.',
    tipe: 'KATEGORI',
    kolomKategori: ['Bisa ditanami pohon mangga', 'Tidak bisa ditanami pohon mangga'],
    teks: `Pekarangan Rumah

Ayunda mulai memanfaatkan lahan kosong di pekarangan rumahnya untuk menanam berbagai jenis tanaman. Setelah melihat tanamannya tumbuh subur, ia berencana untuk menanam pohon mangga di pekarangan tersebut. Berikut adalah peta pekarangan rumah Ayunda.

Dalam menentukan lokasi penanaman, Ayunda harus mempertimbangkan beberapa faktor penting yaitu ketersediaan sinar matahari dan kualitas tanah. Berdasarkan beberapa faktor tersebut, Ayunda hanya akan menanam pohon mangga di lokasi 1, 3, dan 4 hanya pada lahan yang masih kosong (belum ada tanaman lain) di lokasi tersebut.

Berdasarkan hal tersebut, pada koordinat mana sajakah Ayunda bisa menanam pohon mangga? Tentukan "Bisa ditanami pohon mangga" atau "Tidak bisa ditanami pohon mangga" untuk beberapa koordinat berikut ini!`,
    figure: 'soal-9-garden-map',
    pernyataan: [
      '(9, -2)',
      '(-2, 9)',
      '(-9, -9)'
    ],
    kunci: [0, 1, 1], // Bisa (0), Tidak bisa (1), Tidak bisa (1)
    pembahasan: [
      'Aturan penanaman pohon mangga oleh Ayunda:\\n1. Hanya di **Lokasi 1 (Kuadran I: $x>0, y>0$)**, **Lokasi 3 (Kuadran III: $x<0, y<0$)**, dan **Lokasi 4 (Kuadran IV: $x>0, y<0$)**.\\n2. Lokasi 2 (Kuadran II: $x<0, y>0$) TIDAK DIPILIH.\\n3. Hanya boleh di lahan yang **KOSONG** (tidak tertutup tanaman/bedeng).',
      'Tinjau titik $(9, -2)$:\\n• Koordinat $x = 9$ (positif) dan $y = -2$ (negatif) terletak di **Lokasi 4 (Kuadran IV)**.\\n• Tanaman di Lokasi 4 hanya berada pada $x = 1$ hingga $6{,}5$ dan $y = -2$ hingga $-8$. Titik $(9, -2)$ berada di area kosong.\\n• Maka titik $(9, -2)$ **BISA DITANAMI**.',
      'Tinjau titik $(-2, 9)$:\\n• Koordinat $x = -2$ (negatif) dan $y = 9$ (positif) terletak di **Lokasi 2 (Kuadran II)**.\\n• Berdasarkan ketentuan, Ayunda tidak menanam pohon mangga di Lokasi 2.\\n• Maka titik $(-2, 9)$ **TIDAK BISA DITANAMI**.',
      'Tinjau titik $(-9, -9)$:\\n• Koordinat $x = -9$ dan $y = -9$ berada di Lokasi 3 (Kuadran III).\\n• Namun titik sudut $(-9, -9)$ berada persis di dalam area bedeng tanaman kecil yang sudah terisi.\\n• Karena lahannya tidak kosong, titik $(-9, -9)$ **TIDAK BISA DITANAMI**.',
      'Kesimpulan / Jawaban Akhir:\\n• (9, -2): Bisa ditanami pohon mangga\\n• (-2, 9): Tidak bisa ditanami pohon mangga\\n• (-9, -9): Tidak bisa ditanami pohon mangga'
    ],
    penjelasanKunci: '(9,-2) Bisa (Lokasi 4 lahan kosong); (-2,9) Tidak bisa (Lokasi 2); (-9,-9) Tidak bisa (Lokasi 3 sudah ada bedeng tanaman).',
    codeId: '24NUM22GEOPSPG21K8-000000-5857'
  },
  {
    no: 10,
    elemen: 'Aljabar',
    subelemen: 'Persamaan dan Pertidaksamaan Linear',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait pertidaksamaan linear satu variabel.',
    indikator: 'Menyatakan grafik penyelesaian pertidaksamaan linear satu variabel pada garis bilangan.',
    tipe: 'PG',
    teks: 'Diketahui pertidaksamaan sebagai berikut.\n\n$$3x + 17 \\le 7 - 2x$$\n\nManakah garis bilangan yang menunjukkan himpunan penyelesaian dari pertidaksamaan tersebut?',
    figure: 'soal-10-number-line',
    opsi: [
      'Garis bilangan rentang -5 s/d 5, bulatan TERTUTUP (penuh) di -2, arsiran ke arah KIRI',
      'Garis bilangan rentang -15 s/d -5, bulatan TERBUKA di -10, arsiran ke arah KIRI',
      'Garis bilangan rentang -5 s/d 5, bulatan TERBUKA di -2, arsiran ke arah KIRI',
      'Garis bilangan rentang -5 s/d 5, bulatan TERTUTUP di -2, arsiran ke arah KANAN'
    ],
    kunci: [0],
    pembahasan: [
      'Diketahui pertidaksamaan: $$3x + 17 \\le 7 - 2x$$',
      'Langkah 1: Kelompokkan suku bervariabel $x$ ke ruas kiri dan konstanta ke ruas kanan:\\n$$3x + 2x \\le 7 - 17$$',
      'Langkah 2: Sederhanakan kedua ruas:\\n$$5x \\le -10$$',
      'Langkah 3: Bagi kedua ruas dengan bilangan positif $5$ (tanda pertidaksamaan tidak berbalik):\\n$$x \\le -2$$',
      'Representasi pada garis bilangan:\\n• Tanda $\\le$ berarti nilai $-2$ termasuk dalam penyelesaian, sehingga ditandai dengan **bulatan penuh / tertutup** di angka $-2$.\\n• Karena $x \\le -2$ (kurang dari atau sama dengan), daerah himpunan penyelesaian diarsir ke arah **kiri**.',
      'Kesimpulan / Jawaban Akhir:\\nGrafik garis bilangan yang tepat adalah pilihan A.'
    ],
    penjelasanKunci: 'Penyelesaian adalah x ≤ -2, ditandai bulatan tertutup di -2 dengan arsiran ke kiri (Pilihan A).',
    codeId: '25MATALJPSLM45SP-000000-2026'
  },
  {
    no: 11,
    elemen: 'Aljabar',
    subelemen: 'Persamaan dan Pertidaksamaan Linear',
    kompetensi: 'Menyelesaikan persamaan dan pertidaksamaan linear 1 variabel serta sistem persamaan linear 2 variabel.',
    indikator: 'Menyelesaikan permasalahan terkait informasi tersebut menggunakan konsep sistem persamaan linear 2 variabel.',
    tipe: 'PG',
    teks: `Jajanan Tradisional

Jajanan tradisional merupakan makanan khas dari nenek moyang dan biasanya digunakan untuk acara atau tradisi. Seiring berjalannya waktu, jajanan tradisional bisa dijumpai dan ditemukan setiap hari tidak hanya saat acara tertentu. Berikut merupakan harga jajanan tradisional kue putu mayang dan kue pancong yang dijual di sebuah bazar makanan.

Keterangan:
• Kotak hijau = Kue Putu Mayang
• Kotak merah = Kue Pancong

Berapa harga 3 kotak kue putu mayang dan 1 kotak kue pancong?`,
    figure: 'soal-11-snacks',
    opsi: [
      'Rp10.000,00.',
      'Rp14.000,00.',
      'Rp44.000,00.',
      'Rp52.000,00.'
    ],
    kunci: [2],
    pembahasan: [
      'Misalkan:\\n• $p = $ harga 1 kotak kue putu mayang\\n• $k = $ harga 1 kotak kue pancong',
      'Susun SPLDV dari kedua tumpukan gambar:\\n• Tumpukan kiri: 3 kotak putu mayang + 2 kotak pancong = Rp58.000\\n$$3p + 2k = 58.000 \\quad \\text{...(Persamaan 1)}$$\\n• Tumpukan kanan: 2 kotak putu mayang + 3 kotak pancong = Rp62.000\\n$$2p + 3k = 62.000 \\quad \\text{...(Persamaan 2)}$$',
      'Eliminasi/Kurangkan Persamaan 2 dengan Persamaan 1:\\n$$(2p + 3k) - (3p + 2k) = 62.000 - 58.000 \\implies k - p = 4.000 \\implies k = p + 4.000$$',
      'Substitusi $k = p + 4.000$ ke Persamaan 1:\\n$$3p + 2(p + 4.000) = 58.000$$\\n$$3p + 2p + 8.000 = 58.000 \\implies 5p = 50.000 \\implies p = 10.000$$',
      'Hitung nilai $k$:\\n$$k = 10.000 + 4.000 = 14.000$$',
      'Hitung harga 3 kotak putu mayang dan 1 kotak pancong ($3p + 1k$):\\n$$3(10.000) + 1(14.000) = 30.000 + 14.000 = \\text{Rp}44.000,00$$',
      'Kesimpulan / Jawaban Akhir:\\nHarga 3 kotak kue putu mayang dan 1 kotak kue pancong adalah Rp44.000,00 (Opsi C).'
    ],
    penjelasanKunci: 'Harga 1 putu mayang = Rp10.000 dan 1 pancong = Rp14.000, maka 3(10.000) + 14.000 = Rp44.000,00.',
    codeId: '22NUM22ALJPTPA04K8-000000-5784'
  },
  {
    no: 12,
    elemen: 'Aljabar',
    subelemen: 'Bentuk Aljabar',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait bentuk aljabar dan sifat-sifat operasinya.',
    indikator: 'Memodelkan masalah kontekstual ke dalam bentuk aljabar menggunakan sifat-sifat operasinya.',
    tipe: 'PG',
    teks: `Rino, Tiko, dan Bayu pergi ke toko buku dekat rumahnya untuk membeli buku tulis dan pulpen keperluan sekolah. Berikut banyak buku tulis dan pulpen yang dibeli oleh setiap anak.

Apabila harga 1 buku tulis disimbolkan dengan "x" dan harga 1 pulpen disimbolkan dengan "y", bagaimana kalimat matematika yang menyatakan total harga yang harus dibayar oleh ketiga anak tersebut?`,
    figure: 'soal-12-stationery',
    opsi: [
      '24x + 18y',
      '20x + 15y',
      '12x + 9y',
      '4x + 3y'
    ],
    kunci: [0],
    pembahasan: [
      'Diketahui simbol aljabar:\\n• $x = $ harga 1 buku tulis\\n• $y = $ harga 1 pulpen',
      'Hitung belanjaan masing-masing anak:\\n• **Rino**: $4$ buku tulis dan $3$ pulpen\\n$$\\text{Biaya Rino} = 4x + 3y$$\\n• **Tiko**: Dua kali lipat dari Rino\\n$$\\text{Biaya Tiko} = 2 \\times (4x + 3y) = 8x + 6y$$\\n• **Bayu**: Tiga kali lipat dari Rino\\n$$\\text{Biaya Bayu} = 3 \\times (4x + 3y) = 12x + 9y$$',
      'Jumlahkan total harga yang harus dibayar ketiga anak:\\n$$\\text{Total} = (4x + 3y) + (8x + 6y) + (12x + 9y)$$\\n$$\\text{Total} = (4 + 8 + 12)x + (3 + 6 + 9)y = 24x + 18y$$',
      'Kesimpulan / Jawaban Akhir:\\nKalimat matematika total harga adalah $24x + 18y$ (Opsi A).'
    ],
    penjelasanKunci: 'Total = (4+8+12)x + (3+6+9)y = 24x + 18y.',
    codeId: '25MATALJALBM47SP-000000-1998'
  },
  {
    no: 13,
    elemen: 'Aljabar',
    subelemen: 'Fungsi',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait relasi dan fungsi dan penyajiannya.',
    indikator: 'Menentukan rumus fungsi linear berdasarkan himpunan pasangan berurutan dari masalah kontekstual.',
    tipe: 'PG',
    teks: `Naura menggunakan operator seluler "Nusantara Mobile". Terdapat beberapa pilihan paket kuota internet yang dapat dipilih oleh pelanggannya. Naura menuliskan pilihan paket kuota yang tersedia dan harganya dalam bentuk himpunan pasangan berurutan sebagai berikut.

{(5, 14.000), (10, 23.000), (20, 41.000), (25, 50.000)}

Catatan tersebut ditulis dalam bentuk (paket kuota internet dalam gigabyte (GB), harga dalam rupiah). Sebagai contoh, (5, 14.000) memiliki arti bahwa paket kuota internet 5 GB dikenakan harga sebesar Rp14.000,00. Jika x adalah paket kuota internet dalam GB, rumus fungsi f(x) yang menyatakan harga paket kuota internet adalah ....`,
    figure: 'soal-13-notebook',
    opsi: [
      'f(x) = 2.000x + 4.000',
      'f(x) = 2.000x + 1.000',
      'f(x) = 1.800x + 9.000',
      'f(x) = 1.800x + 5.000'
    ],
    kunci: [3],
    pembahasan: [
      'Diketahui pasangan berurutan $(x, f(x))$:\\n• $(5, 14.000)$\\n• $(10, 23.000)$\\n• $(20, 41.000)$\\n• $(25, 50.000)$',
      'Langkah 1: Hitung gradien/kemiringan $m$ fungsi linear:\\n$$m = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{23.000 - 14.000}{10 - 5} = \\frac{9.000}{5} = 1.800$$',
      'Langkah 2: Tentukan konstanta $c$ dengan bentuk umum $f(x) = 1.800x + c$:\\nSubstitusi titik $(5, 14.000)$:\\n$$14.000 = 1.800(5) + c$$\\n$$14.000 = 9.000 + c \\implies c = 14.000 - 9.000 = 5.000$$',
      'Langkah 3: Uji titik lain:\\n• $f(20) = 1.800(20) + 5.000 = 36.000 + 5.000 = 41.000$ (cocok)\\n• $f(25) = 1.800(25) + 5.000 = 45.000 + 5.000 = 50.000$ (cocok)',
      'Kesimpulan / Jawaban Akhir:\\nRumus fungsi linear harga paket kuota internet adalah $f(x) = 1.800x + 5.000$ (Opsi D).'
    ],
    penjelasanKunci: 'Gradien m = 1.800 dan konstanta c = 5.000, sehingga f(x) = 1.800x + 5.000.',
    codeId: '25MATALJFNGM48SP-000000-3183'
  },
  {
    no: 14,
    elemen: 'Aljabar',
    subelemen: 'Barisan dan Deret',
    kompetensi: 'Menggeneralisasi pola barisan bilangan dan konfigurasi objek.',
    indikator: 'Menentukan suku ke-n (lebih dari 3 suku berikutnya dari yang diketahui) dari pola bilangan berdasarkan konfigurasi objek tersebut.',
    tipe: 'PG',
    konteks: KONTEKS_PAGAR,
    teks: 'Jika ingin dibuat pagar dengan 10 tingkat susunan batu bata, berapakah jumlah total batu bata (segitiga maupun persegi panjang) yang ada pada tingkat ke-10 dari pagar tersebut?',
    figure: 'soal-14-brick-pattern',
    opsi: [
      '10 batu bata',
      '11 batu bata',
      '20 batu bata',
      '21 batu bata'
    ],
    kunci: [3],
    pembahasan: [
      'Amati banyak batu bata pada setiap tingkat:\\n• Tingkat 1: 1 segitiga + 2 persegi panjang = 3 batu bata\\n• Tingkat 2: 2 segitiga + 3 persegi panjang = 5 batu bata\\n• Tingkat 3: 3 segitiga + 4 persegi panjang = 7 batu bata',
      'Pola barisan total batu bata per tingkat:\\nBarisan: $3, 5, 7, \\dots$\\n• Suku pertama ($a$) $= 3$\\n• Beda ($b$) $= 2$',
      'Rumus suku ke-$n$ ($U_n$):\\n$$U_n = a + (n - 1)b = 3 + (n - 1) \\times 2 = 2n + 1$$',
      'Hitung total batu bata pada tingkat ke-10 ($n = 10$):\\n$$U_{10} = 2(10) + 1 = 20 + 1 = 21\\text{ batu bata}$$\\n(Rincian: $10$ batu bata segitiga + $11$ batu bata persegi panjang)',
      'Kesimpulan / Jawaban Akhir:\\nJumlah total batu bata pada tingkat ke-10 adalah 21 batu bata (Opsi D).'
    ],
    penjelasanKunci: 'U10 = 2(10) + 1 = 21 batu bata (10 segitiga + 11 persegi panjang).',
    codeId: '24NUM22ALJRDFA09K8-241309-6831'
  },
  {
    no: 15,
    elemen: 'Aljabar',
    subelemen: 'Barisan dan Deret',
    kompetensi: 'Menggeneralisasi pola barisan bilangan dan konfigurasi objek.',
    indikator: 'Menyelesaikan permasalahan terkait pola bilangan berdasarkan konfigurasi objek.',
    tipe: 'KATEGORI',
    kolomKategori: ['Benar', 'Salah'],
    konteks: KONTEKS_PAGAR,
    teks: 'Dua pagar yang sama persis dengan masing-masing memiliki 9 tingkat akan dibangun. Tetapi hanya ada persediaan sebanyak 60 batu bata segitiga dan 80 batu bata persegi panjang. Apakah jumlah kedua jenis batu bata tersebut cukup untuk membuat kedua pagar? Tentukan Benar atau Salah pada setiap pernyataan berikut!',
    figure: 'soal-15-brick-pattern',
    pernyataan: [
      'Diperlukan tambahan 15 batu-bata segitiga.',
      'Diperlukan tambahan 28 batu-bata persegi-panjang.',
      'Diperlukan tambahan total sebanyak 43 batu-bata baik segitiga maupun persegi-panjang.'
    ],
    kunci: [1, 0, 1], // Salah, Benar, Salah
    pembahasan: [
      'Analisis kebutuhan untuk 1 pagar dengan 9 tingkat:\\n• **Batu bata segitiga** per tingkat: $1, 2, 3, \\dots, 9$\\nJumlah per pagar: $$\\frac{9}{2}(1 + 9) = \\frac{9 \\times 10}{2} = 45\\text{ buah}$$\\nUntuk 2 pagar butuh: $$2 \\times 45 = 90\\text{ batu bata segitiga}$$\\nPersediaan = 60, maka tambahan segitiga yang dibutuhkan: $$90 - 60 = 30\\text{ buah}$$',
      '• **Batu bata persegi panjang** per tingkat: $2, 3, 4, \\dots, 10$\\nJumlah per pagar: $$\\frac{9}{2}(2 + 10) = \\frac{9 \\times 12}{2} = 54\\text{ buah}$$\\nUntuk 2 pagar butuh: $$2 \\times 54 = 108\\text{ batu bata persegi panjang}$$\\nPersediaan = 80, maka tambahan persegi panjang yang dibutuhkan: $$108 - 80 = 28\\text{ buah}$$',
      '• **Total tambahan seluruh batu bata**:\\n$$30 + 28 = 58\\text{ buah}$$',
      'Evaluasi pernyataan:\\n1. Tambahan 15 segitiga: SALAH (butuh 30 buah)\\n2. Tambahan 28 persegi panjang: BENAR (butuh tepat 28 buah)\\n3. Tambahan total 43: SALAH (seharusnya 58 buah)',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan 1: Salah\\nPernyataan 2: Benar\\nPernyataan 3: Salah'
    ],
    penjelasanKunci: '1 Salah (butuh 30 segitiga); 2 Benar (butuh 28 persegi panjang); 3 Salah (total tambahan 58).',
    codeId: '24NUM22ALJRDFA09K8-241309-6859'
  }
];
