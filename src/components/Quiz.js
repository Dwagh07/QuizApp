import React, { useEffect, useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./FinalScore";
function Quiz() {
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState(900);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const timeInMinutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes === 0 ? "" : minutes} ${minutes === 0 ? "" : "min"} 
    ${seconds === 0 ? "" : seconds} ${seconds === 0 ? "" : "sec"}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time !== 0) {
        setTime(time - 1);
      }
    }, [1000]);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      setShowResult(true);
    }
  }, [time]);

  return (
    <div>
      {showResult === false && (
        <span className="Timer">{timeInMinutes(time)}</span>
      )}

      <p className={modal ? "closeModal" : "heading-txt"}>Quiz Test</p>
      <div className={modal ? "container modalActive" : "container"}>
        {showResult ? (
          <QuizResult
            total={QuizData.length}
            score={score}
            modal={modal}
            setModal={setModal}
            setTime={time}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
