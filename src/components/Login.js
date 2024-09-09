import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <>
      <img className="absolute  z-[-1]" 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg"
        alt="background"
      />
      <Header />

      <form className="bg-black absolute my-36 mx-auto right-0  left-0 w-3/12 ">
        <h1 className="text-3xl text-white"> Sign In</h1>
        <input type="text" placeholder="Email or mobile number" className="text-black p-2 m-2 rounded-sm bg-white border-yellow-300"/>
        <input type="password" placeholder="Password" className="p-2 m-2 bg-black"/>
        <br></br>
        <button className="bg-yellow-400 p-2 m-2">Sign In</button>
      </form>
    </>
  );
};

export default Login;
