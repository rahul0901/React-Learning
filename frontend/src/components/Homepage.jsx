import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/GlobalContext";

function Homepage() {

    const { state, dispatch } = useContext(MyContext);

    const router = useNavigate();

    function routeToLogin() {
        router('/login')
    }

    function register() {
        router('/register')
    }

    function effect2Redirect() {
        router('/effect2')
    }

    function effect4Redirect() {
        router('/effect4')
    }

    function goToTerinaryy() {
        router('/terinary')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <h1>Counter : {state.counter}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={register}>Register Here!</button>
            {/* <button onClick={()=> router('/register')}>Register Here!</button> */}
            <button onClick={routeToLogin}>Go to Login</button>
            <button onClick={() => router('/instagram')}>Go to Instagram</button>
            <button onClick={() => router('/useeffect')}>Effect1</button>
            <button onClick={effect2Redirect}>Effect2</button>
            <button onClick={() => router('/effect3')}>Effect3</button>
            <button onClick={effect4Redirect}>Effect4</button>
            <button onClick={() => router('/mantras')}>Mantra Count Assists</button>
            <button onClick={() => router('/mapping')}>Go To Mapping</button>
            <button onClick={goToTerinaryy}>Ternary</button>
            <button onClick={() => router('/styled')}>Styled</button>
            <button onClick={() => router('/checkcountercounts')}>Alert Counters</button>
        </div>
    )
}

export default Homepage;