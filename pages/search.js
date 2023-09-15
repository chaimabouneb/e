import React from "react";
import GameCard from "../components/cardgame/GameCard";
import Header from "../components/Header";
const search = () => {
  const games = [
    {
      id: 1,
      price: 12,
      name: "Call of Duty: Modern Warfare",
      slug: "call-of-duty",
      image: "/ip1.jpg",
    },
    {
      id: 2,
      price: 14,
      name: "Assassin's Creed Valhalla",
      slug: "assassin-creed",
      image: "/ip2.jpg",
    },
    {
      id: 3,
      price: 42,
      name: "FIFA 23",
      slug: "fifa-23",
      image: "/ip3.jpg",
    },

    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image: "/ip4.jpg",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image: "/ip5.jpg",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image: "/lap.jpg",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image: "/tab.jpg",
    },
  ];
  return (
    <div title="search">
      <Header />
      <div className="grid md:grid-cols-4 md:gap-5">
        <div>
          <div className="my-3">
            <h2>Categories</h2>
            <select
              className="w-full"
              value="cat1"
              //onChange={categoryHandler}
            >
              <option value="all">All</option>
              {/**  {categories &&
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))} */}
            </select>
          </div>
          <div className="mb-3">
            <h2>Brands</h2>
            <select
              className="w-full"
              value="brand"
              //onChange={brandHandler}
            >
              <option value="all">All</option>
              {/** {brands &&
                brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))} */}
            </select>
          </div>
          <div className="mb-3">
            <h2>Prices</h2>
            <select
              className="w-full"
              value="price"
              //onChange={priceHandler}
            >
              <option value="all">All</option>
              {/**  {prices &&
                prices.map((price) => (
                  <option key={price.value} value={price.value}>
                    {price.name}
                  </option>
                ))}*/}
            </select>
          </div>
          <div className="mb-3">
            <h2>Ratings</h2>
            <select
              className="w-full"
              value="rating"
              //onChange={ratingHandler}
            >
              <option value="all">All</option>
              {/** {ratings &&
                ratings.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} star{rating > 1 && "s"} & up
                  </option>
                ))} */}
            </select>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
            {/**   <div className="flex items-center">
              {products.length === 0 ? "No" : countProducts} Results
              {query !== "all" && query !== "" && " : " + query}
              {category !== "all" && " : " + category}
              {brand !== "all" && " : " + brand}
              {price !== "all" && " : Price " + price}
              {rating !== "all" && " : Rating " + rating + " & up"}
              &nbsp;
              {(query !== "all" && query !== "") ||
              category !== "all" ||
              brand !== "all" ||
              rating !== "all" ||
              price !== "all" ? (
                <button onClick={() => router.push("/search")}>
                  <XCircleIcon className="h-5 w-5" />
                </button>
              ) : null}
            </div>
           */}{" "}
            <div>
              Sort by{" "}
              <select
                value="sort"
                // onChange={sortHandler}
              >
                <option value="featured">Featured</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Customer Reviews</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3  ">
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  gameName={game.name}
                  imageUrl={game.image}
                  slug={game.slug}
                  price={game.price}
                />
              ))}
            </div>
            {/** <ul className="flex">
              {products.length > 0 &&
                [...Array(pages).keys()].map((pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      className={`default-button m-2 ${
                        page == pageNumber + 1 ? "font-bold" : ""
                      } `}
                      onClick={() => pageHandler(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                ))}
            </ul>
             */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default search;
