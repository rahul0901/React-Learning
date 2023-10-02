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

export default LightOnOff;