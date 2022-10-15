import React from 'react'
import Project from './Project'
import Title from '../Utils/Title'

const Projects = () => {
  return (
    <div className="bg-project w-full h-[28rem] pt-[32px] px-6 md:h-[591px]">
      <Title text={`Selected Projects`} />
      <div className="flex gap-x-4 py-6 px-6 overflow-auto scrollbar-hide">
        <Project
          title={`Super Drive`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.`}
          link={`Lorem base text`}
        />
        <Project
          title={`Super Drive`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.`}
          link={`Lorem base text`}
        />
        <Project
          title={`Super Drive`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.`}
          link={`Lorem base text`}
        />
        <Project
          title={`Super Drive`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.`}
          link={`Lorem base text`}
        />
        <Project
          title={`Super Drive`}
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam repellat dolore in veritatis autem ad qui error animi expedita velit ut.`}
          link={`Lorem base text`}
        />
      </div>
    </div>
  );
}

export default Projects