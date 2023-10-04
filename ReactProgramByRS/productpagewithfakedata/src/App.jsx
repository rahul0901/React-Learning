import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route exact path='/single-product/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
