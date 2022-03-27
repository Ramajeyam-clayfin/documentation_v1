import { LogBox } from 'react-native';

LogBox.ignoreLogs(['You are overriding the original host.']);

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpNFYwhodsN4bf7bGaI-EKiv0o6GXybss",
  authDomain: "react-native-documentation.firebaseapp.com",
  databaseURL: "https://react-native-documentation-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-documentation",
  storageBucket: "react-native-documentation.appspot.com",
  messagingSenderId: "191109971996",
  appId: "1:191109971996:web:49dced36bbb0810527dfd9",
  measurementId: "G-97BX3Y02X3"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  app.firestore().settings({ experimentalForceLongPolling: true });
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth };




export function adduser (user) {
  db.collection("userData")
  .doc(user.uid)
  .set({
    uid: user.uid,
    name : user.name,
    email : user.email
  })
  .catch(error => console.log("error :", error) )
}



export function updateuser (users) {
  db.collection("userData")
  .doc(users.uid)
  .update({
    uid: users.uid,
    email : users.email
  })
}


export async function getData (getusers){

  let users = []

  const snapshot = await db.collection("userData").get()

  snapshot.forEach(obj => {
    users.push(obj.data())
  })
  // console.log("users :", users)

  getusers(users)
}