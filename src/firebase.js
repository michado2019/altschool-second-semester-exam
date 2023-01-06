import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4NXAURf4GjUUu5JCH6S-ORh02mho29pg",
    authDomain: "fir-firebase-89ee2.firebaseapp.com",
    projectId: "fir-firebase-89ee2",
    storageBucket: "fir-firebase-89ee2.appspot.com",
    messagingSenderId: "799571971414",
    appId: "1:799571971414:web:1fae7d8f7bca910fbbdaf7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
    provider, auth, signInWithPopup, getRedirectResult, onAuthStateChanged
}