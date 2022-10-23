import React from "react";
import H1 from "components/H1";
import style from "./index.module.scss";
import girls from "assets/images/girls.jpeg";

function AboutUs() {
  return (
    <div>
      <div className={style.logo}>
        <H1>О НАС</H1>
        <div className={style.wrapper}>
          <div className={style.text_block}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium fugit
              obcaecati optio eius atque numquam nulla, explicabo corporis minima blanditiis eos
              similique nisi consequatur corrupti sapiente et harum officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium fugit
              obcaecati optio eius atque numquam nulla, explicabo corporis minima blanditiis eos
              similique nisi consequatur corrupti sapiente et harum officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium fugit
              obcaecati optio eius atque numquam nulla, explicabo corporis minima blanditiis eos
              similique nisi consequatur corrupti sapiente et harum officiis.
            </p>
          </div>
          <div className={style.girls_block}>
            <img src={girls} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
