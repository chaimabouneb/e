"use client";
import React, { useEffect, useState } from "react";
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
    <section className="flex flex-col space-y-2 mx-5">
      {" "}
      <form className="flex mx-5 " onSubmit={submitHandler}>
        <input
          className="flex w-[300px] font-semibold bg-transparent text-[2rem] sm:text-[4rem] placeholder:bg-gradient-to-r placeholder:from-[#ffb6ff] placeholder:to-[#b344ff] placeholder:bg-clip-text placeholder:text-transparent sm:w-[10em]   md:w-[15em]  mr-2 py-2 px-3  "
          type="text"
          placeholder="Brows Our Accessories."
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
          required
        />
        <div className="flex  items-center ">
          <div className="link-search cursor-pointer" onClick={submitHandler} />
        </div>
      </form>
      <div class="flex p-3 md:flex-row flex-col min-h-screen realtive backdrop-blur-md shadow-xl z-10 ">
        <div className="my-5">
          <Filters />
          <div className="min-h-[100px]" />
          <ul
            className="w-[100%] gap-3 p-3  grid xl:grid-cols-4
           gird-rows-2 xs:p-12 xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-4  lg:grid-col-4 sm:grid-cols-2"
          >
            <Prod image={"/iphone.png"} />
            <Prod image={"/lap1.png"} />
            <Prod />
            <Prod />
            <Prod />
            <Prod />
            <Prod />
            <Prod />
            <Prod />
          </ul>
        </div>
      </div>
      <Pagination />{" "}
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </section>
  );
};

export default ListProd;
