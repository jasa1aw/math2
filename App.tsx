
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { QUESTIONS_BANK } from './questions';
import { QuizStatus, UserAnswer, Question, Option } from './types';
import QuizHeader from './components/QuizHeader';

// Utility to shuffle arrays
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const OptionButton: React.FC<{
  text: string;
  isSelected: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  isRevealed?: boolean;
  onClick: () => void;
  disabled?: boolean;
}> = ({ text, isSelected, isCorrect, isWrong, isRevealed, onClick, disabled }) => {
  let borderColor = 'border-slate-200';
  let bgColor = 'bg-white';
  let textColor = 'text-slate-700';

  if (isSelected && !isRevealed) {
    borderColor = 'border-indigo-600';
    bgColor = 'bg-indigo-50';
    textColor = 'text-indigo-700';
  } else if (isRevealed) {
    if (isCorrect) {
      borderColor = 'border-green-500';
      bgColor = 'bg-green-50';
      textColor = 'text-green-700';
    } else if (isWrong) {
      borderColor = 'border-red-500';
      bgColor = 'bg-red-50';
      textColor = 'text-red-700';
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${borderColor} ${bgColor} ${textColor} ${
        !disabled ? 'hover:scale-[1.01] hover:shadow-md' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
            isRevealed && isCorrect ? 'border-green-600 bg-green-600' : 
            isRevealed && isWrong ? 'border-red-600 bg-red-600' :
            isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
          }`}>
            {(isSelected || (isRevealed && isCorrect)) && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="font-medium text-lg">{text}</span>
        </div>
      </div>
    </button>
  );
};

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>('idle');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);

  // Initialize and shuffle everything
  const handleStart = useCallback(() => {
    // 1. Shuffle all questions
    const shuffledQ = shuffleArray(QUESTIONS_BANK).map(q => ({
      ...q,
      // 2. Shuffle options inside each question
      options: shuffleArray(q.options)
    }));
    
    setShuffledQuestions(shuffledQ);
    setStatus('active');
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setStreak(0);
  }, []);

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = ((currentIndex) / shuffledQuestions.length) * 100;

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswered) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
    };

    setUserAnswers(prev => [...prev, newAnswer]);
    setIsAnswered(true);
    
    if (isCorrect) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setStatus('completed');
    }
  };

  const score = userAnswers.filter(a => a.isCorrect).length;

  if (status === 'idle') {
    return (
      <div className="max-w-2xl mx-auto pt-20 px-4 text-center">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-6">
            <span className="text-5xl font-black">200</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Logic & Discrete Math</h1>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-sm mx-auto">
            Interactive trainer with all questions and options fully randomized every time.
          </p>
          <div className="space-y-4">
            <button 
              onClick={handleStart}
              className="w-full bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
            >
              Start Randomized Quiz
            </button>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              Questions & Answers are Shuffled
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'active' && currentQuestion) {
    return (
      <div className="max-w-3xl mx-auto pt-6 px-4 pb-24">
        <div className="flex justify-between items-center mb-6 bg-white/50 backdrop-blur p-3 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-4">
             <div className="flex items-center bg-orange-50 text-orange-600 px-4 py-1.5 rounded-xl font-bold border border-orange-100">
              <span className="mr-2 text-lg">🔥</span> {streak}
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="text-slate-600 font-bold">
              <span className="text-indigo-600">{score}</span> / {userAnswers.length} Correct
            </div>
          </div>
          <div className="text-slate-400 font-bold tabular-nums">
            {currentIndex + 1} of {shuffledQuestions.length}
          </div>
        </div>

        <QuizHeader title="Discrete Math Challenge" progress={progress} />
        
        <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 mb-6 relative group">
          <h2 className="text-2xl font-bold text-slate-800 mb-10 leading-[1.4] transition-colors">
            {currentQuestion.text}
          </h2>
          
          <div className="grid gap-4 mb-10">
            {currentQuestion.options.map(opt => {
              const isCorrect = opt.id === currentQuestion.correctOptionId;
              const isUserChoice = opt.id === selectedOptionId;
              
              return (
                <OptionButton 
                  key={opt.id}
                  text={opt.text}
                  isSelected={isUserChoice}
                  isRevealed={isAnswered}
                  isCorrect={isAnswered && isCorrect}
                  isWrong={isAnswered && isUserChoice && !isCorrect}
                  disabled={isAnswered}
                  onClick={() => setSelectedOptionId(opt.id)}
                />
              );
            })}
          </div>

          {isAnswered && (
            <div className="animate-in slide-in-from-top-4 fade-in duration-500 bg-indigo-50/50 p-6 rounded-[1.5rem] border-2 border-indigo-100">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center mr-3 font-bold">!</div>
                <h4 className="font-bold text-indigo-900 text-lg">Quick Memory Hack:</h4>
              </div>
              <p className="text-indigo-800 leading-relaxed font-medium">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center px-2">
           <button 
             onClick={() => setStatus('idle')}
             className="text-slate-400 font-bold hover:text-slate-600 transition-colors"
           >
             Exit Quiz
           </button>
          
          {!isAnswered ? (
            <button
              disabled={!selectedOptionId}
              onClick={handleSubmitAnswer}
              className={`px-12 py-5 rounded-[1.25rem] font-black text-lg transition-all ${
                selectedOptionId 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-100 active:scale-95' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-slate-900 text-white px-12 py-5 rounded-[1.25rem] font-black text-lg hover:bg-black shadow-xl transition-all flex items-center active:scale-95"
            >
              {currentIndex === shuffledQuestions.length - 1 ? 'Finish' : 'Keep Going'}
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }

  if (status === 'completed') {
    const percentage = (score / shuffledQuestions.length) * 100;
    return (
      <div className="max-w-2xl mx-auto pt-16 px-4 pb-20">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-3 bg-indigo-600" />
          <div className="text-7xl mb-6">
            {percentage === 100 ? '👑' : percentage > 80 ? '⭐' : '📖'}
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">Final Mastery</h1>
          <div className="text-6xl font-black text-indigo-600 mb-8 tracking-tighter">{Math.round(percentage)}%</div>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <div className="text-slate-400 text-xs font-bold uppercase mb-1">Correct</div>
              <div className="text-2xl font-black text-slate-800">{score}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <div className="text-slate-400 text-xs font-bold uppercase mb-1">Attempted</div>
              <div className="text-2xl font-black text-slate-800">{shuffledQuestions.length}</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleStart}
              className="bg-indigo-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
            >
              New Shuffled Session
            </button>
            <button 
              onClick={() => setStatus('review')}
              className="text-slate-500 font-bold hover:text-indigo-600 py-2"
            >
              Review Mistakes
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'review') {
    return (
      <div className="max-w-4xl mx-auto pt-10 px-4 pb-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900">Analysis</h1>
            <p className="text-slate-500 font-medium text-lg">Detailed logic breakdown</p>
          </div>
          <button 
            onClick={handleStart}
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700"
          >
            Play Again
          </button>
        </div>
        
        <div className="space-y-6">
          {shuffledQuestions.map((q, idx) => {
            const userAnswer = userAnswers.find(a => a.questionId === q.id);
            if (!userAnswer) return null;
            const isCorrect = userAnswer.isCorrect;
            const selectedOpt = q.options.find(o => o.id === userAnswer.selectedOptionId);
            const correctOpt = q.options.find(o => o.id === q.correctOptionId);

            return (
              <div key={q.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-2 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />
                <div className="flex gap-6">
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 leading-relaxed">{q.text}</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className={`p-5 rounded-2xl border-2 ${isCorrect ? 'bg-green-50/50 border-green-100 text-green-800' : 'bg-red-50/50 border-red-100 text-red-800'}`}>
                        <div className="text-[10px] font-black uppercase mb-1 tracking-widest opacity-60">Your Choice</div>
                        <div className="font-bold text-lg">{selectedOpt?.text || "Not answered"}</div>
                      </div>
                      {!isCorrect && (
                        <div className="p-5 rounded-2xl bg-indigo-50 border-2 border-indigo-100 text-indigo-800">
                          <div className="text-[10px] font-black uppercase mb-1 tracking-widest opacity-60 text-indigo-400">Correct Answer</div>
                          <div className="font-bold text-lg">{correctOpt?.text}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                        <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Logic Reminder</span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed italic">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default App;
