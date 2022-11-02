import React, { useState } from 'react'
import Task from './task'
import Modal from "./modal";


const Tasks = ({tasks, onDelete, updateCompleted, updateTodo, setTasks, updateTasks, addNewTask}) => {

  
    const [isOpen,setIsOpen] = useState(false)
  
   

  return (
    <div className='homePage'>
        <button className='btn' onClick={() => setIsOpen(true)}  >Add Todo</button>
        
        
       


        <tasks className="tasksout">
    {isOpen && <Modal setIsOpen= {setIsOpen} tasks={tasks } addNewTask={addNewTask}  />}
      {tasks ? tasks.map((task) => 
       ( <Task key={task.id} task={task} onDelete={onDelete} updateCompleted={updateCompleted} updateTodo={updateTodo} setTasks={setTasks} updateTasks={updateTasks} />)
      ) : <div>hi </div>}
      </tasks>
    </div>
  )
}

export default Tasks
