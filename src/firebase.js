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
  apiKey: "AIzaSyA9eOF6kRKSGhKmooMRaNjgAZTW3sc-PIc",
  authDomain: "miller6-dae9e.firebaseapp.com",
  projectId: "miller6-dae9e",
  storageBucket: "miller6-dae9e.appspot.com",
  messagingSenderId: "1000165590524",
  appId: "1:1000165590524:web:b86184655b818a53c09e79"
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
