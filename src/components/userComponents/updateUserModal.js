import React, { useState } from 'react'
import styles from "../todoComponents/modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { updateRoute } from '../../API/userRoute';
import FileBase64 from 'react-file-base64'



const UpdateUserModal = ({ setIsOpen, user, updateUser }) => {


  const [firstName, setFirstname] = useState(user.firstName)
  const [lastName, setLastname] = useState(user.lastName)
  const [profilePhoto, setProfilePhoto] = useState(user.userImage);




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
              <img src={user.userImage} alt='photo'/>
                <div className="form-control">
                  <label>First Name</label>
                  <input className={styles.textboxModal} type='text' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="form-control">
                  <label>Last Name</label>
                  <input className={styles.textboxModal} type='email' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-control">
                  <label>Update Profile Photo</label>
          <div className='photoButton'>      
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setProfilePhoto(base64)}
        />
      </div> 

                   </div>
              </form>
              

              <div className={styles.actionsContainer}>
                <button className={styles.addBtn} onClick={() => (setIsOpen(false), updateUser(firstName, lastName, profilePhoto), updateRoute(user.id, user.email, firstName, lastName, profilePhoto))}>
                  Update
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default UpdateUserModal
