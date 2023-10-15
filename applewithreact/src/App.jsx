import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Store from './Components/Store';

function App() {
  return (
    <div className="App">
      <Header navUL={["store", "mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"]} navULChildPage={['store']} HeadHover1={["shop the latest", "mac", "iPad", "iPhone", "apple Watch", "Accessories"]} HeadHover2={["find a store", "orders status", "ways to buy"]} HeadHover3={["education", "business"]} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Store />} />
      </Routes>
      <Footer FirstUl={['Store', "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]} FirstUl2={['Wallet']}
        SecondUl={["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]} SecondUl2={["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"]} ThirdUl={["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme",
          "Order Status", "Shopping Help"]} />
    </div>
  );
}

export default App;
