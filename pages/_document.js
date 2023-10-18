"use client";
import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";
import Carti from "../components/Carti";
import index from "../pages/index";
export default function Document() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />

        <index onAdd={onAdd}></index>

        <Carti onAdd={onAdd} cartItems={cartItems}></Carti>
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
