import React from "react";

const SignInCard = () => {
  return (
    <div className="black-card">
      <div className="card-container">
        <h2 className="signIN-header">Sign In</h2>
        <input
          className="sign-input"
          placeholder="Email or phone number"
        ></input>
        <input
          className="sign-input"
          placeholder="Password"
          type="password"
        ></input>
        <button className="signIn-button">Sign In</button>
        <div className="help">
          <div>
            <input className="signInCheckbox" type="checkbox" />
            <label className="grey help-text">Remember me</label>
          </div>

          <span className="grey help-text2"><a href="#" className="link grey"> Need help?</a></span>
        </div>

        <div className="signUp-prompt">
            <div className="signIn-footer">
                <span className="grey">New to Netflix? </span>
                <span ><a href="#" className="white link adjust"> Sign up now.</a></span>
                <div className="terms">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#"> Learn more.</a></div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default SignInCard;
