import { Question } from '../types';
import { questionsBilangan } from './questions-bilangan';
import { questionsAljabar } from './questions-aljabar';
import { questionsGeometri } from './questions-geometri';
import { questionsDataPeluang } from './questions-data-peluang';

export const allQuestions: Question[] = [
  ...questionsBilangan,
  ...questionsAljabar,
  ...questionsGeometri,
  ...questionsDataPeluang,
];

export const elementRanges = [
  { name: 'Semua', range: '1–30', count: 30, color: 'blue' },
  { name: 'Bilangan', range: '1–5', count: 5, color: 'blue' },
  { name: 'Aljabar', range: '6–15', count: 10, color: 'purple' },
  { name: 'Geometri dan Pengukuran', range: '16–24', count: 9, color: 'teal' },
  { name: 'Data dan Peluang', range: '25–30', count: 6, color: 'orange' },
];

export const getElementTheme = (elemen: string) => {
  switch (elemen) {
    case 'Bilangan':
      return {
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        accentBg: 'bg-blue-600',
        accentText: 'text-blue-700',
        ringColor: 'ring-blue-500',
        borderActive: 'border-blue-500',
        lightBg: 'bg-blue-50/50',
      };
    case 'Aljabar':
      return {
        badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
        accentBg: 'bg-purple-600',
        accentText: 'text-purple-700',
        ringColor: 'ring-purple-500',
        borderActive: 'border-purple-500',
        lightBg: 'bg-purple-50/50',
      };
    case 'Geometri dan Pengukuran':
      return {
        badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
        accentBg: 'bg-teal-600',
        accentText: 'text-teal-700',
        ringColor: 'ring-teal-500',
        borderActive: 'border-teal-500',
        lightBg: 'bg-teal-50/50',
      };
    case 'Data dan Peluang':
      return {
        badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
        accentBg: 'bg-amber-600',
        accentText: 'text-amber-700',
        ringColor: 'ring-amber-500',
        borderActive: 'border-amber-500',
        lightBg: 'bg-amber-50/50',
      };
    default:
      return {
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        accentBg: 'bg-blue-600',
        accentText: 'text-blue-700',
        ringColor: 'ring-blue-500',
        borderActive: 'border-blue-500',
        lightBg: 'bg-blue-50/50',
      };
  }
};
