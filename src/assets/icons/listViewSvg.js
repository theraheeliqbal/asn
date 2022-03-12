import React from "react";

function ListViewSvg({ fill, cn }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn}
      fill="none"
      viewBox="0 0 131 100"
    >
      <path
        fill={fill}
        d="M0 20C0 8.954 8.954 0 20 0h53v100H20C8.954 100 0 91.046 0 80V20z"
      ></path>
      <path fill={fill} d="M71 0H131V51H71z"></path>
      <path fill="#fff" d="M71 42c0-23.196 18.804-42 42-42h18v51H71v-9z"></path>
    </svg>
  );
}

export default ListViewSvg;
