import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import { CartContext } from "./store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
