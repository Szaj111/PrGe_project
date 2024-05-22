import React from "react";
import "./Login_page.css";
import startrowa from "../tmp/startowa.png";
import { Link } from "react-router-dom";

function Login_page() {
  return (
    <div className="login_page">
      <div className="left_side">
        <div className="title">Netpchor</div>
        <img className="startowa" src={startrowa} alt="startowa"></img>
      </div>
      <div className="right_side">
        <div className="logo">Logowanie</div>
        <input
          className="login_input"
          type="text"
          placeholder="Email or login"
        />
        <input className="pass_input" type="password" placeholder="Password" />
        <Link to="/services">
          <button className="login_button">ZALOGUJ</button>
        </Link>
      </div>
    </div>
  );
}

export default Login_page;
