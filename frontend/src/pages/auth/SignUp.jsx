import React from "react";
import backgroundImage from "../../assets/BG.png";
import GirlImage from "../../assets/1.png";
import SignupForm from "./SignupForm";

function SignUp() {
  return (
    <div
      className="min-h-screen flex  bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-row lg:space-x-48 items-center justify-center">
          <img
            src={GirlImage}
            alt="Girl"
            className="hidden md:block h-screen md:-ml-100 lg:-ml-0"
          />
          <div className="flex-grow md:flex-grow-0 flex items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
