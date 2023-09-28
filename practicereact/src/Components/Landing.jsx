import './Landing.css';
import 'font-awesome/css/font-awesome.min.css';

const Landing = (props) => {

    const { leftUl, RightUl, DownLeft, FootShop, FootCorporate, FootHelp } = props;

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
                                HnM
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
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="foot-parent">
                        <div className="foot-child-up">
                            <div className="child-up-div-one">
                                <p>Shop</p>
                                {FootShop.map((item, i) => (
                                    <a key={i}>
                                        <p>{item}</p>
                                    </a>
                                ))}
                            </div>
                            <div className="child-up-div-two">
                                <p>CORPORATE INFO</p>
                                {FootCorporate.map((item, i) => (
                                    <a key={i}>
                                        <a>{item}</a>
                                    </a>
                                ))}
                            </div>
                            <div className="child-up-div-three">
                                <p>HELP</p>
                                {FootHelp.map((item, i) => (
                                    <a key={i}>
                                        <a>{item}</a>
                                    </a>
                                ))}
                            </div>
                            <div className="child-up-div-four">
                                <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                                <a href="#">Read More <span>-&gt</span></a>
                            </div>
                        </div>
                        <div className="foot-child-down">
                            down
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;