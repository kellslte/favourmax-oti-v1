import React, { useLayoutEffect, useRef, useState } from "react";
import indicator from "../../assets/loader.png";
import Image from "next/image";
import useInterval from "../../hooks/useInterval";


const Loader = ({loading, setLoading}) => {
  const [level, setLevel] = useState(0);
  const [width, setWidth] = useState(0);
  const [w, setW] = useState(0);
  const loaderContainer = useRef(null);
  
  useLayoutEffect(() => {
    setWidth(loaderContainer.current.offsetWidth);
  });
    
  useInterval(
    () => {
      if (level === 100) {
        setLoading(false);
      }
      setLevel(level + 10);
      setW(w + (width / 10));
    },
    1000,
    level
  );

  return (
    <div
      className={`flex flex-col justify-center items-center absolute top-0 w-screen h-screen bg-base ${
        !loading && "hidden"
      }`}
    >
      {/* Loader Text Will show up here */}
      <span className="text-center text-white uppercase mx-auto font-monument text-2xl font-extrabold mb-4">
        deploying {level}%
      </span>
      {/* Actual loader shows up here */}
      <div
        className="border-4 border-white h-8 w-2/4 md:w-3/4 lg:w-2/5 bg-gray-50 overflow-hidden items-start flex transition-all"
        ref={loaderContainer}
      >
        <Image
          src={indicator.src}
          width={`${w}`}
          height={`35%`}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Loader;
