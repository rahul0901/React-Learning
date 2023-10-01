import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Secondpage from './Components/Secondpage';
import Thirdpage from './Components/Thirdpage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/secondpage' element={<Secondpage />} />
        <Route exact path='/thirdpage' element={<Thirdpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
