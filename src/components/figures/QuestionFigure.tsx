import React from 'react';
import {
  Soal1Formula,
  Soal2Vouchers,
  Soal3Cart,
  Soal4FruitsTable,
  Soal5FoodTemp,
} from './BilanganFigures';
import {
  Soal6Algebra,
  Soal7Arrows,
  Soal8WaterGraph,
  Soal9GardenMap,
  Soal10NumberLine,
  Soal11Snacks,
  Soal12Stationery,
  Soal13Notebook,
  Soal14BrickPattern,
} from './AljabarFigures';
import {
  Soal16IntersectingLines,
  Soal17PrismNet,
  Soal18ParallelTriangle,
  Soal19Stairs,
  Soal20CartesianTranslation,
  Soal21CircleSectors,
  Soal22SimilarRectangles,
  Soal23OilTanks,
} from './GeometriFigures';
import {
  Soal25RubberCoconut,
  Soal26ToryBarChart,
  Soal27ToryPhases,
  Soal28SakaKirana,
  Soal29EggIncubator,
  Soal30TeacherExam,
} from './DataPeluangFigures';

interface QuestionFigureProps {
  figureId: string;
}

export const QuestionFigure: React.FC<QuestionFigureProps> = ({ figureId }) => {
  switch (figureId) {
    case 'soal-1-formula':
      return <Soal1Formula />;
    case 'soal-2-vouchers':
      return <Soal2Vouchers />;
    case 'soal-3-cart':
      return <Soal3Cart />;
    case 'soal-4-fruits-table':
      return <Soal4FruitsTable />;
    case 'soal-5-food-temp':
      return <Soal5FoodTemp />;
    case 'soal-6-algebra':
      return <Soal6Algebra />;
    case 'soal-7-arrows':
      return <Soal7Arrows />;
    case 'soal-8-water-graph':
      return <Soal8WaterGraph />;
    case 'soal-9-garden-map':
      return <Soal9GardenMap />;
    case 'soal-10-number-line':
      return <Soal10NumberLine />;
    case 'soal-11-snacks':
      return <Soal11Snacks />;
    case 'soal-12-stationery':
      return <Soal12Stationery />;
    case 'soal-13-notebook':
      return <Soal13Notebook />;
    case 'soal-14-brick-pattern':
    case 'soal-15-brick-pattern':
      return <Soal14BrickPattern />;
    case 'soal-16-intersecting-lines':
      return <Soal16IntersectingLines />;
    case 'soal-17-prism-net':
      return <Soal17PrismNet />;
    case 'soal-18-parallel-triangle':
      return <Soal18ParallelTriangle />;
    case 'soal-19-stairs':
      return <Soal19Stairs />;
    case 'soal-20-cartesian-translation':
      return <Soal20CartesianTranslation />;
    case 'soal-21-circle-sectors':
      return <Soal21CircleSectors />;
    case 'soal-22-similar-rectangles':
      return <Soal22SimilarRectangles />;
    case 'soal-23-oil-tanks':
    case 'soal-24-oil-tanks':
      return <Soal23OilTanks />;
    case 'soal-25-rubber-coconut':
      return <Soal25RubberCoconut />;
    case 'soal-26-tory-bar-chart':
      return <Soal26ToryBarChart />;
    case 'soal-27-tory-phases':
      return <Soal27ToryPhases />;
    case 'soal-28-saka-kirana':
      return <Soal28SakaKirana />;
    case 'soal-29-egg-incubator':
      return <Soal29EggIncubator />;
    case 'soal-30-teacher-exam':
      return <Soal30TeacherExam />;
    default:
      return null;
  }
};
