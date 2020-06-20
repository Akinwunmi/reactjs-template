import React from "react";

import "./Quiz.scss";

function Quiz(props) {
  return (
    <h2>
      {props.a} + {props.b} = {props.a + props.b}
    </h2>
  );
}

export default Quiz;
