import React, { useEffect } from "react";
import Project from "./Project";
import Title from "../Utils/Title";
import Popup from "../Utils/Popup";
import { atom, useRecoilState } from "recoil";

const projectId = atom({
  key: "projectId",
  default: null,
});

const loading = atom({
  key: "loading",
  default: false,
});

const projects = atom({
  key: "projects",
  default: [],
});

const modalOpen = atom({
  key: "modalOpen",
  default: false,
});

const Projects = () => {
  const [projectsData, setProjectsData] = useRecoilState(projects);
  const [isLoading, setIsLoading] = useRecoilState(loading);
  const [showModal, setShowModal] = useRecoilState(modalOpen);
  const [projectKey, setProjectKey] = useRecoilState(projectId);

  const loadData = async () => {
    setIsLoading(true);
    const res = await fetch("/api/v1/projects");

    const { data } = await res.json();

    setProjectsData(data.projects);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-project w-full h-fill pt-[32px] px-6 md:h-[591px]">
      <Title text={`Selected Projects`} />
      <div className="flex px-6 py-6 overflow-auto gap-x-4 scrollbar-hide">
        {!isLoading &&
          projectsData.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              showModal={showModal}
              setShowModal={setShowModal}
              setProjectKey={setProjectKey}
            />
          ))}
      </div>
      {showModal && (
        <Popup id={projectId} isOpen={showModal} setIsOpen={setShowModal} />
      )}
    </div>
  );
};

export default Projects;
