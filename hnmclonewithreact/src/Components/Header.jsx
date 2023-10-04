import './Header.css';
import './HeaderMedia.css';
function Header(props) {

    const { leftUl, RightUl, IClass, DownLeft } = props;

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
                                            <div className="1">1</div>
                                            <div className="2">2</div>
                                            <div className="3">3</div>
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