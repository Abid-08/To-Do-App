import React, { useState } from "react";
import styles from "./modal.module.css";
import '../../index.css'
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { addRoute } from "../../API/todoRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ setIsOpen, addNewTask }) => {

  const [text, setText] = useState()
  const [description, setDescription] = useState()

  const addTodo = async (text,description) => {
    const res = await addRoute(text,description)
    console.log(description)
    addNewTask(res)
    console.log(res)
  }

  const popUp = (x) => {
    toast.success(x,
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
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
         
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={styles.modalActions}>
            <form className="add-form">
              <div className="form-control">
                <label>Title</label>
                <input className={styles.textboxModal} type='text' placeholder='Add Task Name' value={text} onChange={(e) => setText(e.target.value)} />
              </div>

              <div className="form-control">
                <label>Description</label>
                <input className={styles.textboxModal} type='text' placeholder='Add Description' value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

            </form>

            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={() => (setIsOpen(false), console.log(text, 'text in add'), addTodo(text, description),popUp(`${text} added to the list`))}>
                Add
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
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

export default Modal;
