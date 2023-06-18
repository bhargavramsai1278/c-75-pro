import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM",
  authDomain: "e-ride-549e4.firebaseapp.com",
  projectId: "e-ride-549e4",
  storageBucket: "e-ride-549e4.appspot.com",
  messagingSenderId: "588298110700",
  appId: "1:588298110700:web:34e3df331c6b1fc95047c9",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2S0EcgwsXjIX_zzawG_pl9J3gnr0TBS8",
  authDomain: "pro-abba5.firebaseapp.com",
  projectId: "pro-abba5",
  storageBucket: "pro-abba5.appspot.com",
  messagingSenderId: "743260083117",
  appId: "1:743260083117:web:dbddf3c4fc9ecff6bb8724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.firestore();
