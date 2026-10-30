import React from 'react';
import { Award, BookOpen, Presentation, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currentNo: number;
  totalQuestions: number;
  answeredCount: number;
  score: number;
  onOpenResults: () => void;
  onResetProgress: () => void;
  isProjectorMode: boolean;
  onToggleProjector: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalQuestions,
  answeredCount,
  score,
  onOpenResults,
  onResetProgress,
  isProjectorMode,
  onToggleProjector,
}) => {
  const percentAnswered = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-lg shadow-sm">
            📐
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              Latihan Soal TKA Matematika SMP/MTs 2026
            </h1>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Simulasi 30 Soal & Pembahasan Interaktif KaTeX
            </p>
          </div>
        </div>

        {/* Progress & Live Score Indicator */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Progress bar container */}
          <div className="hidden md:flex flex-col gap-1 w-36">
            <div className="flex justify-between text-[11px] text-slate-600 font-medium">
              <span>Kemajuan</span>
              <span className="font-bold text-slate-800">{answeredCount}/{totalQuestions}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{ width: `${percentAnswered}%` }}
              />
            </div>
          </div>

          {/* Score Counter */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
            <Award className="w-4 h-4 text-amber-500" />
            <div className="text-xs">
              <span className="text-slate-500 text-[10px] block leading-none">Skor Benar</span>
              <span className="font-extrabold text-slate-900 font-mono text-sm leading-tight">
                {score} <span className="text-[11px] text-slate-500 font-normal">/ {totalQuestions}</span>
              </span>
            </div>
          </div>

          {/* Classroom Projector Mode Toggle */}
          <button
            onClick={onToggleProjector}
            title={isProjectorMode ? 'Kembali ke Ukuran Normal' : 'Mode Proyektor Kelas (Teks Lebih Besar)'}
            className={`p-2 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              isProjectorMode
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span className="hidden lg:inline">{isProjectorMode ? 'Proyektor Aktif' : 'Mode Proyektor'}</span>
          </button>

          {/* Results Page Button */}
          <button
            onClick={onOpenResults}
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Hasil Akhir</span>
          </button>

          {/* Reset Progress Button */}
          <button
            onClick={() => {
              if (window.confirm('Apakah kamu yakin ingin mengulang latihan dan menghapus semua jawaban?')) {
                onResetProgress();
              }
            }}
            title="Ulangi Semua Soal"
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
