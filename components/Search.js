import React from "react";

const Search = () => {
  return (
    <div class="flex px-10 group">
      <div class=" ease-in-out duration-1000 group-hover:w-full group-focus-within:w-full group-focus-within:bg-red-200 flex group-hover:bg-red-200 items-center justify-between w-0 rounded-full shadow-xl p-1.5 sticky">
        <button class="invisible group-hover:visible  group-focus-within:visible ease-linear duration-500 opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon w-9 h-9"
            viewBox="0 0 512 512"
          >
            <title>Close Circle</title>
            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
          </svg>
        </button>

        <input
          class=" opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 invisible group-hover:visible group-focus-within:visible ease-in-out duration-700 font-bold uppercase rounded-full w-full h-9 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          placeholder="Search"
        />
        <button class="-ml-11 group-hover:ml-auto group-focus-within:ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-9 w-9"
            viewBox="0 0 512 512"
          >
            <title>Search Circle</title>
            <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z" />
            <circle cx="232" cy="232" r="56" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
