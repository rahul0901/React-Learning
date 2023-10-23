import { useState } from 'react';
import './ShopIphone.css';

const ShopIphone = () => {

    const [allProducts, setProducts] = useState([{ title:"iPhone15 pro", image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§Footnote or ₹134900.00Footnote‡"}, { title:"iPhone15", image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§Footnote or ₹134900.00Footnote‡"}, { title:"iPhone14 pro", image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§Footnote or ₹134900.00Footnote‡"}, { title:"iPhoneSE", image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§Footnote or ₹134900.00Footnote‡"}])

    return(
        <>
            <div className="shopiphone-screen">
                <div className="sis-bc-1">
                    <h2>Shop iPhone</h2>
                </div>
                <div className="sis-bc-2">
                    {allProducts?.length? <div>{allProducts.map((item,index)=>(
                        <div key={index} className=''>
                            <h4>{item.title}</h4>
                            <img src= {item.image} alt="" />
                            <p>{item.description}</p>
                            <button>Buy</button>
                        </div>
                    ))}</div> : <div>Loading</div> }
                </div>
            </div>
        </>
    )
}

export default ShopIphone;