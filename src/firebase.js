import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB35sc-c3OopmzQMuMrQ-4g-nL0cB5CRUk",
  authDomain: "chat2-de1b0.firebaseapp.com",
  projectId: "chat2-de1b0",
  storageBucket: "chat2-de1b0.appspot.com",
  messagingSenderId: "633926512627",
  appId: "1:633926512627:web:0f323ad3fad247a50a2c86"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()