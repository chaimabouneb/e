import React from "react";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
import Carousel from "../../components/Carousel-prod";
import data from "../../utils/data";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Filters from "../../components/Filters";
import H from "../../components/H";
import Pagination from "../../components/customPagination";
import ProductItem from "../../components/ProductItem";

function CategoryScreen() {
  const [keyword, setkeyword] = useState("");
  const router = useRouter();
  const submitHandler = () => {
    if (keyword) {
      router.push("/singleprod");
    } else {
      router.push("/");
    }
  };
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { category } = query;
  // category = data.products.find((x) => x.category === category);
  return (
    <section className="flex-col justify-start">
      <div className="h2">
        <h2 className="font-semibold flex items-end text-[5rem] p-2 pt-0 bg-gradient-to-r from-[#ffb6ff] to-[#b344ff] bg-clip-text text-transparent ">
          {category}
        </h2>
      </div>

      <Layout>
        <div className="h-screen bg-transparent" />
        <div className="  h-screen  ">
          <section className="flex flex-col space-y-2 mx-5">
            {" "}
            <form className="flex mx-5 " onSubmit={submitHandler}>
              <input
                className="flex w-[300px] font-semibold bg-transparent text-[2rem] sm:text-[4rem] placeholder:bg-gradient-to-r placeholder:from-[#ffb6ff] placeholder:to-[#b344ff] placeholder:bg-clip-text placeholder:text-transparent sm:w-[10em]   md:w-[15em]  mr-2 py-2 px-3  "
                type="text"
                placeholder="Brows Our Accessories."
                value={keyword}
                onChange={(e) => setkeyword(e.target.value)}
                required
              />
              <div className="flex  items-center ">
                <div
                  className="link-search cursor-pointer"
                  onClick={submitHandler}
                />
              </div>
            </form>
            <div class="flex p-3 md:flex-row flex-col min-h-screen realtive backdrop-blur-md shadow-xl z-10 ">
              <div className="my-5">
                <Filters category={category} />
                <div className="min-h-[100px]" />
                <div
                  className="w-[100%] gap-3 p-3  grid xl:grid-cols-4
           gird-rows-2 xs:p-12 xs:grid-cols-1 ss:grid-cols-2 md:grid-cols-4  lg:grid-col-4 sm:grid-cols-2"
                >
                  {data.products.map((product) =>
                    product.category === category ? (
                      <ProductItem
                        product={product}
                        key={product.slug}
                      ></ProductItem>
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <Pagination />{" "}
            <script
              type="module"
              src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
              nomodule
              src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            ></script>
          </section>
          <Carousel />
        </div>
      </Layout>
      <H />
    </section>
  );
}

export default CategoryScreen;
