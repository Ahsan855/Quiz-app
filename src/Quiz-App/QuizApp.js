import React, { useEffect, useState } from "react";
import Question from "../Components/Question";
const QUS_URL =
  "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy";

const Button = ({ answer }) => (
  <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2 shadow-md">
    {answer}
  </button>
);
const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch(QUS_URL)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);
  return questions.length > 0 ? (
    <div className="bg-blue-400 p-10">
      <Question data={questions[0]} />
    </div>
  ) : (
    <span className=" text-2xl p-4 mt-52 text-white bg-red-500  w-25 h-25 rounded-full border-2">
      Loading...
    </span>
  );
};

export default QuizApp;
