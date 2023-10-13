import { Routes, Route } from 'react-router-dom';
import UseMemo from './Components/UseMemo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/usememoo' element={<UseMemo />} />
      </Routes>
    </div>
  );
}

export default App;
