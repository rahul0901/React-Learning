import React, { useState } from 'react';
import './Header.css';
import './MediaHeader.css'
import logo from './open_graph_logo-removebg-preview.png';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const route = useNavigate();

    const { navUL, HeadHover1, HeadHover2, HeadHover3 } = props;
    const [openShop, setShop] = useState(false);
    const [formstatus, setFormStatus] = useState(false);
    const [userData, setData] = useState({ userKaName: '', userKaEmail: '', userKaPassword: '' })

    const handleFormData = (event) => {
        setData({ ...userData, [event.target.name]: event.target.value });
    }

    const submitForm = (event) => {
        event.preventDefault()
        if (userData.userKaName && userData.userKaEmail && userData.userKaPassword) {
            if (userData.userKaPassword.length >= 6) {
                toast.success('user ban gaya!')
                setData({ userKaName: '', userKaEmail: '', userKaPassword: '' })
            }
            else {
                toast.error('password to bada rakh bachii')
            }
        }
        else {
            toast.error('fill all info..')
        }
    }

    const openShopping = () => {
        setShop(true);
    }

    const handleForm = () => {
        setFormStatus(true);
    }

    const closeform = () => {
        setFormStatus(false);
        setShop(false);
    }

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
                                <a key={index} onClick={() => route(`/${item.toLowerCase()}`)}>
                                    {item}
                                    <div className="head-2-hover-contents">
                                        <div className="hover-contents-child">
                                            <div className="hover-contents-1">
                                                <h2 onClick={() => route('./Store.jsx')}>Shop</h2>
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
                                                {HeadHover3.map((item, index) => (
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
                        <div className="head-4" >
                            <i class="fa-solid fa-bag-shopping" onClick={openShopping}></i>
                            {openShop && <div className='shop-hover'>
                                <div className="shop-hover-contents">
                                    <div className="shop-hover-contents-title">
                                        <h2>Your Bag is empty.</h2>
                                        <button onClick={closeform}>X</button>
                                    </div>
                                    <a onClick={handleForm}>Sign in <span>to see if you have any saved items</span> </a>
                                    <h3>My Profile</h3>
                                    <div className="shop-hover-icons-action">
                                        <a><i class="fa-solid fa-box"></i> Orders</a>
                                        <a><i class="fa-regular fa-bookmark"></i> Your Saves</a>
                                        <a><i class="fa-solid fa-id-badge"></i> Account</a>
                                        <a onClick={handleForm}> <i class="fa-solid fa-user"></i> Sign in</a>
                                        {formstatus && <div className='form-parent'>
                                            <div className="form-child">
                                                <form onSubmit={submitForm}>
                                                    <div className="form-child-head">
                                                        <h1>Sign in for faster checkout.</h1>
                                                        <button onClick={closeform}>X</button>
                                                    </div>
                                                    <h2>Sign in to Apple Store</h2>
                                                    <div className="name-input">
                                                        {/* <label>Name: </label> */}
                                                        <input type="text" name='userKaName' onChange={handleFormData} value={userData.userKaName} placeholder='Username or Apple Id' />
                                                    </div>
                                                    {/* <label>Email: </label> <br /> */}
                                                    <div className="email-input">
                                                        <input type="email" name='userKaEmail' onChange={handleFormData} value={userData.userKaEmail} placeholder='Email' />
                                                    </div>

                                                    <div className="pasword-input">
                                                        <input type="password" name='userKaPassword' onChange={handleFormData} value={userData.userKaPassword} placeholder='Password' />
                                                    </div>
                                                    <div className="checkbox">
                                                        <input type="checkbox" name="" id="check" />
                                                        <label htmlFor='check' >Remember Me</label>
                                                    </div>
                                                    <div className="form-submit-btn">
                                                        <button type='submit'>Submit</button>
                                                    </div>
                                                    <a>Do not have an Apple ID? <span onClick={()=> route('/apple-ID')}>Create Yours now</span></a>
                                                </form>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>}
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