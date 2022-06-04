import React from "react";
import MyReset from "../UI/MyReset/MyReset";
import "./style.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-title">
          <span>Фильтры</span>
          <MyReset />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
