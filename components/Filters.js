import { Disclosure } from "@headlessui/react";
import { useScroll } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import StarRatings from "react-star-ratings";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

function Filters() {
  let queryParams;

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <section>
      {" "}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer absolute top-4 right-4  inline-flex items-center peer justify-center
  rounded-md p-2 text-white hover:bg-gray-900 hover:text-white  group"
      >
        <ion-icon name="funnel-sharp"></ion-icon>
        <div className=" block   text-center ">Filter by</div>{" "}
      </div>
      <div className={`dropdown ${open ? "active" : "inactive"}  `}>
        <div className=" px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Price ($)</h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>{" "}
        <div className="  px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">weight</h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#666666] px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Disk</h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#666666] px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Ram</h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#666666]  px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Screen</h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#666666] px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Camera </h3>
          <div className="grid md:grid-cols-3 gap-x-2">
            <div className="mb-4">
              <input
                name="min"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Min"
              />
            </div>

            <div className="mb-4">
              <input
                name="max"
                className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#666666] md:block px-6 py-4 border border-gray-200 rounded shadow-sm">
          <h3 className="font-semibold text-white mb-2">Category</h3>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Electronics"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Electronics")}
                />
                <span className="ml-2 text-white"> Electronics </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Laptops"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Laptops")}
                />
                <span className="ml-2 text-white"> Laptops </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Toys"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Toys")}
                />
                <span className="ml-2 text-white"> Toys </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Office"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Office")}
                />
                <span className="ml-2 text-white"> Office </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Beauty"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Beauty")}
                />
                <span className="ml-2 text-white"> Beauty </span>
              </label>
            </li>
          </ul>{" "}
          <hr className="my-4" />
          <label className="flex items-center">
            {" "}
            <span className="mr-2 text-white"> Double Sim </span>
            <input
              name="category"
              type="checkbox"
              value="Apple"
              className="h-4 w-4"
              defaultChecked={checkHandler("category", "Apple")}
            />
          </label>
          <hr className="my-4" />
          <h3 className="font-semibold text-white mb-2">Brand</h3>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Apple"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Apple")}
                />
                <span className="ml-2 text-white"> Apple </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Samsung"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Samsung")}
                />
                <span className="ml-2 text-white"> Samsung </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Oppo"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Oppo")}
                />
                <span className="ml-2 text-white"> Oppo </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="LG"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "LG")}
                />
                <span className="ml-2 text-white"> LG </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Iris"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Iris")}
                />
                <span className="ml-2 text-white"> Iris </span>
              </label>
            </li>
          </ul>
          <hr className="my-4" />{" "}
          <h3 className="font-semibold text-white mb-2">System</h3>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Apple"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Apple")}
                />
                <span className="ml-2 text-white"> Apple </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Samsung"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Samsung")}
                />
                <span className="ml-2 text-white"> Samsung </span>
              </label>
            </li>
          </ul>{" "}
          <hr className="my-4" />{" "}
          <h3 className="font-semibold text-white mb-2">State</h3>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Apple"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Apple")}
                />
                <span className="ml-2 text-white"> Apple </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Samsung"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Samsung")}
                />
                <span className="ml-2 text-white"> Samsung </span>
              </label>
            </li>
          </ul>{" "}
          <hr className="my-4" />{" "}
          <h3 className="font-semibold text-white mb-2">Gpu</h3>
          <ul className="space-y-1">
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Apple"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Apple")}
                />
                <span className="ml-2 text-white"> Apple </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  name="category"
                  type="checkbox"
                  value="Samsung"
                  className="h-4 w-4"
                  defaultChecked={checkHandler("category", "Samsung")}
                />
                <span className="ml-2 text-white"> Samsung </span>
              </label>
            </li>
          </ul>{" "}
          <hr className="my-4" />{" "}
          <h3 className="font-semibold text-white mb-2">Ratings</h3>
          <ul className="space-y-1">
            <li>
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    name="ratings"
                    type="checkbox"
                    value={rating}
                    className="h-4 w-4"
                    defaultChecked={checkHandler("ratings", `${rating}`)}
                  />
                  <span className="ml-2 text-gray-500">
                    {" "}
                    <StarRatings
                      rating={5}
                      starRatedColor="#ffb829"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                      name="rating"
                    />{" "}
                  </span>
                </label>
              ))}
            </li>
            <hr className="my-4" />{" "}
            <div className="my-4">
              <button className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                Go
              </button>
            </div>
          </ul>
        </div>
      </div>{" "}
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </section>
  );
}

export default Filters;
