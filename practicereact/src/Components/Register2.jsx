import { useState } from "react";

const Register2 = () => {

    const [userData, setuserData] = useState({ userKaName: "", userKaEmail: "", userKaPassword: "" })

    // const router = useNavigate();

    console.log(userData, "userData")
    // const router = useNavigate();

    const handleChange = (event) => {
        // console.log(event.target.name, ": ", event.target.value)
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDatatoBackend = async (event) => {
        event.preventDefault();
        if (userData.userKaName && userData.userKaEmail && userData.userKaPassword) {
            if (userData.userKaPassword.length > 6) {
                const response = await axios.post('http://localhost:8000/api/v1/auth/register', {userData}); 

                if(response.data.success){
                    alert('Registration Successfull')
                    setuserData({ userKaName: "", userKaEmail: "", userKaPassword: "" })
                    // router('/')
                }
                // alert(" congratulations.. ye gaya 7 crore apke bank mai")

            }
            else{
                alert("password 6 letter se bada rkh bhai..")
            }
        }
        else {
            alert('abe detail toh bhaar phele')
        }
    }

    return (
        <>
            <div>Register 2</div>

            <form onSubmit={sendDatatoBackend}>
                <label>Name</label> <br />
                <input type="text" name="userKaName" onChange={handleChange} /> <br />
                <label>Email</label> <br />
                <input type="email" name="userKaEmail" onChange={handleChange} /> <br />
                <label>Password</label> <br />
                <input type="password" name="userKaPassword" onChange={handleChange} /> <br />
                <input type="submit" value="Register Here" />
            </form>
        </>
    )
}

export default Register2;