import React, { children } from 'react';
import classes from './Modal.module.css';


const Modal = () => {
    return (
        <div>
              <div className={classes.backdrop}></div>
              <div className=
              {classes.modalBody}>
                  {children}
                </div>
        </div>
                
    );
};

export default Modal;
