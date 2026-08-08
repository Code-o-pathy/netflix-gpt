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

  const handleLogoClick = () => {
    if (gptState) {
      dispatch(toggleSearchView());
    }
    navigate("/browse");
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black flex justify-between items-center   z-40 flex-col md:flex-row ">
      <img
        className="w-44 cursor-pointer"
        src={Logo}
        alt="logo"
        onClick={handleLogoClick}
      />
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
          {!gptState && (
            <button
              onClick={handleGPT}
              className="md:px-4 md:py-2 bg-red-600 hover:bg-red-700 text-white md:mx-2 rounded-md px-2 mx-0 transition-colors"
            >
              Ask CineMatch
            </button>
          )}
          <img
            className="w-[70px] md:mx-2 rounded-md  md:w-[50px]  md:px-0 px-2"
            alt="userIcon "
            src={user.photo}
          />
          <button
            className="md:px-4   md:mx-2 bg-white hover:bg-gray-200 text-red-600 font-bold  rounded-md px-2 transition-colors"
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