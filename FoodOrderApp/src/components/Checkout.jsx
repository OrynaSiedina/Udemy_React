import { useContext } from "react";
import { Button, Modal, Input } from "./UI";
import { CartContext } from "./store/CartContext";
import  {UserProgressContext } from "./store/UserProgress";
import { priceFormater, cartTotal } from "../utils";
const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userCxt = useContext(UserProgressContext);

  function handleClose() {
    userCxt.hideCheckout();
  }
  return (
    <Modal open={userCxt.progress === "checkout"} onClose={handleClose}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {priceFormater.format(cartTotal(cartCtx))} </p>
        <Input lable="Full Name" type="text" id="full-name" />
        <Input lable="Email" type="email" id="email" />
        <Input lable="Street" type="text" id="street" />
        <div className="control-row">
          <Input lable="Postal Code" type="text" id="postal-code" />
          <Input lable="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={handleClose} textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
