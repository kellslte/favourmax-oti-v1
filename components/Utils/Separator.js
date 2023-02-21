import React from "react";

const Separator = ({ text }) => {
  return (
    <div className="bg-base h-32 inline-flex justify-center items-center  overflow-auto scrollbar-hide md:px-24">
      <marquee className="text-[32px] md:text-[89.23px] leading-[33px] md:leading-[107.07px] font-extrabold font-monument text-stroke-sm text-transparent ml-[20px] whitespace-nowrap px-4">
        {text}
      </marquee>
    </div>
  );
};

export default Separator;
