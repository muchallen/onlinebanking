// Import the functions you need from the SDKs you need
import firebase from 'firebase'; 
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV-pkFe4WIc54cFGyXT-ZqoO_g0h-NtQc",
  authDomain: "myonlinebanking-b9f9f.firebaseapp.com",
  projectId: "myonlinebanking-b9f9f",
  storageBucket: "myonlinebanking-b9f9f.appspot.com",
  messagingSenderId: "372417589933",
  appId: "1:372417589933:web:0196637d273ee770354c24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firestore.settings({timeStampInSnapshots:true});

export default firebase;