import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDKjJM3qiwW-fiQP-XdIM6Vz73PB72WjZA",
    authDomain: "team-voting-5c4ce.firebaseapp.com",
    projectId: "team-voting-5c4ce",
    storageBucket: "team-voting-5c4ce.appspot.com",
    messagingSenderId: "768410061017",
    appId: "1:768410061017:web:721cccad167b6f85bad6c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();