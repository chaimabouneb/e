import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
/**import Currency from "react-currency-formatter";**/

function CartCheckOut() {
  return (
    <>
      <section className="py-5  sm:py-7 border-b border-gray-300 ">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl  mb-2">5 Item(s) in Cart</h2>
        </div>
      </section>

      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <main className="md:w-3/4">
              <article className="  mb-5 p-3 lg:p-5">
                <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                  <div className="w-full lg:w-2/5 xl:w-2/4">
                    <figure className="flex leading-5">
                      <div>
                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <Image
                            src="/iphone.png"
                            alt="hh"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>

                      <figcaption className="ml-3">
                        <p>
                          <a href="#" className="hover:text-blue-600">
                            Product name
                          </a>
                        </p>
                        <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                          Show product details
                        </p>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="w-24">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                        name="custom-input-number"
                        value={0}
                        readOnly
                      ></input>
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="leading-5">
                      <p className="font-semibold not-italic">$898</p>
                      <small className="text-gray-400"> $98 / per item </small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                      <a className=" cursor-pointer  text-blue-500 hover:underline">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </article>
            </main>

            <aside className="md:w-1/4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>$98</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>Total Units:</span>
                    <span className="text-green-500">7 (Units)</span>
                  </li>
                  <li className="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>$78</span>
                  </li>
                  <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$898</span>
                  </li>
                </ul>

                <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                  Continue
                </a>

                <Link
                  href={"/"}
                  className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-blue-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                >
                  Back to shop
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartCheckOut;
