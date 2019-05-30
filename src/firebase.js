import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWppMXpCCqNetZftxcLnTwFTXPXq3VTko",
  authDomain: "transplantapi.firebaseapp.com",
  databaseURL: "https://transplantapi.firebaseio.com",
  projectId: "transplantapi",
  storageBucket: "transplantapi.appspot.com",
  messagingSenderId: "527063332085",
  appId: "1:527063332085:web:709359cebf2731b7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
