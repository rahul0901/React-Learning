import { useNavigate } from "react-router-dom";

function Homepage() {
    const router = useNavigate();
    function routeToLogin() {
        router('/login')
    }

    function register(){
        router('/register')
    }

    function effect2Redirect(){
        router('/effect2')
    }

    function effect4Redirect(){
        router('/effect4')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={register}>Register Here!</button>
            {/* <button onClick={()=> router('/register')}>Register Here!</button> */}
            <button onClick={routeToLogin}>Go to Login</button>
            <button onClick={()=> router('/instagram')}>Go to Instagram</button>
            <button onClick={()=> router('/useeffect')}>Effect1</button>
            <button onClick={{effect2Redirect}}>Effect2</button>
            <button onClick={()=> router('/effect3')}>Effect3</button>
            <button onClick={{effect4Redirect}}>Effect4</button>
        </div>
    )
}

export default Homepage;