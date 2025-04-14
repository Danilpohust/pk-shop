// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcW9i9RLBKrl9URVF0cYXPRuoTkP6CQg8",
  authDomain: "pk-shop-d5fd5.firebaseapp.com",
  projectId: "pk-shop-d5fd5",
  storageBucket: "pk-shop-d5fd5.firebasestorage.app",
  messagingSenderId: "255055172129",
  appId: "1:255055172129:web:b34e12bcdb3070d717c960",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
