import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD1Hk9LhgmT8neG5vePsr-i51l8fEhthdU',
  authDomain: 'crwn-db-a4dbe.firebaseapp.com',
  projectId: 'crwn-db-a4dbe',
  storageBucket: 'crwn-db-a4dbe.appspot.com',
  messagingSenderId: '879695779564',
  appId: '1:879695779564:web:ceab453b4e875cd26c77c9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
