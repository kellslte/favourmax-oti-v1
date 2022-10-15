import Link from 'next/link';
import React from 'react'

const Project = ({ title, description, link}) => {
  return (
    <div className="project-sm flex-none md:project-md">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2667 19.7067L15.7067 22.72C15.8667 22.8667 16.12 22.8667 16.28 22.72L19.72 19.7067C20.6134 18.92 20.7334 17.5867 19.9867 16.6533C19.24 15.72 17.88 15.5467 16.9334 16.2667L16 16.9867L15.0534 16.28C14.0934 15.56 12.7467 15.7333 12 16.6667C11.2534 17.5867 11.3734 18.9333 12.2667 19.7067Z"
          stroke="#E3E5E8"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3334 14.6667V22.6667C29.3334 28 28 29.3333 22.6667 29.3333H9.33335C4.00002 29.3333 2.66669 28 2.66669 22.6667V9.33333C2.66669 4 4.00002 2.66667 9.33335 2.66667H11.3334C13.3334 2.66667 13.7734 3.25333 14.5334 4.26667L16.5334 6.93333C17.04 7.6 17.3334 8 18.6667 8H22.6667C28 8 29.3334 9.33333 29.3334 14.6667Z"
          stroke="#E3E5E8"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </svg>

      <h2 className="my-6 font-bolder text-2xl capitalize text-white font-monument">
        {title}
      </h2>

      <p className="my-6 text-projectColor font-lato">{description}</p>

      <Link href={link}>
        <span className="cursor-pointer flex uppercase font-lato text-icon">
          view project
          <span className="pl-6 text-icon font-semibold">
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
          </span>
        </span>
      </Link>
    </div>
  );
}

export default Project