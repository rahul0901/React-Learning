import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [number, setnumber] = useState(0);

    const goto = useNavigate();
    const goToForm = () => {
        goto('/register')
    }
    return (
        <>
            <div>this is our website..</div>
            <h2>please register if your new user..</h2>
        </>
    )
}

export default Home;