import React, { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

const projectData = atom({
  key: "projectData",
  default: {},
});

const Popup = ({ id, isOpen, setIsOpen }) => {
  const [project, setProject] = useRecoilState(projectData);

  const fetchData = async () => {
    const res = await fetch(`/api/v1/projects/${id}`);

    const { data } = await res.json();

    setProject(data.project);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Popup;
