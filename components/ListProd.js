"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Filters from "./Filters";
import Prod from "./Prod";
import Pagination from "./customPagination";

const ListProd = () => {
  const [keyword, setkeyword] = useState("");
  const router = useRouter();
  const submitHandler = () => {
    if (keyword) {
      router.push("/singleprod");
    } else {
      router.push("/");
    }
  };
  return (
    <section className="pb-5 space-y-2">
      <form
        className="flex  flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
        onSubmit={submitHandler}
      >
        <input
          className="flex-grow bg-gray-50 bg-transparent appearance-none border border-gray-200  rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
          type="text"
          placeholder="Enter your keyword"
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
          required
        />
        <button
          type="button"
          className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={submitHandler}
        >
          Search
        </button>
      </form>
      <div class="flex flex-col md:flex-row -mx-4 realtive backdrop-blur-md shadow-xl     w-full h-full z-10 rounded-2xl ">
        <Filters />

        <div className=" grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3  grid-flow-row-dense">
          {/** 
          <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex p-3">
                <div
                  style={{
                    width: "80%",
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    src={"/logo192.png"}
                    alt="product anme"
                    height="240"
                    width="240"
                  />
                </div>
              </div>
              <div className="md:w-2/4">
                <div className="p-4">
                  <Link to={`/`} className="hover:text-blue-600">
                    Lorem Ipsum is simply dummy text
                  </Link>
                  <div className="flex flex-wrap items-center space-x-2 mb-2">
                    <div className="ratings">
                      <div className="my-1">
                        <StarRatings
                          rating={5}
                          starRatedColor="#ffb829"
                          numberOfStars={5}
                          starDimension="18px"
                          starSpacing="1px"
                          name="rating"
                        />
                      </div>
                    </div>
                    <b className="text-gray-300">•</b>
                    <span className="ml-1 text-yellow-500">5</span>
                  </div>
                  <p className="text-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
               <div className="p-5">
                  <span className="text-xl font-semibold text-black">
                    $989
                  </span>

                  <p className="text-green-500">Free Shipping</p>
                  <div className="my-3">
                    <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                      {" "}
                      Add to Cart{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>*/}
          <Prod />
          <Prod />
          <Prod />
          <Prod />
          <Prod />
          <Prod />
          <Prod />
          <Prod />
          <Prod />
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default ListProd;
