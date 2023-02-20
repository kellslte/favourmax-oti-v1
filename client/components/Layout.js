import React from "react";
import Navbar from "../components/Navbar";
import Loader from "./Utils/Loader";
import Blog from "../components/Blog";
import Footer from "../components/Utils/Footer";
import { useRecoilState } from "recoil";
import { loadingState } from "../state/loading";
import Conditional from "./Utils/Conditional";
import useFetchData from "../hooks/useFetchData";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const { data, error, isLoading } = useFetchData("/api/v1/blog");
  const router = useRouter();

  const path = router.asPath;

  let text;

  path.startsWith("/blog") ? (text = "My other articles") : (text = "My Blog");

  return (
    <div className="h-screen overflow-x-hidden bg-base">
      <Loader loading={loading} setLoading={setLoading} />
      <Navbar loading={loading} />
      <main>{children}</main>
      {/* <Conditional showWhen={isLoading === false}>
        <Blog data={data} text={text} />
      </Conditional> */}
      <Footer loading={loading} />
      <div id="modal-root"></div>
    </div>
  );
};

export default Layout;
