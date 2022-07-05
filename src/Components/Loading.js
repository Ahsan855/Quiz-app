import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <button
        type="button"
        className="bg-indigo-500 rounded-full ... text-white p-5"
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Wait Wait Wait...
      </button>
    </div>
  );
};

export default Loading;
