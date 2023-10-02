import React, { useEffect, useState } from 'react'

const Effect4MultipleDependency = () => {

    const [example, setexample] = useState(0);
    const [example1, setexample1] = useState(0);

    useEffect(() => {
        alert('useeffect1')
    },[example,example1])

    function increament() {
        setexample(example + 1)
    }
    return (
        <>
            <h4>Effect4MultipleDependency - {example}, Effect4 - {example1}</h4>
            <button onClick={increament}>increase</button>
            <button onClick={() => (setexample((preval) => preval - 1))}>decrease</button>
            <button onClick={() => (setexample1((preval) => preval - 1))}>decrease</button>
        </>
    )
}

export default Effect4MultipleDependency;

// effect1 har ek changes pe alert ya action krta hai..
// jaise counter increase decrease pg refresh