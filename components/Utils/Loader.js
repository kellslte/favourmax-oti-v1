import React, { useLayoutEffect, useRef, useState } from "react";
import indicator from "../../assets/loader.png";
import Image from "next/image";
import useInterval from "../../hooks/useInterval";
import Head from "next/head";

const Loader = ({ loading, setLoading }) => {
  const [level, setLevel] = useState(0);
  const [width, setWidth] = useState(0);
  const [w, setW] = useState(0);
  const loaderContainer = useRef(null);
  
  ( typeof window !== 'undefined' )
    ? useLayoutEffect( () =>
    {
      setWidth( loaderContainer.current.offsetWidth );
    } )
    : () => { };

  useInterval(
    () => {
      if (level === 100) {
        setLoading(false);
      }
      setLevel(level + 10);
      setW(w + width / 10);
    },
    1000,
    level
  );

  return (
    <div
      className={`flex flex-col justify-center items-center absolute top-0 w-screen h-screen bg-base ${
        !loading && "hidden"
        }` }
    >
      <Head>
        <title>
          KellsLTE - Backend Software Developer | Portfolio loading...
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Loader Text Will show up here */}
      <span className="mx-auto mb-4 text-xs font-extrabold text-center text-white uppercase font-monument">
        deploying {level}%
      </span>
      {/* Actual loader shows up here */}
      <div
        className="flex items-start w-2/4 h-8 overflow-hidden transition-all border-4 border-white md:w-3/4 lg:w-2/5 bg-gray-50"
        ref={loaderContainer}
      >
        <Image
          src={indicator.src}
          width={`${w}`}
          height={`35%`}
          layout="fixed"
          priority
        />
      </div>
    </div>
  );
};

export default Loader;
