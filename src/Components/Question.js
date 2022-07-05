import React from "react";

const Question = ({
  handleAnswer,
  handleNextQuestions,
  handleSkipQuestions,
  showAnswers,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div>
      <div className="mt-10 w-3/4 mx-auto">
        <h1
          className="text-2xl text-purple-500 font-semibold bg-white mb-5 border-2 p-3 rounded-md"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        {answers?.map((answer, id) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500 font-semiblod text-xl"
              : "text-red-500 font-semiblod text-xl"
            : "text-purple-500 font-semiblod text-xl";

          return (
            <button
              key={id}
              onClick={() => handleAnswer(answer)}
              className={`w-1/2 p-4 bg-white ${textColor} rounded-md m-2 shadow-md`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}{" "}
        <br />
        <div className="grid grid-cols-2 mx-auto w-1/2">
          <div>
            <button
              onClick={handleSkipQuestions}
              className={`p-4 bg-red-700 text-white font-bold rounded-md m-2 shadow-md`}
            >
              Skip Question
            </button>
          </div>
          <div>
            {showAnswers && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestions}
                  className={`p-4 bg-green-700 text-white font-bold rounded-md m-2 shadow-md`}
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
