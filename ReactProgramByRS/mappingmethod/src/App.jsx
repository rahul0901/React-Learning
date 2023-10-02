import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Mapping from './Components/Mapping';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/mapping' element={<Mapping Products={[1,2,3,4,5]} Title={["one", "two", "three","four"]}
        Price={[34,23,34,56,77]}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
