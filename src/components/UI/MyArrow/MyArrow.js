import React from "react";
import classes from "./style.module.css";

const MyArrow = ({ children }) => {
  return (
    <div className={classes.myArrow}>
      {children}
      <svg
        style={{ margin: "0 5px" }}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.875 11.625L16.5 9L13.875 6.375L13.3448 6.90525L15.0645 8.625H1.5V9.375H15.0645L13.3448 11.0948L13.875 11.625Z"
          fill="#A1C4FD"
        />
      </svg>
    </div>
  );
};

export default MyArrow;
