import React from "react";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="py-44 px-10 my-20 mx-44 bg-blue-400  rounded-full">
      <h1 className="text-center mb-10 text-4xl text-white font-bold">
        Keep going by clicking here
      </h1>
      <NavLink
        id="clickAndEnter"
        to="/quizApp"
        className="bg-white p-4 text-3xl font-bold text-purple-500 rounded-full"
      >
        Start Quiz
      </NavLink>
    </div>
  );
};

export default Quiz;
