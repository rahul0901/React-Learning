import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';
import DynamicStyle from './Components/DynamicStyle';
import ChildrenProps from './Components/ChildrenProps';

function App() {
  const [isLoggedIn, SetLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home Login = {isLoggedIn} SetLogin = {SetLoggedIn}/>} />
        <Route exact path='/dynamic-style' element={<DynamicStyle />} />
        <Route exact path='/childrenProps' element={<ChildrenProps />} />
      </Routes>
    </div>
  );
}

export default App;
