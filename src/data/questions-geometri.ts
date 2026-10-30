import { Question } from '../types';

export const KONTEKS_MINYAK = `Pak Dodi adalah pemasok minyak goreng curah di Pasar Maju. Minyak goreng curah adalah minyak goreng tanpa kemasan khusus dan tidak memiliki label atau merek. Terdapat dua jenis minyak goreng curah yang dijual Pak Dodi yakni jenis A dan jenis B. Masing-masing jenis minyak goreng dimasukkan dalam tangki berikut.

Ukuran Tangki:
• Tangki Jenis A: 6 dm × 2 m × 0,8 m
• Tangki Jenis B: 8 dm × 2,2 m × 1 m`;

export const questionsGeometri: Question[] = [
  {
    no: 16,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Objek Geometri',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait hubungan antar-sudut oleh dua garis berpotongan, dua garis sejajar yang dipotong transversal (termasuk besar sudut dalam segitiga).',
    indikator: 'Menentukan nilai variabel pada sudut yang terbentuk dari dua garis berpotongan menggunakan hubungan antar-sudut.',
    tipe: 'PG',
    teks: 'Garis AB dan garis PQ berpotongan di titik Q seperti gambar berikut.\n\nNilai x yang tepat adalah ....',
    figure: 'soal-16-intersecting-lines',
    opsi: ['15°', '24°', '69°', '96°'],
    kunci: [1],
    pembahasan: [
      'Diketahui dua sudut pada garis lurus $AB$ yang berpotongan di titik $Q$:\\n• Sudut $\\angle AQP = 72^\\circ$\\n• Sudut $\\angle PQB = (4x + 12)^\\circ$',
      'Konsep Sudut Berpelurus (Suplemen):\\nKarena titik $A, Q,$ dan $B$ terletak pada satu garis lurus, maka jumlah kedua sudut adalah $180^\\circ$:\\n$$\\angle AQP + \\angle PQB = 180^\\circ$$',
      'Langkah perhitungan:\\n$$72 + (4x + 12) = 180$$\\n$$4x + 84 = 180$$\\n$$4x = 180 - 84$$\\n$$4x = 96$$\\n$$x = \\frac{96}{4} = 24$$',
      'Kesimpulan / Jawaban Akhir:\\nNilai $x$ yang tepat adalah $24^\\circ$ (Opsi B).'
    ],
    penjelasanKunci: '72° + (4x + 12)° = 180° -> 4x = 96 -> x = 24°.',
    codeId: '25MATGMPEGEOM50SP-000000-1955'
  },
  {
    no: 17,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Objek Geometri',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait jaring-jaring bangun ruang (prisma, tabung, limas, kerucut).',
    indikator: 'Menginterpretasikan posisi masing-masing sisi pada jaring-jaring prisma yang dibentuk menjadi bangun ruang.',
    tipe: 'PG',
    teks: `Perhatikan gambar jaring-jaring prisma segitiga berikut.

Sisi tutup pada prisma tersebut adalah sisi ABC. Rusuk AC pada sisi tutup akan berhimpit dengan salah satu rusuk pada sisi tegak prisma nomor ....`,
    figure: 'soal-17-prism-net',
    opsi: ['1', '2', '3', '4'],
    kunci: [2],
    pembahasan: [
      'Identifikasi bagian-bagian jaring-jaring prisma segitiga:\\n• Sisi tutup: Segitiga $ABC$ (menempel pada sisi tegak ① di rusuk $AB$)\\n• Sisi alas: Segitiga ② (berada di seberang tutup $ABC$, jadi ② bukan sisi tegak)\\n• Tiga sisi tegak prisma berupa persegi panjang: sisi ①, sisi ③, dan sisi ④',
      'Analisis lipatan jaring-jaring saat dibentuk menjadi prisma:\\n1. Sisi tegak ① menempel pada salah satu sisi alas segitiga ②.\\n2. Sisi tegak ③ menempel pada sisi alas ② yang di sebelah kiri/bawah.\\n3. Sisi tegak ④ menempel pada sisi alas ② yang di sebelah atas.\\n4. Tutup segitiga $ABC$ dilipat ke atas dengan engsel rusuk $AB$ pada sisi ①.',
      'Menentukan himpitan rusuk $AC$:\\n• Titik $A$ pada sisi tutup terhubung dengan sudut alas yang berbatasan dengan sisi tegak ③.\\n• Saat dilipat tegak membentuk prisma utuh, rusuk $AC$ akan berhimpit dengan sisi atas dari persegi panjang nomor ③.\\n• (Sedangkan rusuk $BC$ akan bertemu dan berhimpit dengan rusuk sisi ④).',
      'Kesimpulan / Jawaban Akhir:\\nRusuk $AC$ akan berhimpit dengan sisi tegak prisma nomor 3 (Opsi C).'
    ],
    penjelasanKunci: 'Rusuk AC berhimpit dengan rusuk atas sisi tegak 3 saat prisma dirangkai.',
    codeId: '25MATGMPEGEOM53SP-000000-1934'
  },
  {
    no: 18,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Objek Geometri',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait hubungan antar-sudut oleh dua garis berpotongan, dua garis sejajar yang dipotong transversal (termasuk besar sudut dalam segitiga).',
    indikator: 'Menentukan besar sudut pada gabungan segitiga dan dua garis sejajar menggunakan hubungan antar-sudut.',
    tipe: 'PG',
    teks: 'Perhatikan gambar berikut ini!\n\nBerdasarkan gambar tersebut, berapa nilai b?',
    figure: 'soal-18-parallel-triangle',
    opsi: ['46', '68', '112', '134'],
    kunci: [0],
    pembahasan: [
      'Diketahui pada gambar:\\n• Terdapat dua garis sejajar (garis $p$ dan garis $q$) yang berpotongan dengan sisi miring atas segitiga.\\n• Sudut di titik potong garis $q$ dengan sisi atas besarnya $46^\\circ$ (berada di kuadran kanan-atas titik potong).\\n• Sudut yang bertolak belakang dengannya (di kuadran kiri-bawah titik potong) besarnya juga sama yaitu $46^\\circ$.',
      'Hubungan dua garis sejajar yang dipotong garis transversal:\\n• Garis $p$ dan $q$ adalah dua garis yang saling sejajar.\\n• Sisi segitiga bertindak sebagai garis transversal (garis pemotong).\\n• Sudut $b^\\circ$ pada garis $p$ terletak pada posisi yang sehadap (corresponding angles) dengan sudut $46^\\circ$ pada garis $q$.\\n• Dua sudut yang sehadap memiliki besar yang sama: $$b^\\circ = 46^\\circ$$',
      'Kesimpulan / Jawaban Akhir:\\nNilai $b$ adalah 46 (Opsi A).'
    ],
    penjelasanKunci: 'Sudut b sehadap dengan sudut yang bertolak belakang dengan 46°, sehingga b = 46.',
    codeId: '25MATGMPEGEOM50SP-000000-2033'
  },
  {
    no: 19,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Objek Geometri',
    kompetensi: 'Menggunakan konsep Teorema Pythagoras.',
    indikator: 'Menyelesaikan permasalahan yang menggunakan konsep teorema Pythagoras.',
    tipe: 'PG',
    teks: `Pagar Tangga

Pak Anton baru saja membangun rumah. Ada beberapa bagian dalam rumahnya yang belum terpasang. Salah satunya adalah pagar tangga. Pagar tangga berfungsi untuk pegangan saat naik maupun turun tangga. Berikut adalah gambar tangga Pak Anton.

Gambar garis putus-putus merupakan rancangan pagar tangga. Setiap anak tangga memiliki tinggi yang sama yaitu 25 cm.

Suatu hari, Pak Anton ke toko untuk membeli bahan pagar tangga. Tersedia 4 jenis bahan pagar tangga yakni:
- pagar bahan kayu jati sepanjang 6 meter
- pagar bahan kayu meranti sepanjang 4 meter
- pagar bahan besi sepanjang 5,5 meter
- pagar bahan aluminium sepanjang 4,5 meter

Jenis bahan apa yang harus dipilih Pak Anton agar cukup untuk membuat pagar tangga dan memiliki sisa paling sedikit?`,
    figure: 'soal-19-stairs',
    opsi: [
      'Pagar kayu jati',
      'Pagar kayu meranti',
      'Pagar besi',
      'Pagar alumunium'
    ],
    kunci: [2],
    pembahasan: [
      'Langkah 1: Menghitung dimensi tangga Pak Anton\\n• Jumlah anak tangga $= 8$ buah.\\n• Tinggi setiap anak tangga $= 25\\text{ cm}$.\\n• Total tinggi tangga ($t$) $= 8 \\times 25\\text{ cm} = 200\\text{ cm}$.\\n• Panjang mendatar alas tangga ($a$) $= 150\\text{ cm}$.',
      'Langkah 2: Menghitung panjang kemiringan 1 pagar tangga menggunakan Teorema Pythagoras:\\n$$c = \\sqrt{a^2 + t^2} = \\sqrt{150^2 + 200^2}$$\\n$$c = \\sqrt{22.500 + 40.000} = \\sqrt{62.500} = 250\\text{ cm} = 2{,}5\\text{ meter}$$',
      'Langkah 3: Menghitung kebutuhan total bahan pagar:\\nTangga membutuhkan pagar di **dua sisi** (kiri dan kanan):\\n$$\\text{Total panjang} = 2 \\times 2{,}5\\text{ m} = 5{,}0\\text{ meter}$$',
      'Langkah 4: Evaluasi pilihan bahan (harus $\\ge 5\\text{ meter}$ dan sisa paling sedikit):\\n• Kayu Jati: $6\\text{ m} \\rightarrow$ Cukup, sisa $= 6 - 5 = 1{,}0\\text{ m}$\\n• Kayu Meranti: $4\\text{ m} \\rightarrow$ Kurang (tidak cukup)\\n• Besi: $5{,}5\\text{ m} \\rightarrow$ Cukup, sisa $= 5{,}5 - 5 = 0{,}5\\text{ m}$\\n• Aluminium: $4{,}5\\text{ m} \\rightarrow$ Kurang (tidak cukup)',
      'Kesimpulan / Jawaban Akhir:\\nBahan yang cukup dengan sisa paling sedikit adalah Pagar Besi (sisa 0,5 m) (Opsi C).'
    ],
    penjelasanKunci: 'Panjang 2 pagar = 2 × 2,5 m = 5 m. Pagar besi 5,5 m cukup dengan sisa terkecil (0,5 m).',
    codeId: '24NUM22GEOBGEG04K8-000000-2293'
  },
  {
    no: 20,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Transformasi Geometri',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait transformasi tunggal (refleksi, translasi, rotasi, dan dilatasi) terhadap titik, garis, dan bangun datar pada bidang.',
    indikator: 'Menganalisis hubungan posisi antara dua bangun datar setelah mengalami operasi translasi.',
    tipe: 'PG',
    teks: 'Diketahui titik Q = titik K. Segitiga PQR akan ditranslasikan oleh T = (-4, -2). Bayangan segitiga PQR dan segitiga KLM akan saling ....',
    figure: 'soal-20-cartesian-translation',
    opsi: ['tegak lurus', 'berpotongan', 'sejajar', 'berhimpit'],
    kunci: [2],
    pembahasan: [
      'Koordinat awal titik-titik pada bidang Cartesius:\\n• Segitiga $PQR$: $P(-6, 9)$, $Q(0, 7)$, $R(-3, 4)$\\n• Segitiga $KLM$: $K(0, 7)$, $L(6, 5)$, $M(3, 2)$ (dengan titik $K$ berhimpit dengan $Q$ di $(0, 7)$)',
      'Translasi segitiga $PQR$ oleh vektor $T = (-4, -2)$:\\n• $P\' = (-6 - 4, 9 - 2) = (-10, 7)$\\n• $Q\' = (0 - 4, 7 - 2) = (-4, 5)$\\n• $R\' = (-3 - 4, 4 - 2) = (-7, 2)$',
      'Analisis sifat translasi (pergeseran):\\n1. Operasi translasi adalah transformasi isometri yang mempertahankan bentuk, ukuran, dan arah kemiringan setiap ruas garis.\\n2. Ruas garis $P\'Q\'$ sejajar $PQ$, $Q\'R\'$ sejajar $QR$, dan $P\'R\'$ sejajar $PR$.\\n3. Pada segitiga $KLM$, perhatikan bahwa kemiringan sisinya juga kongruen dan sejajar dengan sisi-sisi bayangan segitiga $P\'Q\'R\'$.\\n4. Seluruh segitiga bayangan $P\'Q\'R\'$ berada pada rentang $x \\in [-10, -4]$, sedangkan $KLM$ berada pada rentang $x \\in [0, 6]$. Keduanya terpisah dan tidak saling memotong.',
      'Kesimpulan / Jawaban Akhir:\\nBayangan segitiga PQR dan segitiga KLM akan saling sejajar (Opsi C).'
    ],
    penjelasanKunci: 'Translasi mempertahankan arah garis. Segitiga P\'Q\'R\' dan KLM memiliki sisi-sisi bersesuaian yang sejajar tanpa berpotongan.',
    codeId: '25MATGMPTRGM54SP-000000-1942'
  },
  {
    no: 21,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Pengukuran',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait keliling dan luas bangun datar (daerah segi banyak dan daerah lingkaran, serta daerah gabungannya).',
    indikator: 'Membandingkan luas juring atau panjang busur pada lingkaran berdasarkan komponen yang diketahui.',
    tipe: 'PG',
    teks: 'Perhatikan gambar juring pada lingkaran di bawah ini!\n\nManakah pernyataan yang benar di bawah ini terkait luas juring A, B, dan C?',
    figure: 'soal-21-circle-sectors',
    opsi: [
      'Luas juring B dua kali dari luas juring C',
      'Luas juring C setengah dari luas juring A',
      'Luas juring A tiga kali dari luas juring B',
      'Luas juring B dua kali dari luas juring A'
    ],
    kunci: [1],
    pembahasan: [
      'Diketahui sudut pusat masing-masing juring:\\n• Juring A (cokelat): $\\alpha_A = 70^\\circ$\\n• Juring B (biru): $\\alpha_B = 90^\\circ$ (seperempat lingkaran berpenyiku)\\n• Juring C (hijau muda): $\\alpha_C = 35^\\circ$',
      'Rumus hubungan luas juring dengan sudut pusat pada lingkaran yang sama:\\n$$\\text{Luas Juring} = \\frac{\\alpha}{360^\\circ} \\times \\pi r^2$$\\nPerbandingan luas juring sama persis dengan perbandingan sudut pusatnya:\\n$$\\text{Luas A} : \\text{Luas B} : \\text{Luas C} = 70 : 90 : 35$$',
      'Uji setiap opsi jawaban:\\n• Opsi A: $\\frac{\\text{Luas B}}{\\text{Luas C}} = \\frac{90}{35} \\approx 2{,}57 \\neq 2$ (SALAH)\\n• Opsi B: $\\frac{\\text{Luas C}}{\\text{Luas A}} = \\frac{35}{70} = \\frac{1}{2}$ (BENAR, Luas C setengah dari Luas A)\\n• Opsi C: $\\frac{\\text{Luas A}}{\\text{Luas B}} = \\frac{70}{90} = \\frac{7}{9} \\neq 3$ (SALAH)\\n• Opsi D: $\\frac{\\text{Luas B}}{\\text{Luas A}} = \\frac{90}{70} = \\frac{9}{7} \\neq 2$ (SALAH)',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan yang benar adalah Luas juring C setengah dari luas juring A (Opsi B).'
    ],
    penjelasanKunci: 'Sudut C = 35° dan Sudut A = 70°. Luas juring C = 35/70 = 1/2 dari Luas juring A.',
    codeId: '25MATGMPUKRM55SP-000000-2040'
  },
  {
    no: 22,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Pengukuran',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait kekongruenan dan kesebangunan bangun datar.',
    indikator: 'Menentukan luas atau keliling persegi panjang lain menggunakan konsep kesebangunan bangun datar.',
    tipe: 'PG',
    teks: 'Perhatikan dua persegi panjang berikut.\n\nDiketahui luas persegi panjang yang lebih besar adalah 320 cm² dan kedua persegi panjang tersebut sebangun. Berapakah keliling persegi panjang yang lebih kecil?',
    figure: 'soal-22-similar-rectangles',
    opsi: ['9 cm', '18 cm', '20 cm', '72 cm'],
    kunci: [1],
    pembahasan: [
      'Diketahui persegi panjang besar:\\n• Panjang sisi tegak $p_1 = 20\\text{ cm}$\\n• Luas $L_1 = 320\\text{ cm}^2$\\n• Sisi mendatar $l_1 = \\frac{L_1}{p_1} = \\frac{320}{20} = 16\\text{ cm}$',
      'Kedua persegi panjang sebangun:\\n• Panjang sisi tegak persegi panjang kecil $p_2 = 5\\text{ cm}$\\n• Faktor skala kesebangunan $k$:\\n$$k = \\frac{p_2}{p_1} = \\frac{5}{20} = \\frac{1}{4}$$',
      'Hitung sisi mendatar persegi panjang kecil ($l_2$):\\n$$l_2 = k \\times l_1 = \\frac{1}{4} \\times 16 = 4\\text{ cm}$$',
      'Hitung keliling persegi panjang kecil ($K_2$):\\n$$K_2 = 2 \\times (p_2 + l_2) = 2 \\times (5 + 4) = 2 \\times 9 = 18\\text{ cm}$$',
      'Kesimpulan / Jawaban Akhir:\\nKeliling persegi panjang yang lebih kecil adalah 18 cm (Opsi B).'
    ],
    penjelasanKunci: 'Lebar besar = 16 cm. Skala 5/20 = 1/4 -> lebar kecil = 4 cm. Keliling = 2(5+4) = 18 cm.',
    codeId: '25MATGMPEGEOM52SP-000000-1028'
  },
  {
    no: 23,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Pengukuran',
    kompetensi: 'Menghitung dan mengestimasi volume dan luas permukaan balok, kubus, dan gabungannya (termasuk yang membutuhkan konversi satuan baku volume).',
    indikator: 'Menyelesaikan permasalahan yang berkaitan dengan luas permukaan atau volume bangun ruang.',
    tipe: 'MCMA',
    konteks: KONTEKS_MINYAK,
    teks: `Minyak jenis B pada tangki yang berisi penuh akan dikemas di botol dan di jeriken. Sebanyak 300 botol berukuran 2 liter sudah diisi minyak curah jenis B dari tangki tersebut. Sisa minyak akan dikemas ke dalam jeriken berukuran 5 liter. Bagaimana perbandingan banyak kemasan botol dan jeriken?

Pilihlah semua jawaban benar! Jawaban benar lebih dari satu.`,
    figure: 'soal-23-oil-tanks',
    opsi: [
      'Jumlah kemasan botol lebih banyak dari pada jeriken.',
      'Total kemasan botol dan jeriken yang terisi adalah 532.',
      'Sisa minyak di tangki cukup untuk mengisi 1 kemasan botol.',
      'Banyak kemasan jeriken yang terisi minyak adalah 332.'
    ],
    kunci: [0, 1], // A dan B
    pembahasan: [
      'Langkah 1: Menghitung volume tangki Jenis B\\n• Ukuran: $8\\text{ dm} \\times 2{,}2\\text{ m} \\times 1\\text{ m}$\\n• Konversi satuan ke desimeter (dm), karena $1\\text{ dm}^3 = 1\\text{ liter}$:\\n  - $2{,}2\\text{ m} = 22\\text{ dm}$\\n  - $1\\text{ m} = 10\\text{ dm}$\\n• Volume tangki B $= 8 \\times 22 \\times 10 = 1.760\\text{ dm}^3 = 1.760\\text{ liter}$',
      'Langkah 2: Menghitung minyak yang dikemas ke dalam botol\\n• $300$ botol $\\times 2\\text{ liter} = 600\\text{ liter}$',
      'Langkah 3: Menghitung minyak yang dikemas ke dalam jeriken\\n• Sisa minyak $= 1.760 - 600 = 1.160\\text{ liter}$\\n• Banyak jeriken 5 liter $= \\frac{1.160}{5} = 232\\text{ jeriken}$\\n• Sisa minyak di tangki $= 0\\text{ liter}$ (habis terisi penuh)',
      'Langkah 4: Evaluasi setiap opsi\\n• Opsi A: Botol (300) > Jeriken (232) -> BENAR\\n• Opsi B: Total kemasan $= 300 + 232 = 532$ -> BENAR\\n• Opsi C: Sisa minyak $= 0$ liter (tidak tersisa untuk botol lagi) -> SALAH\\n• Opsi D: Jeriken yang terisi adalah 232, bukan 332 -> SALAH',
      'Kesimpulan / Jawaban Akhir:\\nPilihan jawaban yang benar adalah A dan B.'
    ],
    penjelasanKunci: 'Opsi A (300 botol > 232 jeriken) dan B (total 532 kemasan) bernilai benar.',
    codeId: '24NUM22GEOPKRG28K8-241171-2675'
  },
  {
    no: 24,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Pengukuran',
    kompetensi: 'Menghitung dan mengestimasi volume dan luas permukaan balok, kubus, dan gabungannya (termasuk yang membutuhkan konversi satuan baku volume).',
    indikator: 'Menganalisis/mengevaluasi beberapa pernyataan yang berkaitan dengan luas permukaan atau volume bangun ruang.',
    tipe: 'KATEGORI',
    kolomKategori: ['Mungkin', 'Tidak Mungkin'],
    konteks: KONTEKS_MINYAK,
    teks: `Hari ini di toko Pak Dodi kedatangan dua pelanggan minyak curah yakni Pak Angga dan Bu Susi. Pak Angga dan Bu Susi membawa jeriken untuk wadah minyak dalam jumlah banyak. Jeriken minyak Pak Angga berukuran 25 liter, jeriken milik Bu Susi berukuran 30 liter. Pak Dodi memiliki persediaan 1 tangki minyak jenis A dan 1 tangki minyak Jenis B. Pak Angga dan Bu Susi membeli seluruh minyak tersebut sehingga tidak ada lagi sisa minyak di tangki. Seluruh jeriken yang dibawa berisi penuh dan masing-masing mendapatkan kedua jenis minyak. Bagaimana kemungkinan perbandingan banyaknya jeriken Pak Angga dan Bu Susi?

Tentukan mungkin atau tidak mungkin setiap pernyataan berikut! Klik pada kolom yang sesuai.`,
    figure: 'soal-24-oil-tanks',
    pernyataan: [
      'Bu Susi membawa pulang sebanyak 32 jeriken minyak jenis A dan 22 jeriken minyak jenis B.',
      'Pak Angga membawa pulang minyak 24 jeriken minyak jenis A dan 44 jeriken minyak jenis B.',
      'Bu Susi membawa pulang 21 jeriken minyak jenis A dan Pak Angga membawa pulang 40 jeriken minyak jenis B.'
    ],
    kunci: [1, 0, 1], // [Tidak Mungkin (1), Mungkin (0), Tidak Mungkin (1)]
    pembahasan: [
      'Kapasitas tangki:\\n• Tangki A: $6\\text{ dm} \\times 20\\text{ dm} \\times 8\\text{ dm} = 960\\text{ liter}$\\n• Tangki B: $8\\text{ dm} \\times 22\\text{ dm} \\times 10\\text{ dm} = 1.760\\text{ liter}$\\nKetentuan: jeriken Pak Angga @ 25 L, jeriken Bu Susi @ 30 L. Semua jeriken terisi penuh dan kedua orang **harus mendapatkan kedua jenis minyak** (tidak boleh ada yang 0 liter).',
      'Pernyataan 1: Bu Susi membawa 32 jeriken jenis A ($32 \\times 30 = 960\\text{ L}$).\\n• Karena total jenis A adalah 960 L, maka seluruh minyak jenis A habis diambil Bu Susi.\\n• Akibatnya, Pak Angga tidak mendapatkan minyak jenis A sedikit pun (0 liter).\\n• Ini melanggar syarat bahwa masing-masing harus mendapat kedua jenis minyak. (TIDAK MUNGKIN)',
      'Pernyataan 2: Pak Angga membawa 24 jeriken A dan 44 jeriken B.\\n• Minyak jenis A untuk Pak Angga $= 24 \\times 25 = 600\\text{ L}$. Sisa A untuk Bu Susi $= 960 - 600 = 360\\text{ L}$. Banyak jeriken Bu Susi $= \\frac{360}{30} = 12\\text{ jeriken}$ (pas, bulat).\\n• Minyak jenis B untuk Pak Angga $= 44 \\times 25 = 1.100\\text{ L}$. Sisa B untuk Bu Susi $= 1.760 - 1.100 = 660\\text{ L}$. Banyak jeriken Bu Susi $= \\frac{660}{30} = 22\\text{ jeriken}$ (pas, bulat).\\n• Keduanya mendapat kedua jenis minyak secara penuh dan bulat. (MUNGKIN)',
      'Pernyataan 3: Bu Susi membawa 21 jeriken jenis A ($21 \\times 30 = 630\\text{ L}$).\\n• Sisa minyak jenis A untuk Pak Angga $= 960 - 630 = 330\\text{ liter}$.\\n• Jeriken Pak Angga berukuran 25 liter: $\\frac{330}{25} = 13{,}2\\text{ jeriken}$ (bukan bilangan bulat, jeriken tidak bisa penuh terisi).\\n• (TIDAK MUNGKIN)',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan 1: Tidak Mungkin\\nPernyataan 2: Mungkin\\nPernyataan 3: Tidak Mungkin'
    ],
    penjelasanKunci: '1 Tidak Mungkin (Pak Angga tak dapat jenis A); 2 Mungkin (Bu Susi bawa 12 jeriken A & 22 jeriken B); 3 Tidak Mungkin (330/25 bukan bilangan bulat).',
    codeId: '24NUM22GEOPKRG28K8-241171-2483'
  }
];
