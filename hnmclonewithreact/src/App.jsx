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
        "Find a store"]} RightUl={["Sign In", "Favourites", "Shopping Bag"]} DownLeft={["Ladies", "Men", 'Divided', "Baby", "Kids", "H&M HOME", "Sport", "Sustainability", "Sale"]} />
      <Routes>
        <Route exact path='/' element={<Home HomeFirstUl={["Members get free shipping above Rs.1999", "Free & flexible 15 days return", "Download the H&M App"]} HomeBCButton = {["Shop Now", "get inspired"]} />} />
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
          "Cookie Settings"]} />
    </div>
  );
}

export default App;
