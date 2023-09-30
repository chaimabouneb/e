import React, { useEffect, useRef, useState } from "react";
import { Header, Landing, Trending, Offres } from "../components/index";
import CartCheckOut from "../components/CartCheckOut";
import Head from "next/head";
import Basket from "../components/Basket";
import Carouselprod from "../components/Carousel-prod";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { initialize } from "next/dist/server/lib/render-server";
import Footer from "../components/Footer";
const WebgiViewer = dynamic(() => import("../components/WebgiViewer"), {
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
      <Carouselprod />
      <Footer />

      <Basket />

      {/**
      
      

     **/}
    </>
  );
};
export default HomePage;
// etc
