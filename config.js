import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDkoZl0bCcKGXUMIcDs1R08TtCTdqotHEM",
    authDomain: "wily-app-1089f.firebaseapp.com",
    projectId: "wily-app-1089f",
    storageBucket: "wily-app-1089f.appspot.com",
    messagingSenderId: "599511268383",
    appId: "1:599511268383:web:bb8f14ed505a064c77292a"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()