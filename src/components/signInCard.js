import React from "react";
import { useState } from "react";
import { emailValidate, passwordValidate } from "./validation/validation";
import { useUserContext } from "../Context/UserContext";

const SignInCard = () => {
  const { user, logIn } = useUserContext();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPwdlValid, setIsPwdValid] = useState(true);
  const handleLogin = (details) => {
    if (isEmailValid && isPwdlValid) {
       logIn(details);
    }
  };
  const handleEmailValidation = (email) => {
    setIsEmailValid(emailValidate(email));
  };
  const handlePwdValidation = (password) => {
    setIsPwdValid(passwordValidate(password));
  };
  return (
    <div className="black-card">
      <div className="card-container">
        <h2 className="signIN-header">Sign In</h2>
        <input
          className="sign-input"
          placeholder="Email or phone number"
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, email: e.target.value })
          }
          onBlur={(e) => handleEmailValidation(e.target.value)}
        ></input>
        {!isEmailValid ? (
          <p style={{ color: "red" }}>Enter a valid Email</p>
        ) : null}
        <input
          className="sign-input"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
          onBlur={(e) => handlePwdValidation(e.target.value)}
        ></input>
        {!isPwdlValid ? (
          <p style={{ color: "red" }}>Enter valid Password</p>
        ) : null}
        <button className="signIn-button" onClick={()=>handleLogin(loginDetails)}>
          Sign In
        </button>
        <div className="help">
          <div>
            <input className="signInCheckbox" type="checkbox" />
            <label className="grey help-text">Remember me</label>
          </div>

          <span className="grey help-text2">
            <a href="#" className="link grey">
              {" "}
              Need help?
            </a>
          </span>
        </div>

        <div className="signUp-prompt">
          <div className="signIn-footer">
            <span className="grey">New to Netflix? </span>
            <span>
              <a href="/signup" className="white link adjust">
                {" "}
                Sign up now.
              </a>
            </span>
            <div className="terms">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#"> Learn more.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
