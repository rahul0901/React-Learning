import React, { useState } from 'react';
import './Dynamic.css'

const DynamicStyle = () => {
    const [isButton, setButton] = useState(false)

    const handleButtonBehaviour = () => {
        setButton(!isButton)
    }

    const buttonStyling = isButton ? 'active-btn' : 'inactive-btn';
  return (
    <>
        <div>Dynamic Style</div>
        <button  className ={buttonStyling}  onClick={handleButtonBehaviour}>{isButton ? 'Active' : 'In-Active'}</button>
    </>
  )
}

export default DynamicStyle