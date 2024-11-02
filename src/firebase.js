// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhLca_lkDl7wHX-lAFxMbgYixMDpBMHm4",
  authDomain: "firstapp-3f023.firebaseapp.com",
  projectId: "firstapp-3f023",
  storageBucket: "firstapp-3f023.firebasestorage.app",
  messagingSenderId: "351072429053",
  appId: "1:351072429053:web:5503e9d6115802e2512f94",
  measurementId: "G-M3PZZL4JLG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
