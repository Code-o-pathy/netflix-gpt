import { signOut, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";
import { toggleLanguage, toggleSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/lang";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptState = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLanguage = (e) => {
    dispatch(toggleLanguage(e.target.value));
  };

  const handleGPT = () => {
    dispatch(toggleSearchView());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black flex justify-between items-center   z-40 flex-col md:flex-row ">
      <img className="w-44  " src={Logo} alt="logo" />
      {user && (
        <div className="flex">
          {gptState && (
            <select
              onChange={handleLanguage}
              className="md:px-4 md:py-2 bg-purple-200  md:mx-2 rounded-md   px-2 mx-1"
            >
              {SUPPORTED_LANG.map((option) => (
                <option key={option.identifier} value={option.identifier}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPT}
            className="md:px-4 md:py-2 bg-purple-400 md:mx-2 rounded-md px-2 mx-0"
          >
            {gptState ? <>Homepage</> : <>GPT Search</>}
          </button>
          <img
            className="w-[70px] md:mx-2 rounded-md  md:w-[50px]  md:px-0 px-2"
            alt="userIcon "
            src={user.photo}
          />
          <button
            className="md:px-4   md:mx-2 bg-gray-300 text-red-600 font-bold  rounded-md px-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
