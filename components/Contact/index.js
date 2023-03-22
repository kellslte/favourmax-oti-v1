import React from "react";
import Button from "../Utils/Button";

const Contact = () => {
  return (
    <div
      className="bg-project w-full h-fit py-[40px] px-6 my-4 relative md:px-20"
      id="contact"
    >
      <h1 className="text-link font-monument text-2xl leading-[2rem] my-10 font-extrabold">
        Got an idea you would like us to talk about?
      </h1>
      <Button
        title={`Send me an email`}
        link={'mailto:maxotif@gmail.com?subject=Hello'}
        icon={`/message-tick.svg`}
      />
      <div className="absolute inline-flex items-stretch bottom-0 right-5">
        <img src="/images/rectangle-25.png" className="w-16 -mr-6" />
        <img src="/images/rectangle-24.png" className="w-16 -mr-6" />
        <img src="/images/rectangle-23.png" className="w-16" />
      </div>
    </div>
  );
};

export default Contact;
