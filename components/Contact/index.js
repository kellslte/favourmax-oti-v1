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
        title={`view resume`}
        link={'https://drive.google.com/file/d/1EgC0AfN518kG-bqD0zqfi5X5vKfIJ9Bs/view?usp=sharing'}
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
