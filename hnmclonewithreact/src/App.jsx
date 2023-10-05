import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Men from './Components/Men';

function App() {
  return (
    <div className="App">
      <Header leftUl={["Customer Service",
        "Newsletter",
        "Find a store"]} RightUl={["Sign In", "Favourites", "Shopping Bag (0)"]} IClass={[<i class="fa-regular fa-user fa-xl"></i>, <i class="fa-regular fa-heart fa-xl"></i>, <i class="fa-solid fa-bag-shopping fa-xl"></i>]} DownLeft={["Ladies", "Men", 'Divided', "Baby", "Kids", "H&M HOME", "Sport", "Sustainability", "Sale"]} Hover11={["Member Exclusive Prices", "Shop Now"]} Hover12={["New Arrivals", "View All", "Clothes"]} Hover13={["Trending Now", "Trending Now"]} Hover14={["Shop by Occasion", "The Occasion Shop"]} Hover21={["Shop by Product", "View All", "Tops & T-shirts", "Dresses", "Shirts & Blouses", "Trousers", "Jeans", "Sweatshirts & Hoodies", "Basics", "Blazers", "Cardigans & Sweaters", "Accessories", "Shoes", "Skirts", "Shorts", "Nightwear", "Lingerie", "Loungewear", "Jumpsuits", "Swimwear & Beachwear", "Sportswear", "Socks & Tights", "Plus Sizes", "Knitwear", "Jackets & Coats", "Maternity Wear", "Sale", "Premium Selection", "Care products"]} Hover31={["Sustainability", "H&M Take Care", "Learn More"]} Hover32={["Magazine", "Magazine"]} />
      <Routes>
        <Route exact path='/' element={<Home HomeFirstUl={["Members get free shipping above Rs.1999", "Free & flexible 15 days return", "Download the H&M App"]} HomeBCButton={["Shop Now", "get inspired"]} SmallBannerBtn={["Ladies", "Men", "Divided", "Kids"]} PopularImage={["https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124", "https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124", "https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10244.png?imwidth=124", "https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124", "https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10220.png?imwidth=124", "https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10216.png?imwidth=124"]} PopularTitle={["Ladies", "Ladies", "Ladies", "Men", "Men", "Ladies"]} PopularContent={["Tops & T-shirts", "Trousers", "Clothes", "Hoodies & Sweatshirts", "T-shirts & Tops", "Accessories"]} ShopNow={["Shop Now"]} />} />
        <Route exact path='/men' element={<Men />} />
      </Routes>
      <Footer FootShop={["Ladies",
        "Men",
        "Baby",
        "Kids",
        "H&M HOME",
        "Sport"]} FootCorporate={["Career at H&M",
          "About H&M group",
          "Sustainability H&M Group",
          "Press",
          "Investor relations",
          "Corporate governance"]}
        FootHelp={["Customer Service",
          "My H&M",
          "Find a store",
          "Legal & Privacy",
          "Contact",
          "Report a scam", "Cookie Notice",
          "Cookie Settings"]} FootSocials={[<i class="fa-brands fa-facebook"></i>, <i class="fa-brands fa-x-twitter"></i>, <i class="fa-brands fa-instagram"></i>, <i class="fa-brands fa-youtube"></i>, <i class="fa-brands fa-pinterest"></i>]} />
    </div>
  );
}

export default App;
