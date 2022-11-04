import React, { useState } from 'react'
import Icon from 'react-crud-icons'
import '../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css'
import UpdateModal from './updateModal'
import { updateCompletedRoute } from '../../API/todoRoute'
import DeleteModal from './deleteModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Task = ({ task, onDelete, updateCompleted, updateTodo }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const popUp = () => {
   !task.completed ? toast.success(`Task Image: ${task.text} Completed`,
     {position: "top-right",
   autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
}) : toast.warn(`Task: ${task.text} Not Completed`,
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
    <div className='taskOutput'>
    <div className={`task ${task.completed ? ' done' : ''}`} >
      <h3>{task.text}
      
        <div className='icons'><Icon name='edit' tooltip='Edit' theme='dark' onClick={(() => (setIsOpen(true)))} />
          {isOpen && <UpdateModal setIsOpen={setIsOpen} task={task} updateTodo={updateTodo} />}
          <Icon name='delete' tooltip='Delete' theme='dark' size='medium' style={{ color: 'black', cursor: 'pointer' }}
            onClick={() => setIsOpen2(true)} className="cross" />
            {isOpen2 && <DeleteModal setIsOpen2={setIsOpen2} onDelete={onDelete} task={task} />}
          <input className='check' type="checkbox" checked={task.completed} onClick={() => (updateCompleted(task._id, task.completed), updateCompletedRoute(task._id, task.completed),popUp())} /></div>
      </h3><h5>{task.description}</h5>
      <h6 style={{color:"white", marginLeft:'77%', marginTop:'-2%'}}>Date Created: {task.dateCreated}</h6>
      <ToastContainer toastStyle={{ backgroundColor:"pink"}}/>
    </div> 
    </div>
  )
}

export default Task
