import { useState } from "react";
import './DynamicStyling.css'

function DynamicStyling() {

    const [isButton, setButton] = useState(false);

    const handleButton = () => {
        setButton(!isButton)
    }

    const isButtonStyle = isButton ? 'Active-Button' : 'InActive-Button';

    return (
        <>
            <div>
                <h1>Dynamic Styling</h1>
                <button className={isButtonStyle} onClick={handleButton} >{isButton ? 'Active' : 'In-Active'}</button>
            </div>
        </>
    )
}

export default DynamicStyling;