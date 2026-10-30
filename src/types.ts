export type QuestionType = 'PG' | 'MCMA' | 'KATEGORI';

export type ElementType = 'Bilangan' | 'Aljabar' | 'Geometri dan Pengukuran' | 'Data dan Peluang';

export interface Question {
  no: number;
  elemen: string;
  subelemen: string;
  kompetensi: string;
  indikator: string;
  tipe: QuestionType;
  konteks?: string;
  teks: string;
  figure: string; // id komponen SVG
  opsi?: string[];
  kolomKategori?: [string, string];
  pernyataan?: string[];
  kunci: number[]; // PG: [index]; MCMA: index-index benar; KATEGORI: 0 = kolom pertama, 1 = kolom kedua, per baris
  pembahasan: string[]; // langkah papan tulis, boleh berisi KaTeX LaTeX notation
  penjelasanKunci?: string;
  codeId?: string;
}

export interface UserAnswer {
  // For PG: single selected index (e.g. 2 for C)
  // For MCMA: array of selected indices (e.g. [0, 3] for A and D)
  // For KATEGORI: array of choices for each statement (0 or 1)
  selected: number[];
  isSubmitted: boolean;
  isCorrect?: boolean;
}

export type ChalkColor = 'white' | 'yellow' | 'blue' | 'pink';

export interface DrawStroke {
  color: string;
  size: number;
  isEraser?: boolean;
  points: { x: number; y: number }[];
}
