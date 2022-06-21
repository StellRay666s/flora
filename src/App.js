import { Route, Routes } from 'react-router-dom';
import { Auth } from './Components';
import Busket from './pages/Busket';
import Home from './pages/Home';
import Item from './pages/Item';
import Registr from './pages/Registr';

function App() {
  function one() {
    console.log(111);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busket" element={<Busket />} />
        <Route path="/item" element={<Item />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
