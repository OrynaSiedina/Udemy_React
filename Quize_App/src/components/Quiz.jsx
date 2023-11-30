import React from "react";
import QUESTIONS from "../questions";
import { useState } from "react";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  function handleSelectAnswer(answer){
      setUserAnswer((prevUserAnswers)=>{
        return[...prevUserAnswers, answer]
      })
  }
  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={(e)=>handleSelectAnswer(answer)}>{answer}</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
