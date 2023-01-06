import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJONUwi32G6jSXUttugZ2WjJtoN0V1hx4",
  authDomain: "altschool-second-semester-exam.firebaseapp.com",
  projectId: "altschool-second-semester-exam",
  storageBucket: "altschool-second-semester-exam.appspot.com",
  messagingSenderId: "656814087424",
  appId: "1:656814087424:web:852a90a4359fa44ca7e7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)