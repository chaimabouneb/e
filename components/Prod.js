import React from "react";

const Prod = () => {
  return (
    <div
      className="w-fit h-[300px] text-black p-4 border border-gary-300
      rounded-lg group overflow-hidden "
    >
      <div className="w-[200px] relative">
        <img
          className="w-[300px] h-[260px]  scale-90 hover:scale-100 transition-transform duration-300"
          src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        />
      </div>{" "}
    </div>
  );
};

export default Prod;
