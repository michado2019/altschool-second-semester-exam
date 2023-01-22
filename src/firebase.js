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
  apiKey: "AIzaSyBiEAfoxGwvlaU5DDjX1ai1oWQQOq2ntoY",
  authDomain: "miller18-29e4b.firebaseapp.com",
  projectId: "miller18-29e4b",
  storageBucket: "miller18-29e4b.appspot.com",
  messagingSenderId: "144681595648",
  appId: "1:144681595648:web:596201c6ddad41056cf9e5"
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
