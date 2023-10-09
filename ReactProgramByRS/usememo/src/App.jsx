import{Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import UseMemo from './Components/UseMemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/use-memo' element={<UseMemo />} />
      </Routes>
    </div>
  );
}

export default App;
