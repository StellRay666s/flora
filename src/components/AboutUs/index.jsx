import H1 from "components/H1";
import React from "react";
import style from "./index.module.scss";

function AboutUs() {
  return (
    <div>
      <div className={style.logo}>
        <H1>О НАС</H1>
      </div>
      <div className={style.contentWrapper}>
        <p className={style.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas enim sequi
          saepe! Ratione rerum quae optio deserunt, accusantium voluptatem quia tempora perspiciatis
          tenetur quam possimus excepturi animi sint quis?
        </p>
        <div className={style.girlWrapper}>
          <div className={style.img}></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
