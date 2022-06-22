import { Route, Routes } from "react-router-dom";
import { Auth } from "./components";
import Busket from "./pages/Busket";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Registr from "./pages/Registr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="busket" element={<Busket />} />
        <Route path="Auth" element={<Auth />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="registration" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
