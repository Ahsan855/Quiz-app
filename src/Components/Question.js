import React from "react";

const Button = ({ answer }) => (
  <button className="bg-white w-1/2 p-4 text-purple-800 border-2 rounded-md m-2 shadow-md">
    {answer}
  </button>
);
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
          className="text-4xl font-bold text-purple-500 bg-white mb-5 border-2 p-3 rounded-md"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <Button
          className={
            correct_answer === CorrectAnswer[0] ? "bg-success" : "bg-red-600"
          }
          onClick={() => handleAnswer(CorrectAnswer[0])}
          answer={CorrectAnswer[0]}
        />
        <Button
          className={
            correct_answer === CorrectAnswer[1] ? "bg-success" : "bg-red-600"
          }
          onClick={() => handleAnswer(CorrectAnswer[1])}
          answer={CorrectAnswer[1]}
        />
        <Button
          className={
            correct_answer === CorrectAnswer[2] ? "bg-success" : "bg-red-600"
          }
          onClick={() => handleAnswer(CorrectAnswer[2])}
          answer={CorrectAnswer[2]}
        />
        <Button
          className={
            correct_answer === CorrectAnswer[3] ? "bg-success" : "bg-red-600"
          }
          onClick={() => handleAnswer(CorrectAnswer[3])}
          answer={CorrectAnswer[3]}
        />
      </div>
    </div>
  );
};

export default Question;
