import { useEffect, useState } from "react";

const Effect4 = () => {
    const [count, valuechanger] = useState(0);
    const [count1, valuechanger1] = useState(0);


    useEffect(()=>{
        alert('on intial site load fr dono usestate chnages pe')
    }, [count,count1]);
    return(
        <div>
            <h1>Effect4 - multiple dependency -:   {count}, {count1}</h1>
            <button onClick={()=>(valuechanger((setvalue)=>setvalue+1))}>+</button>
            <button onClick={()=>(valuechanger1((setvalue1)=>setvalue1-1))}>-</button>
        </div>
    )
};

export default Effect4;