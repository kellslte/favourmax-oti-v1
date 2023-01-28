import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

const Popup = ({ data, setShowModal }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          class=" z-50 fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.1)] w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id={`modal${data.id}`}
          tabindex="-1"
          aria-labelledby={`modal${data.id}`}
          aria-hidden="true"
        >
          {data && (
            <div class="relative w-auto pointer-events-none">
              <div class="border-none shadow-lg relative flex flex-col w-96 md:w-[48rem] pointer-events-auto bg-base bg-clip-padding rounded-md outline-none text-current">
                <div className="flex justify-between items-center py-4 px-6 rounded-t-md md:w-[46rem]">
                  <div
                    className="flex flex-wrap items-center justify-between flex-shrink-0 font-medium"
                    id={`modal${data.id}`}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-8"
                    >
                      <path
                        d="M12.2667 19.7067L15.7067 22.72C15.8667 22.8667 16.12 22.8667 16.28 22.72L19.72 19.7067C20.6134 18.92 20.7334 17.5867 19.9867 16.6533C19.24 15.72 17.88 15.5467 16.9334 16.2667L16 16.9867L15.0534 16.28C14.0934 15.56 12.7467 15.7333 12 16.6667C11.2534 17.5867 11.3734 18.9333 12.2667 19.7067Z"
                        stroke="#E3E5E8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.3334 14.6667V22.6667C29.3334 28 28 29.3333 22.6667 29.3333H9.33335C4.00002 29.3333 2.66669 28 2.66669 22.6667V9.33333C2.66669 4 4.00002 2.66667 9.33335 2.66667H11.3334C13.3334 2.66667 13.7734 3.25333 14.5334 4.26667L16.5334 6.93333C17.04 7.6 17.3334 8 18.6667 8H22.6667C28 8 29.3334 9.33333 29.3334 14.6667Z"
                        stroke="#E3E5E8"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    <h1 className="text-white">{data.title}</h1>
                    <div>
                      <button
                        className="box-content w-4 h-4 p-1 ml-4 text-white border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline md:ml-64"
                        data-bs-dismiss="modal"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
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
                  <button
                    type="button"
                    className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="relative px-6 py-2">
                  <section>
                    <h5 className="my-4 text-xs text-white font-monument">
                      Languages used on project:
                    </h5>
                    <p className="text-projectColor font-lato">
                      {data.languages}
                    </p>
                  </section>
                  <section>
                    <h5 className="my-4 text-xs text-white font-monument">
                      Project brief:
                    </h5>
                    <p className="mb-2 text-projectColor font-lato">
                      {data.brief}
                    </p>

                    <p className="text-projectColor font-lato">
                      {data.description}
                    </p>
                  </section>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-start p-4 rounded-b-md">
                  <a href={data.link} target={`_blank`}>
                    <span className="flex uppercase outline-none cursor-pointer font-lato text-icon focus:outline-none">
                      view live project
                      <span className="pl-6 font-semibold text-icon">
                        <svg
                          className="w-6 h-6 rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7l4-4m0 0l4 4m-4-4v18"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>,
        ref.current
      )
    : null;
};

export default Popup;
