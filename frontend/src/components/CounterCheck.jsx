import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function CounterCheck() {

    const [counts, changecounters] = useState(0);
    const routeTo = useNavigate();


    useEffect(() => {
        if (counts%10 == 0) {
            alert(`your count is ${counts}`)
        }
    }, [counts])

    const GoToHome = () => {
        routeTo('/')
    }

    return (
        <div>
            <h1>Counter alert at every 10 counts.. - {counts}</h1>
            <button onClick={() => changecounters((changevalueofcounts) => changevalueofcounts + 1)}>+</button>
            <button onClick={GoToHome}>back to home..</button>
        </div>
    )

}

export default CounterCheck;

