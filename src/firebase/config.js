// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAQAo9Ht9d5e2NzBHuEDWH6UeubKbz42c",
  authDomain: "fmjh-gallery.firebaseapp.com",
  projectId: "fmjh-gallery",
  storageBucket: "fmjh-gallery.appspot.com",
  messagingSenderId: "284304540415",
  appId: "1:284304540415:web:7f6fee07434b037f4102ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = getStorage();
const db = getFirestore(app);

export {app, projectStorage, db};