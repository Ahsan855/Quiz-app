import React, { useEffect, useState } from "react";
import Question from "../Components/Question";
const QUS_URL =
  "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  useEffect(() => {
    fetch(QUS_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(currentIndex + 1);
    // we are check for a answer
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    if (newIndex >= questions?.length) {
      setGameEnded(true);
    }
  };
  return gameEnded ? (
    <h1 className="text-2xl text-purple-500 font-bold">
      Your Score was {score}
    </h1>
  ) : questions.length > 0 ? (
    <div className="bg-blue-400 p-10">
      <Question data={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <span className=" text-2xl p-4 mt-52 text-white bg-red-500  w-25 h-25 rounded-full border-2">
      Loading...
    </span>
  );
};

export default QuizApp;
