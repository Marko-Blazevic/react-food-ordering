import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContexProvider from './store/CartContexProvider';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = (event) => {
    setShowCart(false);
  };

  return (
    <CartContexProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartContexProvider>
  );
};

export default App;
