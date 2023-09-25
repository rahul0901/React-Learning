import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Counter = () => {

    const [value, setCounter] = useState(0);

    const  goto = useNavigate();
    
    function travelToHomepage(){
        goto('/')
    }

    return (

        <>
            <div>Counter - {value}</div>
            <button onClick={()=>setCounter((valueUpdate)=>valueUpdate+1)}>Increase Counter</button>
            <button onClick={()=>setCounter((valueUpdate)=>valueUpdate-1)}>Decrease Counter</button>

            <button onClick={travelToHomepage}>Go To Home</button>

        </>

    )
}

export default Counter;