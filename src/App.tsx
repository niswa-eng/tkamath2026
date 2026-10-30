import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigator } from './components/Navigator';
import { QuestionPanel } from './components/QuestionPanel';
import { Chalkboard } from './components/Chalkboard';
import { ResultPage } from './components/ResultPage';
import { allQuestions } from './data';
import { UserAnswer } from './types';

const STORAGE_KEY_ANSWERS = 'tka_matematika_2026_answers_v1';
const STORAGE_KEY_LAST_NO = 'tka_matematika_2026_last_no_v1';

export function App() {
  // Read last visited question number from localStorage
  const [currentNo, setCurrentNo] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LAST_NO);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 1 && parsed <= 30) return parsed;
      }
    } catch (e) {
      console.warn('LocalStorage error reading last question', e);
    }
    return 1;
  });

  // Read saved answers from localStorage
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage error reading answers', e);
    }
    return {};
  });

  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [isProjectorMode, setIsProjectorMode] = useState<boolean>(false);
  const [showResultPage, setShowResultPage] = useState<boolean>(false);

  // Sync current question to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LAST_NO, currentNo.toString());
    } catch (e) {
      console.warn('LocalStorage error saving current question', e);
    }
  }, [currentNo]);

  // Sync user answers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(userAnswers));
    } catch (e) {
      console.warn('LocalStorage error saving answers', e);
    }
  }, [userAnswers]);

  const currentQuestion = allQuestions.find((q) => q.no === currentNo) || allQuestions[0];
  const currentUserAnswer = userAnswers[currentNo];

  // Calculate live statistics
  const answeredCount = Object.values(userAnswers).filter((a) => a.isSubmitted).length;
  const score = Object.values(userAnswers).filter((a) => a.isSubmitted && a.isCorrect).length;

  // Handle option selection changes before submission
  const handleAnswerChange = (selected: number[]) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentNo]: {
        selected,
        isSubmitted: false,
      },
    }));
  };

  // Submit and verify answer for current question
  const handleSubmitAnswer = () => {
    const ans = userAnswers[currentNo];
    if (!ans || ans.selected.length === 0) return;

    let isCorrect = false;

    if (currentQuestion.tipe === 'PG') {
      isCorrect = ans.selected[0] === currentQuestion.kunci[0];
    } else if (currentQuestion.tipe === 'MCMA') {
      const sortedSelected = [...ans.selected].sort((a, b) => a - b);
      const sortedKey = [...currentQuestion.kunci].sort((a, b) => a - b);
      isCorrect =
        sortedSelected.length === sortedKey.length &&
        sortedSelected.every((val, idx) => val === sortedKey[idx]);
    } else if (currentQuestion.tipe === 'KATEGORI') {
      isCorrect =
        ans.selected.length === currentQuestion.kunci.length &&
        ans.selected.every((val, idx) => val === currentQuestion.kunci[idx]);
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentNo]: {
        ...ans,
        isSubmitted: true,
        isCorrect,
      },
    }));

    // Auto open explanation on submission so student can see full solution
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentNo < 30) {
      setCurrentNo((prev) => prev + 1);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentNo > 1) {
      setCurrentNo((prev) => prev - 1);
      setShowExplanation(false);
    }
  };

  const handleSelectQuestion = (no: number, autoOpenExplanation: boolean = false) => {
    setCurrentNo(no);
    setShowExplanation(autoOpenExplanation);
    setShowResultPage(false);
  };

  const handleResetAll = () => {
    setUserAnswers({});
    setCurrentNo(1);
    setShowExplanation(false);
    setShowResultPage(false);
    try {
      localStorage.removeItem(STORAGE_KEY_ANSWERS);
      localStorage.removeItem(STORAGE_KEY_LAST_NO);
    } catch (e) {
      console.warn('LocalStorage clear error', e);
    }
  };

  const handleRetryWrongOnly = () => {
    const updated: Record<number, UserAnswer> = {};
    let firstWrongNo: number | null = null;

    allQuestions.forEach((q) => {
      const ans = userAnswers[q.no];
      if (ans && ans.isSubmitted && ans.isCorrect) {
        updated[q.no] = ans;
      } else {
        if (firstWrongNo === null) {
          firstWrongNo = q.no;
        }
      }
    });

    setUserAnswers(updated);
    if (firstWrongNo !== null) {
      setCurrentNo(firstWrongNo);
    }
    setShowExplanation(false);
    setShowResultPage(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800">
      {/* App Header */}
      <Header
        currentNo={currentNo}
        totalQuestions={30}
        answeredCount={answeredCount}
        score={score}
        onOpenResults={() => setShowResultPage(true)}
        onResetProgress={handleResetAll}
        isProjectorMode={isProjectorMode}
        onToggleProjector={() => setIsProjectorMode(!isProjectorMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 lg:p-6 space-y-4">
        {showResultPage ? (
          <ResultPage
            userAnswers={userAnswers}
            onClose={() => setShowResultPage(false)}
            onSelectQuestion={handleSelectQuestion}
            onResetAll={handleResetAll}
            onRetryWrongOnly={handleRetryWrongOnly}
          />
        ) : (
          <>
            {/* Element Filter & Question Navigation Grid (Top) */}
            <Navigator
              currentNo={currentNo}
              onSelectNo={(no) => {
                setCurrentNo(no);
                setShowExplanation(false);
              }}
              userAnswers={userAnswers}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              onNext={handleNext}
              onPrev={handlePrev}
            />

            {/* Two-Column Workspace Layout (Desktop: ±50% split, Mobile: stacked) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
              {/* Left Column: Hierarki Indikator, Teks Soal, Gambar, Pilihan Jawaban */}
              <div className="w-full">
                <QuestionPanel
                  question={currentQuestion}
                  userAnswer={currentUserAnswer}
                  onAnswerChange={handleAnswerChange}
                  onSubmitAnswer={handleSubmitAnswer}
                  onToggleExplanation={() => setShowExplanation(!showExplanation)}
                  showExplanation={showExplanation}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  isFirst={currentNo === 1}
                  isLast={currentNo === 30}
                  isProjectorMode={isProjectorMode}
                />
              </div>

              {/* Right Column: Papan Tulis Digital (Clean blank chalkboard for student & teacher calculations) */}
              <div className="w-full lg:sticky lg:top-20">
                <Chalkboard questionNo={currentNo} />
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Latihan Soal TKA Matematika SMP/MTs 2026 — 30 Soal Lengkap Sesuai Kisi-Kisi Resmi</span>
          <span className="text-slate-400">Pembahasan Interaktif & Coretan Bebas</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
