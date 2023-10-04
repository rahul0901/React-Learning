import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const { id } = useParams();

    const [userData, setData] = useState(0)

    useEffect(() => {

        async function getData() {
            const jsonData = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(jsonData.data)
            setData([jsonData.data])
        }

        getData()
    },[id])

    return (
        <>
            <div>SingleProduct  - {id}</div>
            <div>
                {userData?.length ? <div>{userData.map((item, index)=>(
                    <div key={index} className='parent'>
                        <div className="child-1">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="child-2">
                            <h4>{item.title}</h4>
                            <h2>{item.price}</h2>
                        </div>
                    </div>
                ))}</div> : <div>Loading..</div>}
            </div>

        </>
    )
}

export default SingleProduct