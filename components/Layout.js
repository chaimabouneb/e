"use client";
import React, { useContext, useState, useEffect } from "react";
import { Landing, Trending, Offres } from "../components/index";
import H from "./H";
import Head from "next/head";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Store } from "../utils/Store";
import Header from "../components/Header";
import Basket from "../components/Basket";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";
//import WebgiViewer from "../components/WebgiViewer.js";
const WebgiViewer = dynamic(() => import("../components/WebgiViewer"), {
  ssr: false, // Disable server-side rendering for this component
});

function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setcartItemsCount] = useState(0);
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  });
  return (
    <>
      <Head>
        {" "}
        <title>Sumsung Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href="/CheckOut"
        className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300"
      >
        {cartItemsCount > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {cartItemsCount}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </Link>
      <Header />

      <section className="">{children}</section>
    </>
  );
}

export default Layout;
