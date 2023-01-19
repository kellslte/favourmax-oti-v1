import React from 'react'
import Title from '../Utils/Title';
import Job from "./Job"
import Data from "../data"

const Work = () => {
  
  const { work } = Data;

  return (
    <div className="bg-project w-full h-fit py-[32px] px-6 my-4">
      <Title text={`Work Experience`} />
      <div className="flex-col justify-center items-center px-9 mt-8">
        {
          work.map(function (item) {
            return (
              <Job title={`${item.title}`} duration={`${item.duration}`} description={`${item.description}`} />
            );
          })
       }
      </div>
    </div>
  );
}

export default Work