import React from "react";
import classes from "./style.module.css";

const MyBUtton = ({ children }) => {
  return <div className={classes.myBtn}>{children}</div>;
};

export default MyBUtton;
