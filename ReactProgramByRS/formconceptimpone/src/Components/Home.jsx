import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const route = useNavigate()

    const [userData, setData] = useState({ userkaname: "", userkaemail: "", userkapassword: "" })
    console.log(userData, 'userData')

    const handlechange = (event) => {
        // console.log(event.target.name, ": ", event.target.value)
        setData({ ...userData, [event.target.name]: event.target.value })
    }

    const Submit = (event) => {
        event.preventDefault();
        if (userData.userkaname && userData.userkaemail && userData.userkapassword) {
            if(userData.userkapassword.length>=6){
                alert('data submitted')
                setData({ userkaname: "", userkaemail: "", userkapassword: "" })
                route('/')
            }
            else{
                alert('password should be long')
            }
        }
        else {
            alert('fill all fields')
        }
    }

    return (
        <>
            <div>Home</div>
            <form onSubmit={Submit}>
                <label>Username: </label> <br />
                <input type="text" onChange={handlechange} name='userkaname' /> <br />
                <label>Useremail: </label> <br />
                <input type="email" onChange={handlechange} name='userkaemail' /> <br />
                <label>Userpassword: </label> <br />
                <input type="password" onChange={handlechange} name='userkapassword' /> <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Home;