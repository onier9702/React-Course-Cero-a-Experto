

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6oDnbMqgxYqSxgqKTkl2hKhOXdZDU70",
  authDomain: "react-myjournal-app.firebaseapp.com",
  projectId: "react-myjournal-app",
  storageBucket: "react-myjournal-app.appspot.com",
  messagingSenderId: "23678071659",
  appId: "1:23678071659:web:b2a44d2019f8c05ddb122e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const google = new GoogleAuthProvider();

export {
   
  google,
  auth,
  db,

}

