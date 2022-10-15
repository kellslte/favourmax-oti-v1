import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className="flex-col justify-between items-center block">
      <p className='text-projectColor font-lato mb-4'>I am available for your next project</p>
      <ul className="flex justify-between items-center text-icon w-90 uppercase font-lato text-lg h-6">
        <li className="flex-col justify-center items-center">
          <Link href={`https://github.com/KellsLTE`} className="uppercase">
            Github
          </Link>
        </li>
        |
        <li>
          <Link href={`https://twitter.com/KellsLTE`} className="uppercase">
            Twitter
          </Link>
        </li>
        |
        <li>
          <Link
            href={`https://linkedin.com/in/max-otifavour`}
            className="uppercase"
          >
            Linkedin
          </Link>
        </li>
        |
        <li>
          <Link
            href={`mailto:maxotif@gmail.com?subject=Hello`}
            className="uppercase"
          >
            Mail Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Socials