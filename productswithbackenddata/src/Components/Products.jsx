import React from 'react'
import axios from 'axios';
import {useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                // console.log(data, "data here")
                setProducts(data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProducts()
    }, [])
    return (
        <>
            <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", width:"85%", margin:"auto"}}>
                {products.map((pro) => (
                    <div style={{ width: "28%", height: "300px", marginBottom: "10px", padding:"10px 10px"}}>
                        <img style={{ width: "50%", height: "50%", margin:"10px 0px" }} src={pro.image} />
                        <h2 style={{fontSize:"12px"}}>{pro.title}</h2>
                        <h3 style={{fontSize:"12px"}} >Price : {pro.price} $</h3>
                        <button style={{padding:"8px", fontSize:"12px",backgroundColor:"white",color:"black", outline:"none" }}>Add to cart</button>
                    </div>
                ))}
            </div> : <div>Loading...</div>}</div>
        </>
    )

    // const { id } = useParams();
    // return (
    //     <>
    //         <div>Products - {id} </div>
    //     </>
    // )
}

export default Products;