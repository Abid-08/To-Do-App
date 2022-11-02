// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PrivateROute from '../API/privateRoute';
// import React, { useState, Suspense, lazy} from 'react'
// import Tasks from '../components/todoComponents/tasks';
// import Navbar from '../components/userComponents/Navbar';
// import User from "./userContainer";

// const Todo = () => {

//     const [tasks, setTasks] = useState([{}])

    

//        const addNewTask = (newTask) => {
//         setTasks(tasks => [...tasks,newTask])
      
//         console.log(tasks,'after addition of tasks')
//        }

//        const updateCompleted = async (id,completed) => {
//         setTasks(
//           tasks.map((task) =>
//             task._id === id ? { ...task, completed: !completed } : task)
//         )
//         console.log(id)
//       }

//       const deleteTask = async (id) => {
//         const newTaskArray = tasks.filter((task) => task._id !== id)
//         console.log(newTaskArray, 'after deletion')
//         setTasks(newTaskArray)
//       }

//       const updateTodo = (id, newText) => {
//         setTasks(
//           tasks.map((task) =>
//             task._id === id ? { ...task, text: newText } : task
//           )
//         )
//       }



//   return (
//       <>
        
//         <Tasks tasks={tasks} addNewTask={addNewTask} updateCompleted={updateCompleted} updateTodo={updateTodo} onDelete={deleteTask} />

//       </>
//   )
// }

// export default Todo
