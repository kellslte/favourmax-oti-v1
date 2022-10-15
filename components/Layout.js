import React from 'react'
import Navbar from "../components/Navbar";
import Loader from "./Utils/Loader";
import { useRecoilState } from "recoil";
import { loadingState } from "../state/loading";


const Layout = ({ children }) => {
  
  const [loading, setLoading] = useRecoilState(loadingState);
  return (
    <div className="bg-base h-screen overflow-x-hidden">
      <Loader loading={loading} setLoading={setLoading} />
      <Navbar loading={loading} />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout