// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Ternary from './Components/Ternary';
import { useState } from 'react';
import Login from './Components/Login';
import Counter from './Components/Counter';
import Effect1 from './Components/Effect1';
import Effect2 from './Components/Effect2';
import Effect3 from './Components/Effect3';
import Effect4 from './Components/Effect4';
import Params from './Components/Params';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      Hello Rahul
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element ={<Login/>} />
        <Route exact path='/counter' element={<Counter/>} />
        <Route exact path='/effect1' element={<Effect1/>}/>
        <Route exact path='/effect2' element={<Effect2/>}/>
        <Route exact path='/effect3' element={<Effect3/>}/>
        <Route exact path='/effect4' element={<Effect4/>}/>
        <Route exact path='/params'  element = {<Params/>}/>
        <Route exact path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/mapping' element={<Mapping />} />
        <Route exact path='/ternary' element = {<Ternary/>}/>
      </Routes>
    </div>
  );
}

export default App;
