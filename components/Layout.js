import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "./Utils/Loader";
import Blog from "../components/Blog";
import Footer from "../components/Utils/Footer";
import Conditional from "./Utils/Conditional";
import useFetchData from "../hooks/useFetchData";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const path = router.asPath;

  let text;

  path.startsWith("/blog") ? (text = "My other articles") : (text = "My Blog");

  return loading
    ?
    <Loader loading={ loading } setLoading={ setLoading } />
    :
    <motion.div
      initial={ { x: 300, opacity: 0 } }
      animate={ { x: 0, opacity: 1 } }
      exit={ { x: 300, opacity: 0 } }
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-screen overflow-x-hidden bg-base">
      <Navbar />
      <main>{children}</main>
      {/* <Conditional showWhen={isLoading === false}>
        <Blog data={data} text={text} />
      </Conditional> */}
      <Footer />
      <div id="modal-root"></div>
    </motion.div>
};

export default Layout;
