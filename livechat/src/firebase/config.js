import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCtjjiqSi9qEKeiCFuYUhmlszP3VY7e2-Y",
    authDomain: "udemy-vue-firebase-sites-b7b79.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-b7b79",
    storageBucket: "udemy-vue-firebase-sites-b7b79.appspot.com",
    messagingSenderId: "846508718663",
    appId: "1:846508718663:web:a09c02344fee1d96e90f62"
  };

  //init firebase 

  firebase.initializeApp(firebaseConfig)

  //init firestore

  const projectAuth = firebase.auth()

  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth,  projectFirestore, timestamp}