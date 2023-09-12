import { useNavigate } from "react-router-dom";

function Homepage() {
    const router = useNavigate();
    function routeToLogin() {
        router('/login')
    }

    function register(){
        router('/register')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={register}>Register Here!</button>
            {/* <button onClick={()=> router('/register')}>Register Here!</button> */}
            <button onClick={routeToLogin}>Go to Login</button>
            <button onClick={()=> router('/instagram')}>Go to Instagram</button>
        </div>
    )
}

export default Homepage;