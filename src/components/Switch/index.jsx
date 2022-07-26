import React from "react";
import style from "./Switch.module.scss";

function Switch({ value, setValue }) {
  const onClikcSwitch = () => {
    setValue(!value);
  };

  return (
    <>
      <div className={style.switchWrapper}>
        <div
          onClick={() => onClikcSwitch()}
          className={value ? style.switch : style.switchOn}
        ></div>
      </div>
    </>
  );
}

export default Switch;
