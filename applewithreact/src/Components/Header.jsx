import React, { useState } from 'react';
import './Header.css';
import './MediaHeader.css'
import logo from './open_graph_logo-removebg-preview.png';
import toast from 'react-hot-toast';

const Header = (props) => {

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
                                <a key={index}>
                                    {item}
                                    <div className="head-2-hover-contents">
                                        <div className="hover-contents-child">
                                            <div className="hover-contents-1">
                                                <h2>Shop</h2>
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
                                <p onClick={handleForm}>Sign in</p>
                                {formstatus && <div className='form-parent'>
                                    <div className="form-child">
                                        <form onSubmit={submitForm}>
                                            <label>Name: </label> <br />
                                            <input type="text" name='userKaName' onChange={handleFormData} value={userData.userKaName} /> <br />

                                            <label>Email: </label> <br />
                                            <input type="email" name='userKaEmail' onChange={handleFormData} value={userData.userKaEmail} /> <br />

                                            <label>Password: </label> <br />
                                            <input type="password" name='userKaPassword' onChange={handleFormData} value={userData.userKaPassword} /> <br />
                                            <button type='submit'>Submit</button>

                                        </form>
                                        <button onClick={closeform}>X</button>
                                    </div>
                                </div>}
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