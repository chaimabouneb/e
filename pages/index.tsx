import React, { useEffect, useRef, useState } from "react";
import { Header, Landing, Trending, Offres } from "../components/index";
import CartCheckOut from "../components/CartCheckOut";
import Head from "next/head";
import Basket from "../components/Basket";

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { initialize } from "next/dist/server/lib/render-server";
import Footer from "../components/Footer";
const WebbgiViewer = dynamic(() => import("../components/WebgiViewer"), {
  ssr: false,
});

const HomePage = () => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  return (
    <>
      <Head>
        {" "}
        <title>Sumsung Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative  bg-[#E7ECEE]">
        <Landing />
      </main>
      <Offres />
      <Trending />
      <motion.div className="carousel bg-[#E7ECEE]">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -500 }}
          className="flex gap-10 "
        >
          <motion.div className="flex-col text-center w-[200px] items-center justify-center p-4  space-y-2">
            <img src="/iphone.png" alt="bb" />
            <span className="font-extralight  ">SmartWatches</span>
          </motion.div>{" "}
          <motion.div className="flex-col text-center w-[200px] items-center justify-center p-4  space-y-2">
            <img src="/iphone.png" alt="bb" />
            <span className="font-extralight  ">SmartWatches</span>
          </motion.div>{" "}
          <motion.div className="flex-col text-center w-[200px] items-center justify-center p-4  space-y-2">
            <img src="/iphone.png" alt="bb" />
            <span className="font-extralight  ">SmartWatches</span>
          </motion.div>{" "}
          <motion.div className="flex-col text-center w-[200px] items-center justify-center p-4  space-y-2">
            <img src="/iphone.png" alt="bb" />
            <span className="font-extralight  ">SmartWatches</span>
          </motion.div>{" "}
          <motion.div className="flex-col text-center w-[200px] items-center justify-center p-4  space-y-2">
            <img src="/iphone.png" alt="bb" />
            <span className="font-extralight  ">SmartWatches</span>
          </motion.div>{" "}
        </motion.div>
      </motion.div>
      <Footer />

      <Basket />
      <WebbgiViewer />
      {/**
      
      

     **/}
    </>
  );
};
export default HomePage;
// etc
