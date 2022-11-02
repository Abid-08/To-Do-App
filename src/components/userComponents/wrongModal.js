import React, { useState } from "react";
import styles from "./modal.module.css";
import '../../index.css'
import { RiCloseLine } from "react-icons/ri";

const WrongModal = ({ setIsOpen}) => {


  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={styles.modalActions}>
            
Wrong credentials
            <div className={styles.actionsContainer}>
              
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrongModal;
