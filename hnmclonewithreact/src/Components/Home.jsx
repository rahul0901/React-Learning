import './Home.css';
const Home = (props) => {

    const { HomeFirstUl, HomeBCButton, SmallBannerBtn, PopularTitle, PopularContent, PopularImage, ShopNow } = props;

    return (
        <>
            <div id="screen">
                <div id="home">
                    <div className="firstul">
                        {HomeFirstUl.map((singleItems) => (
                            <a href="#">{singleItems}</a>
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

                    <div id="body-content-3">
                        <h3>A/W23 WARDROBE WINS</h3>
                        <p>Key staples for the season ahead!</p>
                        {SmallBannerBtn.map((innerbtns) => (
                            <a href="#">{innerbtns}</a>
                        ))}
                    </div>

                    <div id="body-content-4">
                        <h3>Popular categories</h3>
                        <div className="bc-4-category-parent">
                            {/* {PopularTitle.map((item) => (
                                <div>
                                    <h4>{item}</h4>
                                    {PopularContent.map((item1) => (
                                        <p>{item1}</p>
                                    ))}
                                </div>
                            ))} */}
                            {/* idhr niche kya hua 
                                popular title ka har ek item aur uska index call kre 1st line mai
                                aur key index ko daala taaki 8 div create ho as per apna popular title array ka hisab se.. fr har ek div mai sbse phele img aayega fr h4 aayega jisme item mtlb poputitle ka items ek ek krke ayega fr.. p tag mai Popular content bhi ek array hi hai toh PopularContent[index] me na ek ek index vakue ayega 0 se 7 taak aur usse hi PopularContent ka bhi ek ek value apneko milte rahega... fuck yeh concept sahi hai jugaad hai..:)
                            */}
                            {PopularTitle.map((item, index) => (
                                <div key={index}>
                                    <img src={PopularImage[index]} alt={`Image ${index} blank`} />
                                    <h4>{item}</h4>
                                    <p>{PopularContent[index]}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div id="body-content-5">
                        <div className="bc-5-child">
                            <h2>It's cabin chic, but not really</h2>
                            <h3>Styles inspired by the great outdoors.</h3>
                            {ShopNow.map((btncontent) => (
                                <button>{btncontent}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;