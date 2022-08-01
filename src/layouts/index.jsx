import React from "react";
import style from "./index.module.scss";

function Layout({ children }) {
  return (
    <>
      <div className={style.layout}>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Layout;
