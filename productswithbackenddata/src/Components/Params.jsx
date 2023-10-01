import React from 'react'
import { useNavigate } from 'react-router-dom';

const Params = () => {

    const goto = useNavigate();

    function goToProduct(){
        goto('/products/fetched-data-4444')
    }

    return (
        <>
            <h4 onClick={goToProduct}>Params</h4>
        </>
    )
}

export default Params;