import React from "react";
import classes from "./style.module.css";
const MyReset = () => {
  return (
    <div className={classes.MyReset}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 3.5L3.5 10.5"
          stroke="#A1C4FD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 3.5L10.5 10.5"
          stroke="#A1C4FD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Сбросить
    </div>
  );
};

export default MyReset;
