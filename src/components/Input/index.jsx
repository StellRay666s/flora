import React from "react";
import styleInput from "./index.module.scss";
export default function Input({ text }) {
  return (
    <div>
      <input className={styleInput.inputs} placeholder={text} />
    </div>
  );
}
