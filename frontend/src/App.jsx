import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      Hello Rahul!
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Login' element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
