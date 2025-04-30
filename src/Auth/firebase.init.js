// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2yRGLNrKSz7VTjuIQupIFRY3DRiwP5c",
  authDomain: "auth-integration-d3c77.firebaseapp.com",
  projectId: "auth-integration-d3c77",
  storageBucket: "auth-integration-d3c77.firebasestorage.app",
  messagingSenderId: "837325290472",
  appId: "1:837325290472:web:6c21a905a147a30235425d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);