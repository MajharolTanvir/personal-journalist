// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPUgfpVbgyeOkIPD9f3L7aVc0i-A6LjHU",
    authDomain: "fuoad-saeed.firebaseapp.com",
    projectId: "fuoad-saeed",
    storageBucket: "fuoad-saeed.appspot.com",
    messagingSenderId: "460254843979",
    appId: "1:460254843979:web:8a7e4e38402ec77624e9ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;