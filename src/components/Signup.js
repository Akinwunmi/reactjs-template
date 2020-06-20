import React from "react";

import { BtnSignup } from "./Elements/Buttons";

const Signup = (props) => (
  <div className="SignUp">
    <h1>Sign up to {global.variables.title.en}</h1>
    <br />
    <BtnSignup />
  </div>
);

export default Signup;
