// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiPcOzhV4eE2Sy2qymiJq6cKpQ-lzzqII",
  authDomain: "food-beverage-website-client.firebaseapp.com",
  projectId: "food-beverage-website-client",
  storageBucket: "food-beverage-website-client.appspot.com",
  messagingSenderId: "735158416192",
  appId: "1:735158416192:web:ada82bf77c92971bb080a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;