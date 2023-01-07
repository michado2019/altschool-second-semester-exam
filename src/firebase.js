import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UwqV9U3_lO4aRtoktPmP937i_oW_CmQ",
  authDomain: "altschool-new.firebaseapp.com",
  projectId: "altschool-new",
  storageBucket: "altschool-new.appspot.com",
  messagingSenderId: "487060055117",
  appId: "1:487060055117:web:de2ad7ffe64f4bcf9ce804"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
    provider, auth, signInWithPopup, getRedirectResult, onAuthStateChanged, signOut, createUserWithEmailAndPassword
}