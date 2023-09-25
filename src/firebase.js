import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWedBZYjVfoCWVDvYiyWh07mvtNo63RWc",
    authDomain: "linkedin-clone-5a744.firebaseapp.com",
    projectId: "linkedin-clone-5a744",
    storageBucket: "linkedin-clone-5a744.appspot.com",
    messagingSenderId: "597886471928",
    appId: "1:597886471928:web:0e769debc4e6c9506b350d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};