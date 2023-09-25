import React, { useEffect, useState } from 'react'

const Effect2 = () => {

    const [value, setCounter] = useState(0);

    useEffect(()=>{
         alert("effect2 only when page is reloaded..")
    },[])
    return (
        <>
            <div>Effect2</div>
            <div>Counter - {value}</div>
            <button onClick={()=>setCounter((valueUpdate)=>valueUpdate+1)}>Increase Counter</button>
        </>
    )
}

export default Effect2;