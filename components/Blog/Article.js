import React from "react";
import Audio from "../Utils/Audio";
import Social from "../Utils/Social";
import Image from "next/image";
import { toBase64, shimmer } from "../../helpers";
import Contact from "../Contact";

const Article = ({ url, data, loading }) => {
  let blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;

  return (
    <div className={`w-[90%] h-full block mx-auto ${loading && "hidden"}`}>
      <section>
        <a
          className="flex items-center justify-between w-56 px-8 py-4 my-16 font-semibold border-2 border-icon md:px-4 md:py-4 font-lato"
          href={`/`}
        >
          <span className="pl-4 font-semibold text-icon">
            <svg
              width="36"
              height="36"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.97656 15.0583L2.91823 10L7.97656 4.94168"
                stroke="#156AFF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.082 10L3.05703 10"
                stroke="#156AFF"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm uppercase text-icon">Back Home</span>
        </a>
      </section>
      <section className="flex items-center justify-between my-6">
        <Audio src={data.audio} />
        <Social url={url} title={data.title} />
      </section>
      <main>
        <h1 className="text-link font-monument text-xl leading-[2rem] my-5 font-extrabold">
          {data.title}
        </h1>
        <Image
          src={data.featuredImage}
          placeholder={blurDataURL}
          width={`100%`}
          height={`65%`}
          layout={`responsive`}
          objectFit={`cover`}
          className="my-5"
        />

        <p className="my-4 text-xs text-projectColor">{data.paragraphone}</p>
        <p className="my-4 text-xs text-projectColor">{data.paragraphtwo}</p>
        <p className="my-4 text-xs text-projectColor">{data.paragraphthree}</p>
        <Contact />
        <p className="my-4 text-xs text-projectColor">{data.paragraphfour}</p>
        <p className="my-4 text-xs text-projectColor">{data.paragraphfive}</p>
        <Image
          src={data.bodyimage}
          placeholder={blurDataURL}
          width={`100%`}
          height={`65%`}
          layout={`responsive`}
          objectFit={`cover`}
          className="my-5"
        />
        <p className="my-4 text-xs text-projectColor">{data.paragraphsix}</p>
      </main>
    </div>
  );
};

export default Article;
