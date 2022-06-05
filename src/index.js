import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Haeder/Header";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> d7a6e2b946dcd14dfb33accf3e7dccf0b1c7a58b

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header />
    <App />
    <Footer />
=======
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
>>>>>>> d7a6e2b946dcd14dfb33accf3e7dccf0b1c7a58b
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
