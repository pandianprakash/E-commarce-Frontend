import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBC4kwmBADLQx8bdwvCEFZCapaOudFT9uk",
    authDomain: "jewellary-website-54f82.firebaseapp.com",
    projectId: "jewellary-website-54f82",
    storageBucket: "jewellary-website-54f82.appspot.com",
    messagingSenderId: "724220110782",
    appId: "1:724220110782:web:700ae52cdde373206bbbef"
  };
  
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { auth, firestore, storage };