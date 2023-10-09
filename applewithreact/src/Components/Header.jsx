import React from 'react';
import './Header.css';
import './MediaHeader.css'
import logo from './open_graph_logo-removebg-preview.png';

const Header = (props) => {

    const { navUL } = props;
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