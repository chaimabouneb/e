import React from "react";
import data from "../utils/data";
import ProductItem from "./ProductItem";
import GameCard from "../components/cardgame/GameCard";
const Trending = () => {
  return (
    <section className="pt-5 min-h-screen  bg-[#E7ECEE] ">
      <div className=" mt-5">
        <h1>
          <span className="  leading-10 tracking-[-0.01em] text-1xl  text-black md:text-4xl ">
            Best Sellers.
          </span>
          <span className="font-extralight leading-10 tracking-[-0.01em] text-1xl opacity-75 text-black md:text-4xl ">
            The best way to buy the products you love.
          </span>
        </h1>

        <div className="min-h-[100px]" />
        <div
          className="w-[100%] gap-3 p-3  grid xl:grid-cols-4
   gird-rows-2 xs:p-12 xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-4  lg:grid-col-4 sm:grid-cols-2
   grid-flow-row-dense"
        >
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Trending;
