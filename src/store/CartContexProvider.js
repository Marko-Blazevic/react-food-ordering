import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = { items: [], totalAmount: 0 };

const CartContexProvider = (props) => {
  const cartReducer = (cartState, action) => {
    if (action.type === 'ADD') {
      const updatedCartItems = cartState.items.concat(action.item);
      const updatedTotalAmount =
        cartState.totalAmount + action.item.price * action.item.amount;
      return { items: updatedCartItems, totalAmount: updatedTotalAmount };
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
