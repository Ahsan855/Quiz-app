import React from "react";

const Question = ({
  data: { question, correct_answer, incorrect_answers },
}) => {
  return (
    <div>
      <div className="mt-10 w-3/4 mx-auto">
        <h1
          className="text-4xl font-bold text-purple-500 bg-white mb-5 border-2 p-3 rounded-md"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2">
          {correct_answer}
        </button>
        <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2">
          {incorrect_answers[0]}
        </button>
        <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2">
          {incorrect_answers[1]}
        </button>
        <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2">
          {incorrect_answers[2]}
        </button>
      </div>
    </div>
  );
};

export default Question;
