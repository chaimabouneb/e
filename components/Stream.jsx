import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Herophone from "./Herophone";
import Herophone2 from "./Herophone2";
const Stream = () => {
  return (
    <section className="">
      <Carousel
        className=" relative   "
        centerMode={true}
        centerSlidePercentage={80}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        stopOnHover={true}
        interval={10000}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        selectedItem={2}
      >
        <div className="mx-1">
          <Herophone2 />
        </div>
        <div className="mx-1">
          <Herophone2 />
        </div>
        <div className="mx-1">
          <Herophone2 />
        </div>
      </Carousel>
    </section>
  );
};

export default Stream;
