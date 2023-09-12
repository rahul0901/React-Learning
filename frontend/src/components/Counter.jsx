import { useNavigate } from "react-router-dom";
import { useState } from 'react'


const Counter = () => {

    const [counter, setcounter] = useState(0);
    // useState(0) -- 0 ki idhr kuch bhi likho woh counter variable mai store hoga.. agar apneko counter var ko change krna hai toh setcounter ko chnage krne ka jaise niche kiya hai

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={()=> setcounter((updateUsestate)=>updateUsestate+1)}>Increase Counter</button>
            {/* setcounter ka call back function mai joh updateUsestate likha hai woh uska value useState(0) udhr pe change hoga mtlb 0 change hoga aur 0 change hua matlab const counter bhi change hona hai */}
            <button onClick={()=> setcounter((decrement)=>decrement-1)}>Decrease Counter</button>
        </div>
    )
}

export default Counter;