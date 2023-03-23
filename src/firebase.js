import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsZLPmG2gJgV6_rNDoDis-TD6smi4P3z4",
    authDomain: "netflix-clone-fe2d5.firebaseapp.com",
    projectId: "netflix-clone-fe2d5",
    storageBucket: "netflix-clone-fe2d5.appspot.com",
    messagingSenderId: "127386432682",
    appId: "1:127386432682:web:75720ebf6111858d4f4cd3",
    measurementId: "G-CGQ59JED4P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //connecting firebase to your app

const db = firebaseApp.firestore();  //connecting database of firebase to your app

const auth = firebase.auth();  //using authentication of firebase for your app


export { db, auth};