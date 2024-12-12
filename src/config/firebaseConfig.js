// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAogeOvdSBiLYAZpVRp5bvacYwPzyJ11M0",
  authDomain: "vitefirebaseapp-a94ba.firebaseapp.com",
  projectId: "vitefirebaseapp-a94ba",
  storageBucket: "vitefirebaseapp-a94ba.firebasestorage.app",
  messagingSenderId: "591845853871",
  appId: "1:591845853871:web:10ba48d1c527692e91a25a",
  measurementId: "G-SYD3ZHZJ6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };