import React from "react";
import "./Header.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          SHOP.CO
        </div>

        <nav className="nav">
          <a href="#">
            Shop
            <IoChevronDownOutline className="arrow" />
          </a>

          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
          />
        </div>

        <div className="icons">
          <FiShoppingCart />
          <FaRegUserCircle />
        </div>

      </div>
    </header>
  );
};

export default Header;