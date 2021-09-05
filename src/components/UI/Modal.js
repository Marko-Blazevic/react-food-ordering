import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const overlays = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onHideCart} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </React.Fragment>
  );
};

export default Modal;
