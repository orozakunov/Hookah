import React from "react";
import "./style.css";
import loginIonc from "../../assets/Header/login.svg";
const Login = () => {
  return (
    <div className="login">
      <img className="login-icon" src={loginIonc} />
      <span className="login-icon">Войти</span>
    </div>
  );
};

export default Login;
