import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0);

    const [todo, setTodo] = useState([]);

    const addToDO = () => {
        setTodo([...todo, 'New Todo'])
    }

    // const baadaCalculation = calculate(count);  //ye lineke wjahe se calculation hora tha fr counter chnage hora tha webpage pe prr todo ke change mai bhi delay hora tha joh nai hona chiaye cause todo has no connection with count..so yaha pe usememo hook use kiya taaki bada apna performance best ho code ka aur render hone restrict kre count ko jab uska use nai haiaur use memo joh hai woh last value store kreke rkh ta hai "cache last value".. so niche usememo implementation hai

    const baadaCalculation = useMemo(()=> calculate(count), [count])

    return (
        <>
            <h2>UseMemo</h2>
            <h4>baadaCalculation - {baadaCalculation}</h4>
            <h4>COunt - {count}</h4>
            <button onClick={()=>setCount((val)=>val+1)}>+</button>
            <h4>this is todo</h4>
            <button onClick={addToDO} >Add TOdo</button>
            {todo.map((item)=>(
                <p>{item}</p>
            ))}
        </>
    )
}

function calculate(count){
    for(let i = 0; i<1000000000; i++){
        count+=1;
    }
    return count;
}

export default UseMemo;