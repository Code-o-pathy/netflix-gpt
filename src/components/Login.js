import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [outputMessage, setOutputMessage] = useState("");
  const handleSign = () => {
    setIsSignIn(!isSignIn);
  };
  const email = useRef();
  const password = useRef();
  const handleSubmit = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    console.log(password.current.value)
    setOutputMessage(message);
  };
  return (
    <>
      <img
        className="absolute  z-[-1]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg"
        alt="background"
      />
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute my-36 mx-auto right-0  left-0  w-3/12 p-12  text-white py-4 bg-opacity-80 rounded-sm "
      >
        <h1 className="text-3xl  py-4 font-bold">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4  rounded-sm bg-gray-700 w-full "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className=" p-2 my-4  rounded-sm bg-gray-700  w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4  rounded-sm bg-gray-700 w-full "
        />
        {outputMessage && <p className="text-red-500">{outputMessage}</p>}
        {outputMessage==null && <p className="text-green-300">Successfull</p>}
        <button
          className="bg-red-700 py-2  my-4  w-full"
          onClick={handleSubmit}
        >
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSign} className="py-2  my-4  w-full cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already a User? Sign In Now!"}
        </p>
      </form>
    </>
  );
};

export default Login;
