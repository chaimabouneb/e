import React from "react";

const HeroOfrres = () => {
  return (
    <div className="mt-10  h-screen ">
      <div className="flex-wrap  ">
        {/* left*/}
        <div className="flex flex-col items-center space-y-4 lg:w-[50%]  sm:w-[50%]">
          <div className="text-white flex flex-col items-center space-y-4">
            <h2 className="text-6xl font-semibold">iPad Pro</h2>
            <div className="flex items-center ">
              <h3 className="text-3xl font-normal">SuperCharged </h3>
            </div>
          </div>
          <div className="flex justify-between ">
            <a href="/" className="text-link text-xl font-normal ">
              <span>learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/" className="text-green text-xl font-normal ">
              <span>BUY NOW</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
        {/* right*/}
        <div className=" w-[100px] lg:w-[1000px] h-[100px]   bg-gradient-to-r from-black via-PurpleGradient to-black">
          <img src="/iphone.png" className="object-contain  w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroOfrres;
