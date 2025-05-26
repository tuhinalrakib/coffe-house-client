// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwkDuozmWK0vNHZBdMGvPLmXjoMLxUx74",
  authDomain: "coffee-house-app-b0d9f.firebaseapp.com",
  projectId: "coffee-house-app-b0d9f",
  storageBucket: "coffee-house-app-b0d9f.firebasestorage.app",
  messagingSenderId: "8570400123",
  appId: "1:8570400123:web:2c18ec22f1aabf7fd2a1de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)