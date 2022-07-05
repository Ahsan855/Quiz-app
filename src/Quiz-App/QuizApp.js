import React, { useEffect, useState } from "react";
import Question from "../Components/Question";
const QUS_URL =
  "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch(QUS_URL)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const handleAnswer = (answer) => {
    // we are check for a answer
  };
  return questions.length > 0 ? (
    <div className="bg-blue-400 p-10">
      <Question data={questions[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <span className=" text-2xl p-4 mt-52 text-white bg-red-500  w-25 h-25 rounded-full border-2">
      Loading...
    </span>
  );
};

export default QuizApp;
