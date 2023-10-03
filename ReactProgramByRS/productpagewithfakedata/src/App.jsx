import {Routes, Route} from 'react-router-dom';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Products />}/>

      </Routes>
    </div>
  );
}

export default App;
