
import React from "react";
import Navbar from "../components/navbar";
import WelcomeText from "../components/welcomeText";

const LandingPage = () => {
  return (
    <>
      <div className="back-img">
        <div className="bg_img black">
          <div className="nav">
            <Navbar />
          </div>
          <div className="banner">
            <WelcomeText />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
