import './Home.css';
const Home = (props) => {

    const { HomeFirstUl, HomeBCButton } = props;

    return (
        <>
            <div id="screen">
                <div id="home">
                    <div className="firstul">
                        {HomeFirstUl.map((singleItems) => (
                            <a href="#">
                                <a href="#">{singleItems}</a>
                            </a>

                        ))}
                    </div>
                    <div id="body-content-1">
                        <div className="bc-1-up-text">

                        </div>
                        <div className="bc-1-below-text">
                            <img src="https://www2.hm.com/content/dam/global_campaigns/season_08/ladies/2018/2018-GEN-Logo-white-sans.png" alt="" />
                            <h3>The A/W 2023 collection is out now.</h3>
                            {HomeBCButton.map((content) => (
                                <button>{content}</button>
                            ))}
                        </div>
                    </div>

                    <div id="body-content-2">
                        <div className="bc-2-up-text">

                        </div>
                        <div className="bc-2-below-text">
                            {/* <img src="https://www2.hm.com/content/dam/global_campaigns/season_08/ladies/2018/2018-GEN-Logo-white-sans.png" alt="" /> */}
                            <h2>All knits needed</h2>
                            <h3>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</h3>
                            {HomeBCButton.map((content) => (
                                <button>{content}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;