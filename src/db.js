import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZyfgvo47hpH1OB0T7DvkfALgFtgv0zdE",
  authDomain: "acc343-76e4b.firebaseapp.com",
  projectId: "acc343-76e4b",
  storageBucket: "acc343-76e4b.appspot.com",
  messagingSenderId: "630558503577",
  appId: "1:630558503577:web:2c71d9b7d2e631f1737e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore()



