// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Du35B099Z6UVvg33mXscdTvx96j0wks",
  authDomain: "mtechzilla-interview.firebaseapp.com",
  projectId: "mtechzilla-interview",
  storageBucket: "mtechzilla-interview.appspot.com",
  messagingSenderId: "145591136287",
  appId: "1:145591136287:web:4a5217e35c64d8efef652a",
  measurementId: "G-LHX78WT7WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);