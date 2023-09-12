import { useNavigate } from "react-router-dom";

function Register(){
    const redirect = useNavigate();

    function goToCounter(){
        redirect('/counter')
    }
    return(
        <div>
            <h1>Register Page</h1>
            <button onClick={()=> redirect('/')}>back to home</button>
            <button onClick={goToCounter}>Go To Counter</button>
        </div>
    )
}

export default Register;