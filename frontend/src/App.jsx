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
import Params from './components/Params';
import Product from './components/Product';
import Mantra from './components/Mantras';
import Mapping from './components/Mapping';
import Terinaryy from './components/Terinaryy';
import { useState } from 'react';
import Styled from './components/Styled';
import CounterCheck from './components/CounterCheck';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      Hello Rahul!
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/Instagram' element={<Instagram />} />
        <Route exact path='/useeffect' element={<UseEffect1 />} />
        <Route exact path='/effect2' element={<Effect2 />} />
        <Route exact path='/effect3' element={<Effect3 />} />
        <Route exact path='/effect4' element={<Effect4 />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/product/:dynamicslugchangermethod' element={<Product />} />
        <Route exact path='/mantras' element={<Mantra />} />
        //sending props shown below..
        <Route exact path='/mapping' element={<Mapping names={["Dhoni", "abd", "virat"]} />} />
        <Route exact path='/terinary' element={<Terinaryy isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
        <Route exact path='/styled' element={<Styled/>} />
        <Route exact path='/checkcountercounts' element={<CounterCheck />} />
        <Route exact path='/use-memo' element={<UseMemo />} />
        <Route exact path='/use-callback' element={<UseCallback />} />
      </Routes>
    </div>
  );
}

export default App;
