import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const route = useNavigate();

    function goToHome(){
        route('/')
    }
  return (
    <>
    <div>Login page</div>
    <button onClick={()=> route('/')}>Go To Home</button>
    </>
  )
}

export default Login;