import React from "react";
import { useSelector } from "react-redux";
import Error from "icons/Error";
import Check from "icons/Check";

import style from "./index.module.scss";

function Notification() {
  const { message, status, isOpen } = useSelector(state => state.notification.data);

  return (
    <>
      <div
        style={{ position: "fixed", right: isOpen ? "100px" : "-260px", transitionDuration: "2s" }}
      >
        <div className={style.wrapper}>
          {(status === "successfull" && <Check />) || (status === "error" && <Error />)}
          {message}
        </div>
      </div>
    </>
  );
}

export default Notification;
