import React from "react";
import Link from "next/link";
import Button from "./Button";
function Deals() {
  return (
    <div className="grid grid-rows-2 gap-x-0 gap-y-0  justify-center  offresSection">
      <div className="mt-5  text-center">
        <span className="font-extralight text-[#86868b] text-lg leading-10 tracking-[-0.022em] lg:text-2xl xl:text-3xl">
          New
        </span>
        <h1 className=" text-4xl font-semibold tracking-wide lg:text-7xl xl:text-8xl">
          <span className=" bg-gradient-to-r from-[#ffb6ff] to-[#b344ff] bg-clip-text text-transparent">
            Fresh Offers & Deals
          </span>
        </h1>
      </div>

      <div className="flex-wrap  max-w-[36px] max-h-[36px]   space-y-5 ">
        <span className="font-extralight text-[#86868b] text-2xl tracking-[-0.022em] lg:text-5xl xl:text-6xl">
          Discover Our Offers/Gifts
        </span>
        <Button href="/promotions" title={"Explore"} />
      </div>
    </div>
  );
}

export default Deals;
