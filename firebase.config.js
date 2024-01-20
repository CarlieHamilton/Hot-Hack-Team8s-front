// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvRNIloGZwSHeXWb_l1aNm6MeqDrr92H8",
  authDomain: "teammate-94500.firebaseapp.com",
  projectId: "teammate-94500",
  storageBucket: "teammate-94500.appspot.com",
  messagingSenderId: "837460669717",
  appId: "1:837460669717:web:40ff69b6f36a74af8c251c",
  measurementId: "G-LGXTC5G9T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
