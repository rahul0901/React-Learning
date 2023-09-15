import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/Counter';
import Instagram from './components/Instagram';
import UseEffect1 from './components/UseEffect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/Effect3';
import Effect4 from './components/Effect4';

function App() {
  return (
    <div className="App">
      Hello Rahul!
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register'  element={<Register/>}/>
        <Route exact path='/counter' element={<Counter/>} />
        <Route exact path='/Instagram' element = {<Instagram/>} />
        <Route exact path='/useeffect' element = {<UseEffect1/>} />
        <Route exact path='/effect2' element = {<Effect2/>}/>
        <Route exact path='/effect3' element = {<Effect3/>}/>
        <Route exact path='/effect4' element = {<Effect4/>}/>

      </Routes>
    </div>
  );
}

export default App;
