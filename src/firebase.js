import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcs_tkHBk237GAwH39t77GZVI9fQEos4A",
    authDomain: "burgerqueen-19d38.firebaseapp.com",
    databaseURL: "https://burgerqueen-19d38.firebaseio.com",
    projectId: "burgerqueen-19d38",
    storageBucket: "burgerqueen-19d38.appspot.com",
    messagingSenderId: "783158804044",
    appId: "1:783158804044:web:e3de8b816e336bc0b3bee9",
    measurementId: "G-HHM8XRCG55"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore(); //my collection will live here to create objects, to save data

export default db;

// firebase.analytics();