import { Route, Routes } from 'react-router-dom';
import Busket from './pages/Busket';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busket" element={<Busket />} />
      </Routes>
    </div>
  );
}

export default App;
