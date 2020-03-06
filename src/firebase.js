import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyCG8U3aO7b5fL7QgUao0Zpk8EJSSATtqYg",
    authDomain: "art9-chess.firebaseapp.com",
    databaseURL: "https://art9-chess.firebaseio.com",
    projectId: "art9-chess",
    storageBucket: "art9-chess.appspot.com",
    messagingSenderId: "548518490649",
    appId: "1:548518490649:web:0e3c79d1b591a9f34c3088",
    measurementId: "G-6D024B52TR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;    
