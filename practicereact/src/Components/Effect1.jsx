import React, { useEffect, useState } from 'react'

const Effect1 = () => {

    const [value1, setCounter] = useState(0);

    useEffect(() => {
        alert("hii for ever little changed occurs on page it will change")
    });
    return (
        <>
            <div>Effect1</div>
            <div>Counter - {value1}</div>
            <button onClick={() => setCounter((valueUpdate) => valueUpdate + 1)}>Increase Counter</button>
        </>
    )
}

export default Effect1;