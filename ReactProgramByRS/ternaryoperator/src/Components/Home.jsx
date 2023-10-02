import React from 'react'

const Home = (props) => {

    const { Login, SetLogin } = props;
    return (
        <>
            <div>Home</div>
            {Login ? <h2 onClick={() => SetLogin((preval) => !preval)}>Welcome to Website..</h2> : <h2 onClick={()=> SetLogin((preval) => !preval)} >Please Login</h2>}

            {Login && <h2>Active Account</h2> }
        </>
    )
}

export default Home;