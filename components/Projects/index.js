import React from "react";
import Project from "./Project";
import Title from "../Utils/Title";

const Projects = ({ projects }) => {
  return (
    <div
      className="bg-project w-full h-fill py-[40px] px-6 md:h-[591px] md:px-20"
      id="projects"
    >
      <Title text={`Selected Projects`} />
      <div className="flex px-6 py-6 overflow-auto gap-x-4 scrollbar-hide">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            brief={project.brief}
            link={project.link}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
