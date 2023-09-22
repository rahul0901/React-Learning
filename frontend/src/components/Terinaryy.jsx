import { useNavigate } from "react-router-dom";

function Terinaryy(props) {

    const goto = useNavigate();

    const goToHome = () => {
        goto('/')
    }

    const { isLoggedIn, setIsLoggedIn } = props;

    return (
        <div>
            <h1>Terinary Operator</h1>
            {isLoggedIn ?
                <h1 onClick={() => setIsLoggedIn((preVal) => !preVal)}>Welcome</h1>
                :
                <button onClick={() => setIsLoggedIn((preVal) => !preVal)}>Please Login</button>
            }

            {isLoggedIn && <h1>Login Success</h1>}

            <button onClick={goToHome}>back to home</button>
        </div>
    )
}

export default Terinaryy;