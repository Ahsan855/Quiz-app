import React, { useEffect, useState } from "react";
import Question from "../Components/Question";
const QUS_URL =
  "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  useEffect(() => {
    fetch(QUS_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random()),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      // prevent double answers
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
    // const newIndex = currentIndex + 1
    // setCurrentIndex(newIndex)
  };
  const handleNextQuestions = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };
  return currentIndex >= questions?.length ? (
    <h1 className="text-4xl mt-20 text-purple-500 font-bold">
      YOO ! Your Score is {score} / {currentIndex}
    </h1>
  ) : questions.length > 0 ? (
    <div className="bg-blue-400 p-10">
      <Question
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}
        handleNextQuestions={handleNextQuestions}
        showAnswers={showAnswers}
      />
    </div>
  ) : (
    <h1 className=" text-2xl p-2 mt-52 text-white bg-red-500 w-28 mx-auto h-25 my-auto rounded-full border-2">
      Loading...
    </h1>
  );
};

export default QuizApp;
