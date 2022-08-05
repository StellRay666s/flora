import React from "react";
import style from "./index.module.scss";
import { BoqueteIcon } from "icons";

function OrderGuideCard({ title, text, icon }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.iconBack}>{icon}</div>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic deleniti possimus maxime
          accusantium consectetur voluptates labore culpa fugit, rem inventore ut magni quos placeat
          delectus autem dolorum necessitatibus consequatur modi?
        </p>
      </div>
    </>
  );
}

export default OrderGuideCard;
