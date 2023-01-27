import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { useRecoilState } from "recoil";
import { loadingState } from "../../state/loading";

const Blog = () => {
  const { data, isError, isLoading } = useFetchData("/api/v1/blog");

  return <div>Blog</div>;
};

export default Blog;
