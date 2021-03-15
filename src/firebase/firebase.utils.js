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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
