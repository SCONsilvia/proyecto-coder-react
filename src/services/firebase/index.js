import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWkWbOXmKTtUl3G-RMf9ZCqJq8xEgZW28",
  authDomain: "proyecto-coder-react-97b26.firebaseapp.com",
  projectId: "proyecto-coder-react-97b26",
  storageBucket: "proyecto-coder-react-97b26.appspot.com",
  messagingSenderId: "733176852723",
  appId: "1:733176852723:web:92d4214d3273640cc94786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);