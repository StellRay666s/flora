import React from "react";
import style from "./index.module.scss";

import Logo from "components/Logo";

function AuthLayout({ children }) {
  return (
    <div>
      <div className={style.wrapper}>
        {<div className={style.wrapperInput}>{children}</div>}
        <div className={style.logo}>
          <h1>
            {" "}
            <Logo />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
