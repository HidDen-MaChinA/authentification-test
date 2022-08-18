// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { auth } from "../../conf/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function createUser(mail:string,password:string){
    createUserWithEmailAndPassword(auth, mail, password)
  .then((userCredential) => {
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
  });
    }
export function authentificateUser(mail:string,password:string):Promise<UserCredential>{
    return signInWithEmailAndPassword(auth, mail, password);
}