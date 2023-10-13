import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {

    const [newData, setData] = useState({ userKaName: '', userKaPassword: '', userKaEmail: '' });

    const hadleChange = (event) => {
        setData({ ...newData, [event.target.name]: event.target.value })
    }

    const dataReceived = async (event) => {
        event.preventDefault()
        if (newData.userKaName && newData.userKaEmail && newData.userKaPassword) {
                const jsonData = await axios.post('https://fakestoreapi.com/products', { title: newData.userKaName, price: newData.userKaEmail, image: newData.userKaPassword })

                console.log(jsonData.data)
                alert('User Added')
                setData({ userKaName: '', userKaPassword: '', userKaEmail: '' })
        }
        else {
            alert('saab bhaar')
        }
    }
    return (
        <>
            <form onSubmit={dataReceived}>
                <label>NAme: </label> <br />
                <input type="text" name="userKaName" onChange={hadleChange} value={newData.userKaName} /> <br />
                <label>Email: </label> <br />
                <input type="email" name="userKaEmail" onChange={hadleChange} value={newData.userKaEmail} /> <br />
                <label>Password: </label> <br />
                <input type="password" name="userKaPassword" onChange={hadleChange} value={newData.userKaPassword} /> <br />
                <input type="submit" value="Add New User" />
            </form>
        </>
    )
}

export default AddProduct