// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAM50zbvDiLma667ExSVxbR5iI5UXuLMs",
    authDomain: "instagram-clone-pwa.firebaseapp.com",
    projectId: "instagram-clone-pwa",
    storageBucket: "instagram-clone-pwa.appspot.com",
    messagingSenderId: "76069400517",
    appId: "1:76069400517:web:24e73ac6499abc064425ac",
    measurementId: "G-H4WX6XS3FL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

