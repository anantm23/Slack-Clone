import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB2RXzWd2PKT3vo1EwxhSKGiF8gagpIKuU",
    authDomain: "slack-clone-804b6.firebaseapp.com",
    projectId: "slack-clone-804b6",
    storageBucket: "slack-clone-804b6.appspot.com",
    messagingSenderId: "953295365008",
    appId: "1:953295365008:web:cbe7ad78bb22a6eaca4915"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
