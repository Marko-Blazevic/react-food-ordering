import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Header />
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
