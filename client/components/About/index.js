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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quam
            dolorem fuga nulla natus obcaecati ex, in labore fugiat, veniam
            sunt, odio temporibus veritatis laudantium! Laboriosam nobis sint
            fugit repellat! Natus provident ratione corrupti sapiente quidem
            inventore praesentium quisquam odio aliquam. Modi, unde praesentium
            dicta reiciendis inventore error maxime dolorem. Laboriosam, tempore
            praesentium odit odio sed quis dolore nihil eligendi?
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default About;
