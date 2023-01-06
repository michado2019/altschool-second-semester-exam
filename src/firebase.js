import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAESxgSdOmjrdNOjjgeH9kAsyGCa4Y4Te8",
        authDomain: "codemiller-altschool.firebaseapp.com",
        projectId: "codemiller-altschool",
        storageBucket: "codemiller-altschool.appspot.com",
        messagingSenderId: "141873024817",
        appId: "1:141873024817:web:f31cd763a5511b95856a10"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)