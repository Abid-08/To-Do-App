import React, { useState } from 'react'
import SignUpModal from './signUpModal'
import '../../index.css'
import { Link, redirect } from 'react-router-dom'
import { signInRoute, getRoute } from "../../API/userRoute"
import { getAllRoute } from '../../API/todoRoute'
import ForgotModal from './forgotModal'


const Login = ({settingUser, settingTasks}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2]= useState(false)
  const [isOpen3, setisOpen3] = useState(false)

  const callApi = async () => {
    const res = await signInRoute(email, password)
    console.log(res)
    const data = await getRoute(res[1])
    console.log(data)
    const tasks = await getAllRoute()
    console.log(tasks)
    settingUser(res[1],data.email,data.FirstName,data.LastName,password)
settingTasks(tasks)
  }

  const checkemailpassword = async (e ) => {
    console.log(e, "checkemailpassword")
    if(e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if(e.target.name === 'password') {
      setPassword(e.target.value)
    }
    }
    console.log(email, "setEmail")
    console.log(password, "setPassword")

  return (
    <div class="card">
      <div class="card-body">
        <box className='box1'>
        <div className='loginpage'>
<form className='loginForm' >
          <h3 style={{fontFamily:"sans-serif", margin:'3px', marginLeft:'-68%' , fontSize:'larger'}}>Email: </h3>
          <input type='email' placeholder='abc@gmail.com' name='email' className='emailText' onChange={checkemailpassword} />
          <h3 style={{fontFamily:"sans-serif", margin:'3px', marginLeft:'-56%' , fontSize:'larger'}}>Password:</h3>
          <input type='password' placeholder='password' name='password' className='passwordText' onChange={checkemailpassword}  />



         <Link to='/home'><button className='btn' style={{backgroundColor:'blue'}} onClick={callApi} >Login</button></Link>
         
          </form>
          <button className='btn' style={{backgroundColor:'blue'}}  onClick={() => ( setIsOpen(true))}>Sign Up</button>
          <button className='btn' style={{backgroundColor:'orange'}} >SignUp with Google</button>
          <button className='btn' style={{backgroundColor:'orange'}} onClick={() => setIsOpen2(true)}>Forgot Password?</button>

          {isOpen && <SignUpModal setIsOpen={setIsOpen} settingUser={settingUser} settingTasks={settingTasks}/>}
          {isOpen2 && <ForgotModal setIsOpen2={setIsOpen2} settingUser={settingUser} settingTasks={settingTasks}/>}
          
        </div>
        </box>
      </div>
    </div>
  )
}

export default Login
