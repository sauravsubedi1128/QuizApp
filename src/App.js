import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "What is the capital of Nepal?",
      options: [
        { id: 0, text: "Jhapa", isCorrect: false },
        { id: 1, text: "Biratnagar", isCorrect: false },
        { id: 2, text: "Pokhara", isCorrect: false },
        { id: 3, text: "Kathmandu", isCorrect: true },
      ],
    },
    {
      text: "When was constitution of Nepal promulgated?",
      options: [
        { id: 0, text: "2015", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the first president of the Nepal?",
      options: [
        { id: 0, text: "Ram Baran Yadav", isCorrect: true },
        { id: 1, text: "Bidya Devi Bhandari", isCorrect: false },
        { id: 2, text: "Jhalanath Khanal", isCorrect: false },
        { id: 3, text: "Ram Chandra Poudel", isCorrect: false },
      ],
    },
    {
      text: "What is the largest river in the Nepal?",
      options: [
        { id: 0, text: "Seti", isCorrect: false },
        { id: 1, text: "Koshi", isCorrect: true },
        { id: 2, text: "Karnali", isCorrect: false },
        { id: 3, text: "Bheri", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "Bhutan", isCorrect: true },
        { id: 2, text: "China", isCorrect: true },
        { id: 3, text: "Tibet", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };
  const reStartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      {/* Header */}
      <h1 className="font-bold">Quiz</h1>

      {/* Current Score */}
      <h2 className="font-bold">Current Score: {score}</h2>

      {showFinalResult ? (
        /* final result */
        <div className="m-auto bg-gray-400 p-4 text-white border-2 rounded-xl h-auto w-[50%]">
          <h1>Final result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%){" "}
          </h2>
          <button
            onClick={() => reStartGame()}
            className="bg-red-600 border-2 rounded-xl p-2 m-2"
          >
            Restart Game
          </button>
        </div>
      ) : (
        /* Question card */
        <div className="questionCard bg-gray-500 p-6 w-[80%] h-auto m-auto rounded-xl font-bold text-white">
          <h2>
            {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="text-blue-800 font-bold">
            {questions[currentQuestion].text}
          </h3>
          <div className="">
            <ul>
              {questions[currentQuestion].options.map((option) => (
                <li
                  className="border-2 m-2 rounded-xl bg-gray-400"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {" "}
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
