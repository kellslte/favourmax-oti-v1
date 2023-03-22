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
            I'm a backend developer with a knack for problem solving and
            creative thinking. I've been working in the IT field for over four
            years now, and I am always eager to learn new skills. I thrive on
            challenges, whether it's figuring out how to make a new system work
            or coming up with a new way to solve an old problem. I believe that
            it's important to be open-minded and creative when working with
            technology. In my experience, this allows me to think outside the
            box and come up with creative solutions that others might not have
            thought of.
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default About;
