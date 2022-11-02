import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomeLogin = () => {

   const navigate = useNavigate()

  return (
    <div>
      {navigate("/login")}
    </div>
  )
}

export default HomeLogin
