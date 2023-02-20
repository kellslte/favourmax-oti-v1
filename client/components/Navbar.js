import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { loadingState } from "../state/loading";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useRecoilState(loadingState);
  return (
    <nav
      className={`relative bg-base text-icon shadow w-[90%] md:w-[85%] border-b border-b-line mx-auto ${
        loading && "hidden"
      } md:w-[95%]`}
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="#">
              <Image
                src="/logo-alt.png"
                width="80"
                height="80"
                layout="fixed"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={`w-6 h-6 ${isOpen && "hidden"} hover:text-white`}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 12H16V16H12V12ZM6 12H10V16H6V12ZM0 12H4V16H0V12ZM12 6H16V10H12V6ZM6 6H10V10H6V6ZM0 6H4V10H0V6ZM12 0H16V4H12V0ZM6 0H10V4H6V0ZM0 0H4V4H0V0Z"
                    fill="#156AFF"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${!isOpen && "hidden"} hover:text-icon`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-x-16 md:justify-between md:items-center md:flex-row md:mx-6 md:gap-y-8 py-6 h-80 md:h-0 md:w-full uppercase text-sm text-link leading-[3.5rem]">
              <Link
                href="/#projects"
                scroll={false}
                className="hover:text-icon leading-4 font-semibold text-sm"
              >
                Projects
              </Link>
              <Link
                href="/#about"
                scroll={false}
                className="hover:text-icon leading-4 font-semibold text-sm"
              >
                About Me
              </Link>
              <Link
                href="/#work"
                scroll={false}
                className="hover:text-icon leading-4 font-semibold text-sm"
              >
                Work Experience
              </Link>
              <Link
                href="/#contact"
                scroll={false}
                className="hover:text-icon leading-4 font-semibold text-sm"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
