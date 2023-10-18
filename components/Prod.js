import React from "react";
import { faheart } from "react-icons/fa";
import StarRatings from "react-star-ratings";
const Prod = ({ image, content, price, name }) => {
  return (
    <div className="min-h-[500px] z-0">
      <div className=" relative bg-white p-5  rounded-md ">
        <div className="pc">
          <img src="/iphone.png" alt="" className=" im" />
        </div>

        <div className="w-[100%] p-5 flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <span className="badge">
              {" "}
              <span className="text-green-500">in stock</span>
            </span>
            <span className="badge">official store</span>
          </div>

          <h2 className="prodect-title" title="Best Headphones">
            Name
          </h2>
          <div>
            <span className="text-xl font-bold">4455 $</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">2000 $</span>
              <span className="discount-percentage">save 20%</span>
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

          <div className="flex flex-wrap gap-2 ">
            {/**<Link href="/" className="link2">
            Learn More
          </Link>*/}
            <button className="button-primary">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
