import React from "react";
import backgroundImage from "../../assets/BG.png";
import GirlImage from "../../assets/1.png";
// import SignInForm from "./SignInForm";

function Login() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-row md:flex-row md:space-x-48 items-center justify-center">
          <img src={GirlImage} alt="Girl" className="hidden md:block" />
          <div className="flex-grow md:flex-grow-0 flex items-center justify-center">
            {/* <SignInForm /> */}
            SignInForm
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
