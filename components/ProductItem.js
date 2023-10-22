import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductRate from "./ProductRate";
import Button from "./Button";
export default function ProductItem({ product }) {
  return (
    <div className="min-h-[500px] z-0 ">
      <div className=" relative bg-white p-5  rounded-md ">
        <div className="pc">
          <Link href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} className=" im" />
          </Link>
        </div>
        <div className="w-[100%] p-1 flex flex-col gap-3 min-h-[70px] min-w-[50px]">
          <div className="flex items-center gap-2">
            <span className="badge">
              {" "}
              <div>
                {product.isFeatured > 0 ? (
                  <span className="text-green-500">in stock</span>
                ) : (
                  "unavailable"
                )}
              </div>
            </span>
          </div>
          <Link href={`/product/${product.slug}`}>
            <h2 className="prodect-title text-xl" title="Best Headphones">
              {product.name}
            </h2>
          </Link>
          <div>
            <span className="text-xl font-bold">{product.price}$</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">$44</span>
              <span className="discount-percentage">save 20%</span>
            </div>
          </div>

          <ProductRate rate={product.rating} count={product.numReviews} />

          <Button title="Add To Cart" />
        </div>
      </div>
    </div>
  );
}
