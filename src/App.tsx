import { useMemo, useState } from 'react'
import './App.css'
import { quizQuestions, travelResults } from './quiz/quizData'
import { createInitialScores, getTopTravelStyle, updateScores, isQuizFinished } from './quiz/quizLogic'
import type { ScoreMap, TravelStyle } from './quiz/quizTypes'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<ScoreMap>(createInitialScores());
  const [started, setStarted] = useState<boolean>(false);

  const isFinished = useMemo(() => 
    isQuizFinished(currentQuestionIndex, quizQuestions),
    [currentQuestionIndex]
  );

  const topStyle = useMemo(() => {
    if (!isFinished) return null;
    return getTopTravelStyle(scores);
  }, [isFinished, scores]);

  const result = topStyle ? travelResults[topStyle] : null;

  function handleStartQuiz(): void {
    setScores(createInitialScores());
    setCurrentQuestionIndex(0);
    setStarted(true);
  }

  function handleAnswer(selectedStyle: TravelStyle): void {
    try {
      if (!selectedStyle) throw new Error('No travel style selected.');
      setScores(currentScores => updateScores(currentScores, selectedStyle));
      setCurrentQuestionIndex(currentIndex => currentIndex + 1);
    } catch (error) {
      console.error('Error handling answer:', error);
      alert('An error occurred while saving your answer. Please try again.');
    }
  }

  function handleRestart(): void {
    setScores(createInitialScores());
    setCurrentQuestionIndex(0);
    setStarted(false);
  }

  if (!started) {
    return (
      <main className="app-shell">
        <section className="card">
          <h1>What's Your Travel Style?</h1>
          <p>Answer a few fun questions and find out what kind of traveler you are!</p>
          <button className="primary-btn" onClick={handleStartQuiz}>Start Quiz</button>
        </section>
      </main>
    );
  }

  if (isFinished && result) {
    return (
      <main className="app-shell">
        <section className="card">
          <h1>Your Travel Style: {result.title}</h1>
          <p>{result.description}</p>

          <div className="score-box">
            <h3>Score Breakdown</h3>
            <ul>
              {Object.entries(scores).map(([style, score]) => (
                <li key={style}>{style}: {score}</li>
              ))}
            </ul>
          </div>

          <button className="primary-btn" onClick={handleRestart}>Retake Quiz</button>
        </section>
      </main>
    );
  }

  const question = quizQuestions[currentQuestionIndex];

  return (
    <main className="app-shell">
      <section className="card">
        <p className="progress">Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
        <h2>{question.prompt}</h2>


        <div className="options">
          {question.options.map((option, index) => (
            <button 
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(option.style)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App
