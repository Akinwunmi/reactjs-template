import React from "react";

import "./BtnMenu.scss";

const BtnMenu = (props) => (
  <button id="btn-menu" onClick={props.click}>
    <div className="icn-menu-line" />
    <div className="icn-menu-line" />
    <div className="icn-menu-line" />
  </button>
);

export default BtnMenu;
