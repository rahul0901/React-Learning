import React, { useEffect, useState } from 'react'

const Effect2EmptyDependency = () => {

    const [example, setexample] = useState(0);

    useEffect(() => {
        alert('useeffect2')
        if(example === 4){
            alert('4 arrived')
        }
    }, [])

    function increament() {
        setexample(example + 1)
    }
    return (
        <>
            <h4>Effect2EmptyDependency - {example}</h4>
            <button onClick={increament}>increase</button>
            <button onClick={() => (setexample((preval) => preval - 1))}>decrease</button>
        </>
    )
}

export default Effect2EmptyDependency;

// effect1 har ek changes pe alert ya action krta hai..
// jaise counter increase decrease pg refresh