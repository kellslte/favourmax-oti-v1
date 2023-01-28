import React, { useEffect, useState } from "react";
import Title from "../Utils/Title";
import Job from "./Job";
import Rounder from "../Utils/Rounder";

const Work = () => {
  const [jobs, setJobs] = useState([]);

  const loadJobs = async () => {
    const res = await fetch("http://localhost:1337/api/works");

    const { data } = await res.json();

    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div
      className="bg-project w-full h-fit py-[32px] px-6 my-4 md:px-20"
      id="work"
    >
      <Title text={`Work Experience`} />
      <div className="md:flex">
        <div className="flex-col items-center justify-center mt-8 px-9">
          {jobs &&
            jobs.map(function (item) {
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
