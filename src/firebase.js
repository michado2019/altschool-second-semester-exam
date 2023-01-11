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
  apiKey: "AIzaSyBKZrLyQ6Ow0d_ZP_j4q-PWoCKcCWIRs8M",
  authDomain: "miller4-6ec46.firebaseapp.com",
  projectId: "miller4-6ec46",
  storageBucket: "miller4-6ec46.appspot.com",
  messagingSenderId: "213984475978",
  appId: "1:213984475978:web:adddb192d44e2419d01fb3",
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
