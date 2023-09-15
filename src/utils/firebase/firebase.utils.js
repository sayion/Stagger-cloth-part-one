// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDIK7dmLIAwEkKvQ9JxuJo1IH-PJzIIf6k",
  authDomain: "fashion-fiest-db.firebaseapp.com",
  projectId: "fashion-fiest-db",
  storageBucket: "fashion-fiest-db.appspot.com",
  messagingSenderId: "734603423790",
  appId: "1:734603423790:web:23dd76b17c9f06c58defbf",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
