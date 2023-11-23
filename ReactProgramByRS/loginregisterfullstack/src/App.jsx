import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />}  />
      </Routes>
    </div>
  );
}

export default App;
