import firebase from "firebase";

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCaLkQkVUNCJkvAkYbEMXtni1sB6HPq-dU",
    authDomain: "pro-71-1bd44.firebaseapp.com",
    projectId: "pro-71-1bd44",
    storageBucket: "pro-71-1bd44.appspot.com",
    messagingSenderId: "148932316379",
    appId: "1:148932316379:web:d700aa7bcc385e8f89d0fe"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
