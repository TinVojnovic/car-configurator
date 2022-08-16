import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const app = initializeApp({ 
  apiKey: "AIzaSyDpBa63nikNZoM72J-8u1-5g3mbhd1koTU",
  authDomain: "carconfigurator-50189.firebaseapp.com",
  projectId: "carconfigurator-50189",
  storageBucket: "carconfigurator-50189.appspot.com",
  messagingSenderId: "208216549549",
  appId: "1:208216549549:web:b243edfaf9938fe7c73e24",
  measurementId: "G-1479TLJCD1"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;