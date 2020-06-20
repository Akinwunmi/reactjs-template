import React, { useState } from "react";

import "./Buttons.scss";

function BtnDefault() {
  return <button className="hoverBackground">Click me!</button>;
}

function ClickCounter(props) {
  const [count, setCount] = useState(0);

  return (
    <button
      className="ClickCounter hoverBackground"
      onClick={() => setCount(count + 1)}
    >
      This button has been clicked {count} times.
    </button>
  );
}

function BtnLogin() {
  return (
    <button id="btnLogin" className="hoverBackground">
      Log in
    </button>
  );
}

function BtnSignup() {
  return (
    <button id="btnSignup" className="hoverBackground">
      Sign up
    </button>
  );
}

export default BtnDefault;
export { ClickCounter, BtnLogin, BtnSignup };
