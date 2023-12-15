import React from "react";
import { priceFormater } from "../utils/priceFormater";

const CartItem = ({name,quantity,price,onDecrease,onIncrease},) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {priceFormater.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
