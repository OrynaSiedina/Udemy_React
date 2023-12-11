import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {

  const existingItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id
  );
  const existingItem = state.items[existingItemIndex];
  const updatedItems = [...state.items];

  if (action.type === "ADD_ITEM") {
    if (existingItemIndex !== -1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push( {...action.item, quantity: 1 })
    }

    return {...state, items: updatedItems}
  }
  if (action.type === "REMOVE_ITEM") {
    if(existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1)
      return {...state, items: updatedItems}
    } else {
      const updatedItem = {...existingItem, quantity: existingItem.quantity - 1}
      updatedItems[existingItemIndex] = updatedItem;
      return {...state, items: updatedItems}
    }
  }
  return state;
}
const CartContextProvider = ({ children }) => {
 const[cart,dispatchCartAction]  = useReducer(cartReducer, {items:[]});
 function addItem(item) {
  dispatchCartAction({type: 'ADD_ITEM', item: item})
  }
  function removeItem(id) {
    dispatchCartAction({type: 'REMOVE_ITEM', id: item})
  }
 const cartContext = {
  items: cart.items,
  addItem,
  removeItem,
 }
 console.log(cartContext)
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
