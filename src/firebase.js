import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDkCZp6G0bhryUijLNf-xHbPWhxUHTlN-E",
    authDomain: "clone-redux-4780a.firebaseapp.com",
    projectId: "clone-redux-4780a",
    storageBucket: "clone-redux-4780a.appspot.com",
    messagingSenderId: "846769933519",
    appId: "1:846769933519:web:83f52da5cda23c5500fbba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };