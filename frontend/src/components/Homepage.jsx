import { useNavigate } from "react-router-dom";

function Homepage() {
    const router = useNavigate();
    function routeToLogin() {
        router('/login')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={routeToLogin}>Go to Login</button>
        </div>
    )
}

export default Homepage;