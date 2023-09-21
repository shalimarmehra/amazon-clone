import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_wrV9EFQre5KDd-5u2ltK1QM5MpJPQc4",
  authDomain: "clone-2622f.firebaseapp.com",
  projectId: "clone-2622f",
  storageBucket: "clone-2622f.appspot.com",
  messagingSenderId: "128134178308",
  appId: "1:128134178308:web:48385ea3061de62136b751",
  measurementId: "G-90Y4YD746F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
