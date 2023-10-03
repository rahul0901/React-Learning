import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Products />}/>

      </Routes>
    </div>
  );
}

export default App;
