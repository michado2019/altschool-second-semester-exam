import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH3-Sr6YsrY4-H_p9YJsHR4ap_WuIhUGQ",
  authDomain: "miller1-b839e.firebaseapp.com",
  projectId: "miller1-b839e",
  storageBucket: "miller1-b839e.appspot.com",
  messagingSenderId: "60634516530",
  appId: "1:60634516530:web:7d1f0075d8f9d255fb002b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
    provider, auth, signInWithPopup, getRedirectResult, onAuthStateChanged, signOut, createUserWithEmailAndPassword
}