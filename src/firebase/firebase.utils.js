import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config = {
  apiKey: "AIzaSyBFggqieSC4LR5p5e3H66B_ajP1l9l_Cns",
  authDomain: "crwn-db-85c03.firebaseapp.com",
  projectId: "crwn-db-85c03",
  storageBucket: "crwn-db-85c03.appspot.com",
  messagingSenderId: "571405846385",
  appId: "1:571405846385:web:d6a0300c1ef7797bcc98d0",
  measurementId: "G-GQNRDSX62P"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;