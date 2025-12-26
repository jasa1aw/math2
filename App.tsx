
import React, { useState, useMemo } from 'react';
import { QUESTIONS_BANK } from './questions';
import { QuizStatus, UserAnswer, Question } from './types';
import QuizHeader from './components/QuizHeader';

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
        !disabled ? 'hover:shadow-md' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
            isRevealed && isCorrect ? 'border-green-600 bg-green-600' : 
            isRevealed && isWrong ? 'border-red-600 bg-red-600' :
            isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
          }`}>
            {(isSelected || (isRevealed && isCorrect)) && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          <span className="font-medium text-lg">{text}</span>
        </div>
        {isRevealed && isCorrect && (
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </button>
  );
};

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);

  const currentQuizQuestions = useMemo(() => QUESTIONS_BANK.slice(0, 15), []);
  const currentQuestion = currentQuizQuestions[currentIndex];
  const progress = ((currentIndex) / currentQuizQuestions.length) * 100;

  const handleStart = () => {
    setStatus('active');
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setStreak(0);
  };

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
    if (currentIndex < currentQuizQuestions.length - 1) {
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
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-pointer">
            <span className="text-4xl font-black">?</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Discrete Math Trainer</h1>
          <p className="text-slate-600 text-lg mb-8">
            Learn propositional logic and sets with instant feedback. Perfect for fast memorization.
          </p>
          <button 
            onClick={handleStart}
            className="bg-indigo-600 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
          >
            Start Learning
          </button>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold text-sm flex items-center">
              <span className="mr-1">🔥</span> Streak: {streak}
            </div>
            <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-bold text-sm flex items-center">
              Score: {score}/{userAnswers.length}
            </div>
          </div>
          <span className="text-slate-400 font-medium">Question {currentIndex + 1}/{currentQuizQuestions.length}</span>
        </div>

        <QuizHeader 
          title="Logic & Sets Quiz" 
          progress={progress}
        />
        
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-6 transition-all">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
            {currentQuestion.text}
          </h2>
          
          <div className="grid gap-3 mb-8">
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
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Logic Breakdown:
              </h4>
              <p className="text-slate-600 leading-relaxed italic">
                {currentQuestion.explanation || "This is a fundamental concept in discrete mathematics. Review the definition for better understanding."}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-4">
          {!isAnswered ? (
            <button
              disabled={!selectedOptionId}
              onClick={handleSubmitAnswer}
              className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all ${
                selectedOptionId 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-lg flex items-center animate-bounce-subtle"
            >
              {currentIndex === currentQuizQuestions.length - 1 ? 'See Results' : 'Next Challenge'}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }

  if (status === 'completed') {
    const percentage = (score / currentQuizQuestions.length) * 100;
    return (
      <div className="max-w-2xl mx-auto pt-16 px-4 pb-20">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 text-center">
          <div className="text-6xl mb-4">
            {percentage === 100 ? '🥇' : percentage > 70 ? '🎉' : '📚'}
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Quiz Results</h1>
          <div className="text-5xl font-black text-indigo-600 mb-6">{Math.round(percentage)}%</div>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            You nailed {score} questions! {percentage < 100 ? "Use 'Review' below to look at the ones you missed." : "Perfect score! You're a logic master."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setStatus('review')}
              className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
            >
              Full Review
            </button>
            <button 
              onClick={handleStart}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Reuse the Review UI from the previous version, ensuring it still works with the new data
  if (status === 'review') {
    return (
      <div className="max-w-4xl mx-auto pt-10 px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Post-Quiz Analysis</h1>
          <button onClick={handleStart} className="text-indigo-600 font-bold hover:underline">Restart Quiz</button>
        </div>
        <div className="space-y-6">
          {currentQuizQuestions.map((q, idx) => {
            const userAnswer = userAnswers.find(a => a.questionId === q.id);
            const isCorrect = userAnswer?.isCorrect;
            const selectedOpt = q.options.find(o => o.id === userAnswer?.selectedOptionId);
            const correctOpt = q.options.find(o => o.id === q.correctOptionId);

            return (
              <div key={q.id} className="bg-white p-6 rounded-2xl shadow border border-slate-100 relative">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />
                <h3 className="text-lg font-bold text-slate-800 mb-4">{idx + 1}. {q.text}</h3>
                <div className="space-y-3">
                   <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <div className="text-xs font-bold uppercase mb-1">Your Answer</div>
                      <div>{selectedOpt?.text || "None"}</div>
                   </div>
                   {!isCorrect && (
                     <div className="p-4 rounded-xl bg-indigo-50 text-indigo-800">
                        <div className="text-xs font-bold uppercase mb-1">Correct Answer</div>
                        <div>{correctOpt?.text}</div>
                     </div>
                   )}
                   <div className="p-4 bg-slate-50 rounded-xl text-slate-600 text-sm">
                      <span className="font-bold block mb-1">Explanation:</span>
                      {q.explanation}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
            <button onClick={handleStart} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold">Try Again</button>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
