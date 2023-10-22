import React, { useContext, useState, useEffect } from "react";
import { Header, Landing, Trending, Offres } from "../components/index";
import CartCheckOut from "../components/CartCheckOut";
import Head from "next/head";
import { Store } from "../utils/Store";
import Carousel from "../components/Carousel-prod";
import Basket from "../components/Basket";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
//import WebgiViewer from "../components/WebgiViewer.js";
const WebgiViewer = dynamic(() => import("../components/WebgiViewer"), {
  ssr: false, // Disable server-side rendering for this component
});

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Layout>
        <Landing />
        <Offres />
        <Trending />
        <WebgiViewer />
        <Carousel />
        <Footer />
      </Layout>
    </>
  );
};
export default HomePage;
// etc
