import React from "react";
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ).length;
  const skippedShare = Math.round((skippedAnswers / userAnswers.length) * 100);
  const correctShare = Math.round((correctAnswers / userAnswers.length) * 100);
  const incorrectShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={quizComplete} alt="quiz-complete" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{incorrectShare}%</span>
          <span className="text">incorect</span>
        </p>
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">skipped</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else {
            cssClass +=
              answer === QUESTIONS[index].answers[0] ? " correct" : " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skiped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
