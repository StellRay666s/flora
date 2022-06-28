import React from "react";

/** React Router Dom */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Pages */
import HomePage from "pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
