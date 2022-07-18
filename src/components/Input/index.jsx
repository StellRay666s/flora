import React from "react";
import styleInput from "./input.module.scss";
export default function Input({ text }) {
  return (
    <div>
      <input className={styleInput.inputs} placeholder={text} />
    </div>
  );
}
