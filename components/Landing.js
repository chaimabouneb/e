import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="Landing pt-10 pb-0 flex-col justify-between">
      <div className=" flex-col items-center space-y-10 justify-center">
        <div>
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
        </div>
        <div className="flex items-center space-x-8 justify-center">
          <Link href="/SmartPhones">
            {" "}
            <Button title={"Buy Now"} />
          </Link>
          <a className="link" onClick={handleLearnMore}>
            Learn More
          </a>
        </div>
      </div>

      <div
        className="pb-0 mb-0 bottom-0  relative h-[350px] w-[400px] transition-all duration-500
    lg:h-[500px] lg:w-[450px] md:inline"
      >
        <Image
          src="/iphone-hand.png"
          layout="fill"
          objectFit="contain"
          className="pl-40  bottom-0"
        />
      </div>
    </div>
  );
}

export default Landing;
