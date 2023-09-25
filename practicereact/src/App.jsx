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
import Mapping from './Components/Mapping';
import DynamicStyling from './Components/DynamicStyling';
import ChildrenProp from './Components/ChildrenProp';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
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
        <Route exact path='/mapping' element={<Mapping names = {["element1", "element2", "element3"]} kuchbhi = {"hii"}/>} /> 
        {/* above names and kuchbhi is prop - parameter concept same as function concepts */}
        <Route exact path='/ternary' element = {<Ternary userLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>}/>
        <Route exact path='/dynamic-styling'  element={< DynamicStyling/>} />
        <Route exact path='/children-props'  element= {<ChildrenProp/>}/>
      </Routes>
    </div>
  );
}

export default App;
