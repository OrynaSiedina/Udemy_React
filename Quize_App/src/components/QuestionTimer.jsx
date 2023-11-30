import React from "react";
import { useState, useEffect } from "react";
const QuestionTimer = ({ TIMER, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(TIMER);

  useEffect(() => {
    const timeout = setTimeout(onTimeout, TIMER);
    return () => {
      clearTimeout(timeout);
    };
  }, [TIMER, onTimeout]);

  useEffect(
    () => {
      const interval = setInterval(() => {
        setTimeLeft((prevState) => prevState - 100);
      }, 100);
     return () => {
      clearInterval(interval);
  } }, []);

  return <progress id="question-time" value={timeLeft} max={TIMER} />;
};

export default QuestionTimer;
