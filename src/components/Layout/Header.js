import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButtont';
import mealsImg from '../../assets/meals-pic.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Order Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Colorful food on the table' />
      </div>
    </React.Fragment>
  );
};

export default Header;
