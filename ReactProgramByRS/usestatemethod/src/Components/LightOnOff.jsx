import { useState } from "react";
import './LightOnOff.css'

function LightOnOff() {
    const [isOn, pressButton] = useState(false);

    const handleLightColor = isOn ? 'ON' : 'OFF';
    return (
        <>
            <div>Light on off with usestate method..</div>
            <p>Light is <span className={handleLightColor}>{isOn ? 'on' : 'off'}</span></p>
            <button onClick={() => (pressButton((change) => !change))}>{isOn ? 'Now light is ON click to OFF light' : `Now light is OFF click to ON`}</button>

        </>
    )
}

// function LightOnOff(){

//     const [LightOn, setLight] = useState(false)

//     const handleLight = LightOn? 'ON' : 'OFF'
    
//     return(
//         <>
//             <div>Light Page</div>
//             <p>Light is <span className={handleLight}>{LightOn? 'on' :'off'}</span></p>
//             <button onClick={()=>setLight((lightchange)=>!lightchange)}>
//                 {LightOn? 'light chlu hai band kro': 'light band hai chlu kro'}
//             </button>
//         </>
//     )
// }

export default LightOnOff;