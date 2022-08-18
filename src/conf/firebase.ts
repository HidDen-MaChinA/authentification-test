import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpaKSlm3EibjJmHcNoyoelIgKo6k7wmmk",
    authDomain: "authentification-test-8ac9b.firebaseapp.com",
    projectId: "authentification-test-8ac9b",
    storageBucket: "authentification-test-8ac9b.appspot.com",
    messagingSenderId: "739037277356",
    appId: "1:739037277356:web:33c8100bd569ee1e4f8309",
    measurementId: "G-S3339MT63W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);