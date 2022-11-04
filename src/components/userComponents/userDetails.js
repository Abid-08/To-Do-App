import React,{useState} from 'react'
import UpdateUserModal from './updateUserModal'

const UserDetails = ({user, updateUser}) => {

    const [isOpen,setIsOpen] = useState(false)

  return (

<box className='userBox'>

    <div>
      <img src={user.userImage} alt='photo'/>
      <p>Name:   <b>   {user.firstName} {user.lastName}</b></p>
      <p>Email:   <b>  {user.email}</b></p>
      <button className='btn' onClick= {(()=> (setIsOpen(true)))}>Edit Profile</button>
      {isOpen && <UpdateUserModal setIsOpen= {setIsOpen} user={user} updateUser={updateUser} />}
    </div>


    </box>
  )
}

export default UserDetails
