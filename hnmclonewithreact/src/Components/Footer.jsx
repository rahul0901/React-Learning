import './Footer.css';

function Footer(props) {

    const { FootShop, FootCorporate, FootHelp, FootSocials } = props;

    return (
        <>
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
                            <a href="#">Read More <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className="foot-child-down">
                        <div className="foot-child-down-1">
                            {FootSocials.map((item, index)=>(
                                <div key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="foot-child-down-2">
                            2
                        </div>
                        <div className="foot-child-down-3">
                            3
                        </div>
                        <div className="foot-child-down-4">
                            4
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;