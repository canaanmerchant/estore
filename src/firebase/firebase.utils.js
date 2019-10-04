import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-aEFFqWQRDAa55g_QReM4E7DKtloVICE",
    authDomain: "e-store-db-89b83.firebaseapp.com",
    databaseURL: "https://e-store-db-89b83.firebaseio.com",
    projectId: "e-store-db-89b83",
    storageBucket: "",
    messagingSenderId: "415088568397",
    appId: "1:415088568397:web:58c6a3b136a65b1b6e1404",
    measurementId: "G-EF40N6GFXK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 