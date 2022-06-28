import React from "react";

/** React Router Dom */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Pages */
import IndexPage from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
