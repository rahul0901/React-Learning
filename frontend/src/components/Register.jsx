import { useNavigate } from "react-router-dom";

function Register(){
    const redirect = useNavigate();
    return(
        <div>
            <h1>Register Page</h1>
            <button onClick={()=> redirect('/')}>back to home</button>
        </div>
    )
}

export default Register;