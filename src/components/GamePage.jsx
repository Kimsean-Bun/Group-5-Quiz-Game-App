import React, { useState, useEffect } from "react";

function GamePage({ questionData, user, onNextQuestion }) {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [isCorrect, setIsCorrect] = useState(null);

  const { id, question, options, correctAnswer } = questionData;

  // Timer countdown
  useEffect(() => {
    if (timer <= 0) {
      handleSubmit();
      return
    };
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSubmit = () => {
    const userAnswer = answer.trim().toLowerCase();
    const correct = userAnswer === correctAnswer.toLowerCase();
    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);

    setTimeout(() => {
      setAnswer("");
      setIsCorrect(null);
      setTimer(10);
      onNextQuestion();
    }, 1000);
  };

  return (
    <div className="app-container">
      {/* HEADER */}
      <div className="header-container">
        <div className="title">Game Page (SPA)</div>
        <div className="timer">Timer: {timer}s</div>
      </div>

      {/* SCORE DISPLAY */}
      <div className="home-container" style={{ backgroundColor: "#FFE0B2" }}>
        <h2>Your Score: {score}</h2>
      </div>

      {/* QUESTION BOX */}
      <div
        className="description-container"
        style={{ backgroundColor: "#FFC58C" }}
      >
        <p>
          Question by: <b>{user}</b>
        </p>
        <h2>
          QUESTION {id}: {question}
        </h2>
      </div>

      {/* OPTIONS */}
      <div className="radio-container">
        {options.map((opt, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => setAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* INPUT AREA */}
      <div className="form-container" style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Input your answer here..."
          className="input-box"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <button
          className="solid-circle"
          style={{
            backgroundColor:
              isCorrect === null
                ? "#8EFF8E"
                : isCorrect
                ? "#00FF00"
                : "#FF5C5C",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default GamePage;
