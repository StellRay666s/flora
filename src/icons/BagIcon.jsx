import React from "react";

export default function BagIcon({ fill = "white", width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      id="i-bag"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 9 L5 29 27 29 27 9 Z M10 9 C10 9 10 3 16 3 22 3 22 9 22 9" />
    </svg>
  );
}
