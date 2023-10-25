import { useState } from 'react';
import './ShopIphone.css';
import ProductPopUp from './ProductPopUp';

const ShopIphone = () => {

    const [allProducts, setProducts] = useState([{ title: "iPhone15 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }])

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openPopup = (product) => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    console.log(allProducts[1])

    return (
        <>
            <div className="shopiphone-screen">
                <div className="sis-bc-1">
                    <h2>Shop iPhone</h2>
                </div>
                <div className="sis-bc-2">
                    {allProducts?.length ? <div className='sis-bc-2-allproducts'>{allProducts.map((item, index) => (
                        <div key={index} className='sis-bc-2-single-products' onClick={()=> openPopup(item)}>
                            <h4>{item.title}</h4>
                            <img src={item.image} alt="" />
                            <div className="sis-bc-2-single-products-descrp">
                                <p>{item.description}</p>
                                {/* <button onClick={()=> openPopup(item)}>Buy</button> */}
                            </div>
                        </div>
                    ))}</div> : <div>Loading</div>}
                </div>
            </div>
            {selectedProduct && (
                <ProductPopUp product={selectedProduct} onClose={closePopup} />
            )}
        </>
    )
}

export default ShopIphone;