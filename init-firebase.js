const firebaseConfig = {
  apiKey: "AIzaSyBbx7fohOXdPaZKZ0xLKsQtRSe9NEto8T0",
  authDomain: "atlp-capstone-a3cf7.firebaseapp.com",
  databaseURL:
    "https://atlp-capstone-a3cf7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "atlp-capstone-a3cf7",
  storageBucket: "atlp-capstone-a3cf7.appspot.com",
  messagingSenderId: "792936687876",
  appId: "1:792936687876:web:b8eb4a0ac0b24e38fdc851",
};
firebase.initializeApp(firebaseConfig);

// create firebase database
let appDatabase = firebase.database();