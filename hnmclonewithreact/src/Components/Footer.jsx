function Footer(props) {

    const { FootShop, FootCorporate, FootHelp } = props;

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
                            <a href="#">Read More <span>-&gt</span></a>
                        </div>
                    </div>
                    <div className="foot-child-down">
                        down
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;