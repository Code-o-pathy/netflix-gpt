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
import { PhotoURL } from "../utils/constants";
import { homeBackground } from "../utils/constants";
const Login = () => {
  // const userStore = useSelector((store) => store.user);
  // if(userStore){
  //   navigate("/browse");
  // }
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
    // if (isSignIn) {
      const message = checkValidation(email.current.value, password.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);
      setOutputMessage(message);
    // } else {
    //   const message = nameValidation(
    //     name.current.value,
    //     email.current.value,
    //     password.current.value
    //   );
    //   setOutputMessage(message);
    // }
    if (message) return;
    if (!isSignIn) {
      //sign up lo gic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              PhotoURL,
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
    <div className="w-screen">
      <img
        className="absolute w-screen h-screen object-cover"
        src={homeBackground}
        alt="background"
      />
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute my-[110px] mx-auto right-0  left-0  md:w-3/12 p-12  text-white py-4 bg-opacity-80 rounded-sm "
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
    </div>
  );
};

export default Login;
