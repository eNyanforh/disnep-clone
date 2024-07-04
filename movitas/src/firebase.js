import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXkjUSvV5K5pumCviQEEBQKJiMXGor_Is",
  authDomain: "motivas-6ab97.firebaseapp.com",
  projectId: "motivas-6ab97",
  storageBucket: "motivas-6ab97.appspot.com",
  messagingSenderId: "91215343228",
  appId: "1:91215343228:web:456e5af79b129a47b1a3f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
