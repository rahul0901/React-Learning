import React, { useState } from 'react'

const Counter = () => {

    const [count, setcount] = useState(0);

    const decreamentCounter = () =>{
        setcount(count-1);
    }

  return (
    <>
        <h2>Counter - {count}</h2>
        <button onClick={()=>(setcount((prevVAlue)=>prevVAlue+1))}>increament</button> 
        {/* here prevvalue ka value usestate mai jata hai  */}
        <button onClick={decreamentCounter}>decrease</button>
    </>
  )
}

export default Counter;