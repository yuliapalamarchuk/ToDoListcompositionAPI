// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdbBxM0391ZtM4zxNCybSfYNuBJ47Nz7A",
  authDomain: "compositionapiproject.firebaseapp.com",
  projectId: "compositionapiproject",
  storageBucket: "compositionapiproject.appspot.com",
  messagingSenderId: "182892989502",
  appId: "1:182892989502:web:a3fcd6645d22284abd956f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
