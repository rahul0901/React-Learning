import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Products = () => {

    const [allData, setData] = useState(0);

    useEffect(()=>{
        toast.success('page rendered!')
        // async function getProduct(){
        //     const jsonData = await axios.get('https://fakestoreapi.com/products');
        //     console.log(jsonData.data)
        // }

        // getProduct()
    },[])
  return (
    <>
    <div>Products</div>
    </>
  )
}

export default Products