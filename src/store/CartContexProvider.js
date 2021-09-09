import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = { items: [], totalAmount: 0 };

const CartContexProvider = (props) => {
  const cartReducer = (cartState, action) => {
    if (action.type === 'ADD') {
      const existingCartItemIndex = cartState.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = cartState.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...cartState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = cartState.items.concat(action.item);
      }

      const updatedTotalAmount =
        cartState.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    if (action.type === 'REMOVE') {
      const existingCartItemIndex = cartState.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = cartState.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = cartState.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...cartState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      const updatedTotalAmount = cartState.totalAmount - existingCartItem.price;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    return defaultState;
  };

  const [cartState, cartDispatchFn] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item) => {
    cartDispatchFn({ type: 'ADD', item: item });
  };
  const removeItemFromCart = (id) => {
    cartDispatchFn({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContexProvider;
