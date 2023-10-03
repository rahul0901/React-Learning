import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import ErrorNotFound from './Components/ErrorNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<ErrorNotFound />} />
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
