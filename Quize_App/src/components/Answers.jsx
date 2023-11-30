import React from 'react'
import { useRef } from "react";

const Answers = ({answers,selectedAnswer,answerState, onSelect}) => {
  const shuffledAnswers = useRef();
  
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(
      () => Math.random() - 0.5
    );
  }
  return (
    <ul id="answers">
    {shuffledAnswers.current.map((answer) => {
      const isSlelected = selectedAnswer === answer;
      let cssClass = "";
      if (answerState === "answered" && isSlelected) {
        cssClass = "selected";
      }
      if (
        (answerState === "correct" || answerState === "wrong") &&
        isSlelected
      ) {
        cssClass = answerState;
      }

      return (
        <li key={answer} className="answer">
          <button
            onClick={() => onSelect(answer)}
            className={cssClass}
            disabled={answerState !== ''}
          >
            {answer}
          </button>
        </li>
      );
    })}
  </ul>
  )
}

export default Answers
