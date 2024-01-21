import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAvRNIloGZwSHeXWb_l1aNm6MeqDrr92H8",
    authDomain: "teammate-94500.firebaseapp.com",
    projectId: "teammate-94500",
    storageBucket: "teammate-94500.appspot.com",
    messagingSenderId: "837460669717",
    appId: "1:837460669717:web:40ff69b6f36a74af8c251c",
    measurementId: "G-LGXTC5G9T0",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);