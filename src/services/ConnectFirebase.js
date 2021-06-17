import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCa3lwAd9Eq0yzwXi7e8Y7wqETFZXrt6Go",
    authDomain: "tunemycar-1e1f8.firebaseapp.com",
    projectId: "tunemycar-1e1f8",
    storageBucket: "tunemycar-1e1f8.appspot.com",
    messagingSenderId: "902944067593",
    appId: "1:902944067593:web:948f51f2ce96997da9e8d8"
  };

const firebaseApp =
    !firebase.apps.length ?
        firebase.initializeApp(firebaseConfig) :
        firebase.app();

const db = firebaseApp.firestore()
export default db;



