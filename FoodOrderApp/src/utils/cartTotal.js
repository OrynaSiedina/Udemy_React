export 
function cartTotal(cartCtx) {
  const total = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  return total;
}
