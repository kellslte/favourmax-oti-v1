import React from 'react'

const Title = ({ text }) => {
  return (
    <h1 className="text-[32px] md:text-[89.23px] leading-[33px] md:leading-[107.07px] font-extrabold font-monument text-stroke-sm text-transparent ml-[20px]">
      {text}
    </h1>
  );
}

export default Title