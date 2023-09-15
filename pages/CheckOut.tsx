import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import CartCheckOut from "../components/CartCheckOut";
function CheckOut() {
  return (
    <div>
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {1 > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
        </div>
      </div>
      <CartCheckOut />
    </div>
  );
}

export default CheckOut;
