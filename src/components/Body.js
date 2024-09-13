import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import  {addUser,removeUser} from "../utils/userSlice"

const Body = () => {
    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              const displayName = user.displayName;
              const email = user.email;
              dispatch(addUser({uid:uid,displayName:displayName,email:email}))
            //   navigate("/browse")
            //we cant use navigate here because this is the parent component of routerprovider, and all pages are child of this component, so if u want to use navigate here you would have to shift router provider on app level, second it to usenormaal redirection without navigate and other ssolution is to use navigate from child components

            
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            //   navigate("/")
            }
          });
    },[])
  return <>
  <RouterProvider router={appRouter}/>  
  </>;
};

export default Body;
