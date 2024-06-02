import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

const Login = () => {

    const [login, setLogin] = useState({ userKaEmail: '', userKaPassword: '' })

    // console.log(login, 'login')

    const route = useNavigate();

    const {Login, state} = useContext(AuthContext)

    const handleOnChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value })
    }

    const sendToBackend = async (event) => {
        event.preventDefault();
        if (login.userKaEmail && login.userKaPassword) {
            try {

                const response = await axios.post('http://localhost:8000/api/v1/auth/login', { login })

                if (response.data.success) {
                    localStorage.setItem('mytoken', JSON.stringify(response.data.token));
                    Login(response.data.user)
                    toast.success('login success')
                    // toast.success(response.data.message);
                    setLogin({ userKaEmail: '', userKaPassword: '' })
                    route('/')
                    // console.log(response.data.user)
                }

                else {
                    toast.error(error.data.message)
                }

            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        else {
            toast.error('All fields required..')
        }
    }

    return (
        <>
            <form onSubmit={sendToBackend}>
                <label>Email:</label>
                <input type="email" name="userKaEmail" onChange={handleOnChange} value={login.userKaEmail} /> <br />
                <label>Password:</label>
                <input type="password" name="userKaPassword" onChange={handleOnChange} value={login.userKaPassword} /> <br />
                <input type="submit" value="Login Here" />
            </form>
        </>
    )
}

export default Login;