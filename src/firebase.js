import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlScW2pgK6-Ok23dMeo6kXNb-nknZinbE",
  authDomain: "miller19-ec00e.firebaseapp.com",
  projectId: "miller19-ec00e",
  storageBucket: "miller19-ec00e.appspot.com",
  messagingSenderId: "548378556739",
  appId: "1:548378556739:web:81604ec6e99dee869d97f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  provider,
  auth,
  signInWithPopup,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
};
