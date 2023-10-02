import React, { useEffect, useState } from 'react'

const Effect3SingleDependency = () => {

    const [example, setexample] = useState(0);
    const [example1, setexample1] = useState(0);


    useEffect(() => {
        alert('useeffect3')
    }, [example])

    function increament() {
        setexample(example + 1)
    }
    return (
        <>
            <h4>Effect3SingleDependency - {example}, second counter - {example1}</h4>
            <button onClick={increament}>increase</button>
            <button onClick={() => (setexample((preval) => preval - 1))}>decrease</button>
            <button onClick={() => (setexample1((preval) => preval - 1))}>decrease</button>
        </>
    )
}

export default Effect3SingleDependency;

// effect3 page reload, single dependency joh value rahega uske chnage hone pe jaise example ka value change hora hai toh alert dera but example 1 hora hai toh alert nai dega ..
// jaise counter increase decrease pg refresh