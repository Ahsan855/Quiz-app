import React from "react";

const Question = ({
  handleAnswer,
  handleNextQuestions,
  showAnswers,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const CorrectAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <div className="mt-10 w-3/4 mx-auto">
        <h1
          className="text-2xl text-purple-500 font-semibold bg-white mb-5 border-2 p-3 rounded-md"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        {CorrectAnswer?.map((answer) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500 font-semiblod text-xl"
              : "text-red-500 font-semiblod text-xl"
            : "text-purple-500 font-semiblod text-xl";

          return (
            <button
              onClick={() => handleAnswer(answer)}
              className={`w-1/2 p-4 bg-white ${textColor} rounded-md m-2 shadow-md`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}{" "}
        <br />
        {showAnswers && (
          <div className="text-right mr-56">
            <button
              onClick={handleNextQuestions}
              className={`p-4 bg-purple-700 text-white font-bold rounded-md m-2 shadow-md`}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
