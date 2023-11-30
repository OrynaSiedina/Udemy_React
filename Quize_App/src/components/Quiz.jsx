import React from "react";
import QUESTIONS from "../questions";
import { useState,useCallback } from "react";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="quiz-complete" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  },[])

  const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer])
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
        key={activeQuestionIndex}
        TIMER={10000} 
        onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={(e) => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
