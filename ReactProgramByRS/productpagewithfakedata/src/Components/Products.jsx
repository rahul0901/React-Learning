import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import './Product.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const route = useNavigate()
    const [allData, setData] = useState(0);

    useEffect(() => {
        toast.success('page rendered!')
        async function getProduct() {
            const jsonData = await axios.get('https://fakestoreapi.com/products');
            // console.log(jsonData.data)
            setData(jsonData.data)
        }

        getProduct()
    }, [])
    return (
        <>
            <div>Products</div>
            <div>
                {allData?.length ? <div className='check2'>{allData.map((item, index) => (
                    <div key={index} className='check1' onClick={()=> route(`/single-product/${item.id}`)}>
                        <img src={item.image} alt="" />
                        <h2>Product Title: {item.title}</h2>
                        <h4>Price: {item.price}</h4>
                    </div>
                ))}</div> : <div>{toast.loading('Fetching Data')}</div>}
            </div>
        </>
    )
}

export default Products;