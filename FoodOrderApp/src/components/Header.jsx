import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import { UserProgressContext} from "./store/UserProgress";
import { CartContext } from "./store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
