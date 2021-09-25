import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav bg-dark">
        <div>
          <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
        </div>
        <div>
          <a style={{ borderLeft: "1px solid wheat" }} href="/home">
            Home
          </a>
          <a href="/service">Service</a>
          <a href="/about">About</a>
          <a href="/log in">Log in</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
