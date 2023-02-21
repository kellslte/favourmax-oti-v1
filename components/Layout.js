import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "./Utils/Loader";
import Blog from "../components/Blog";
import Footer from "../components/Utils/Footer";
import Conditional from "./Utils/Conditional";
import useFetchData from "../hooks/useFetchData";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  out: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  in: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  }
};

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const path = router.asPath;

  let text;

  path.startsWith("/blog") ? (text = "My other articles") : (text = "My Blog");

  return loading ? (
    <Loader loading={loading} setLoading={setLoading} />
  ) : (
    <AnimatePresence mode="wait">
        <motion.div
          variants={variants}
        initial={`in`}
        animate={`inactive`}
          exit={ `out` }
          key={path}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="h-screen overflow-x-hidden bg-base"
      >
        <Navbar />
        <main>{children}</main>
        {/* <Conditional showWhen={isLoading === false}>
          <Blog data={data} text={text} />
        </Conditional> */}
        <Footer />
        <div id="modal-root"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
