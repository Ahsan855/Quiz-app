import React from "react";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("do validate");
  //     onKeyDown={handleKeyDown}
  //   }
  // };

  return (
    <div className="py-20">
      <div className="bg-blue-400 w-3/6 mx-auto p-20 rounded-md">
        <h1 className="text-center mb-10 text-4xl text-white font-bold">
          Keep going by clicking here
        </h1>
        <NavLink
          id="clickAndEnter"
          to="/quizApp"
          className="bg-white p-4 text-3xl font-bold text-purple-500 rounded-md"
        >
          Start Quiz
        </NavLink>
      </div>
    </div>
  );
};

export default Quiz;
