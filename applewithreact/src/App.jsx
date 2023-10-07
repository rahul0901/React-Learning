import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header navUL={["store", "mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"]} />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
