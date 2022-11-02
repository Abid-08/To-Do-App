import React, { useState } from 'react'
import styles from "../todoComponents/modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { getRoute, updatePasswordRoute } from '../../API/userRoute';
import { getAllRoute } from '../../API/todoRoute';


const ForgotModal =  ({ setIsOpen2, settingUser, settingTasks}) => {

const [email, setEmail] = useState('')
const [password,setPassword] = useState('')

const updating = async () => {
    const res = await updatePasswordRoute(email,password)
    console.log(res)
    const data = await getRoute(res._id)
    console.log(data)
    const tasks = await getAllRoute()
    console.log(tasks)
    settingUser(res._id,email,res.FirstName,res.LastName,password)
  settingTasks(tasks)
  }

  return (
    <div>
      <>
      <div className={styles.darkBG} onClick={() => setIsOpen2(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
         
          <button className={styles.closeBtn} onClick={() => setIsOpen2(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
         
          <div className={styles.modalActions}>
        <form className="add-form">
           
            <div className="form-control">
                <label>Email</label>
                <input className={styles.textboxModal} type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>New Password</label>
                <input className={styles.textboxModal} type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </form>
        




            <div className={styles.actionsContainer}>
               
            <Link to='/home'> <button className={styles.addBtn} onClick={() => (setIsOpen2(false), updating())}>
                Add
              </button></ Link>
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
    </>
  
    </div>
  )
}

export default ForgotModal
