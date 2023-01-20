import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth' 

const firebaseConfig = 
{
  apiKey: "AIzaSyChC7PJXNyobe-hW3xTqx4WKALAtPYukiY",
  authDomain: "vujs-858a4.firebaseapp.com",
  projectId: "vujs-858a4",
  storageBucket: "vujs-858a4.appspot.com",
  messagingSenderId: "104335108099",
  appId: "1:104335108099:web:c71f4e2ecf148896354636",
  measurementId: "G-Y52C7GV9PP"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
