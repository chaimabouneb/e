"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import StarRatings from "react-star-ratings";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
const singleprod = () => {
  const [images, setImages] = useState({
    img1: "/ip1.jpg",
    img2: "/ip2.jpg",
    img3: "/ip3.jpg",
    img4: "/ip4.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <section>
      <Header />
      <div className="flex py-5 px-5 flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className=" md: w-[500px] h-[300px]  lg:w-[600px] lg:h-[500px] aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
          </div>
          {/**<span className="flex items-center mt-1">
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
            <Image src="/4.png" alt="" width={20} height={20} />
 
            <span className="text-xs ml-2 text-gray-500">20K views</span>
          </span> **/}

          <div className="flex flex-wrap items-center space-x-2 mb-2">
            <div className="ratings">
              <StarRatings
                rating={3.5}
                starRatedColor="#ffb829"
                starDimension="20px"
                starSpacing="2px"
                name="rating"
              />
            </div>
            <span className="text-yellow-500">3.5</span>
            <svg
              width="6px"
              height="6px"
              viewBox="0 0 6 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#008000" />
            </svg>

            <span className="text-green-500">in stock</span>
          </div>
          <h6 className="text-2xl font-semibold text-white">$ 199.00</h6>
          <p className="text-gray-700">
            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
            Questo modello incredibilmente elastico e sostenitivo, è pensato per
            dare il massimo lungo il tuo percorso preferito e fare ritorno a
            casa carico di energia, in attesa della prossima corsa.
          </p>

          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
          <ul className="mb-5">
            <li className="mb-1">
              {" "}
              <b className="font-medium w-36 inline-block">Stock</b>
            </li>
            <li className="mb-1">
              {" "}
              <b className="font-medium w-36 inline-block">Category:</b>
              <span className="text-gray-500">Electonics</span>
            </li>
            <li className="mb-1">
              {" "}
              <b className="font-medium w-36 inline-block">Seller / Brand:</b>
              <span className="text-gray-500">Apple</span>
            </li>
          </ul>
        </div>
      </div>
      {/**newreviews */} <hr className="my-4" />
      <div className="p-10">
        <h1 className="text-gray-500 review-title my-5 text-2xl">
          Your Review
        </h1>

        <h3>Rating</h3>
        <div className="mb-4 mt-3">
          <div className="ratings">
            <StarRatings
              rating={5}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
            />
          </div>
        </div>
        <div className="mb-4 mt-5">
          <label className="block mb-1"> Comments </label>
          <textarea
            rows="4"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-1/3"
            placeholder="Your review"
            name="description"
            required
          ></textarea>
        </div>

        <button className="mt-3 mb-5 px-4 py-2 text-center inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600 w-1/3">
          Post Review
        </button>
      </div>{" "}
      <hr />
      {/**end */}
      <div className=" p-10 font-semibold">
        <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
          Other Customers Reviews
        </h1>
        {/**oldreviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <article className="block p-6 bg-white max-w-sm rounded-lg border border-gray-200 shadow-md mb-5">
            <div className="flex items-center mb-4 space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={"/logo192.png"}
                alt="user"
              />
              <div className="space-y-1 font-medium">
                <p>
                  Name
                  <time className="block text-sm text-gray-500 dark:text-gray-400">
                    Posted on: 10-8-2023
                  </time>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings">
                <StarRatings
                  rating={5}
                  starRatedColor="#ffb829"
                  numberOfStars={5}
                  starDimension="18px"
                  starSpacing="1px"
                  name="rating"
                />
              </div>
              <span className="text-yellow-500">{5}</span>
            </div>

            <p className="mb-2 font-light text-gray-500 dark:text-gray-400 text-xl">
              Name's review
            </p>
          </article>
        </div>
      </div>
      <Carousel />
      <Footer />
    </section>
  );
};

export default singleprod;
