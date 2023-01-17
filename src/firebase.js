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
  apiKey: "AIzaSyDfHMkuB4P4KoccHyM_6E1kHUYVVTKFAO4",
  authDomain: "miller16.firebaseapp.com",
  projectId: "miller16",
  storageBucket: "miller16.appspot.com",
  messagingSenderId: "914222060299",
  appId: "1:914222060299:web:9d8beeec83e30659ce080e"
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
