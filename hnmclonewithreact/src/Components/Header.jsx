import './Header.css';
function Header(props) {

    const { leftUl, RightUl, DownLeft } = props;

    return (
        <>
            <div id='screen'>
                <div id="header">
                    <div id="navbar">
                        <div className="navbar-up">
                            <div className="nav-up-1">
                                {leftUl.map((item) => (
                                    <a href="#">{item}</a>
                                ))}
                                <i className="fas fa-ellipsis"></i>
                                {/* fas fa-ellipsis 
                                fa-solid fa-ellipsis*/}
                            </div>
                            <div className="nav-up-2">
                                <img src="https://www2.hm.com/content/dam/courtesypageimages/down_for_maintenance.jpeg" alt="" width="100%" height="100%" />
                            </div>
                            <div className="nav-up-3">
                                {RightUl.map((item, i) => (
                                    <a href="#" key={i}>{item}</a>
                                ))}
                            </div>
                        </div>
                        <div className="navbar-down">
                            <div className="nav-down-1">
                                {DownLeft.map((item, i) => (
                                    <a href="#" key={i}>
                                        <a href="#">{item}</a>
                                    </a>
                                ))}
                            </div>
                            <div className="nav-down-2">
                                <div className="nav-down-2-input">
                                    <input type="text" placeholder='Search Products'/>
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