import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (  
    <div className="w-screen bg-gradient-to-b from-black flex justify-between items-center">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex mr-2">
        <img className="w-[50px]"
          alt="userIcon"
          src={user.photo}
        />
        <button className="bg-red-100 p-2 rounded-sm m-1" onClick={handleSignOut}>Sign Out </button>
      </div>}
    </div>
  );
};

export default Header;
