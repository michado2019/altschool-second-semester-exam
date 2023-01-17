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
  apiKey: "AIzaSyCCkYXyduuezEfIiv-44VTKbjtT9F1s7vc",
  authDomain: "miller15.firebaseapp.com",
  projectId: "miller15",
  storageBucket: "miller15.appspot.com",
  messagingSenderId: "188937333818",
  appId: "1:188937333818:web:36ad7d8ec2fa016abc1903"
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
