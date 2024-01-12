// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'; // Add this import
import { getDatabase } from 'firebase/database'; // Add this import
import {getAuth} from "firebase/auth";

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
    measurementId: "G-LJS4CV7CM2",
    databaseURL: "https://thriftytech-6cd3e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app); // Initialize Firestore
const database = getDatabase(app); // Initialize Realtime Database

const sampleImageDetails = [
    // {
    //     imageURL: "/upload/20231226T092117562Z_qusy77_Apple.jpg",
    //     description: "iPhone 12",
    //     price: 899,
    //     condition: "New",
    //     color: "Blue",
    // },
    // {
    //     imageURL: "/upload/20231227T040438402Z_rpq188_ip11Red.jpg",
    //     description: "iPhone 11 (Red)",
    //     price: 799,
    //     condition: "Pre-owned",
    //     color: "Red",
    // },
    // Add more image details as needed
];

function addImageDetails(imageSrc, description, price, condition, color) {
    // Implement the logic to add image details to your data source (e.g., a database)
    // This could be a call to your backend API or any other suitable mechanism
}

// Add sampleImageDetails to Firestore during initialization
sampleImageDetails.forEach((detail) => addImageDetails(detail));

export {  sampleImageDetails, firestore, database }; // Export both Firestore and Realtime Database
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

