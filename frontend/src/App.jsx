import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/Counter';
import Instagram from './components/Instagram';

function App() {
  return (
    <div className="App">
      Hello Rahul!
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/Instagram' element = {<Instagram/>} />
      </Routes>
    </div>
  );
}

export default App;
