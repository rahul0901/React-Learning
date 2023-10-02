import React, { useEffect, useState } from 'react'

const Effect1NoDependency = () => {

    const [example, setexample] = useState(0);

    useEffect(() => {
        alert('useeffect1')
    })

    function increament() {
        setexample(example + 1)
    }
    return (
        <>
            <h4>Effect1NoDependency - {example}</h4>
            <button onClick={increament}>increase</button>
            <button onClick={() => (setexample((preval) => preval - 1))}>decrease</button>
        </>
    )
}

export default Effect1NoDependency;

// effect1 har ek changes pe alert ya action krta hai..
// jaise counter increase decrease pg refresh