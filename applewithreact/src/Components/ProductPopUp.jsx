import React from 'react'

const ProductPopUp = ({ product, onClose }) => {
    return (
        <>
            <div className="product-popup-parent">
                <div className="product-popup">
                    <div className="popup-close">
                        <button onClick={onClose}>X</button>
                    </div>
                    {/* <div className="popup-product-details">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description}</p>
                        <button onClick={onClose}>Close</button>
                    </div> */}
                    {/* <div className="popup-product-foot">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium nihil harum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium nihil harum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium nihil harum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium nihil harum.</p>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default ProductPopUp;