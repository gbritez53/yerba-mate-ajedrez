import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={12}
      height={268}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.707.293a1 1 0 010 1.414L2.414 5l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
