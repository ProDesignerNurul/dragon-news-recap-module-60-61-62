// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VxqcJ9UPIWyyMyortUlRxdTGkfXvgzg",
  authDomain: "dragon-news-recap.firebaseapp.com",
  projectId: "dragon-news-recap",
  storageBucket: "dragon-news-recap.appspot.com",
  messagingSenderId: "414026784353",
  appId: "1:414026784353:web:fc6dc49f41c60f83639420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;