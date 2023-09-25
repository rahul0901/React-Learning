import React, { useEffect, useState } from 'react'

const Effect3 = () => {

    const [value, setCounter] = useState(0);

    useEffect(()=>{
        alert('for every value increase and refresh and first visit page will give alert')
    },[value])

    return (
        <>
            <div>Effect3</div>
            <div>Counter - {value}</div>
            <button onClick={() => setCounter((valueUpdate) => valueUpdate + 1)}>Increase Counter</button>
        </>
    )
}

export default Effect3;