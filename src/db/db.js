import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs3sMtksDL5mMx-rHYTaTEBWuW0TyTeXo",
  authDomain: "mypets-2024.firebaseapp.com",
  projectId: "mypets-2024",
  storageBucket: "mypets-2024.firebasestorage.app",
  messagingSenderId: "1044053573096",
  appId: "1:1044053573096:web:5d51cea2d91a1f8257385d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;