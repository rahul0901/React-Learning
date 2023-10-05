import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const PostNewProduct = () => {

    const [newProduct, setProduct] = useState({ productTitle: '', productPrice: '', productImage: '' });

    const handleOnChange = (event) => {
        setProduct({ ...newProduct, [event.target.name]: event.target.value });
    }

    const sendData = async (event) => {
        event.preventDefault()
        if (newProduct.productTitle && newProduct.productPrice && newProduct.productImage) {
            try {
                const jsonData = await axios.post('https://fakestoreapi.com/products', { title: newProduct.productTitle, price: newProduct.productPrice, image: newProduct.productImage })

                console.log(jsonData.data)

                toast.success('data added successfully..')

                setProduct({ productTitle: '', productPrice: '', productImage: '' })
            }
            catch (error){
                toast.error('error in adding data')
            }
        }
        else{
            toast.error('fill all info..')
        }
    }
    return (
        <>
            <div>PostNewProduct</div>
            <form onSubmit={sendData}>
                <label>Product Title: </label> <br />
                <input type="text" onChange={handleOnChange} name="productTitle" id="" value={newProduct.productTitle} /> <br />
                <label>Product Price: </label> <br />
                <input type="number" onChange={handleOnChange} name="productPrice" id="" value={newProduct.productPrice} /> <br />
                <label>Product Image: </label> <br />
                <input type="url" onChange={handleOnChange} name="productImage" id="" value={newProduct.productImage} /> <br />
                <input type="submit" value="Add Data" />
            </form>
        </>
    )
}

export default PostNewProduct;