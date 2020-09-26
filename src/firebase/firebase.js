import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCuUeYsI4nbKZJ-qFmjAvuGV1SQBep7dN0",
    authDomain: "nike-8cb98.firebaseapp.com",
    databaseURL: "https://nike-8cb98.firebaseio.com",
    projectId: "nike-8cb98",
    storageBucket: "nike-8cb98.appspot.com",
    messagingSenderId: "308569066158",
    appId: "1:308569066158:web:5995463497ec4442ecbb3f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signOut = firebase.auth().signOut();
export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());