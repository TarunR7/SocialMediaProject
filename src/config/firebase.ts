// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjpMvAE6AFunky_WnIeJ-SyrkGeVnQSE",
  authDomain: "social-media-project-a1572.firebaseapp.com",
  projectId: "social-media-project-a1572",
  storageBucket: "social-media-project-a1572.appspot.com",
  messagingSenderId: "441928328605",
  appId: "1:441928328605:web:cc0c3316b138818695bb74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);