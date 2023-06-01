// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrXIjqmOnsrlzskIiH20SenDRteL5qJ6c",
    authDomain: "todo-web-1.firebaseapp.com",
    projectId: "todo-web-1",
    storageBucket: "todo-web-1.appspot.com",
    messagingSenderId: "1073653404460",
    appId: "1:1073653404460:web:5e06bba8c9de1459695289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
