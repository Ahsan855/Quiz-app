// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIpJwxPV2fd3ZgxSobsOZhQBIn8VQH2qU",
  authDomain: "quiz-app-c8f7b.firebaseapp.com",
  projectId: "quiz-app-c8f7b",
  storageBucket: "quiz-app-c8f7b.appspot.com",
  messagingSenderId: "257437232806",
  appId: "1:257437232806:web:de0b772b0302a220c14e67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
