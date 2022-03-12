import React from "react";

function Grid({ cn, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 24 23"
      className={cn}
      onClick={onClick}
    >
      <path
        fill="#000"
        d="M8 23H2.667c-.708 0-1.386-.27-1.886-.748-.5-.48-.781-1.13-.781-1.807v-5.112c0-.677.281-1.327.781-1.807.5-.479 1.178-.748 1.886-.748H8c.707 0 1.386.269 1.886.748.5.48.78 1.13.78 1.807v5.112c0 .677-.28 1.327-.78 1.806-.5.48-1.179.749-1.886.749zm-5.333-7.667v5.112H8v-5.112H2.667zM21.334 23H16c-.707 0-1.385-.27-1.886-.748-.5-.48-.78-1.13-.78-1.807v-5.112c0-.677.28-1.327.78-1.807.5-.479 1.179-.748 1.886-.748h5.334c.707 0 1.385.269 1.885.748.5.48.781 1.13.781 1.807v5.112c0 .677-.28 1.327-.78 1.806-.501.48-1.18.749-1.886.749zM16 15.333v5.112h5.334v-5.112H16zM8 10.222H2.667c-.708 0-1.386-.269-1.886-.748C.281 8.994 0 8.344 0 7.667V2.556C0 1.878.281 1.228.781.749 1.281.269 1.959 0 2.667 0H8c.707 0 1.386.27 1.886.749s.78 1.129.78 1.807v5.11c0 .678-.28 1.328-.78 1.808-.5.479-1.179.748-1.886.748zM2.667 2.556v5.11H8v-5.11H2.667zM21.334 10.222H16c-.707 0-1.385-.269-1.886-.748-.5-.48-.78-1.13-.78-1.807V2.556c0-.678.28-1.328.78-1.807C14.614.269 15.293 0 16 0h5.334c.707 0 1.385.27 1.885.749S24 1.878 24 2.556v5.11c0 .678-.28 1.328-.78 1.808-.501.479-1.18.748-1.886.748zM16 2.556v5.11h5.334v-5.11H16z"
      ></path>
    </svg>
  );
}

export default Grid;
