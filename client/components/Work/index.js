import React, { useEffect, useState } from "react";
import Title from "../Utils/Title";
import Job from "./Job";
import Rounder from "../Utils/Rounder";

const Work = ({ works }) => {
  return (
    <div
      className="bg-project w-full h-fit py-[32px] px-6 my-4 md:px-20"
      id="work"
    >
      <Title text={`Work Experience`} />
      <div className="md:flex">
        <div className="flex-col items-center justify-center mt-8 px-9 md:h-[35.5rem] md:overflow-auto left-scrollbar md:scrollbar scrollbar-track-slate-400 scrollbar-thumb-white scrollbar-thin">
          {works.data.map(function (item) {
            return (
              <Job
                title={item.attributes.title}
                key={item.id}
                description={item.attributes.description}
                start={item.attributes.start}
                end={item.attributes.end}
              />
            );
          })}
        </div>
        <Rounder />
      </div>
    </div>
  );
};

export default Work;
