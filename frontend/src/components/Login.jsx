import { useNavigate } from "react-router-dom";

function Login(){
    const router = useNavigate();
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={()=> router('/')}>back to home</button>
        </div>
    )
}

export default Login;