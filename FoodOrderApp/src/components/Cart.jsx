import { useContext } from "react";
import { priceFormater } from "../utils/priceFormater";
import { Button, Modal } from "./UI";
import { UserProgressContext } from "./store/UserProgress";
import { CartContext } from "./store/CartContext";
import CartItem from "./CartItem";
import { cartTotal } from "../utils/cartTotal";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart"?handleCloseCart:null}>
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
      <p className="cart-total">{priceFormater.format(cartTotal(cartCtx))}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length>0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
