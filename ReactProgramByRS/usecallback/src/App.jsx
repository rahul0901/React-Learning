import {Routes, Route} from 'react-router-dom';
import UseCallback from './Components/UseCallback';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/use-callback' element={<UseCallback />} />
      </Routes>
    </div>
  );
}

export default App;
