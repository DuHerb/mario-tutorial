import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBiKaOqKKCvmTXdSaesC3_qvScXmyYIrzU",
  authDomain: "mario-tutorial.firebaseapp.com",
  databaseURL: "https://mario-tutorial.firebaseio.com",
  projectId: "mario-tutorial",
  storageBucket: "",
  messagingSenderId: "856168172972",
  appId: "1:856168172972:web:89c71efd6200b2e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;