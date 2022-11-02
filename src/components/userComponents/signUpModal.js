import React, { useState } from 'react'
import styles from "../todoComponents/modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { getRoute, signUpRoute } from '../../API/userRoute';
import { getAllRoute } from '../../API/todoRoute';
import FileBase64 from 'react-file-base64'



const SignUpModal = ({ setIsOpen, settingUser, settingTasks}) => {

const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')

const [profilePhoto, setProfilePhoto] = useState("");

const onSubmitHandler = async () => {
  
 console.log(profilePhoto)

  // setItems([...items, result]);
}

const callApi = async () => {
  const res = await signUpRoute(email,firstname,lastname, password, profilePhoto)
  console.log(res)
  const data = await getRoute(res[1])
  console.log(data)
  const tasks = await getAllRoute()
  console.log(tasks)
  settingUser(res[1],data.email,data.FirstName,data.LastName,password,profilePhoto)
settingTasks(tasks)
}

  return (
    <div>
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
                <label>First Name</label>
                <input className={styles.textboxModal} type='text' placeholder='Enter Name' value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Last Name</label>
                <input className={styles.textboxModal} type='text' placeholder='Enter Name' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input className={styles.textboxModal} type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input className={styles.textboxModal} type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Profile Photo</label>

                <form action="" onSubmit={onSubmitHandler}>
        {/* <input type="text" className="input-field"

          onChange={e => setProfilePhoto({ ...profilePhoto, title: e.target.value })}
        /> */}


        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setProfilePhoto(base64)}
        />
        <div className="right-align">
        </div>

      </form>
            </div>
        </form>
        




            <div className={styles.actionsContainer}>
               
            <Link to='/home'> <button className={styles.addBtn} onClick={() => (setIsOpen(false), callApi(),onSubmitHandler())}>
                Add
              </button></ Link>
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
    </>
  
    </div>
  )
}

export default SignUpModal
