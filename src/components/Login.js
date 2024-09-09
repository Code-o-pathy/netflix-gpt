import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <>
      <Header />
      <img className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg"
        alt="background"
      />

      <form className="bg-black absolute mt-32">
        <input type="text" placeholder="Email"/>
      </form>
    </>
  );
};

export default Login;
