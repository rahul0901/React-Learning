import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mantra = () => {
    const goto = useNavigate();

    const [mantraCountStoring, updatemantravalue] = useState(0);



    function gotoHomepage(){
        goto('/')
    }
    return (
        <>
            <div>
                <h1>Your Chanting Count - {mantraCountStoring}</h1>
                <button onClick={()=> updatemantravalue((preValue)=> preValue+1)}>Increament Chanting</button>
                <button onClick={gotoHomepage}>Go to Homepage</button>
            </div>
        </>
    )
}

export default Mantra;