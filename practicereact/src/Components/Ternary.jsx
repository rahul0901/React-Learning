function Ternary(props) {
    const { userLoggedIn, setLoggedIn } = props;
    return (
        <>
            <div>Ternary</div>
            {userLoggedIn ? <h1 onClick={() => setLoggedIn((preValue) => !preValue)}>Welcome to our website..</h1> : <h1 onClick={() => setLoggedIn((preValue) => !preValue)}>Please Login</h1>}

            {userLoggedIn && <h1>Login Successfully!</h1> }
        </> 
    )
}

export default Ternary;