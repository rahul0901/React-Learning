import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import ErrorPage from './Components/ErrorPage';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<ErrorPage />} />
        <Route exact path='/' element={<Products />} />
        <Route exact path='/single-product/:id' element={<SingleProduct />} />
        <Route exact path='/add-product' element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
