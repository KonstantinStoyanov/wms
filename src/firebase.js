// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1aJgl0uTH7aT_uJDy0yR9JXqFozMUHD8",
  authDomain: "warehouse-management-sys-c95e2.firebaseapp.com",
  databaseURL:
    "https://warehouse-management-sys-c95e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "warehouse-management-sys-c95e2",
  storageBucket: "warehouse-management-sys-c95e2.appspot.com",
  messagingSenderId: "723641305053",
  appId: "1:723641305053:web:de9e035b6f12d6fe875834",
  measurementId: "G-ZRFGFNK2G0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
