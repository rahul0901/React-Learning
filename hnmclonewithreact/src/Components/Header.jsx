import { useState } from 'react';
import './Header.css';
import './HeaderMedia.css';
function Header(props) {

    const { leftUl, RightUl, IClass, DownLeft, Hover11, Hover12, Hover13, Hover14, Hover21, Hover31, Hover32 } = props;

    const [signIn, setSignIn] = useState(false);

    const [userKaData, setUserKaData] = useState({ userKaEmail: '', userKaPassword: '' })

    const handleOnChangeInput = (event) => {
        setUserKaData({...userKaData, [event.target.name] : event.target.value});
    }

    const sendDataToBackend = (event) => {
        event.preventDefault()
        if(userKaData.userKaEmail && userKaData.userKaPassword){
            toast.success
        }
    }

    const openSignin = () => {
        setSignIn(true);
    }

    const closeSignin = () => {
        setSignIn(false);
    }

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
                                    <a href="#" key={i}>{IClass[i]} <span>{item}</span>
                                        <div className="sign-in">
                                            <button onClick={openSignin}>{item}</button>
                                            {signIn && (
                                                <div className="signin-parent">
                                                    <div className="sigin-child">
                                                        <div className="sigin-content-main">
                                                            <div className="sigin-content-main-1">
                                                                <h2>Sign In</h2>
                                                                <i onClick={closeSignin} class="fa-solid fa-xmark fa-2xl"></i>
                                                            </div>
                                                            <div className="sigin-content-main-2">
                                                                <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                                                                <form>
                                                                    <div className="sigin-form-email">
                                                                        <label>Email <span> *</span></label> <br />
                                                                        <input type="email" name="userKaEmail" onChange={handleOnChangeInput} id="" required /> <br />
                                                                    </div>
                                                                    <div className="sigin-form-pass">
                                                                        <label>Password <span> *</span></label> <br />
                                                                        <input type="password" name="userKaPassword" onChange={handleOnChangeInput} id="" required /> <br />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="sigin-content-main-3">
                                                                <div className="sigin-remember">
                                                                    <input type="checkbox" name="" id="" /> <br />
                                                                    <label>
                                                                        Remember Me
                                                                    </label>
                                                                </div>
                                                                <a>Forgot Password?</a>
                                                            </div>
                                                            <div className="sigin-content-main-4">
                                                                <div className="main-content-4-1">
                                                                    <button onSubmit={sendDataToBackend}>Signin</button>
                                                                </div>
                                                                <div className="main-content-4-2">
                                                                    <button>Become a member</button>
                                                                </div>
                                                                <div className="main-content-4-3">
                                                                    <a>Membership info</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <p>My account</p>
                                            <p>Membership info</p>
                                            <p>Not a member yet? Join here!</p>
                                        </div>
                                    </a>
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