// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy4Yswtp4mFPbqE5tL6kC2pKe8AODmhVs",
  authDomain: "fir-auth-65294.firebaseapp.com",
  projectId: "react-native-documentation",
  storageBucket: "react-native-documentation.appspot.com",
  messagingSenderId: "191109971996",
  appId: "1:191109971996:android:0b2cc0f1db30657327dfd9"
};
// console.log(firebase)
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
