  import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyB_AZZ5ST5dc6ksz59hW2PFw305giMRrPk",
    authDomain: "burger-queen-6bfd6.firebaseapp.com",
    databaseURL: "https://burger-queen-6bfd6.firebaseio.com",
    projectId: "burger-queen-6bfd6",
    storageBucket: "burger-queen-6bfd6.appspot.com",
    messagingSenderId: "123165151831",
    appId: "1:123165151831:web:61974e9dbf768c2ead0912"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const dataBase = fb.firestore()
