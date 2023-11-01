// Import the functions you need from the SDKs you need
//import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDRCYu3tajZSzmju1XMWh3eflobdRCNpc",
  authDomain: "ccapp-6cc61.firebaseapp.com",
  projectId: "ccapp-6cc61",
  storageBucket: "ccapp-6cc61.appspot.com",
  messagingSenderId: "240122928586",
  appId: "1:240122928586:web:a540710847246e37984333",
  measurementId: "G-0ETBNCX00Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const firestore = getFirestore(app);