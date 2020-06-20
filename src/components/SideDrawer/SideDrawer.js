import React from "react";

import "./SideDrawer.scss";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
