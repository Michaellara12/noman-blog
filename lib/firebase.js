import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdQ9l6qucAZ8aE3QVQDnBXJehbc_BYRMI",
  authDomain: "noman-blog.firebaseapp.com",
  projectId: "noman-blog",
  storageBucket: "noman-blog.appspot.com",
  messagingSenderId: "312512014553",
  appId: "1:312512014553:web:30b2dc8fdcee6e720b76c8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
		
// Next JS only
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
export default db;