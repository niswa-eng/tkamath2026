import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { UserAnswer } from '../types';
import { elementRanges } from '../data';

interface NavigatorProps {
  currentNo: number;
  onSelectNo: (no: number) => void;
  userAnswers: Record<number, UserAnswer>;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigator: React.FC<NavigatorProps> = ({
  currentNo,
  onSelectNo,
  userAnswers,
  selectedFilter,
  onFilterChange,
  onNext,
  onPrev,
}) => {
  // Determine question numbers to show based on filter
  const getFilteredNumbers = () => {
    switch (selectedFilter) {
      case 'Bilangan':
        return Array.from({ length: 5 }, (_, i) => i + 1); // 1-5
      case 'Aljabar':
        return Array.from({ length: 10 }, (_, i) => i + 6); // 6-15
      case 'Geometri dan Pengukuran':
        return Array.from({ length: 9 }, (_, i) => i + 16); // 16-24
      case 'Data dan Peluang':
        return Array.from({ length: 6 }, (_, i) => i + 25); // 25-30
      default:
        return Array.from({ length: 30 }, (_, i) => i + 1); // 1-30
    }
  };

  const filteredNos = getFilteredNumbers();

  const getButtonStateClass = (no: number) => {
    const isCurrent = currentNo === no;
    const ans = userAnswers[no];

    let base = 'font-bold transition-all relative flex items-center justify-center ';

    if (isCurrent) {
      base += 'ring-3 ring-blue-500 scale-105 z-10 ';
    }

    if (!ans || !ans.isSubmitted) {
      if (ans && ans.selected.length > 0) {
        // Answer selected but not yet submitted
        return base + 'bg-blue-100 text-blue-900 border border-blue-300';
      }
      return base + 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50';
    }

    if (ans.isCorrect) {
      return base + 'bg-emerald-600 text-white border border-emerald-700 shadow-2xs';
    } else {
      return base + 'bg-rose-500 text-white border border-rose-600 shadow-2xs';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
      {/* 1. Element Filter Segmented Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold no-scrollbar">
        {elementRanges.map((el) => {
          const isActive = selectedFilter === el.name;
          return (
            <button
              key={el.name}
              onClick={() => onFilterChange(el.name)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>{el.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {el.range}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Number Grid 1 - 30 */}
      <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-10 gap-1.5 pt-1">
        {filteredNos.map((no) => {
          const ans = userAnswers[no];
          return (
            <button
              key={no}
              onClick={() => onSelectNo(no)}
              className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm ${getButtonStateClass(no)}`}
              title={`Soal No. ${no}`}
            >
              <span>{no}</span>
              {ans?.isSubmitted && (
                <span className="absolute -top-1 -right-1">
                  {ans.isCorrect ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-200 fill-emerald-700" />
                  ) : (
                    <XCircle className="w-3 h-3 text-rose-200 fill-rose-700" />
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3. Navigation Controls and Status Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-600">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-md border border-slate-300 bg-white inline-block" />
            <span>Belum</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-md bg-blue-100 border border-blue-300 inline-block" />
            <span>Dipilih</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-md bg-emerald-600 inline-block" />
            <span>Benar</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-md bg-rose-500 inline-block" />
            <span>Salah</span>
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onPrev}
            disabled={currentNo === 1}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 text-xs transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>
          <button
            onClick={onNext}
            disabled={currentNo === 30}
            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 text-xs transition-colors"
          >
            <span>Berikutnya</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
