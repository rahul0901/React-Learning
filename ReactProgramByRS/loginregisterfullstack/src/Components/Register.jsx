import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({ userKaName: '', userKaEmail: '', userKaPassword: '' });
    // console.log(userData)

    const route = useNavigate()

    const handleChangeData = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        if (userData.userKaName && userData.userKaEmail && userData.userKaPassword) {
            if (userData.userKaPassword.length > 8) {
                // const response = await axios.post('http://localhost:8000/register', { userData });
                const response = {data:{success:true}}
                if (response.data.success) {
                    alert('registration success');
                    setUserData({ userKaName: "", userKaEmail: "", userKaPassword: "" });
                    // route('/')
                }
                else {
                    alert(response.data.error);
                }
            } else {
                alert('password should be stronger')
            }
        }else{
            alert('fill all fields')
        }
    }

    return (
        <>
            <div>Register</div>
            <form onSubmit={sendDataToBackend}>
                <label>Name</label>
                <input type="text" name='userKaName' onChange={handleChangeData} /> <br />
                <label>Email</label>
                <input type="email" name='userKaEmail' onChange={handleChangeData} /> <br />
                <label>Password</label>
                <input type="password" name='userKaPassword' onChange={handleChangeData} /> <br />
                <input type="submit" value="Register Here" />
            </form>
        </>
    )
}

export default Register;