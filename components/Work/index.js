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
          {works.map(function (item) {
            return (
              <Job
                key={item.id}
                title={ item.company }
                role={item.role}
                description={item.description}
                start={item.start}
                end={ item.end }
                url={ item.url }
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
