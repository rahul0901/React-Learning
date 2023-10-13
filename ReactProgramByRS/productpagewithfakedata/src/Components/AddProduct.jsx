import React, { useState } from 'react'

const AddProduct = () => {

    const [newData, setData] = useState({userKaName:'', userKaPassword: '', userKaEmail:''});

    const hadleChange = (event) =>{

    }
    return (
        <>
            <form onSubmit={dataReceived}>
                <label>NAme: </label> <br />
                <input type="text" name="userKaName" onChange={hadleChange} value={newData.userKaName} /> <br />
                <label>Email: </label> <br />
                <input type="email" name="userKaName" onChange={hadleChange} value={newData.userKaName} /> <br />
                <label>Password: </label> <br />
                <input type="password" name="userKaName" onChange={hadleChange} value={newData.userKaName} /> <br />
            </form>
        </>
    )
}

export default AddProduct