import React from "react";

const Herophone = () => {
  return (
    <div className="h-screen flex flex-col items-center  space-y-6">
      {/*top */}
      <div className="flex flex-col items-center space-y-2 ">
        <div className="text-black   ">
          <h2 className="text-6xl font-semibold ">iPhone 15 Pro</h2>
          <h3 className="text-3xl font-normal">Pro. Beyond.</h3>
        </div>
        <div className="space-x-4">
          <a href="/" className="text-link text-xl font-normal">
            <span className="hover:underline">learn more</span>
            <span>&rarr;</span>
          </a>
          <a href="/" className="text-link text-xl font-normal">
            <span className="hover:underline">Buy</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
      {/*bot*/}
      <div className="h-[500px]">
        <img src="/iphone.png" className="object-fill h-full w-full" />
      </div>
    </div>
  );
};

export default Herophone;
