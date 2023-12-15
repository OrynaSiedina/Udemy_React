import { useContext } from "react";
import { priceFormater } from "../utils/priceFormater";
import { Button, Modal } from "./UI";
import { UserProgressContext } from "./store/UserProgress";
import { CartContext } from "./store/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function closeCartHandler() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => cartCtx.addItem({ ...item, quantity: 1 })}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{priceFormater.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={closeCartHandler}>
          Close
        </Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
