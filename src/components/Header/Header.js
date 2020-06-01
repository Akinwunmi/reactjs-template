import React from "react";

import "./Header.scss";

const title = "Template Title";

const Header = (props) => (
  <header className="Header">
    <nav>
      <div id="topRow">
        <button className="Logo">
          <a href="/">{title}</a>
        </button>
        <button id="btnLogin" className="hoverBackground">
          Log in
        </button>
      </div>
      <div id="bottomRow">
        <button id="btnMenu">
          <svg id="icnMenu" width="20px" height="14px">
            <line id="lineTop" x1="0" x2="20" y1="1" y2="1"></line>
            <line id="lineMiddle" x1="0" x2="20" y1="7" y2="7"></line>
            <line id="lineBottom" x1="0" x2="20" y1="13" y2="13"></line>
          </svg>
        </button>
        <button id="btnSignup" className="hoverBackground">
          Sign up
        </button>
      </div>
      <div className="HeaderNavigation">
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

export default Header;
