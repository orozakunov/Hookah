import React from "react";
import classes from "./style.module.css";

const MyTitle = ({ children }) => {
  return <h3 className={classes.MyTitle}>{children}</h3>;
};

export default MyTitle;
