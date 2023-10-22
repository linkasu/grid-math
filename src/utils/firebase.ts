// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD4R7IubK_0nyNUQP0hTWAuLb3Iw8XBRg",
  authDomain: "linka-griidmath.firebaseapp.com",
  projectId: "linka-griidmath",
  storageBucket: "linka-griidmath.appspot.com",
  messagingSenderId: "48321598172",
  appId: "1:48321598172:web:c3b7a5660e5b59bf2dda19",
  measurementId: "G-QZXKLKZKRC"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);

const auth = getAuth(firebaseApp);

export { auth };
