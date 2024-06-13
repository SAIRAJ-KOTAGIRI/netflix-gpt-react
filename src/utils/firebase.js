// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQFS7e6zmpaD8fsRkR3VPSaaAqqAaRMXI",
  authDomain: "netflixgpt-55be6.firebaseapp.com",
  projectId: "netflixgpt-55be6",
  storageBucket: "netflixgpt-55be6.appspot.com",
  messagingSenderId: "981860609680",
  appId: "1:981860609680:web:09b08f5750cd92023d7215",
  measurementId: "G-B2ZG46DPDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()