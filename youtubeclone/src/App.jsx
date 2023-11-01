import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
// import SideHeader from './Components/SideHeader';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SideHeader /> */}
      <Routes>
        <Route exact path='/' element= {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
