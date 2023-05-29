// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTPdTnB76R2hMC73yTybbI_J-lhT8g548",
  authDomain: "p2-validacao.firebaseapp.com",
  projectId: "p2-validacao",
  storageBucket: "p2-validacao.appspot.com",
  messagingSenderId: "237984461823",
  appId: "1:237984461823:web:55db8b3730bf36c6a3adca",
  measurementId: "G-VLE9ZXLY05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
