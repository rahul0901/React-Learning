import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Effect1NoDependency from './Components/Effect1NoDependency';
import Effect2EmptyDependency from './Components/Effect2EmptyDependency';
import Effect3SingleDependency from './Components/Effect3SingleDependency';
import Effect4MultipleDependency from './Components/Effect4MultipleDependency';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/effect1' element={<Effect1NoDependency />} />
        <Route exact path='/effect2' element={<Effect2EmptyDependency />} />
        <Route exact path='/effect3' element={<Effect3SingleDependency/>}/>        
        <Route exact path='/effect4' element={<Effect4MultipleDependency/>}/>
      </Routes>
    </div>
  );
}

export default App;
