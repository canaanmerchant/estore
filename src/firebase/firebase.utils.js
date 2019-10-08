import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }
    return userRef;

  };

  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 