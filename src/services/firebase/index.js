import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT__APP_apiKey,
  authDomain: process.env.REACT__APP_authDomain,
  projectId: process.env.REACT__APP_projectId,
  storageBucket: process.env.REACT__APP_storageBucket,
  messagingSenderId: process.env.REACT__APP_messagingSenderId,
  appId: process.env.REACT__APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);