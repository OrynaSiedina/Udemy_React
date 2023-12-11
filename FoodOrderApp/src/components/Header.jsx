import React from "react";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <button>Cart ()</button>
      </nav>
    </header>
  );
};

export default Header;
