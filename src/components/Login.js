import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation, nameValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [outputMessage, setOutputMessage] = useState("");
  const handleSign = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmit = () => {
    let message = "";
    if (isSignIn) {
      message = checkValidation(email.current.value, password.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);
      setOutputMessage(message);
    } else {
      const message = nameValidation(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setOutputMessage(message);
    }
    if (message) return;
    if (!isSignIn) {
      //sign up lo gic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/118040049?s=400&u=1978d96fd3ce8eee41a1d899bbd8f204ed20570c&v=4",
          }).then(() => {
            const { uid, displayName, email, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                displayName: displayName,
                email: email,
                photo: photoURL,
              })
            );
            navigate("/browse");
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setOutputMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signin-user");
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setOutputMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <img
        className="absolute  z-[-1] "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg"
        alt="background"
      />
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute my-[70px] mx-auto right-0  left-0  w-3/12 p-12  text-white py-4 bg-opacity-80 rounded-sm "
      >
        <h1 className="text-3xl  py-4 font-bold">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
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
        {outputMessage == null && <p className="text-green-300">Successfull</p>}
        <button
          className="bg-red-700 py-2  my-4  w-full"
          onClick={handleSubmit}
        >
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
