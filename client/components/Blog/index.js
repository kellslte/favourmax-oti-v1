import React from "react";
import Title from "../Utils/Title";
import Data from "../data";
import Feature from "./Feature";
import { useRecoilState } from "recoil";
import { loadingState } from "../../state/loading";

const Blog = ({ data, text }) => {
  const { blog } = Data;
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <div
      className={`bg-base w-full h-fit py-8 my-4 ${
        loading && "hidden"
      } md:px-20`}
    >
      <Title text={text} />
      <div
        className={`flex px-6 py-6 my-4 overflow-x-auto gap-x-5 scrollbar-hide h-fit`}
      >
        {data.featured.map((post) => {
          return (
            <Feature
              key={post.id}
              title={post.title}
              link={post.link}
              content={post.content}
              image={post.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
