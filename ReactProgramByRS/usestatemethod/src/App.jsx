import { Routes, Route } from 'react-router-dom'
import Counter from './Components/Counter';
import Home from './Components/Home';
import LightOnOff from './Components/LightOnOff';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/lightpage' element={<LightOnOff />} />
      </Routes>
    </div>
  );
}

export default App;
