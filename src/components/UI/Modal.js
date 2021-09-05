import React from 'react';
import Cart from '../Cart/Cart';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Overlay = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <Cart />
    </div>
  );
};

const overlays = document.getElementById('overlay');

const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, overlays)}
      {ReactDOM.createPortal(<ModalOverlay />, overlays)}
    </React.Fragment>
  );
};

export default Modal;
