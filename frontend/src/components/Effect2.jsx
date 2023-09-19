import { useEffect, useState } from "react";

const Effect2 = () => {

    const [abc, setcounter] = useState(0)

    useEffect(()=>{
        alert("for first time when site loaded")
    },[])

    return (
        <div>
            <h1>Effect 2 - No dependency - {abc}</h1>
            <button onClick={()=>(setcounter((changevalue)=>changevalue+1))}>+</button>
        </div>

        
    )
}

export default Effect2;