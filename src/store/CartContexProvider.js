import CartContext from './cart-context';

const CartContexProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
