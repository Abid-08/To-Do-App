import React from "react";
import styles from "./modal.module.css";
import '../../index.css'
import { RiCloseLine } from "react-icons/ri";
import { deleteRoute } from "../../API/todoRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({ setIsOpen2,onDelete, task }) => {

  const popUp = (x) => {
    toast.warn(x,
      {position: "top-right",
    autoClose: 2000,
 hideProgressBar: true,
 closeOnClick: true,
 pauseOnHover: false,
 draggable: true,
 progress: undefined,
 theme: "light",
 })
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen2(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} style={{marginRight:"-32px"}} onClick={() => setIsOpen2(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalActions}>
            <label>Are you sure?</label>
            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={() => (setIsOpen2(false),popUp(`Deleted ${task.text}`), onDelete(task._id), deleteRoute(task._id))}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen2(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default DeleteModal;
