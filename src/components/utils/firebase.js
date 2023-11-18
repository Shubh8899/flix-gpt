// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVy5rFLJuejumBRxRkoSGlRvX3coJ7kv0",
  authDomain: "flix-gpt-2e451.firebaseapp.com",
  projectId: "flix-gpt-2e451",
  storageBucket: "flix-gpt-2e451.appspot.com",
  messagingSenderId: "757816746803",
  appId: "1:757816746803:web:54a613922aa3932cec9446",
  measurementId: "G-WLY8W559VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
