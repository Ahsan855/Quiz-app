import React from "react";
import { NavLink } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="p-40 bg-black">
      <NavLink
        to="/quizApp"
        className="bg-white p-2 text-2xl font-bold text-purple-500 rounded-md"
      >
        Start Quiz
      </NavLink>
    </div>
  );
};

export default Quiz;
