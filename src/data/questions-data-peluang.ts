import { Question } from '../types';

export const KONTEKS_TORY = `Tory suka sekali bermain game online. Dia selalu mengabaikan batasan waktu dalam bermain game online. Belakangan ini Tory sering merasa gelisah dan mudah marah apabila tidak diijinkan bermain. Dia juga sering merasakan sakit mata dan pusing. Dokter mengatakan bahwa Tory telah kecanduan bermain game online. Tory harus berusaha perlahan-lahan mengontrol waktu bermainnya. Dokter mengatakan bahwa batas waktu maksimal Tory diperbolehkan bermain adalah 7 jam dalam satu minggu. Selama 12 minggu, waktu bermain game Tory terus dipantau oleh kedua orang tuanya dan dilaporkan ke dokter.`;

export const questionsDataPeluang: Question[] = [
  {
    no: 25,
    elemen: 'Data dan Peluang',
    subelemen: 'Data',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait perumusan pertanyaan untuk mendapatkan data, serta penyajian dan penginterpretasian data.',
    indikator: 'Menyajikan sebagian data acak dari tabel ke dalam bentuk diagram garis atau batang.',
    tipe: 'PG',
    teks: `Karet dan kelapa sangat penting bagi banyak industri di dunia, mulai dari ban hingga makanan. Indonesia adalah penghasil utama keduanya, dan meskipun ada tantangan dalam produksi, kedua komoditas ini tetap penting untuk ekonomi Indonesia dan pasokan global. Berikut adalah data produksi karet dan kelapa di Indonesia.

Berdasarkan data di atas, diagram garis manakah yang menunjukkan penyajian data dari salah satu hasil produksi karet atau kelapa di Indonesia?`,
    figure: 'soal-25-rubber-coconut',
    opsi: [
      'Diagram garis dengan sumbu Y 5,4 s/d 6,6 (2018: 6,51; 2019: 6,33; 2020: 6,11; ...)',
      'Diagram garis dengan urutan nilai naik-turun tidak beraturan (2018: 6,51; 2019: 5,49; ...)',
      'Diagram garis komoditas kelapa dengan titik 2019 bernilai 2,89',
      'Diagram garis produksi karet dengan sumbu Y 0 s/d 4 (2018: 3,68; 2019: 3,50; 2020: 3,30; 2021: 3,12; 2022: 2,95; 2023: 2,75; 2024: 2,60)'
    ],
    kunci: [3],
    pembahasan: [
      'Cocokkan data pada tabel dengan keempat diagram garis yang tersedia:\\n• Tabel Produksi Karet (juta ton):\\n  - 2018: $3{,}68$\\n  - 2019: $3{,}50$\\n  - 2020: $3{,}30$\\n  - 2021: $3{,}12$\\n  - 2022: $2{,}95$\\n  - 2023: $2{,}75$\\n  - 2024: $2{,}60$',
      '• Tabel Produksi Kelapa (juta ton):\\n  - 2018: $2{,}83$\\n  - 2019: $2{,}83$\\n  - 2020: $2{,}81$\\n  - 2021: $2{,}85$\\n  - 2022: $2{,}86$\\n  - 2023: $2{,}90$\\n  - 2024: $2{,}89$',
      'Analisis setiap pilihan diagram:\\n• **Pilihan A**: Menjumlahkan karet + kelapa ($3{,}68 + 2{,}83 = 6{,}51$), bukan salah satu komoditas.\\n• **Pilihan B**: Data gabungan dengan urutan tahun yang salah/terbalik.\\n• **Pilihan C**: Menampilkan data kelapa tetapi salah angka pada tahun 2019 (tertulis 2,89 seharusnya 2,83).\\n• **Pilihan D**: Menampilkan tepat data produksi karet dari tahun 2018 hingga 2024 ($3{,}68 \\to 3{,}50 \\to 3{,}30 \\to 3{,}12 \\to 2{,}95 \\to 2{,}75 \\to 2{,}60$).',
      'Kesimpulan / Jawaban Akhir:\\nDiagram yang tepat menyajikan salah satu komoditas adalah diagram D (Produksi Karet) (Opsi D).'
    ],
    penjelasanKunci: 'Diagram D tepat merepresentasikan data deret waktu produksi karet (3,68 hingga 2,60 juta ton).',
    codeId: '25MATDPLDATM57SP-000000-1062'
  },
  {
    no: 26,
    elemen: 'Data dan Peluang',
    subelemen: 'Data',
    kompetensi: 'Menentukan dan menggunakan mean, median, dan modus dalam pemecahan masalah.',
    indikator: 'Menentukan modus dari kumpulan data yang ada dalam informasi.',
    tipe: 'PG',
    konteks: KONTEKS_TORY,
    teks: 'Dalam 12 minggu terakhir, Tory paling sering menghabiskan waktu untuk bermain game online setiap minggunya yaitu selama ... .',
    figure: 'soal-26-tory-bar-chart',
    opsi: ['10 jam', '14 jam', '20 jam', '22 jam'],
    kunci: [1],
    pembahasan: [
      'Diketahui durasi bermain game Tory selama 12 minggu (dalam jam):\\n22, 20, 18, 20, 14, 16, 14, 14, 12, 10, 14, 12',
      'Konsep Modus:\\nModus adalah nilai data yang paling sering muncul (memiliki frekuensi kemunculan terbesar).',
      'Tabel frekuensi data:\\n• $10\\text{ jam}: 1\\times$\\n• $12\\text{ jam}: 2\\times$\\n• $14\\text{ jam}: 4\\times$ (Minggu ke-5, ke-7, ke-8, dan ke-11)\\n• $16\\text{ jam}: 1\\times$\\n• $18\\text{ jam}: 1\\times$\\n• $20\\text{ jam}: 2\\times$\\n• $22\\text{ jam}: 1\\times$',
      'Frekuensi tertinggi adalah $4$ kali, yaitu pada durasi $14\\text{ jam}$.',
      'Kesimpulan / Jawaban Akhir:\\nTory paling sering bermain game online selama 14 jam (Opsi B).'
    ],
    penjelasanKunci: 'Modus data adalah 14 jam, dengan frekuensi tertinggi sebanyak 4 minggu.',
    codeId: '24NUM22DATDDRD03K8-241496-6251'
  },
  {
    no: 27,
    elemen: 'Data dan Peluang',
    subelemen: 'Data',
    kompetensi: 'Menentukan dan menggunakan mean, median, dan modus dalam pemecahan masalah.',
    indikator: 'Menyelesaikan permasalahan menggunakan konsep rata-rata (mean).',
    tipe: 'MCMA',
    konteks: KONTEKS_TORY,
    teks: `Dokter dan orangtua Tory memahami bahwa tidak mudah menghilangkan kecanduan bermain game online, namun mereka ingin terus memantau bagaimana perkembangan Tory. Dokter membuat skema sebagai berikut:

Fase pertama membandingkan rata-rata jam bermain pada 4 minggu pertama dengan rata-rata jam bermain pada 4 minggu kedua.
Fase kedua membandingkan rata-rata jam bermain pada 4 minggu kedua dengan rata-rata jam bermain pada 4 minggu ketiga.
Fase akhir membandingkan rata-rata jam bermain pada 4 minggu ketiga dengan batas waktu maksimal yang disarankan (7 jam).
Fase penyembuhan dilihat dari 4 minggu pertama dan 4 minggu ketiga.

Apakah yang terjadi pada Tory selama fase penyembuhan? Pilihlah semua jawaban yang benar! Jawaban benar lebih dari satu.`,
    figure: 'soal-27-tory-phases',
    opsi: [
      'Fase pertama berkurang 5,5 jam.',
      'Fase kedua berkurang 2,25 jam.',
      'Fase akhir berkurang 5,25 jam.',
      'Fase penyembuhan berkurang 8 jam.'
    ],
    kunci: [0, 3], // A dan D
    pembahasan: [
      'Langkah 1: Hitung rata-rata jam bermain tiap kelompok 4 minggu:\\n• **4 Minggu Pertama** (Minggu 1-4):\\n$$\\bar{x}_1 = \\frac{22 + 20 + 18 + 20}{4} = \\frac{80}{4} = 20\\text{ jam}$$\\n• **4 Minggu Kedua** (Minggu 5-8):\\n$$\\bar{x}_2 = \\frac{14 + 16 + 14 + 14}{4} = \\frac{58}{4} = 14{,}5\\text{ jam}$$\\n• **4 Minggu Ketiga** (Minggu 9-12):\\n$$\\bar{x}_3 = \\frac{12 + 10 + 14 + 12}{4} = \\frac{48}{4} = 12\\text{ jam}$$',
      'Langkah 2: Evaluasi masing-masing fase:\\n• **Fase Pertama**: Perubahan dari 4 minggu pertama ke 4 minggu kedua\\n$$\\text{Penurunan} = 20 - 14{,}5 = 5{,}5\\text{ jam (BENAR)}$$\\n• **Fase Kedua**: Perubahan dari 4 minggu kedua ke 4 minggu ketiga\\n$$\\text{Penurunan} = 14{,}5 - 12 = 2{,}5\\text{ jam}$$ (Opsi menyebut 2,25 jam -> SALAH)\\n• **Fase Akhir**: Perbandingan 4 minggu ketiga dengan batas 7 jam\\n$$\\text{Penurunan} = 12 - 7 = 5\\text{ jam}$$ (Opsi menyebut 5,25 jam -> SALAH)\\n• **Fase Penyembuhan**: Perubahan dari 4 minggu pertama ke 4 minggu ketiga\\n$$\\text{Penurunan} = 20 - 12 = 8\\text{ jam (BENAR)}$$',
      'Kesimpulan / Jawaban Akhir:\\nPernyataan yang benar adalah pilihan A dan pilihan D.'
    ],
    penjelasanKunci: 'Opsi A (fase pertama turun 5,5 jam) dan D (fase penyembuhan turun 8 jam) adalah jawaban yang tepat.',
    codeId: '24NUM22DATDDRD03K8-241496-6175'
  },
  {
    no: 28,
    elemen: 'Data dan Peluang',
    subelemen: 'Peluang',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait peluang dan frekuensi relatif dari kejadian tunggal.',
    indikator: 'Menentukan nilai peluang kejadian tunggal dengan dua kemungkinan kondisi dari suatu masalah kontekstual.',
    tipe: 'PG',
    teks: `Suatu paket terdiri dari 20 kotak misteri. Kotak misteri tersebut berisi patung figur karakter yang bernama Saka dan Kirana. Berikut ini banyak paket figur karakter yang tersedia dalam satu paket:
• Saka: 8 buah
• Kirana: 12 buah

Riana mengambil 3 kotak misteri secara acak dari dalam paket tersebut dan ternyata ia mendapatkan 1 buah Saka dan 2 buah Kirana. Kemudian, Santi akan mengambil 1 kotak misteri. Berapakah peluang Santi mendapatkan Saka?`,
    figure: 'soal-28-saka-kirana',
    opsi: [
      '$\\frac{7}{20}$',
      '$\\frac{8}{20}$',
      '$\\frac{8}{17}$',
      '$\\frac{7}{17}$'
    ],
    kunci: [3],
    pembahasan: [
      'Kondisi awal di dalam paket (total 20 kotak misteri):\\n• Figur Saka $= 8\\text{ buah}$\\n• Figur Kirana $= 12\\text{ buah}$',
      'Pengambilan oleh Riana:\\nRiana mengambil 3 kotak tanpa pengembalian dan memperoleh:\\n• 1 buah Saka\\n• 2 buah Kirana',
      'Kondisi sisa kotak misteri di dalam paket saat giliran Santi:\\n• Sisa figur Saka $= 8 - 1 = 7\\text{ buah}$\\n• Sisa figur Kirana $= 12 - 2 = 10\\text{ buah}$\\n• Total sisa kotak misteri $= 7 + 10 = 17\\text{ buah}$',
      'Peluang Santi mendapatkan figur Saka:\\n$$P(\\text{Saka}) = \\frac{n(\\text{Saka})}{n(S)} = \\frac{7}{17}$$',
      'Kesimpulan / Jawaban Akhir:\\nPeluang Santi mendapatkan Saka adalah $\\frac{7}{17}$ (Opsi D).'
    ],
    penjelasanKunci: 'Sisa Saka = 7 dan total sisa = 17, sehingga peluangnya adalah 7/17 (Opsi D).',
    codeId: '25MATDPLPLGM60SP-000000-3201'
  },
  {
    no: 29,
    elemen: 'Data dan Peluang',
    subelemen: 'Peluang',
    kompetensi: 'Menghitung peluang kejadian sederhana.',
    indikator: 'Menghitung peluang kejadian sederhana berdasarkan informasi.',
    tipe: 'PG',
    teks: `Mesin Tetas Telur

Mesin tetas telur adalah sebuah alat yang digunakan untuk membantu proses penetasan telur. Cara kerja alat atau mesin ini adalah melakukan proses pengeraman tanpa induk dengan menggunakan sebuah lampu pijar. Mesin ini dilengkapi dengan motor yang berfungsi untuk meratakan proses pemanasan telur agar telur dapat menetas secara maksimal. Mesin ini umumnya hanya bisa digunakan untuk menetaskan telur unggas seperti telur ayam, puyuh, bebek, dan entok.

Penetasan berlangsung selama 18 hari terhitung dari awal masuknya telur kedalam mesin tetas. Dilakukan pengamatan terhadap beberapa telur puyuh dengan usia yang berbeda-beda. Berikut rincian usia telur di mesin tetas tersebut saat ini:
• Usia 2 hari: 20 butir
• Usia 4 hari: 35 butir
• Usia 6 hari: 30 butir
• Usia 8 hari: 15 butir

Diketahui telur-telur tersebut diletakkan secara acak di dalam mesin. Jika dilakukan pengamatan khusus pada satu telur yang dipilih secara acak, berapakah peluang telur tersebut akan menetas dalam 10 hari ke depan?`,
    figure: 'soal-29-egg-incubator',
    opsi: [
      '$\\frac{3}{20}$',
      '$\\frac{1}{15}$',
      '$\\frac{1}{10}$',
      '$\\frac{1}{8}$'
    ],
    kunci: [0],
    pembahasan: [
      'Langkah 1: Hitung total seluruh telur puyuh di dalam mesin tetas:\\n$$n(S) = 20 + 35 + 30 + 15 = 100\\text{ butir}$$.',
      'Langkah 2: Menentukan kriteria telur yang menetas dalam 10 hari ke depan:\\n• Lama masa penetasan $= 18\\text{ hari}$.\\n• Agar suatu telur menetas dalam $10$ hari ke depan, maka pada hari ke-10 usia telur harus sudah mencapai minimal $18$ hari:\\n$$\\text{Usia saat ini} + 10 \\ge 18 \\implies \\text{Usia saat ini} \\ge 8\\text{ hari}$$',
      'Langkah 3: Menentukan banyak telur yang memenuhi kriteria:\\n• Telur usia 2 hari $\\rightarrow$ dalam 10 hari usianya $12$ hari (belum menetas)\\n• Telur usia 4 hari $\\rightarrow$ dalam 10 hari usianya $14$ hari (belum menetas)\\n• Telur usia 6 hari $\\rightarrow$ dalam 10 hari usianya $16$ hari (belum menetas)\\n• Telur usia 8 hari $\\rightarrow$ dalam 10 hari usianya $18$ hari (**tepat menetas**!)\\nBanyak telur usia 8 hari $= 15\\text{ butir}$.',
      'Langkah 4: Hitung nilai peluang:\\n$$P = \\frac{15}{100} = \\frac{3}{20}$$',
      'Kesimpulan / Jawaban Akhir:\\nPeluang telur tersebut akan menetas dalam 10 hari ke depan adalah $\\frac{3}{20}$ (Opsi A).'
    ],
    penjelasanKunci: 'Telur menetas jika usia + 10 ≥ 18 -> usia ≥ 8 hari (15 butir). Peluang = 15/100 = 3/20.',
    codeId: '24NUM22DATKDPD08K8-000000-5975'
  },
  {
    no: 30,
    elemen: 'Data dan Peluang',
    subelemen: 'Peluang',
    kompetensi: 'Memahami, mengaplikasikan, dan bernalar tingkat tinggi terkait peluang dan frekuensi relatif dari kejadian tunggal.',
    indikator: 'Memperkirakan jumlah awal suatu objek dari percobaan pengambilan tanpa pengembalian menggunakan konsep peluang.',
    tipe: 'MCMA',
    teks: `Seorang guru menyiapkan sejumlah kertas soal ujian yang digulung dan dimasukkan ke dalam sebuah kotak. Setiap kertas berisi kode soal A, B, atau C.

Diketahui bahwa jumlah kertas berkode A lebih sedikit daripada kertas berkode B ($A_0 < B_0$). Guru kemudian mengambil 3 kertas dengan kode yang sama dari dalam kotak. Setelah pengambilan, jumlah seluruh kertas yang tersisa di dalam kotak menjadi 28 lembar dan jumlah kertas berkode B lebih banyak daripada kertas berkode C ($B_s > C_s$).

Jika kemudian diambil satu kertas secara acak dari kotak tersebut, diketahui bahwa peluang terambilnya kertas berkode C yaitu 2/7.

Berdasarkan informasi tersebut, berapakah kemungkinan jumlah kertas soal ujian kode B mula-mula?
Pilihlah semua jawaban benar! Jawaban benar lebih dari satu.`,
    figure: 'soal-30-teacher-exam',
    opsi: [
      '10 lembar',
      '11 lembar',
      '12 lembar',
      '14 lembar'
    ],
    kunci: [1, 2, 3], // B (11), C (12), D (14)
    pembahasan: [
      'Langkah 1: Analisis kondisi sisa kertas di dalam kotak:\\n• Total sisa kertas $= 28\\text{ lembar}$\\n• Peluang terambil kertas kode C $= \\frac{2}{7}$, maka sisa kertas C ($C_s$):\\n$$C_s = \\frac{2}{7} \\times 28 = 8\\text{ lembar}$$\\n• Jumlah sisa kertas A dan B:\\n$$A_s + B_s = 28 - C_s = 28 - 8 = 20\\text{ lembar}$$\\n• Diketahui $B_s > C_s$, sehingga $B_s > 8$ (artinya $B_s \\ge 9$).',
      'Langkah 2: Analisis 3 kemungkinan kode kertas yang diambil guru:\\n• **Kasus 1: Yang diambil adalah 3 kertas kode C**\\n  - Kertas A dan B tidak berubah: $A_0 = A_s$ dan $B_0 = B_s$.\\n  - $A_0 + B_0 = 20$ dan syarat awal $A_0 < B_0$.\\n  - Jika $B_0 = 10$, maka $A_0 = 10$ (tidak memenuhi $A_0 < B_0$).\\n  - Jika $B_0 = 11$, maka $A_0 = 9$ (MEMENUHI $9 < 11$).\\n  - Jika $B_0 = 12$, maka $A_0 = 8$ (MEMENUHI $8 < 12$).\\n  - Jika $B_0 = 14$, maka $A_0 = 6$ (MEMENUHI $6 < 14$).',
      '• **Kasus 2: Yang diambil adalah 3 kertas kode A**\\n  - $A_0 = A_s + 3$ dan $B_0 = B_s$.\\n  - Karena $A_s + B_s = 20$, maka $(A_0 - 3) + B_0 = 20 \\implies A_0 + B_0 = 23$.\\n  - Syarat $A_0 < B_0 \\implies B_0 \\ge 12$.\\n  - $B_0 = 12 \\implies A_0 = 11$ (MEMENUHI).\\n  - $B_0 = 14 \\implies A_0 = 9$ (MEMENUHI).',
      '• **Kasus 3: Yang diambil adalah 3 kertas kode B**\\n  - $B_0 = B_s + 3$. Karena $B_s > 8 \\implies B_s \\ge 9$, maka $B_0 \\ge 9 + 3 = 12$.\\n  - $B_0 = 12$ dan $B_0 = 14$ keduanya memenuhi.',
      'Perhatikan bahwa $10$ lembar tidak pernah mungkin memenuhi syarat di ketiga kasus.',
      'Kesimpulan / Jawaban Akhir:\\nKemungkinan jumlah kertas kode B mula-mula adalah 11 lembar, 12 lembar, dan 14 lembar (Opsi B, C, dan D).'
    ],
    penjelasanKunci: 'Kemungkinan jumlah mula-mula kertas B adalah 11, 12, atau 14 lembar (Opsi B, C, dan D).',
    codeId: '25MATDPLPLGM60SP-000000-3192'
  }
];
