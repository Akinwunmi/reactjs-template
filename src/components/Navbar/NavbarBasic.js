import React from "react";

import BtnMenu from "../SideDrawer/BtnMenu";

import "./NavbarBasic.scss";

const NavbarBasic = (props) => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <BtnMenu click={props.drawerClickHandler} />
      <div className="logo">
        <a href="/">{global.variables.title.en}</a>
      </div>
      <div className="spacer" />
      <div className="navbar-navigation-items">
        <ul>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavbarBasic;
