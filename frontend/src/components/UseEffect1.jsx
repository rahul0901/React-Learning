import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UseEffect1() {

    const redirect = useNavigate();

    const [number, setcounter] = useState(0);

    useEffect(() => {
        alert("Rendered")
    })

    function backToHome() {

        redirect('/')
    }

    return (
        <div>
            <h1>Use Effect - {number}</h1>
            <button onClick={() => setcounter((changevalue) => changevalue + 1)}>value</button>
            <button onClick={backToHome}>Homepage</button>
        </div>
    )
}

export default UseEffect1;