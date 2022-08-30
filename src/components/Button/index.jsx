import React from "react";

function Button({
  children,
  className /** className from `src/styles/buttons.scss` */,
  onClick = () => {},
  disabled,
}) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
