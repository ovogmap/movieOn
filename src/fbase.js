import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3oEFHwmsDyjn9tcHgj7ERXc_21WYhaZY",
  authDomain: "movieon-9eca5.firebaseapp.com",
  databaseURL: "https://movieon-9eca5.firebaseio.com",
  projectId: "movieon-9eca5",
  storageBucket: "movieon-9eca5.appspot.com",
  messagingSenderId: "150698496059",
  appId: "1:150698496059:web:de36bece74fde701d90c1e",
  measurementId: "G-RD851YDRGB",
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
