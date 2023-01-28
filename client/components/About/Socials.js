import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex-col items-center justify-between block w-1/2">
      <p className="mb-4 text-projectColor font-lato">
        I am available for your next project
      </p>
      <ul className="flex items-center justify-between h-6 text-sm uppercase text-icon w-fit font-lato md:text-md lg:text-lg">
        <li className="flex-col items-center justify-center mr-2 md:ml-4">
          <Link href={`https://github.com/kellslte`} className="uppercase">
            Github
          </Link>
        </li>
        |
        <li className="flex-col items-center justify-center mx-2 md:mx-4">
          <Link href={`https://twitter.com/KellsLTE`} className="uppercase">
            Twitter
          </Link>
        </li>
        |
        <li className="flex-col items-center justify-center mx-2 md:mx-4">
          <Link
            href={`https://linkedin.com/in/max-otifavour`}
            className="uppercase"
          >
            Linkedin
          </Link>
        </li>
        |
        <li className="items-center justify-center ml-2 md:mx-4">
          <Link
            href={`mailto:maxotif@gmail.com?subject=Hello`}
            className="uppercase"
          >
            Mail&nbsp;Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
