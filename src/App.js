import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/userComponents/Navbar";
import Login from "./components/userComponents/login";
import React, { useState, Suspense, lazy } from 'react'
import UserDetails from "./components/userComponents/userDetails";
import PrivateROute from "./API/privateRoute";
import HomeRoute from "./API/homeRoute";
import Redirect from "./API/redirect"
const Tasks = lazy(() => import('./components/todoComponents/tasks'))

function App() {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: ''
  })

  const [tasks, setTasks] = useState([{}])

  const settingUser = (id, email, firstname, lastname, password, profilePhoto) => {
    const newUser = { firstName: firstname, lastName: lastname, email: email, password: password, id: id, image: profilePhoto }
    console.log(newUser, 'newuser')
    setUser(newUser)
  }

  const updateUser = (firstname, lastname) => {
    setUser({ ...user, firstName: firstname, lastName: lastname })
  }

  const settingTasks = (tasksIncoming) => {
    setTasks(tasksIncoming)

    console.log(tasks, 'tasks setting')
  }

  const addNewTask = (newTask) => {
    setTasks(tasks => [...tasks, newTask])

    console.log(tasks, 'after addition of tasks')
  }

  const updateCompleted = async (id, completed) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !completed } : task)
    )
    console.log(id)
  }

  const deleteTask = async (id) => {
    const newTaskArray = tasks.filter((task) => task._id !== id)
    console.log(newTaskArray, 'after deletion')
    setTasks(newTaskArray)
  }


  const updateTodo = (id, newText, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, text: newText, description: newDescription } : task
      )
    )
  }


  return (

    <Router>
      <Routes>

        <Route path='/' element={
          <HomeRoute>
            < Login settingUser={settingUser} settingTasks={settingTasks} />
          </HomeRoute>
        }>
        </Route>

        <Route path='/home'
          element={<PrivateROute>  
            <Navbar user={user} />
            <Suspense fallback={<div style={{ color: 'white' }}>List loading</div>}>
              <Tasks tasks={tasks} addNewTask={addNewTask} updateCompleted={updateCompleted} updateTodo={updateTodo} onDelete={deleteTask} />
            </Suspense>
          </ PrivateROute>}
        >
        </Route>

        <Route path='/user' element={
          <PrivateROute>
            <Navbar user={user} />
            <UserDetails user={user} updateUser={updateUser} />
          </PrivateROute>}>
        </Route>

       <Route path="/*" element={
        <Redirect />
       }>
        
       </Route>

      </Routes>
    </Router>
  );
}

export default App;
