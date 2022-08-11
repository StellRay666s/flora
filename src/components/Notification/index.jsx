import React from "react";
import { useSelector } from "react-redux";

import style from "./index.module.scss";
import Error from "icons/Error";
import Check from "icons/Check";

function Notification() {
  const { message, status, isOpen } = useSelector(state => state.notification.data);
  console.log(message);
  return (
    <>
      <div
        style={{ position: "fixed", right: isOpen ? "100px" : "-260px", transitionDuration: "2s" }}
      >
        <div className={style.wrapper}>
          {status ? <Check /> : <Error />}
          {message}
        </div>
      </div>
    </>
  );
}

export default Notification;
