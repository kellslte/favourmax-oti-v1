import Image from "next/image";
import React from "react";
import Title from "../Utils/Title";
import Socials from "./Socials";
import { toBase64, shimmer } from "../../helpers";

const About = () => {
  const blurDataURL = `data:image/svg+xml;base64,${toBase64(
    shimmer(700, 475)
  )}`;

  return (
    <div className="w-full px-6 py-8 my-4 bg-base h-fit md:px-20">
      <Title text={`About Me`} />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="image-wrapper order-first md:w-1/3 pt-4 w-full hover:animate-pulse">
          <Image
            src={`/images/me.png`}
            width={820}
            height={824}
            placeholder={`blur`}
            blurDataURL={`${blurDataURL}`}
            className={`rounded-lg object-contain mt-4`}
            quality={70}
          />
        </div>
        <div className="flex-col md:flex order-last md:w-2/3 w-full md:ml-8">
          <h1 className="text-link font-monument text-2xl leading-[2rem] my-8 font-extrabold">
            You can call me Max
          </h1>
          <p className="my-6 text-projectColor font-lato md:w-2/3 w-full">
            I am a development driven software developer. I love learning new
            technologies that could make my work better. This drive takes me on
            a learning journey to always learn how best my work can be done. So
            you will find me trying out new technologies, reading or giving a
            speech. Much of my time is spent writing code, breaking it and
            fixing it up!
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default About;
