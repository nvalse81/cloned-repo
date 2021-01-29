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

export const createUserProfileDocument = async (userAuth, additionalData) => { //additionaldata is passed when user is signed up
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  });
  await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  console.log(transformedCollection)
  return transformedCollection.reduce((accumulator, collection) => { //accis empty object, collection is 1st item at first iteration
    accumulator[collection.title.toLowerCase()] = collection //acc is empty object as written {}
    return accumulator // returned with one key as title of 1st element and value
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;