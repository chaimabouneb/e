import React from "react";
import GameCard from "../components/cardgame/GameCard";
const Trending = () => {
  const games = [
    {
      id: 1,
      price: 12,
      name: "Beats Studio Pro Wireless Headphones",
      slug: "sandstone",
      image: "/",
    },
    {
      id: 2,
      price: 14,
      name: "Assassin's Creed Valhalla",
      slug: "assassin-creed",
      image:
        "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QXNzYXNzaW4ncyUyMENyZWVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      price: 42,
      name: "FIFA 23",
      slug: "fifa-23",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      price: 27,
      name: "The Legend of Zelda: Breath of the Wild",
      slug: "the-legend-of-zelda",
      image:
        "https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <section className=" min-h-screen  bg-[#E7ECEE] ">
      <div className="p-20 space-y-4">
        <h1>
          <span className="  leading-10 tracking-[-0.01em] text-1xl  text-black md:text-4xl ">
            Best Sellers.
          </span>
          <span className="font-extralight leading-10 tracking-[-0.01em] text-1xl opacity-75 text-black md:text-4xl ">
            The best way to buy the products you love.
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3  grid-flow-row-dense">
          <div className="card">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={
                "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              }
              slug={""}
              price={3.99}
            />
          </div>

          <div className="card">
            <GameCard
              key={1}
              gameName={"AirPods(3rd generation)"}
              imageUrl={
                "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              }
              slug={""}
              price={3.99}
            />
          </div>
          <div className="card">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={"/head.jpg"}
              slug={""}
              price={3.99}
            />
          </div>
          <div className="card  col-span-2">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={"/head.jpg"}
              slug={""}
              price={3.99}
            />
          </div>
          <div className="card row-span-2">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={"/head.jpg"}
              slug={""}
              price={3.99}
            />
          </div>
          <div className="card">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={"/head.jpg"}
              slug={""}
              price={3.99}
            />
          </div>
          <div className="card">
            <GameCard
              key={1}
              gameName={"Beats Studio Pro Wireless Headphones"}
              imageUrl={"/head.jpg"}
              slug={""}
              price={3.99}
            />
          </div>
        </div>
      </div>

      {/** 
        <div className="flex gap-8 flex-wrap">
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

        <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
          Featured Game
        </h3>
      </div>*/}
    </section>
  );
};
export default Trending;
