import React from "react";

import { BtnLogin } from "./Elements/Buttons";

const Login = (props) => (
  <div className="SignUp">
    <h1>Log in to {global.variables.title.en}</h1>
    <br />
    <BtnLogin />
  </div>
);

export default Login;
