import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNZpNmmgKUNQwq5P6qu7tx05LDWGhrMjA",
  authDomain: "emstudio-ed70a.firebaseapp.com",
  projectId: "emstudio-ed70a",
  storageBucket: "emstudio-ed70a.appspot.com",
  messagingSenderId: "1065642594309",
  appId: "1:1065642594309:web:ecf1054a73c7f68816cc6c"
};

export default firebase.initializeApp(firebaseConfig);