import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Header />
        <Meals />
        <Modal />
      </main>
    </React.Fragment>
  );
};

export default App;
