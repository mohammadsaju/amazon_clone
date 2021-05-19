import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5ycwLwg8ZsUL6QrHWRBKGvWEImNsTIMQ",
    authDomain: "clone-e0d7a.firebaseapp.com",
    projectId: "clone-e0d7a",
    storageBucket: "clone-e0d7a.appspot.com",
    messagingSenderId: "152256444864",
    appId: "1:152256444864:web:9154b8aa1c412620b9f025",
    measurementId: "G-5NQXDCL5YF"
});

const auth = firebase.auth();

export {auth}