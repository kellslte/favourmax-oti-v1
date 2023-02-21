import React, { useState } from "react";
import { useRouter } from "next/router";
import Audio from "../../components/Utils/Audio";
import Social from "../../components/Utils/Social";
import Title from "../../components/Utils/Title";
import Article from "../../components/Blog/Article";
import Conditional from "../../components/Utils/Conditional";
import useFetchData from "../../hooks/useFetchData";

const BlogArticle = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;
  let url = `http://localhost:3000${router.asPath}`;

  const { data, error, isLoading } = useFetchData(
    `/api/v1/blog/articles/${slug}`
  );

  return (
    <Conditional showWhen={isLoading == false}>
      <Article data={data} url={url} loading={loading} />
    </Conditional>
  );
};

export default BlogArticle;
