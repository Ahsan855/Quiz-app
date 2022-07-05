import React from "react";

const Button = ({ answer }) => (
  <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2 shadow-md">
    {answer}
  </button>
);
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
        <Button answer={correct_answer} />

        <Button answer={incorrect_answers[0]} />

        <Button answer={incorrect_answers[1]} />

        <Button answer={incorrect_answers[2]} />
      </div>
    </div>
  );
};

export default Question;
