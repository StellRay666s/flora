import React from "react";
import StarRating from "components/Rating/StarRating";
/** React Router Dom */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Pages */
import IndexPage from "pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
      <div></div>
      <StarRating />
    </div>
  );
}

export default App;
