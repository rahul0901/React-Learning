import React from 'react';
import './Header.css';
import './MediaHeader.css'
import logo from './open_graph_logo-removebg-preview.png';

const Header = (props) => {

    const { navUL, HeadHover1, HeadHover2, HeadHover3 } = props;
    return (
        <>
            <div className="screen">
                <div className="head-parent">
                    <div className="head-child">
                        <div className="head-1">
                            <img src={logo} alt="" />
                        </div>
                        <div className="head-2">
                            {navUL.map((item, index) => (
                                <a key={index}>
                                    {item}
                                    <div className="head-2-hover-contents">
                                        <div className="hover-contents-child">
                                            <div className="hover-contents-1">
                                                <h2>Shop</h2>
                                                {HeadHover1.map((item, index) => (
                                                    <a key={index}> {item} </a>
                                                ))}
                                            </div>
                                            <div className="hover-contents-2">
                                                <h2>Quick Links</h2>
                                                {HeadHover2.map((item, index) => (
                                                    <a key={index}>{item}</a>
                                                ))}
                                            </div>
                                            <div className="hover-contents-3">
                                                <h2>Shop Special Stores</h2>
                                                {HeadHover3.map((item, index)=>(
                                                    <a key={index}>{item}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="head-3">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="head-4">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="head-5">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;