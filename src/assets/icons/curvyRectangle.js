import React from "react";

function CurvyRectangle({ cn, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn}
      fill="none"
      viewBox="0 0 90 84"
    >
      <path fill={fill} d="M0 0h90v42c0 23.196-18.804 42-42 42H0V0z"></path>
    </svg>
  );
}

export default CurvyRectangle;
