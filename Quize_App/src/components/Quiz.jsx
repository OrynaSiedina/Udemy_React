import React, { useRef } from "react";
import QUESTIONS from "../questions";
import { useState, useCallback } from "react";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  return quizIsCompleted ? (
    <div id="summary">
      <img src={quizComplete} alt="quiz-complete" />
      <h2>Quiz Complete!</h2>
    </div>
  ) : (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Quiz;
