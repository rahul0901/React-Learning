import React from 'react'

const Register = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    const sendTOBackend = () =>{
        alert('data sent..')
    }
    return (
        <>
            <div>Register</div>
            <form action="" onSubmit={sendTOBackend}>
                <label htmlFor="">Username: </label>
                <input type="text" onChange={handleChange} /> <br />
                <label htmlFor="">Email: </label>
                <input type="email" /> <br />
                <label htmlFor="">Password: </label>
                <input type="password" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Register;