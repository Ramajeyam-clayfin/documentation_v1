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
  .then(()=>console.log("user is added"))
  .catch(error => console.log("error :", error) )
}



export function createdata (users) {
  db.collection("userData")
  .doc(users.uid)
  .update({
    Datas : {}
  })
  .then(()=>console.log("Data is created"))
}



export function updateuserintro (users, name) {

    db.collection("userData")
    .doc(users.uid)
    .set({
      email: users.email,
      name: users.name,
      uid: users.uid,
      Datas : {
        ...users.Datas,
        Intro : users.Datas.Intro,
        
      }
    })
    .then(()=>console.log("Data is Updated"))
  
}

export function updateuseroverall (users, name) {
  
    db.collection("userData")
    .doc(users.uid)
    .set({
      email: users.email,
      name: users.name,
      uid: users.uid,
      Datas : {
        ...users.Datas,
        Basics : {
          ...users.Datas.Basics,
          Total : {
            Total_Basics : users.Datas.Basics.Total.Total_Basics,
            completed :  users.Datas.Basics.Total.completed,
            Overall_Basics : users.Datas.Basics.Total.Overall_Basics,
            // View : false,
            // Text : false,
            // Image : false,
            // TextInput : false,
            // ScrollView : false,
            // StyleSheet : false,
          },
          
        },
        
       
      }
    })
    .then(()=>console.log("Data is Updated"))
  
}

export function updateuserothers (users, name, newname) {

  // const array1 = ["View", "Text", "Image", "TextInput", "ScrollView", "StyleSheet"]

    // array1.map (object => {

    //   if( object == name){
        
        if( newname == true ){
          let value = users.Datas.Basics[name]
          // for( let iterator in users.Datas.Basics){
          //   (iterator == name ) ? (value = users.Datas.Basics[iterator]) : null
          // }
          console.log("firebas-NewName")
          console.log(`${name} :`, value);

          db.collection("userData")
            .doc(users.uid)
            .set({
              email: users.email,
              name: users.name,
              uid: users.uid,
              Datas : {
                ...users.Datas,
                Basics : {
                  ...users.Datas.Basics,
                   [name] : value,
                  Total : {
                    ...users.Datas.Basics.Total,
                    completed :  users.Datas.Basics.Total.completed,
                    Overall_Basics : users.Datas.Basics.Total.Overall_Basics,
                    // [name] : true
                  },
                  
                },
                
              
              }
            })
            .then(()=>console.log("Data is Updated"))
          }
        else {
          let value = users.Datas.Basics[name]
            // for( let names in users.Datas.Basics){
            //   (names == name) ? (value = users.Datas.Basics[names]) : null
            // }
            console.log(`${name} :`, value);

            db.collection("userData")
            .doc(users.uid)
            .set({
              email: users.email,
              name: users.name,
              uid: users.uid,
              Datas : {
                ...users.Datas,
                Basics : {
                  ...users.Datas.Basics,
                  [name] : value,
                  
                },
                
              
              }
            })
            .then(()=>console.log("Data is Updated"))
          } 
    //       return
    // })
  
}


export async function getData (getusers){

  let users = []

  const snapshot = await db.collection("userData").get()

  snapshot.forEach(obj => {
    users.push(obj.data())
  })

  getusers(users)
}