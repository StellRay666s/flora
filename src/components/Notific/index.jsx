import React from "react";
import { useSelector, useDispatch } from "react-redux";

import style from "./index.module.scss";
import Error from "icons/Error";
import Check from "icons/Check";

function Notific({ icons, text }) {
  const { message, status, isOpen } = useSelector(state => state.notife.notificates);

  return (
    <>
      {isOpen ? (
        <div className={style.wrapper}>
          {status ? <Check /> : <Error />}
          {message}
        </div>
      ) : (
        ""
      )}
      <div></div>
    </>
  );
}

export default Notific;
