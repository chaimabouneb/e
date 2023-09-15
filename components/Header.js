import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
  useEffect(() => {
    const searchButton = document.querySelector(
      "nav .desktop-nav .link-search"
    );
    const closeButton = document.querySelector(".search-container .link-close");
    const desktopNav = document.querySelector(".desktop-nav");
    const searchContainer = document.querySelector(".search-container");
    const overlay = document.querySelector(".overlay");

    searchButton.addEventListener("click", () => {
      desktopNav.classList.add("hide");
      searchContainer.classList.remove("hide");
      overlay.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
      desktopNav.classList.remove("hide");
      searchContainer.classList.add("hide");
      overlay.classList.remove("show");
    });

    overlay.addEventListener("click", () => {
      desktopNav.classList.remove("hide");
      searchContainer.classList.add("hide");
      overlay.classList.remove("show");
    });

    // Mobile Version
    const menuIconContainer = document.querySelector(
      "nav .menu-icon-container"
    );
    const navContainer = document.querySelector(".nav-container");

    menuIconContainer.addEventListener("click", () => {
      navContainer.classList.toggle("active");
    });

    const searchBar = document.querySelector(
      ".mobile-search-container .search-bar"
    );
    const nav = document.querySelector(".nav-container nav");
    const searchInput = document.querySelector(
      ".mobile-search-container input"
    );
    const cancelBtn = document.querySelector(
      ".mobile-search-container .cancel-btn"
    );

    searchInput.addEventListener("click", () => {
      searchBar.classList.add("active");
      nav.classList.add("move-up");
      desktopNav.classList.add("move-down");
    });

    cancelBtn.addEventListener("click", () => {
      searchBar.classList.remove("active");
      nav.classList.remove("move-up");
      desktopNav.classList.remove("move-down");
    });
  }, []);

  return (
    <div>
      <div class="nav-container">
        <nav>
          <ul class="mobile-nav">
            <li>
              <div class="menu-icon-container">
                <div class="menu-icon">
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                </div>
              </div>
            </li>

            <li>
              <a href="#" class="link-logo"></a>
            </li>

            <li>
              <a href="" class="link-bag"></a>
            </li>
          </ul>

          <ul class="desktop-nav">
            <li>
              <a href="#" class="link-logo"></a>
            </li>
            <li>
              <a href="/Acc">Laptops</a>
            </li>
            <li>
              <a href="#">Phones</a>
            </li>
            <li>
              <a href="#">Tablets</a>
            </li>
            <li>
              <a href="#">Watch</a>
            </li>
            <li>
              <a href="/Acc">Accessories</a>
            </li>
            <li>
              <a href="#">offres</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#" class="link-search"></a>
            </li>
            <li>
              <a href="#" class="link-bag"></a>
            </li>
          </ul>
        </nav>

        <div class="search-container hide">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>
          <div class="link-close"></div>

          <div class="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="#">Shop Apple Store Online</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mobile-search-container">
          <div class="link-search"></div>
          <div class="search-bar">
            <form action="">
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>
          <span class="cancel-btn">Cancel</span>

          <div class="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="#">Shop Apple Store Online</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  );
}

export default Header;

{
  /** 
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-5  ">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div
            className="relative w-5 cursor-pointer  h-10
      opacity-75 treansition hover:opacity-100 "
          >
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="/products" className="headerLink">
          Product
        </a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Explore</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md::w-1/5">
        <Search />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full 
         bg-gradient-to-r from-pink-500 to-violet-500
         text-[10px] text-white "
            >
              5
            </span>
            <ShoppingCartIcon href="/ff" className="headerIcon" />
          </div>
        </Link>
      </div>
    </header>
  );
}
*/
}
