import './Header.css';
import './HeaderMedia.css';
function Header(props) {

    const { leftUl, RightUl, IClass, DownLeft, Hover11, Hover12, Hover13, Hover14, Hover21, Hover31, Hover32 } = props;

    return (
        <>
            <div id='screen'>
                <div id="header">
                    <div id="navbar">
                        <div className="navbar-up">
                            <div className="nav-up-1">
                                <i class="fa-solid fa-bars fa-xl"></i>
                                {leftUl.map((item) => (
                                    <a href="#">{item}</a>
                                ))}
                                <i className="fas fa-ellipsis"></i>
                            </div>
                            <div className="nav-up-2">
                                <img src="https://www2.hm.com/content/dam/courtesypageimages/down_for_maintenance.jpeg" alt="" width="100%" height="100%" />
                            </div>
                            <div className="nav-up-3">
                                {RightUl.map((item, i) => (
                                    <a href="#" key={i}>{IClass[i]} <span>{item}</span> </a>
                                ))}
                            </div>
                        </div>
                        <div className="navbar-down">
                            <div className="nav-down-1">
                                {DownLeft.map((item, i) => (
                                    <a href="#" key={i} className='hoverable-link'>{item}
                                        <div className="hover-content">
                                            <div className="tp">
                                                <div className="ladies-one">
                                                    <div className="ladies-one-one">
                                                        {Hover11.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="ladies-one-two">
                                                        {Hover12.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="ladies-one-three">
                                                        {Hover13.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="ladies-one-four">
                                                        {Hover14.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="ladies-two">
                                                    {Hover21.map((item, index) => (
                                                        <div key={index}>
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="ladies-three">
                                                    <div className="ladies-three-1">
                                                        {Hover31.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="ladies-three-2">
                                                        {Hover32.map((item, index) => (
                                                            <div key={index}>
                                                                {item}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                ))}
                            </div>
                            <div className="nav-down-2">
                                <div className="nav-down-2-input">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder='Search Products' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;