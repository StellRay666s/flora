import React from "react";
import style from "./index.module.scss";

function Switch() {
  const [isValue, setIsValue] = React.useState(true);

  function onClick() {
    setIsValue(!isValue);
  }

  return (
    <>
      <div className={style.switchWrapper}>
        <div onClick={onClick} className={isValue ? style.switch : style.switchOn}></div>
      </div>
    </>
  );
}

export default Switch;
