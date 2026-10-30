import React from 'react';
import { Award, ArrowLeft, RotateCcw, CheckCircle2, XCircle, AlertCircle, ChevronRight, BookOpen } from 'lucide-react';
import { Question, UserAnswer } from '../types';
import { allQuestions } from '../data';
import MathRenderer from '../utils/MathRenderer';

interface ResultPageProps {
  userAnswers: Record<number, UserAnswer>;
  onClose: () => void;
  onSelectQuestion: (no: number, autoOpenExplanation?: boolean) => void;
  onResetAll: () => void;
  onRetryWrongOnly: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  userAnswers,
  onClose,
  onSelectQuestion,
  onResetAll,
  onRetryWrongOnly,
}) => {
  const totalQuestions = allQuestions.length; // 30
  let correctCount = 0;
  let answeredCount = 0;

  const elementStats: Record<string, { total: number; correct: number; answered: number; nos: number[] }> = {
    Bilangan: { total: 5, correct: 0, answered: 0, nos: [1, 2, 3, 4, 5] },
    Aljabar: { total: 10, correct: 0, answered: 0, nos: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
    'Geometri dan Pengukuran': { total: 9, correct: 0, answered: 0, nos: [16, 17, 18, 19, 20, 21, 22, 23, 24] },
    'Data dan Peluang': { total: 6, correct: 0, answered: 0, nos: [25, 26, 27, 28, 29, 30] },
  };

  const wrongQuestions: Question[] = [];
  const unansweredQuestions: Question[] = [];

  allQuestions.forEach((q) => {
    const ans = userAnswers[q.no];
    const stat = elementStats[q.elemen];

    if (ans && ans.isSubmitted) {
      answeredCount++;
      if (stat) stat.answered++;

      if (ans.isCorrect) {
        correctCount++;
        if (stat) stat.correct++;
      } else {
        wrongQuestions.push(q);
      }
    } else {
      unansweredQuestions.push(q);
    }
  });

  const finalScore100 = Math.round((correctCount / totalQuestions) * 100);

  const getGradeMessage = (score: number) => {
    if (score >= 85) return { title: 'Luar Biasa! Kemampuan Sangat Unggul', desc: 'Pemahaman materi TKA Matematika kamu sudah sangat matang dan siap menghadapi ujian.', color: 'text-emerald-700' };
    if (score >= 70) return { title: 'Bagus Sekali! Lulus Ambang Batas', desc: 'Pemahaman konsep dasar kamu sudah kuat. Evaluasi soal yang salah untuk hasil maksimal.', color: 'text-blue-700' };
    if (score >= 50) return { title: 'Cukup Baik! Terus Tingkatkan', desc: 'Ada beberapa subelemen yang perlu dipelajari kembali melalui pembahasan di papan tulis.', color: 'text-amber-700' };
    return { title: 'Perlu Latihan Tambahan', desc: 'Gunakan pembahasan langkah demi langkah di papan tulis untuk memahami konsep dasar.', color: 'text-rose-700' };
  };

  const grade = getGradeMessage(finalScore100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Soal</span>
        </button>

        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Laporan Hasil Simulasi TKA 2026
        </span>
      </div>

      {/* Main Scorecard Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-blue-500/20 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-300 bg-indigo-900/60 px-3 py-1 rounded-full border border-indigo-700/60 inline-block">
              Hasil Latihan Soal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {grade.title}
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200/90 max-w-md">
              {grade.desc}
            </p>
          </div>

          {/* Big Score Dial */}
          <div className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl border border-white/15 backdrop-blur-xs">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black font-mono text-amber-300">
                {finalScore100}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold mt-0.5">
                Nilai Akhir / 100
              </div>
            </div>

            <div className="w-px h-12 bg-white/20" />

            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-300">
                {correctCount} <span className="text-lg font-normal text-slate-400">/ {totalQuestions}</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold mt-0.5">
                Soal Benar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown per Element */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-600" />
          Rincian Penguasaan Per Elemen
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(elementStats).map(([elName, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div
                key={elName}
                className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-800">{elName}</span>
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {stat.correct} / {stat.total} ({pct}%)
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-blue-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Terjawab: {stat.answered} dari {stat.total}</span>
                  <span className={pct >= 70 ? 'text-emerald-600 font-bold' : 'text-slate-600 font-medium'}>
                    {pct >= 80 ? 'Sangat Baik' : pct >= 60 ? 'Cukup' : 'Perlu Diulang'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wrong Questions List with Direct Jump to Whiteboard */}
      {wrongQuestions.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-500" />
              Daftar Soal yang Perlu Dipelajari ({wrongQuestions.length})
            </h3>
            <span className="text-xs text-slate-500">Klik soal untuk membuka pembahasan</span>
          </div>

          <div className="space-y-2">
            {wrongQuestions.map((q) => (
              <div
                key={q.no}
                onClick={() => onSelectQuestion(q.no, true)}
                className="bg-white border border-rose-200 hover:border-rose-400 p-3.5 rounded-xl shadow-2xs flex items-center justify-between gap-3 cursor-pointer transition-all hover:bg-rose-50/30"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 font-black text-xs flex items-center justify-center shrink-0">
                    #{q.no}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                        {q.elemen}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 line-clamp-1">
                        {q.indikator}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      <MathRenderer content={q.penjelasanKunci || q.teks} inline={true} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Pelajari Soal</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Unanswered Questions if any */}
      {unansweredQuestions.length > 0 && (
        <div className="space-y-2 pt-2">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            Soal yang Belum Dijawab ({unansweredQuestions.length})
          </div>
          <div className="flex flex-wrap gap-1.5">
            {unansweredQuestions.map((q) => (
              <button
                key={q.no}
                onClick={() => onSelectQuestion(q.no, false)}
                className="w-9 h-9 rounded-lg border border-slate-300 bg-white hover:border-blue-400 text-xs font-bold text-slate-700 transition-colors flex items-center justify-center"
              >
                {q.no}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200">
        <button
          onClick={onClose}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
        >
          Lanjut Mengerjakan Soal
        </button>

        <div className="flex items-center gap-2">
          {wrongQuestions.length > 0 && (
            <button
              onClick={onRetryWrongOnly}
              className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Coba Ulang Soal yang Salah ({wrongQuestions.length})
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm('Yakin ingin mereset semua jawaban dan mengulang dari nomor 1?')) {
                onResetAll();
              }
            }}
            className="px-4 py-2.5 text-rose-600 hover:bg-rose-50 border border-rose-200 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Semua Soal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
