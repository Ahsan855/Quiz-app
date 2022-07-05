import React from "react";

const Question = ({
  handleAnswer,
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
        {CorrectAnswer?.map((answer) => (
          <button
            onClick={() => handleAnswer(answer)}
            className="w-1/2 p-4 bg-white text-purple-800 border-2 rounded-md m-2 shadow-md"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
