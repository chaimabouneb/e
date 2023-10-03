import React from "react";
import { BsApple } from "react-icons/bs";
const Gridof = () => {
  return (
    <div className="bg-primary min-h-screen p-10  space-y-10 ">
      <h1 className="flex items-center justify-center">
        <span className="  leading-10 tracking-[-0.01em] text-1xl  text-white md:text-4xl ">
          Hot Wheels.
        </span>
        <span className="font-extralight leading-10 tracking-[-0.01em] text-1xl opacity-75 text-white md:text-4xl ">
          The best way to buy the products you love.
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-10 gap-y-4  sm:grid-cols-2 ">
        <div className=" bg-gray-200  shadow-lg  overflow-hidden p-0 ">
          <div className=" flex flex-col items-center space-y-1 p-5 max-h-[50%]">
            <h4 className="text-4xl font-semibold">iPhonee 14</h4>
            <h5 className="text-xl font-normal">Big and Bigger</h5>

            <div className="space-x-4 ">
              {" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">learn more</span>
                <span>&rarr;</span>
              </a>{" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">Buy</span>
                <span>&rarr;</span>
              </a>{" "}
            </div>
          </div>
          <div className="min-h-[30%] ">
            <img src="/iphone.png" className="object-fill   " />
          </div>{" "}
        </div>{" "}
        <div className=" bg-gray-200 shadow-lg  overflow-hidden ">
          <div className="  flex flex-col items-center space-y-1 p-5 max-h-[50%]">
            <div className="flex items-center">
              <h4 className="text-4xl font-semibold">
                Tv{" "}
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-400 font-extrabold">
                  4K{" "}
                </span>
              </h4>

              <BsApple size={25} />
            </div>
            <h5 className="text-xl font-normal text-center">
              The Apple experience. <br /> Cinematic in every sense.{" "}
            </h5>
            <p className="text-gray-500 ">Available starting from 11.4 </p>

            <div className="space-x-2">
              {" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">learn more</span>
                <span>&rarr;</span>
              </a>{" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">Buy</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="min-h-[30%]">
            <img src="/iphone.png" className="object-contain " />
          </div>
        </div>
        <div className=" bg-gray-200 shadow-lg  overflow-hidden ">
          <div className="  flex flex-col items-center space-y-1 p-5">
            <div className="flex items-center">
              <h4 className="text-4xl font-semibold">
                Tv{" "}
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-400 font-extrabold">
                  4K{" "}
                </span>
              </h4>

              <BsApple size={25} />
            </div>
            <h5 className="text-xl font-normal text-center">
              The Apple experience. <br /> Cinematic in every sense.{" "}
            </h5>
            <p className="text-gray-500 ">Available starting from 11.4 </p>

            <div className="space-x-2">
              {" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">learn more</span>
                <span>&rarr;</span>
              </a>{" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">Buy</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="min-h-[30%]">
            <img src="/iphone.png" className="object-contain " />
          </div>
        </div>{" "}
        <div className=" bg-primary shadow-lg  overflow-hidden ">
          <div className="  flex flex-col items-center space-y-1 p-5">
            <div className="flex items-center">
              <h4 className="text-4xl font-semibold">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-400 font-extrabold">
                  Tv 4K{" "}
                </span>
              </h4>

              <BsApple size={25} color="white" />
            </div>
            <h5 className="text-xl font-normal text-center text-white">
              The Apple experience. <br /> Cinematic in every sense.{" "}
            </h5>
            <p className="text-gray-500 ">Available starting from 11.4 </p>

            <div className="space-x-2">
              {" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">learn more</span>
                <span>&rarr;</span>
              </a>{" "}
              <a href="/" className="text-white text-lg font-normal">
                <span className="hover:underline">Buy</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
          <div className="min-h-[30%]">
            <img src="/iphone.png" className="object-contain " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridof;
