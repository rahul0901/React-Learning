import {Routes, Route} from 'react-router-dom';
import Product from './Components/Product';
import SingleProduct from './Components/SingleProduct';
function App() {
  return (
    <div className="App">
      <Routes>
         <Route exact path='/' element={< Product/>} />
         <Route exact path='/singleproduct/:id' element={< SingleProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
