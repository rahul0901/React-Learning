import { useEffect, useState } from "react";

function Effect3(){

    const [item, setcounter] = useState(0);

    useEffect(()=> {
        alert("single dependency means first load then on counter state load")
    }, [item])

    return(
        <div>
            <h1>Effect 3 - single dependency - {item}</h1>
            <button onClick={()=> setcounter((prevvalue)=>prevvalue+1)}>+</button>
        </div>
    )
}

export default Effect3;