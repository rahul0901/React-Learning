import { useNavigate } from "react-router-dom";

function Homepage() {

    const router = useNavigate();

    function routerToLogin(){
        router("/login")
    }
    return (
        <div>
            <h1>this is h1</h1>
            <button onClick={routerToLogin}>Go to Login Page</button>
            {/* <div style= "display:flex;">
                <div className="left">
                    left
                </div>
                <div className="right" style = "color:red;">
                    right
                </div>
            </div> */}
        </div>
    )
}

export default Homepage;