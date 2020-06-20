import React from "react";

import Quiz from "../components/Quiz/Quiz";
import BtnDefault, { ClickCounter } from "../components/Elements/Buttons";

import "./Welcome.scss";

function Welcome(props) {
  return (
    <div className="Welcome">
      <h1>Welcome to {global.variables.title.en}</h1>
      <br />
      <p>
        On this site you can find everything concerning{" "}
        <b>{global.variables.title.en}</b> and anything related.
      </p>
      <br />
      <p>
        <b>{global.variables.title.nl}</b> is er nu ook in het Nederlands!
      </p>
      <br />
      <Quiz a={4} b={2} />
      <br />
      <ClickCounter />
      <BtnDefault />
    </div>
  );
}

export default Welcome;
