import React from "react";

export default function StarIcon({ fill = "yellow" }) {
  return (
    <svg
      fill={fill}
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      id="Outlined"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g id="Fill">
        <path d="M28.61,11.67H20l-2.66-8.2a1.39,1.39,0,0,0-2.64,0L12,11.67H3.39a1.39,1.39,0,0,0-.82,2.51l7,5.07L6.89,27.46a1.39,1.39,0,0,0,1.32,1.82A1.43,1.43,0,0,0,9,29l7-5.07L23,29a1.43,1.43,0,0,0,.81.27,1.39,1.39,0,0,0,1.32-1.82l-2.66-8.21,7-5.07A1.39,1.3S9,0,0,0,28.61,11.67Zm-7.34,6-1.17.86.44,1.38,2.09,6.41-5.45-4L16,21.46l-1.18.86-5.45,4,2.09-6.41.44-1.38-1.17-.86-5.45-4h8.19l.45-1.38L16,5.89l2.08,6.4.45,1.38h8.19Z" />
      </g>
    </svg>
  );
}
