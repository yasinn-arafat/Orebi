import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB62fKJBaQED4ydjbXMjhipqGYgABc_wIw",
  authDomain: "oreby-review.firebaseapp.com",
  projectId: "oreby-review",
  storageBucket: "oreby-review.appspot.com",
  messagingSenderId: "1051871570362",
  appId: "1:1051871570362:web:6329f8a9aa22c2ae18d583",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
export default FirebaseApp;
