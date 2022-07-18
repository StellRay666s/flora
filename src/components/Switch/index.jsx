import React from "react";
import style from "./Switch.module.scss";

function Switch() {
  const [switchOn, setSwitchOn] = React.useState(true);
  const onClikcSwitch = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <>
      <div className={style.switchWrapper}>
        <div
          onClick={() => onClikcSwitch()}
          className={switchOn ? style.switch : style.switchOn}
        ></div>
      </div>
    </>
  );
}

export default Switch;
