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
        d="M.293 9.707a1 1 0 010-1.414L3.586 5 .293 1.707A1 1 0 011.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
