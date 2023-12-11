import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <Button textOnly>Cart ()</Button>
      </nav>
    </header>
  );
};

export default Header;
