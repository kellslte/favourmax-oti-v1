import React from "react";

const DownArrow = () => {
  return (
    <div className="bg-base flex absolute -bottom-52">
      <span className="text-[#97A1AB] animate-bounce">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default DownArrow;
