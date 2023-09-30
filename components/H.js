import React, { useEffect } from "react";
import ListProd from "../components/ListProd";
import Carousel from "../components/Carousel-prod";
import Footer from "../components/Footer";
const H = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        }
      },
      { threshold: 1.0, rootMargin: "20%" }
    );
    const h2s = document.querySelectorAll("h2");

    h2s.forEach((el) => observer.observe(el));

    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 148;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  });
  return (
    <section>
      <div className="h2">
        <h2 className="font-semibold flex items-end text-[5rem] p-2 pt-0 bg-gradient-to-r from-[#ffb6ff] to-[#b344ff] bg-clip-text text-transparent ">
          Airpods Max
        </h2>
      </div>

      <div className="h-screen bg-transparent" />
      <div className="  h-screen  ">
        <h1 className=" font-semibold  text-[5rem]  bg-gradient-to-r from-[#ffb6ff] to-[#b344ff] bg-clip-text text-transparent ">
          Brows Our Accessories.
        </h1>

        <ListProd />
        <Carousel />
        <Footer />
      </div>
      <canvas id="hero-lightpass" className="canvas" />
    </section>
  );
};

export default H;
