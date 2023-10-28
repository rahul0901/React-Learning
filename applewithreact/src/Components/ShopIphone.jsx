import { useState } from 'react';
import './ShopIphone.css';
import ProductPopUp from './ProductPopUp';

const ShopIphone = () => {

    const [allProducts, setProducts] = useState([{ title: `iPhone 15 Pro &`, title2: 'iPhone 15 Pro Max', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15 &", title2: 'iPhone 15 Pro Max', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro &", title2: 'iPhone 15 Pro Max', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE &", title2: 'iPhone 15 Pro Max', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhoneSE", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone15", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }, { title: "iPhone14 pro", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312", description: "From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§ or ₹134900.00‡" }])

    const categorySlide = [{ headings: 'All Models' }, { headings: 'Shopping Guides' }, { headings: 'Ways to Save' }, { headings: 'Setup and Support' },
    { headings: 'Accessories' }, { headings: 'The iPhone Experience' }, { headings: 'Special Stores' }, { headings: 'Next' }, { headings: 'Next' }, { headings: 'Next' }]

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
                <div className="sis-bc-1-2">
                    {categorySlide?.length ? <div className='sis-bc-1-2-child'>{categorySlide.map((item, index) => (
                        <a key={index}>{item.headings}</a>
                    ))}</div> : <div>Loading</div>}
                </div>
                <div className="sis-bc-2">
                    {allProducts?.length ? <div className='sis-bc-2-allproducts'>{allProducts.map((item, index) => (
                        <div key={index} className='sis-bc-2-single-products' onClick={() => openPopup(item)}>
                            <h4>{item.title}<br />{item.title2}</h4>
                            {/* <h4>{item.title2}</h4> */}
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