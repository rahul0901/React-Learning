import React from 'react'
import {useNavigate} from 'react-router-dom';

const Product = () => {
    const go = useNavigate()

    function goto(){
        go('/singleproduct/123456789')
    }
  return (
    <>
        <div>Product</div>
        <button onClick={goto}>go to singleproduct</button>
    </>
  )
}

export default Product;