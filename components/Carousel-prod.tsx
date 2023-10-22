import classNames from "classnames";
import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "./icons/chevron";
import CardGame from "../components/cardgame/GameCard";
import Image from "next/image";
import Link from "next/link";
const slides = [
  {
    title: "One Tap Setup",
    img: "/iphone.png",
    imageWidth: 343,
    imageHeight: 375,
  },
  {
    title: "Personalized Spatial Audio",
    img: "/iphone.png",
    imageWidth: 211,
    imageHeight: 375,
  },
  {
    title: "Audio Sharing",
    img: "/iphone.png",
    imageWidth: 265,
    imageHeight: 352,
    centered: true,
  },
  {
    title: "Automatic Switching",
    img: "/iphone.png",
    imageWidth: 336,
    imageHeight: 100,
    centered: true,
  },
  {
    title: "Siri",
    img: "/iphone.png",
    imageWidth: 168,
    imageHeight: 168,
    centered: true,
  },
  {
    title: "Accessibility",
    img: "/iphone.png",
    imageWidth: 135,
    imageHeight: 135,
    centered: true,
  },
];

const slideWidth = 400;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};

function App() {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <div className=" space-y-20 bg-gray-200 pt-10 font-sans p-3  spin">
      <div className="space-y-5">
        <h2 className="font-semibold text-6xl text-center max-w-[800px] mx-auto ">
          Discover Our Other Devices.
        </h2>
        <div className="flex justify-center mt-4">
          <button
            disabled={currentSlide === 0}
            onClick={() => goToPreviousSlide()}
            className="disabled:text-gray-400 disabled:border-gray-400 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center mr-2"
          >
            <span className="sr-only">Previous slide</span>
            <Chevron className="w-3 h-3" />
          </button>
          <button
            disabled={scrolledToEndOfSlider || currentSlide === slides.length}
            onClick={() => goToNextSlide()}
            className="disabled:text-gray-400 disabled:border-gray-400  w-8 h-8 border-2 border-black rounded-full flex items-center justify-center"
          >
            <span className="sr-only">Next slide</span>
            <Chevron className="rotate-180 w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="h-[200px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex h-[440px] pb-10 overflow-x-auto snap-x snap-mandatory space-x-20"
        >
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <Link href="/Acc" className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">LapTop</h1>
            </Link>
          </li>{" "}
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">SmartPhones</h1>
            </div>
          </li>{" "}
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">Tablets</h1>
            </div>
          </li>{" "}
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">SmartWatch</h1>
            </div>
          </li>{" "}
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">SoundDevices</h1>
            </div>
          </li>{" "}
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">Flashdisk</h1>
            </div>
          </li>
          <li className="snap-start snap-always shrink-0 mr-5 last:mr-0">
            {/**  <div className="slide-center relative justify-center items-center  h-full flex-col bg-white w-[400px] rounded-2xl">*/}
            <div className="flex-col  justify-end ">
              <Image
                src={"/iphone.png"}
                alt={"photo"}
                width={100}
                height={100}
              />
              <h1 className="text-center">PowerBanks</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
