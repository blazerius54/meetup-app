import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAUgNuRKcq3p2LN5BOej_ONzWddrdXymb4",
    authDomain: "react-redux-auth-2a467.firebaseapp.com",
    databaseURL: "https://react-redux-auth-2a467.firebaseio.com",
    projectId: "react-redux-auth-2a467",
    storageBucket: "react-redux-auth-2a467.appspot.com",
    messagingSenderId: "900734172327"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db
};