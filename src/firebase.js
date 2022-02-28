import { initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA36UeaAy7aJ-fsDoJMMd2OHopxe9lr0ew",
  authDomain: "reactprojects-12bbe.firebaseapp.com",
  databaseURL: "https://reactprojects-12bbe-default-rtdb.firebaseio.com",
  projectId: "reactprojects-12bbe",
  storageBucket: "reactprojects-12bbe.appspot.com",
  messagingSenderId: "742066518833",
  appId: "1:742066518833:web:b44922396621d8cd9d4e10",
  measurementId: "G-4F2KB77B6S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { app, db, provider, storage, auth };