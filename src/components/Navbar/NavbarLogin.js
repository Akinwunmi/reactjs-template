import React from "react";

import "./NavbarLogin.scss";
import { Login, Signup } from "../Elements/Buttons";

const NavbarLogin = () => (
  <header className="header-login">
    <nav>
      <div id="top-row">
        <button className="logo">
          <a href="/">{global.variables.title.en}</a>
        </button>
        <Login />
      </div>
      <div id="bottom-row">
        <button id="btn-menu">
          <svg id="icn-menu" width="20px" height="14px">
            <line id="line-top" x1="0" x2="20" y1="1" y2="1"></line>
            <line id="line-middle" x1="0" x2="20" y1="7" y2="7"></line>
            <line id="line-bottom" x1="0" x2="20" y1="13" y2="13"></line>
          </svg>
        </button>
        <Signup />
      </div>
      <div className="header-navigation">
        <ul>
          <li>
            <a href="/">Item 1</a>
          </li>
          <li>
            <a href="/">Item 2</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavbarLogin;
