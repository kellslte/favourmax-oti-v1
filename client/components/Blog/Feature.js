import React from "react";
import Image from "next/image";
import { toBase64, shimmer } from "../../helpers";

const Feature = ({ image, title, content, link }) => {
  let blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;

  return (
    <div className="flex-none w-full border-2 border-projectColor h-fit md:w-[30rem]">
      <div className="w-full border-b border-projectColor">
        <Image
          src={image}
          placeholder={blurDataURL}
          width={`100%`}
          height={`65%`}
          layout={`responsive`}
          objectFit={`cover`}
        />
      </div>
      <div className="px-6 py-4">
        <h1 className="text-link font-monument text-xl leading-[2rem] my-5 font-extrabold">
          {title}
        </h1>
        <p className="my-4 font-lato text-projectColor text-md">{content}</p>
        <a
          href={link}
          className="flex items-center justify-between my-2 uppercase text-icon w-36"
        >
          Read More
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
        </a>
      </div>
    </div>
  );
};

export default Feature;
