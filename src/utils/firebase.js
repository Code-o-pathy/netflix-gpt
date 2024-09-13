// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFiC8ZlZx2IvJ2a8lEuctzWhIcsiKJDIo",
  authDomain: "netflixgpt-b5e91.firebaseapp.com",
  projectId: "netflixgpt-b5e91",
  storageBucket: "netflixgpt-b5e91.appspot.com",
  messagingSenderId: "987872166110",
  appId: "1:987872166110:web:e2b59f48e959ea6e43424f",
  measurementId: "G-BHJCRGG3JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();