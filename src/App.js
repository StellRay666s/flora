import React from "react";
import StarRating from "components/Rating";

/** React Router Dom */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Pages */
import IndexPage from "pages/home";
import {
  BagIcon,
  BoqueteIcon,
  CreditCartIcon,
  GiftIcon,
  InstagramIcons,
  TelegramIcon,
  TruckIcon,
  TwitterIcon,
} from "icons";

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
      <InstagramIcons />
      <TelegramIcon />
      <TwitterIcon />
      <BagIcon />
      <TruckIcon />
      <BoqueteIcon />
      <CreditCartIcon />
      <GiftIcon />
    </div>
  );
}

export default App;
