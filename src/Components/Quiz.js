import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../image/undraw_Quiz_re_aol4 (1).png";

const Quiz = () => {
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("do validate");
  //     onKeyDown={handleKeyDown}
  //   }
  // };

  return (
    <div className="px-20 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <img src={image1} alt="" />
      </div>
      <div className="bg-blue-400 w-3/6 h-3/6 my-auto p-16 rounded-md">
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
