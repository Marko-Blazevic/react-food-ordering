import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Overlay = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const overlays = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </React.Fragment>
  );
};

export default Modal;
