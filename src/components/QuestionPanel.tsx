import React from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import MathRenderer from '../utils/MathRenderer';
import { QuestionFigure } from './figures/QuestionFigure';
import { Question, UserAnswer } from '../types';
import { getElementTheme } from '../data';

interface QuestionPanelProps {
  question: Question;
  userAnswer?: UserAnswer;
  onAnswerChange: (selected: number[]) => void;
  onSubmitAnswer: () => void;
  onToggleExplanation: () => void;
  showExplanation: boolean;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  isProjectorMode?: boolean;
}

export const QuestionPanel: React.FC<QuestionPanelProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  onSubmitAnswer,
  onToggleExplanation,
  showExplanation,
  onNext,
  onPrev,
  isFirst,
  isLast,
  isProjectorMode = false,
}) => {
  const theme = getElementTheme(question.elemen);
  const selected = userAnswer?.selected || [];
  const isSubmitted = userAnswer?.isSubmitted || false;
  const isCorrect = userAnswer?.isCorrect;

  // Handle PG click
  const handlePGClick = (index: number) => {
    if (isSubmitted) return;
    onAnswerChange([index]);
  };

  // Handle MCMA checkbox toggle
  const handleMCMAClick = (index: number) => {
    if (isSubmitted) return;
    if (selected.includes(index)) {
      onAnswerChange(selected.filter((i) => i !== index));
    } else {
      onAnswerChange([...selected, index].sort((a, b) => a - b));
    }
  };

  // Handle KATEGORI radio choice (stmtIdx, colIdx 0 or 1)
  const handleKategoriChoice = (stmtIdx: number, colIdx: number) => {
    if (isSubmitted) return;
    const current = [...(selected.length === (question.pernyataan?.length || 0) ? selected : Array(question.pernyataan?.length || 0).fill(-1))];
    current[stmtIdx] = colIdx;
    onAnswerChange(current);
  };

  const getTipeBadgeLabel = () => {
    switch (question.tipe) {
      case 'PG':
        return 'Bentuk Soal : Pilihan Ganda';
      case 'MCMA':
        return 'Bentuk Soal : Pilihan Ganda Kompleks - MCMA';
      case 'KATEGORI':
        return 'Bentuk Soal : Pilihan Ganda Kompleks - Kategori';
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-5">
      {/* 1. Hierarki Indikator Card (Light Blue Theme) */}
      <div className="bg-[#f0f7ff] border border-[#d0e5ff] rounded-xl p-3.5 sm:p-4 text-xs space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-2 text-blue-900 font-bold mb-2 pb-1.5 border-b border-blue-200/60">
          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs uppercase tracking-wide">Hierarki Indikator</span>
        </div>
        <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-y-1 text-slate-700">
          <span className="font-semibold text-slate-500">Elemen:</span>
          <span className="font-bold text-blue-900">{question.elemen}</span>

          <span className="font-semibold text-slate-500">Subelemen:</span>
          <span className="font-medium text-slate-800">{question.subelemen}</span>

          <span className="font-semibold text-slate-500">Kompetensi:</span>
          <span className="leading-snug text-slate-800">{question.kompetensi}</span>

          <span className="font-semibold text-slate-500">Indikator:</span>
          <span className="leading-snug text-slate-800">
            {question.indikator} ({question.no})
          </span>
        </div>
      </div>

      {/* 2. Question Metadata & Type Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        {question.codeId ? (
          <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            {question.codeId}
          </span>
        ) : (
          <span className="font-semibold text-slate-600">Nomor {question.no}</span>
        )}

        <span className="bg-amber-100 text-amber-900 font-bold text-[11px] px-3 py-1 rounded-full border border-amber-300 shadow-2xs">
          {getTipeBadgeLabel()}
        </span>
      </div>

      {/* 3. Question Context (if any) */}
      {question.konteks && (
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
          <MathRenderer content={question.konteks} inline={false} />
        </div>
      )}

      {/* 4. Question Text with KaTeX */}
      <div
        className={`font-medium text-slate-900 leading-relaxed ${
          isProjectorMode ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
        }`}
      >
        <MathRenderer content={question.teks} inline={false} />
      </div>

      {/* 5. Figure / SVG Visualization */}
      {question.figure && (
        <div className="w-full">
          <QuestionFigure figureId={question.figure} />
        </div>
      )}

      {/* 6. Answer Options Section */}
      <div className="space-y-3 pt-2">
        {/* Tipe PG (Single choice radio) */}
        {question.tipe === 'PG' && question.opsi && (
          <div className="space-y-2">
            {question.opsi.map((opsiText, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selected.includes(idx);
              const isCorrectKey = question.kunci.includes(idx);

              let optionStyle = 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/70 bg-white';
              if (showExplanation && isCorrectKey) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20';
              } else if (isSubmitted) {
                if (isSelected && isCorrectKey) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/80';
                } else if (isSelected && !isCorrectKey) {
                  optionStyle = 'border-rose-400 bg-rose-50/70';
                }
              } else if (isSelected) {
                optionStyle = 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handlePGClick(idx)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer select-none ${optionStyle}`}
                >
                  {/* Radio Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? isSubmitted && !isCorrectKey
                          ? 'border-rose-500 bg-rose-500 text-white'
                          : 'border-blue-600 bg-blue-600 text-white'
                        : showExplanation && isCorrectKey
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected || (showExplanation && isCorrectKey) ? (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    ) : null}
                  </div>

                  {/* Letter label and text */}
                  <div className="flex-1 text-slate-800">
                    <span className="font-bold mr-2 text-slate-600">{letter}.</span>
                    <MathRenderer content={opsiText} inline={true} />
                  </div>

                  {/* Status Indicator Badge */}
                  {showExplanation && isCorrectKey && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Kunci Jawaban
                    </span>
                  )}
                  {isSubmitted && isSelected && !isCorrectKey && (
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" />
                      Kurang Tepat
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tipe MCMA (Multiple choice checkboxes) */}
        {question.tipe === 'MCMA' && question.opsi && (
          <div className="space-y-2">
            <div className="text-xs text-slate-500 font-medium italic mb-1">
              * Centang semua pilihan yang benar (jawaban lebih dari satu).
            </div>
            {question.opsi.map((opsiText, idx) => {
              const isSelected = selected.includes(idx);
              const isCorrectKey = question.kunci.includes(idx);

              let optionStyle = 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/70 bg-white';
              if (showExplanation && isCorrectKey) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20';
              } else if (isSubmitted) {
                if (isSelected && isCorrectKey) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/80';
                } else if (isSelected && !isCorrectKey) {
                  optionStyle = 'border-rose-400 bg-rose-50/70';
                }
              } else if (isSelected) {
                optionStyle = 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleMCMAClick(idx)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer select-none ${optionStyle}`}
                >
                  {/* Custom Checkbox */}
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? isSubmitted && !isCorrectKey
                          ? 'border-rose-500 bg-rose-500 text-white'
                          : 'border-blue-600 bg-blue-600 text-white'
                        : showExplanation && isCorrectKey
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected || (showExplanation && isCorrectKey) ? (
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    ) : null}
                  </div>

                  <div className="flex-1 text-slate-800">
                    <MathRenderer content={opsiText} inline={true} />
                  </div>

                  {showExplanation && isCorrectKey && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Kunci
                    </span>
                  )}
                  {isSubmitted && isSelected && !isCorrectKey && (
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" />
                      Salah
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tipe KATEGORI (Statement table with 2 radio columns) */}
        {question.tipe === 'KATEGORI' && question.pernyataan && question.kolomKategori && (
          <div className="overflow-hidden border border-slate-200 rounded-xl bg-white shadow-xs">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-[#e8f1fc] text-blue-950 font-bold border-b border-blue-200">
                <tr>
                  <th className="py-3 px-4">Pernyataan</th>
                  <th className="py-3 px-3 text-center w-28 sm:w-36 text-blue-900">
                    {question.kolomKategori[0]}
                  </th>
                  <th className="py-3 px-3 text-center w-28 sm:w-36 text-blue-900">
                    {question.kolomKategori[1]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {question.pernyataan.map((statement, idx) => {
                  const userChoice = selected[idx]; // 0 or 1, or undefined/-1
                  const correctCol = question.kunci[idx]; // 0 or 1
                  const isRowAnswered = userChoice === 0 || userChoice === 1;
                  const isRowCorrect = userChoice === correctCol;

                  return (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        isSubmitted
                          ? isRowCorrect
                            ? 'bg-emerald-50/30'
                            : 'bg-rose-50/30'
                          : 'hover:bg-slate-50/60'
                      }`}
                    >
                      <td className="py-3 px-4 text-slate-800 leading-relaxed">
                        <span className="font-semibold mr-1.5 text-slate-500">{idx + 1}.</span>
                        <MathRenderer content={statement} inline={true} />
                      </td>

                      {/* Col 0 */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => handleKategoriChoice(idx, 0)}
                          className={`w-6 h-6 rounded-full border-2 inline-flex items-center justify-center transition-all ${
                            userChoice === 0
                              ? isSubmitted && correctCol !== 0
                                ? 'border-rose-500 bg-rose-500 text-white'
                                : 'border-blue-600 bg-blue-600 text-white'
                              : showExplanation && correctCol === 0
                              ? 'border-emerald-600 bg-emerald-100 ring-2 ring-emerald-500'
                              : 'border-slate-300 hover:border-slate-400 bg-white'
                          }`}
                        >
                          {userChoice === 0 ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-white" />
                          ) : showExplanation && correctCol === 0 ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                          ) : null}
                        </button>
                      </td>

                      {/* Col 1 */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => handleKategoriChoice(idx, 1)}
                          className={`w-6 h-6 rounded-full border-2 inline-flex items-center justify-center transition-all ${
                            userChoice === 1
                              ? isSubmitted && correctCol !== 1
                                ? 'border-rose-500 bg-rose-500 text-white'
                                : 'border-blue-600 bg-blue-600 text-white'
                              : showExplanation && correctCol === 1
                              ? 'border-emerald-600 bg-emerald-100 ring-2 ring-emerald-500'
                              : 'border-slate-300 hover:border-slate-400 bg-white'
                          }`}
                        >
                          {userChoice === 1 ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-white" />
                          ) : showExplanation && correctCol === 1 ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                          ) : null}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 7. Submission Result Banner */}
      {isSubmitted && (
        <div
          className={`p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm ${
            isCorrect
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-rose-50 border-rose-300 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
            )}
            <div>
              <span className="font-bold">
                {isCorrect ? 'Jawaban Kamu Tepat! (+1 Poin)' : 'Jawaban Kurang Tepat'}
              </span>
              <span className="block text-xs opacity-80 mt-0.5">
                {isCorrect
                  ? 'Bagus sekali! Pelajari langkah di papan tulis untuk memperdalam pemahaman.'
                  : 'Jangan berkecil hati, simak langkah pembahasan lengkap di papan tulis kanan.'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 8. Action Buttons (Periksa Jawaban & Lihat Pembahasan) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          {!isSubmitted ? (
            <button
              onClick={onSubmitAnswer}
              disabled={
                question.tipe === 'KATEGORI'
                  ? selected.length < (question.pernyataan?.length || 0) || selected.includes(-1)
                  : selected.length === 0
              }
              className={`px-4 py-2 font-bold text-xs sm:text-sm text-white rounded-xl shadow-xs transition-colors flex items-center gap-1.5 ${theme.accentBg} hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Periksa Jawaban</span>
            </button>
          ) : (
            <button
              onClick={() => {
                // Allow user to reset answer
                onAnswerChange([]);
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Ubah Jawaban
            </button>
          )}

          <button
            onClick={onToggleExplanation}
            className={`px-3.5 py-2 font-bold text-xs sm:text-sm rounded-xl border transition-colors flex items-center gap-1.5 ${
              showExplanation
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showExplanation ? 'Sembunyikan Pembahasan' : 'Lihat Kunci & Pembahasan'}</span>
          </button>
        </div>

        {/* Previous & Next question quick buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-700 disabled:opacity-30 rounded-xl transition-colors"
            title="Soal Sebelumnya"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-700 disabled:opacity-30 rounded-xl transition-colors"
            title="Soal Berikutnya"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 9. Step-by-Step Pembahasan Card */}
      {showExplanation && (
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
              <h4 className="font-bold text-xs sm:text-sm text-emerald-950">
                Kunci Jawaban & Pembahasan Lengkap
              </h4>
            </div>
            {question.penjelasanKunci && (
              <span className="text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                <MathRenderer content={question.penjelasanKunci} inline={true} />
              </span>
            )}
          </div>

          <div className="space-y-3">
            {question.pembahasan.map((stepText, idx) => {
              const isFirstStep = idx === 0;
              const isLastStep = idx === question.pembahasan.length - 1;

              let badgeText = `Langkah ${idx + 1}`;
              let badgeColor = 'bg-slate-100 text-slate-700 border-slate-300';
              let containerStyle = 'bg-slate-50 border-slate-200';

              if (isFirstStep) {
                badgeText = 'Diketahui / Analisis';
                badgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
                containerStyle = 'bg-blue-50/40 border-blue-200';
              } else if (isLastStep) {
                badgeText = 'Kesimpulan & Jawaban Akhir';
                badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
                containerStyle = 'bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-400/40 shadow-xs';
              }

              return (
                <div key={idx} className={`p-4 rounded-xl border text-xs sm:text-sm ${containerStyle}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                      {badgeText}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      #{idx + 1}
                    </span>
                  </div>
                  <div className="text-slate-800 leading-relaxed">
                    <MathRenderer content={stepText} inline={false} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;
