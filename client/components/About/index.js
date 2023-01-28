import Image from "next/image";
import React from "react";
import Title from "../Utils/Title";
import Socials from "./Socials";

const About = () => {
  return (
    <div className="w-full px-6 py-8 my-4 bg-base h-fit md:px-20">
      <Title text={`About Me`} />
      <div className="flex">
        <div className="rounded-lg ml-[40px]">
          {/* <Image src={`/images/me.jpg`} layout="fill" placeholder={`blur`} blurDataURL={``} /> */}
        </div>
        <div className="flex-col md:flex">
          <h1 className="text-link font-monument text-2xl leading-[2rem] my-8 font-extrabold">
            You can call me Max
          </h1>
          <p className="my-6 text-projectColor font-lato">
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
