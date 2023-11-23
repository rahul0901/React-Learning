import React from 'react';
import './Header.css';
import './HeaderMedia.css';
import logo from './yt_1200-removebg-preview.png'

const Header = () => {
    return (
        <>
            <div className="header-screen">
                <div className="header-parent">
                    <div className="header-child">
                        <div className="header-logo">
                            <div className="header-menubar">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div className="header-youtube-logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="header-searchbox">
                            <div className="header-search">
                                <input type="text" placeholder='Search' />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="header-voice">
                                <i class="fa-solid fa-microphone"></i>
                            </div>
                        </div>
                        <div className="header-profile">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-brands fa-chromecast"></i>
                            <i class="fa-regular fa-bell"></i>
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;