import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9k7ddM6_ODyemDSiPyMbz8HgMMSuPoA",
  authDomain: "miller3-16963.firebaseapp.com",
  projectId: "miller3-16963",
  storageBucket: "miller3-16963.appspot.com",
  messagingSenderId: "753431329535",
  appId: "1:753431329535:web:fbdcf9f1f6b793b0726aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
    provider, auth, signInWithPopup, getRedirectResult, onAuthStateChanged, signOut, createUserWithEmailAndPassword
}