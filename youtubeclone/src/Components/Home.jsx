import './Home.css';
const Home = () => {

    const SideNavigation = [{ iclass: <i class="fa-solid fa-house"></i>, title: "Home" }, { iclass: <i class="fa-solid fa-fire"></i>, title: "Home" }, { iclass: <i class="fa-solid fa-bars"></i>, title: "Home" }, { iclass: <i class="fa-solid fa-bars"></i>, title: "Home" }];

    const categoryBar = [{ tags: "Darshan Raval" }, { tags: "Music" }, { tags: "Virat Kolhi" }, { tags: "Dhoni" }, { tags: "Smriti Mandhana" }, { tags: "Tanmay Bhatt" }, { tags: "ICC" }, { tags: "LoFi" }, { tags: "Tamil Movies" }, { tags: "Gaming" }, { tags: "South Movies" }]

    return (
        <>
            <div className="home-screen">
                <div className="home-child">
                    <div className="home-bc-1-left-parent">
                        <div className="bc-1-left-child">
                            {SideNavigation?.length ? <div className='side-navbar-parent'> {SideNavigation.map((item, index) => (
                                <div key={index} className='side-navbar-childs'>
                                    <a>{item.iclass}</a>
                                    <a>{item.title}</a>
                                </div>
                            ))} </div> : <div>Loading</div>}
                        </div>
                    </div>
                    <div className="home-bc-1-right-parent">
                        <div className="home-bc-1-right-child">
                            <div className="bc-1-right-category-bar">
                                {categoryBar?.length ? <div className='bc-1-right-category-bar-childs'>
                                    {categoryBar.map((item1, index) => (
                                        <a key={index}>
                                            {item1.tags}
                                        </a>
                                    ))}
                                </div> : <div>Loading</div>}
                            </div>
                        </div>
                        <div className="home-bc-2-right-child">
                            <div className="bc-2-right-1">
                                <div className="bc-2-right-1-1">
                                    1.1
                                </div>
                                <div className="bc-2-right-1-2">
                                    <div className="bc-2-right-1-2-up">
                                        up
                                    </div>
                                    <div className="bc-2-right-1-2-down">
                                        <div className="bc-2-right-1-2-down-left">
                                            left
                                        </div>
                                        <div className="bc-2-right-1-2-down-right">
                                            right
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;