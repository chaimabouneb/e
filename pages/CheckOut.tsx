import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import CartCheckOut from "../components/CartCheckOut";
function CheckOut() {
  return (
    <div className=" bg-gray-200">
      <Head>
        <title>Bag - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="  max-w-5xl pt-10">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {1 > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
        </div>
      </div>
      <CartCheckOut />
    </div>
  );
}

export default CheckOut;
