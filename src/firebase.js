import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAKUTEzgT4ZNLNngv1l8QbNB0zyP4xaxVU",
  authDomain: "fb-crud-react-b2c5c.firebaseapp.com",
  projectId: "fb-crud-react-b2c5c",
  storageBucket: "fb-crud-react-b2c5c.appspot.com",
  messagingSenderId: "369545030185",
  appId: "1:369545030185:web:ae9c7b3d267e13f3150a38"
};
// Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);

 export const db = fb.firestore();