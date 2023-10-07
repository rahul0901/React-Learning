import React from 'react';
import './Header.css';
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
                            {navUL.map((item, index)=>(
                                <a key={index}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="head-3">
                            3
                        </div>
                        <div className="head-4">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;