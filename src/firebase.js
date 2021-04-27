import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnJnYJ94ItuNT7ja8XN9JXT0EUCUFqLAo",
    authDomain: "disney-clone-7d133.firebaseapp.com",
    projectId: "disney-clone-7d133",
    storageBucket: "disney-clone-7d133.appspot.com",
    messagingSenderId: "876509325252",
    appId: "1:876509325252:web:0f77fab315d3d2a4fea691",
    measurementId: "G-9CP0P1JMVY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export {auth, provider, storage}

export default db
