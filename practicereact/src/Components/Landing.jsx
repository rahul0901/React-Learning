import './Landing.css';
import 'font-awesome/css/font-awesome.css';

const Landing = (props) => {

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
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <div className="nav-up-2">
                                HnM
                            </div>
                            <div className="nav-up-3">
                                {RightUl.map((item) => (
                                    <a href="#">{item}</a>
                                ))}
                            </div>
                        </div>
                        <div className="navbar-down">
                            <div className="nav-down-1">
                                {DownLeft.map((item)=>(
                                    <a href="#">
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
            </div>
        </>
    )
}

export default Landing;