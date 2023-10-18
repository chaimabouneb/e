"use client";

import React from "react";
import Header from "../components/Header";
const Contact = () => {
  return (
    <div className="wrapper min-h-64 bg-white">
      <Header />
      <section className="   bg-[#E7ECEE] relative p-20 space-y-4">
        <div className="flex justify-center leading-10 tracking-[7px] text-4xl  text-gray-500 md:text-7xl ">
          <h1>Get in Touch.</h1>
        </div>
        <div className="snap-start snap-always shrink-0 mr-5 last:mr-0 relative grid  sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 grid-rows-2 grid-flow-row-dense ">
          <div className="shadow-lg rounded-md overflow-hidden row-span-2 bg-white p-[40px] space-y-5 ">
            <h3>Send Us a Message</h3>
            <form>
              <div className="relative space-y-5 w-[100%] ">
                <div className="flex gap-2 w-[100%]  my-2">
                  <div className="flex-col  w-[50%] ">
                    <span className="">First Name</span>
                    <input
                      className="p-2 w-[100%] min-h-[50px] outline-none border-solid border"
                      type="text"
                      placeholder="John"
                    />
                  </div>

                  <div className="flex-col mb-2 w-[50%] ">
                    <span className="my-2">Last Name</span>
                    <input
                      className="p-2 w-[100%] min-h-[50px] outline-none border-solid border"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex gap-2 w-[100%]  my-2">
                  <div className="flex-col  w-[50%] ">
                    <span className="">Email</span>
                    <input
                      className="p-2 w-[100%] min-h-[50px] outline-none border-solid border"
                      type="text"
                      placeholder="@Gmail.com"
                    />
                  </div>

                  <div className="flex-col mb-2 w-[50%] ">
                    <span className="my-2">Mobile</span>
                    <input
                      className="p-2 w-[100%] min-h-[50px] outline-none border-solid border"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex space-y-2 ">
                  <div className="flex-col mb-2 w-[100%] ">
                    <span className="my-2">Message</span>
                    <textarea
                      className="resize-none w-[100%] min-h-[220px]  p-2 outline-none border-solid border"
                      placeholder="write msg"
                    />
                  </div>
                </div>

                <div className="flex space-x-2 ">
                  <div className="w-[100%] bg-gray-500 rounded-3xl text-center">
                    <input
                      type="submit"
                      value={"send"}
                      className="cursor-fancy"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="px-2 shadow-lg rounded-md overflow-hidden bg-gray-50 ">
            <h3>Contact Informations.</h3>
            <div className="flex justify-center px-2 w-[100%] my-5">
              <div className="flex-col justify-center w-[100%] px-2 items-center space-y-5">
                <div>
                  <span className=" w-[100%] min-h-[40px] bg-slate-400 flex justify-center items-center rounded-full font-semibold text-white">
                    <ion-icon name="location"></ion-icon>
                    <p className="text-sm lg:text-lg">Adress</p>{" "}
                  </span>
                </div>
                <div>
                  <span className="flex p-3 w-[1O0%] min-h-[40px] bg-slate-400  justify-center items-center rounded-full  font-semibold text-white">
                    <ion-icon name="mail"></ion-icon>

                    <a
                      href="mailto:lorem@gmail.com"
                      className="text-sm lg:text-lg"
                    >
                      lorem@gmail.com
                    </a>
                  </span>
                </div>{" "}
                <div>
                  <span className="p-3 w-[100%] min-h-[40px] bg-slate-400 flex justify-center items-center rounded-full gap-5 font-semibold text-white">
                    <ion-icon name="call"></ion-icon>

                    <a href="telto:0660848953">num</a>
                  </span>
                </div>
                <ul className="flex items-center justify-center space-x-5 mt-2">
                  <li className="mr-1">
                    <a href="/" className="ax">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="/" className="ax">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="/" className="ax">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>{" "}
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-0">
            <iframe
              className="w-[100%] h-[100%] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204742.98782697128!2d2.9798368749140205!3d36.69591409296734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3ff3e243b45%3A0x370410c0f41fc075!2sapple%20phone%20officiel!5e0!3m2!1sfr!2sdz!4v1696805014154!5m2!1sfr!2sdz"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </section>
    </div>
  );
};

export default Contact;
