import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJOU56RKH5McexNPPgp-enbm7E384ddnU",
    authDomain: "slack-clone-45477.firebaseapp.com",
    projectId: "slack-clone-45477",
    storageBucket: "slack-clone-45477.appspot.com",
    messagingSenderId: "129849834599",
    appId: "1:129849834599:web:8a47effd220d5d2431e8c2",
    measurementId: "G-3CPS83TCXT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new Firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
