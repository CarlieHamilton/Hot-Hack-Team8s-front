import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvRNIloGZwSHeXWb_l1aNm6MeqDrr92H8",
  authDomain: "teammate-94500.firebaseapp.com",
  projectId: "teammate-94500",
  storageBucket: "teammate-94500.appspot.com",
  messagingSenderId: "837460669717",
  appId: "1:837460669717:web:40ff69b6f36a74af8c251c",
  measurementId: "G-LGXTC5G9T0",
};
export const app = initializeApp(firebaseConfig);

//export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
