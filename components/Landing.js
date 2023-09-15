import React from "react";
import Image from "next/image";
import Button from "./Button";
function Landing() {
  const handleLearnMore = () => {
    const element = document.querySelector(".offresSection");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Landing pt-10">
      <div className=" space-y-8 items-center ">
        <h1
          className="space-y-1 text-center text-2xl font-semibold tracking-wide lg:text-4xl
        xl:text-5xl"
        >
          <span
            className="block bg-gradient-to-r from-pink-500 to-violet-500
          text-transparent bg-clip-text"
          >
            Powered{" "}
          </span>
          <span className="block">By Intellect </span>
          <span className="block">Driven By Values </span>
        </h1>
        <div className="space-x-8">
          <Button title={"Buy Now"} />
          <a className="link" onClick={handleLearnMore}>
            Learn More
          </a>
        </div>
      </div>
      <div
        className=" bottom-0 left-40 relative  h-[350px] w-[350px] transition-all duration-500
      md:inline lg:h-[500px] lg:w-[450px]"
      >
        <Image src="/iphone-hand.png" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default Landing;
