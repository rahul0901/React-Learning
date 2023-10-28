import React from 'react'

const ProductPopUp = ({ product, onClose }) => {

    const phoneFeaturepara = [{ logo: <i class="fa-solid fa-greater-than"></i>, para: '15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island' }, { logo: <i class="fa-solid fa-greater-than"></i>, para: '15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island' }, { logo: <i class="fa-solid fa-greater-than"></i>, para: '15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island' }, { logo: <i class="fa-solid fa-greater-than"></i>, para: '15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island' }, { logo: <i class="fa-solid fa-greater-than"></i>, para: '15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island' }]
    return (
        <>
            <div className="product-popup-parent">
                <div className="product-popup">
                    <div className="popup-close">
                        <button onClick={onClose}>X</button>
                    </div>
                    <div className="popup-phone-selector">
                        <p>{product.title2}</p>
                        <p>{product.title2}</p>
                        <p>{product.title2}</p>
                        <p>{product.title2}</p>
                    </div>
                    <div className="popup-product-details">
                        <div className="popup-product-details-phone">
                            <div className="popup-product-details-phone-left">
                                <div className="phone-left-btn">
                                    <button>iPhone15</button>
                                    <button>iPhone15 Pro</button>
                                </div>
                                <div className="phone-left-image">
                                    <img src={product.image} alt="" />
                                </div>
                            </div>
                            <div className="popup-product-details-phone-right">
                                <div className="phone-right-contents">
                                    <h4>iPhone15 Pro</h4>
                                    <div className="right-content-description">
                                        <p>{product.description}</p>
                                        <button>Buy</button>
                                    </div>
                                </div>
                                <div className="phone-right-contents-2">
                                    {phoneFeaturepara?.length ? <div>{phoneFeaturepara.map((item, index) => (
                                        <div key={index} className='single-features'>
                                            <p>{item.logo}</p>
                                            <p>{item.para}</p>
                                        </div>
                                    ))}</div> : <div>Loading</div>}
                                </div>
                            </div>
                        </div>
                        <div className="popup-product-details-phone-offercard">
                            card
                        </div>
                    </div>
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