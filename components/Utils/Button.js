import React from "react";

const Button = ({ title, link, icon }) => {
  return (
    <a
      className="border-icon border-2 py-8 px-8 text-center md:px-4 md:py-4 font-lato inline-flex font-semibold"
      href={link}
    >
      <span className="uppercase text-icon">{title}</span>
      <span className="pl-8 text-icon font-semibold">
        {icon ? (
          <img src={`${icon}`} />
        ) : (
          <svg
            className="w-6 h-6 rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            ></path>
          </svg>
        )}
      </span>
    </a>
  );
};

export default Button;
