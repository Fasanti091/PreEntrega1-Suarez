import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCPFSNEp6wHxaMEqrzrr6ZRzqD-Y8jla0",
  authDomain: "red-bull-dfe58.firebaseapp.com",
  projectId: "red-bull-dfe58",
  storageBucket: "red-bull-dfe58.appspot.com",
  messagingSenderId: "815940905761",
  appId: "1:815940905761:web:3447b74b2680842d906c60"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);