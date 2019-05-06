import * as firebase from "firebase";

const config = {
 
  apiKey: "AIzaSyDMJ4C7VLvtQF-K2DO4MIXqBRnEIToH5NY",
  authDomain: "reservation-456ed.firebaseapp.com",
  databaseURL: "https://reservation-456ed.firebaseio.com",
  projectId: "reservation-456ed",
  storageBucket: "reservation-456ed.appspot.com",
  messagingSenderId: "685961732945"
};
firebase.initializeApp(config);

export default firebase;
