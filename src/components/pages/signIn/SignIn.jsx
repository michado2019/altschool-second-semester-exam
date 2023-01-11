import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signIn-wrapper">
      <form className="signIn-form">
        <label className="signLabel">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          className="signIn-form_input"
        />
        <label className="signLabel">Passsword:</label>
        <input
          type="password"
          placeholder="Enter password"
          className="signIn-form_input"
        />
        <button className="signIn-form_btn">Sign in</button>
      </form>
    </div>
  );
}
export default SignIn;
