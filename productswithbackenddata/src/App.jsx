import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Params from './Components/Params';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      Hello
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/params' element={< Params />} />
        <Route exact path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
