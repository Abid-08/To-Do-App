import React, { useState } from "react";
import styles from "./modal.module.css";
import '../../index.css'
import { RiCloseLine } from "react-icons/ri";
import { updateRoute } from "../../API/todoRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateModal = ({ setIsOpen, task, updateTodo }) => {

  const [text, setText] = useState(task.text)
  const [description, setDescription] = useState(task.description)

  const popUp = (x) => {
   toast.info(x, {
position: "top-right",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
});
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
                <input className={styles.textboxModal}  type='text' placeholder='Add Description' value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

            </form>

            <div className={styles.actionsContainer}>
              <button className={styles.addBtn} onClick={() => (setIsOpen(false), updateRoute(task._id, text,description), updateTodo(task._id, text,description),popUp(`Task updated to Title: ${text} , Description: ${description}`))}>
                Update
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

export default UpdateModal;
