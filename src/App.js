import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      <main>
        <Header onShowCart={showCartHandler} />
        <Meals />
        {showCart && <Cart onHideCart={hideCartHandler} />}
      </main>
    </React.Fragment>
  );
};

export default App;
