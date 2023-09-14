import { useEffect, useState } from "react";
 
function UseEffect1(){

    const [number, setcounter]= useState(0);

    useEffect(()=>{
        alert("Rendered")
    })

    return(
        <div>
            <h1>Use Effect - {number}</h1>
            <button onClick={()=>setcounter((changevalue)=>changevalue+1)}>value</button>
        </div>
    )
}

export default UseEffect1;