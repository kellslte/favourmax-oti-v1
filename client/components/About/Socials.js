import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className="flex-col justify-between items-center block w-1/2">
      <p className="text-projectColor font-lato mb-4">
        I am available for your next project
      </p>
      <ul className="flex justify-between items-center text-icon w-fit uppercase font-lato text-sm h-6 md:text-md lg:text-lg">
        <li className="flex-col justify-center items-center mr-2 md:ml-4">
          <Link href={`https://github.com/KellsLTE`} className="uppercase">
            Github
          </Link>
        </li>
        |
        <li className="flex-col justify-center items-center mx-2 md:mx-4">
          <Link href={`https://twitter.com/KellsLTE`} className="uppercase">
            Twitter
          </Link>
        </li>
        |
        <li className="flex-col justify-center items-center mx-2 md:mx-4">
          <Link
            href={`https://linkedin.com/in/max-otifavour`}
            className="uppercase"
          >
            Linkedin
          </Link>
        </li>
        |
        <li className="justify-center items-center ml-2 md:mx-4">
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
}

export default Socials