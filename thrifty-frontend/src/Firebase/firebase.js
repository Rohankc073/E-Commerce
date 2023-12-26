// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfn02JLsUz3Qb5FUJHeTLCg0Qd2746rcs",
    authDomain: "thriftytech-6cd3e.firebaseapp.com",
    projectId: "thriftytech-6cd3e",
    storageBucket: "thriftytech-6cd3e.appspot.com",
    messagingSenderId: "828266544534",
    appId: "1:828266544534:web:2b133e6dd85dbe515d71b7",
    measurementId: "G-LJS4CV7CM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage };