import React from 'react'

const Job = ({ title, duration, description, site }) => {
  
  let jobDescription = description.split(",");

  return (
    <div className="my-4">
      <div className="w-fit h-fit">
        <h1 className="text-monument text-white text-xl font-extrabold flex">
          <span className="mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 15.1667C11.8403 15.1667 13.3327 13.6743 13.3327 11.8333C13.3327 9.99238 11.8403 8.5 9.99935 8.5C8.1584 8.5 6.66602 9.99238 6.66602 11.8333C6.66602 13.6743 8.1584 15.1667 9.99935 15.1667Z"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.69922 11.9167L9.24089 12.4583C9.39922 12.6167 9.65755 12.6167 9.81589 12.4667L11.2992 11.1"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66734 18.3333H13.334C16.684 18.3333 17.284 16.9917 17.459 15.3583L18.084 8.69167C18.309 6.65833 17.7257 5 14.1673 5H5.834C2.27567 5 1.69234 6.65833 1.91734 8.69167L2.54234 15.3583C2.71734 16.9917 3.31734 18.3333 6.66734 18.3333Z"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66602 5V4.33333C6.66602 2.85833 6.66602 1.66667 9.33268 1.66667H10.666C13.3327 1.66667 13.3327 2.85833 13.3327 4.33333V5"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0418 9.16667C16.6001 10.2167 15.0001 10.95 13.3418 11.3667"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.18359 9.39167C3.57526 10.3417 5.09193 11.0167 6.66693 11.4"
                stroke="#E3E5E8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="mx-3">{title}</span>
          <span>{duration}</span>
        </h1>
      </div>
      <ul className='list-disc pl-16'>
        {jobDescription.map((item) => (
          <li className="font-lato text-projectColor my-4 text-md">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Job