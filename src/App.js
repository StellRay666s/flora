import React from "react";

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
import { CrossClose, Rating, Input, PhoneInput } from "components";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
      <div></div>
      <Rating />
      <InstagramIcons />
      <TelegramIcon />
      <TwitterIcon />
      <BagIcon />
      <TruckIcon />
      <BoqueteIcon />
      <CreditCartIcon />
      <GiftIcon />
      <CrossClose />
      <Input text={"Имя"} />
      <Input text={"Адресс"} />
      <Input text={"Эл.Почта"} />
      <Input text={"Фамилия"} />
      <PhoneInput />
    </div>
  );
}

export default App;
