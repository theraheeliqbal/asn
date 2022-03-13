import React from "react";

function List({ cn, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      fill="none"
      viewBox="0 0 22 21"
      className={cn}
      onClick={onClick}
      role="button"
      aria-label="change to list view"
    >
      <path
        fill="#000"
        stroke="#000"
        strokeLinecap="round"
        d="M20 19.8H2a1 1 0 110-2h18a1 1 0 110 2zM20 11.4H2a1 1 0 110-2h18a1 1 0 110 2zM20 3H2a1 1 0 010-2h18a1 1 0 110 2z"
      ></path>
    </svg>
  );
}

export default List;
