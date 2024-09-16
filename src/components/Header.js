import { signOut, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, name, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: name,
            email: email,
            photo: photoURL,
          })
        );
        navigate("/browse");
        //we couldn't use navigate in body component because this is the parent component of routerprovider, and all pages are child of this component, so if u want to use navigate here you would have to shift router provider on app level, second it to usenormaal redirection without navigate and other ssolution is to use navigate from child components

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component is removed from dom.

    return()=>unsubscribe();
  }, []);
  return (
    <div className=" w-screen bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className=" w-44"
        src={Logo}
        alt="logo"
      />
      {user && (
        <div className="flex mr-2">
          <img className="w-[50px]" alt="userIcon" src={user.photo} />
          <button
            className="bg-red-100 p-2 rounded-sm m-1"
            onClick={handleSignOut}
          >
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
