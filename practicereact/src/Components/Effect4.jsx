import React, { useEffect, useState } from 'react'

const Effect4 = () => {


    const [value, setCounter] = useState(0);
    const [value1, setCounter1] = useState(1);



    useEffect(()=>{
        alert('for every value increase and refresh and first visit page will give alert')
    },[value, value1])
 
    return (
        <>
            <div>Effect2</div>
            <div>Counter - {value}</div>
            <div>table of 2 - {value1}</div>
            <button onClick={() => setCounter((valueUpdate) => valueUpdate + 1)}>Increase Counter</button>
            <button onClick={() => setCounter1((valueUpdate) => (valueUpdate * 2))}>Multiple of 2</button>
        </>
    )
}

export default Effect4;