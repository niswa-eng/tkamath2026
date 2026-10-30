import { Question } from '../types';

export const KONTEKS_CASHBACK = `Rina lebih suka berbelanja online karena lebih mudah dan praktis. Ia sering menggunakan cashback yang disediakan oleh aplikasi belanja online. Di era transaksi digital seperti sekarang, istilah cashback barangkali sudah tak asing lagi. Apa itu cashback? Cashback merupakan persentase pengembalian uang tunai atau virtual yang didapat saat pembeli memenuhi syarat tertentu. Potongan tersebut bisa diberikan secara langsung atau di kemudian hari. Cashback berbeda dengan diskon. Diskon diberikan dengan memberikan potongan harga di awal. Bentuk diskon pun sudah pasti berupa uang alias potongan harga. Selain menggunakan uang tunai, cashback biasanya diberikan dalam bentuk poin atau koin digital. Beberapa penjual juga seringkali memberikan cashback dalam bentuk produk hingga voucher. Berikut beberapa penawaran cashback yang ada di aplikasi belanja online Rina.`;

export const PENJELASAN_CASHBACK = `Cashback 25% s/d 100RB artinya uang yang dikembalikan sebanyak 25% dari total belanjaan dan tidak lebih dari Rp100.000,00.
Contoh:
Total belanjaan Rp500.000,00, maka Rp500.000,00 × 25% = Rp125.000,00; karena cashback yang diberikan tidak lebih dari Rp100.000,00 jadi uang yang dikembalikan hanya Rp100.000,00.
Total belanjaan Rp300.000,00, maka Rp300.000,00 × 25% = Rp75.000,00; karena tidak melebihi batas maksimal jadi cashback yang diberikan Rp75.000,00.
Voucher cashback yang lainnya juga demikian.`;

export const questionsBilangan: Question[] = [
  {
    no: 1,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi untuk permasalahan perbandingan dan sifat-sifat bilangan.',
    indikator: 'Menyelesaikan operasi bilangan bentuk pangkat.',
    tipe: 'PG',
    teks: 'Hasil dari operasi bilangan berpangkat berikut adalah ....',
    figure: 'soal-1-formula',
    opsi: ['$7^{-9}$', '$7^{-6}$', '$7^{-3}$', '$7$'],
    kunci: [2],
    pembahasan: [
      'Diketahui ekspresi operasi bilangan berpangkat: $$\\frac{7^3 \\times 7^{-4}}{7^2}$$',
      'Langkah 1: Sederhanakan pembilang menggunakan sifat perkalian bilangan berpangkat berbaris sama $a^m \\times a^n = a^{m+n}$:\\n$$7^3 \\times 7^{-4} = 7^{3 + (-4)} = 7^{-1}$$',
      'Langkah 2: Sederhanakan pembagian dengan penyebut menggunakan sifat $\\frac{a^m}{a^n} = a^{m-n}$:\\n$$\\frac{7^{-1}}{7^2} = 7^{-1 - 2} = 7^{-3}$$',
      'Kesimpulan / Jawaban Akhir:\\nHasil perpangkatan tersebut adalah $7^{-3}$ (Opsi C).'
    ],
    penjelasanKunci: 'Jawaban benar adalah C ($7^{-3}$).',
    codeId: '25MATBLGBRLM38SP-000000-2020'
  },
  {
    no: 2,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    kompetensi: 'Melakukan operasi hitung pada berbagai jenis bilangan (bulat, pecahan, desimal, persen, dan bilangan berpangkat bulat).',
    indikator: 'Menyelesaikan permasalahan menggunakan operasi bilangan.',
    tipe: 'MCMA',
    konteks: `${KONTEKS_CASHBACK}\n\n${PENJELASAN_CASHBACK}`,
    teks: 'Rina akan membeli hadiah untuk dua orang temannya. Hadiahnya akan dikirim ke alamat masing-masing sehingga Rina harus melakukan dua kali transaksi. Setiap satu kali transaksi, Rina dapat memilih satu voucher cashback. Setiap voucher hanya dapat digunakan satu kali. Hadiah yang dikirim harganya sama yaitu Rp50.000,00. Jika Rina menginginkan cashback lebih dari Rp10.000,00, voucher mana sajakah yang harus ia pilih?\n\nKlik pada setiap pilihan jawaban yang benar! Jawaban benar lebih dari satu.',
    figure: 'soal-2-vouchers',
    opsi: ['voucher A', 'voucher B', 'voucher C', 'voucher D'],
    kunci: [0, 3],
    pembahasan: [
      'Diketahui: Total belanja per transaksi = $\\text{Rp}50.000,00$. Rina menginginkan cashback $> \\text{Rp}10.000,00$.',
      'Hitung cashback masing-masing voucher:\\n• **Voucher A** (25% s/d 100RB):\\n$$25\\% \\times \\text{Rp}50.000 = \\frac{25}{100} \\times 50.000 = \\text{Rp}12.500$$\\nKarena Rp12.500 < Rp100.000 (batas maks), maka cashback didapat $\\text{Rp}12.500$. Nilai ini $> \\text{Rp}10.000$ (MEMENUHI).',
      '• **Voucher B** (5% s/d 200RB):\\n$$5\\% \\times \\text{Rp}50.000 = \\frac{5}{100} \\times 50.000 = \\text{Rp}2.500$$\\nNilai Rp2.500 < Rp10.000 (TIDAK MEMENUHI).',
      '• **Voucher C** (10% s/d 20RB):\\n$$10\\% \\times \\text{Rp}50.000 = \\text{Rp}5.000$$\\nNilai Rp5.000 < Rp10.000 (TIDAK MEMENUHI).',
      '• **Voucher D** (40% s/d 20RB):\\n$$40\\% \\times \\text{Rp}50.000 = \\frac{40}{100} \\times 50.000 = \\text{Rp}20.000$$\\nBatas maksimal adalah Rp20.000, jadi cashback didapat tepat $\\text{Rp}20.000$. Nilai ini $> \\text{Rp}10.000$ (MEMENUHI).',
      'Kesimpulan / Jawaban Akhir:\\nVoucher yang menghasilkan cashback lebih dari Rp10.000,00 adalah Voucher A dan Voucher D.'
    ],
    penjelasanKunci: 'Voucher A (Rp12.500) dan Voucher D (Rp20.000) menghasilkan cashback di atas Rp10.000,00.',
    codeId: '23NUM22BILOPRB29K8-232403-7247'
  },
  {
    no: 3,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    kompetensi: 'Operasi pada bilangan (bulat, pecahan, desimal, persen, dan bilangan berpangkat bulat).',
    indikator: 'Menganalisis/mengevaluasi beberapa pernyataan berkaitan dengan operasi bilangan berdasarkan informasi.',
    tipe: 'KATEGORI',
    kolomKategori: ['Benar', 'Salah'],
    konteks: KONTEKS_CASHBACK,
    teks: 'Rina memiliki voucher A, B, dan D yang bisa ia gunakan untuk berbelanja online. Tentukan benar atau salah pernyataan berikut ini berkaitan dengan nominal transaksi Rina dan voucher yang seharusnya ia gunakan untuk mendapatkan cashback terbesar! Klik pada kotak yang sesuai!',
    figure: 'soal-3-cart',
    pernyataan: [
      'Voucher D, Total Rp50.000,00',
      'Voucher B, Total Rp200.000,00',
      'Voucher A, Total Rp2.500.000,00'
    ],
    kunci: [0, 1, 1], // [Benar, Salah, Salah]
    pembahasan: [
      'Tinjau pernyataan 1 (Total Belanja Rp50.000,00):\\n• Voucher A: $25\\% \\times 50.000 = \\text{Rp}12.500$\\n• Voucher B: $5\\% \\times 50.000 = \\text{Rp}2.500$\\n• Voucher D: $40\\% \\times 50.000 = \\text{Rp}20.000$ (maks Rp20.000)\\nCashback terbesar didapat dari Voucher D (Rp20.000). Maka pernyataan 1 BENAR.',
      'Tinjau pernyataan 2 (Total Belanja Rp200.000,00):\\n• Voucher A: $25\\% \\times 200.000 = \\text{Rp}50.000$ (maks 100RB, jadi Rp50.000)\\n• Voucher B: $5\\% \\times 200.000 = \\text{Rp}10.000$\\n• Voucher D: $40\\% \\times 200.000 = 80.000 \\rightarrow$ dibatasi maks Rp20.000\\nVoucher dengan cashback terbesar adalah Voucher A (Rp50.000), bukan Voucher B. Maka pernyataan 2 SALAH.',
      'Tinjau pernyataan 3 (Total Belanja Rp2.500.000,00):\\n• Voucher A: $25\\% \\times 2.500.000 = 625.000 \\rightarrow$ dibatasi batas maks Rp100.000\\n• Voucher B: $5\\% \\times 2.500.000 = 125.000 \\rightarrow$ di bawah maks Rp200.000, jadi dapat Rp125.000\\n• Voucher D: dibatasi maks Rp20.000\\nVoucher dengan cashback terbesar adalah Voucher B (Rp125.000), bukan Voucher A. Maka pernyataan 3 SALAH.',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan 1: Benar\\nPernyataan 2: Salah\\nPernyataan 3: Salah'
    ],
    penjelasanKunci: 'Baris 1 Benar (Voucher D beri Rp20.000 terbesar); Baris 2 Salah (Voucher A beri Rp50.000 terbesar); Baris 3 Salah (Voucher B beri Rp125.000 terbesar).',
    codeId: '23NUM22BILOPRB29K8-232403-7219'
  },
  {
    no: 4,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    kompetensi: 'Mengurutkan bilangan termasuk bilangan bulat negatif, desimal, persentase, dan pecahan.',
    indikator: 'Mengurutkan bilangan termasuk bilangan bulat dan bilangan desimal berdasarkan informasi.',
    tipe: 'PG',
    teks: `Buah merupakan salah satu sumber vitamin C. Buah yang banyak mengandung vitamin C biasanya memiliki rasa masam dan warna cerah. Selain itu, buah yang mengandung vitamin C juga biasanya identik dengan buah yang banyak mengandung air. Namun, apakah itu benar? Apakah semakin berat dan semakin berair suatu buah maka kandungan vitamin C-nya semakin banyak? Untuk mengetahui hal tersebut tim peneliti akan menguji kandungan vitamin C yang dimiliki suatu buah dengan ukuran dan kandungan air yang beragam. Berikut disajikan data terkait ukuran dan kandungan air keempat buah tersebut.

Karena keterbatasan waktu pengujian, pada hari pertama hanya satu buah yang akan diteliti. Buah yang akan diteliti pertama adalah buah yang memiliki berat terbesar dan kandungan air paling banyak. Buah yang akan diteliti pertama adalah....`,
    figure: 'soal-4-fruits-table',
    opsi: ['Buah A', 'Buah B', 'Buah C', 'Buah D'],
    kunci: [1],
    pembahasan: [
      'Diketahui kriteria buah pertama yang akan diteliti:\\n1. Memiliki berat terbesar\\n2. Memiliki kandungan air paling banyak',
      'Langkah 1: Urutkan data berat buah dari yang terbesar:\\n• Buah B: $130{,}7\\text{ gr}$\\n• Buah C: $130{,}55\\text{ gr}$\\n• Buah A: $118{,}4\\text{ gr}$\\n• Buah D: $96{,}255\\text{ gr}$\\nUrutan: $130{,}7 > 130{,}55 > 118{,}4 > 96{,}255$. Buah dengan berat terbesar adalah Buah B.',
      'Langkah 2: Urutkan kandungan air dari yang terbanyak:\\n• Buah B: $150\\text{ mL}$\\n• Buah C: $140\\text{ mL}$\\n• Buah D: $118{,}15\\text{ mL}$\\n• Buah A: $96{,}3\\text{ mL}$\\nUrutan: $150 > 140 > 118{,}15 > 96{,}3$. Buah dengan kandungan air terbanyak adalah Buah B.',
      'Kesimpulan / Jawaban Akhir:\\nBuah yang memiliki berat terbesar sekaligus kandungan air terbanyak adalah Buah B (Opsi B).'
    ],
    penjelasanKunci: 'Buah B memiliki berat terbesar (130,7 gr) dan kandungan air terbanyak (150 mL).',
    codeId: '24NUM22BILSURB12K8-000000-2206'
  },
  {
    no: 5,
    elemen: 'Bilangan',
    subelemen: 'Bilangan Real',
    kompetensi: 'Memahami bilangan bulat, bilangan berpangkat, dan bentuk akar.',
    indikator: 'Menentukan lambang bilangan lain dari suatu bilangan.',
    tipe: 'PG',
    teks: `Pada beberapa jenis makanan, suhu penyimpanan yang terlalu tinggi dapat menyebabkan makanan tersebut menjadi cepat basi. Gambar di bawah ini menunjukkan berbagai suhu penyimpanan makanan di dalam lemari pendingin menurut Departemen Pertanian Amerika Serikat (FDA).

Catatan: Daging unggas adalah daging yang berasal dari burung ternak seperti ayam, merpati, dan sebagainya. Daging merah adalah daging yang berasal dari mamalia ternak seperti sapi, kambing, dan sebagainya.

Berdasarkan saran FDA, berapa suhu lemari pendingin yang direkomendasikan untuk menyimpan daging ayam?`,
    figure: 'soal-5-food-temp',
    opsi: [
      '18 derajat di bawah 0 °C',
      '18 derajat di atas 0 °C',
      '19 derajat di bawah 0 °C',
      '19 derajat di atas 0 °C'
    ],
    kunci: [2],
    pembahasan: [
      'Diketahui dari teks dan infografik:\\n• Daging ayam termasuk kelompok **Daging Unggas** (burung ternak).\\n• Pada rekomendasi FDA: Daging Unggas direkomendasikan pada suhu $= -19^\\circ\\text{C}$.',
      'Konsep bilangan bulat bertanda negatif pada suhu:\\n• Tanda negatif $(-)$ melambangkan nilai di bawah titik beku $0^\\circ\\text{C}$.\\n• Sehingga $-19^\\circ\\text{C}$ berarti $19^\\circ$ di bawah $0^\\circ\\text{C}$.',
      'Kesimpulan / Jawaban Akhir:\\nSuhu yang direkomendasikan untuk menyimpan daging ayam adalah 19 derajat di bawah 0 °C (Opsi C).'
    ],
    penjelasanKunci: 'Daging ayam adalah daging unggas dengan suhu -19°C = 19 derajat di bawah 0 °C.',
    codeId: '24NUM22BILREPB04K8-000000-5792'
  }
];
