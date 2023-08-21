import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC0aSKkk_TFSZXTkiy71-JqLRvkH0lvALE",
  authDomain: "chat-app-bbc66.firebaseapp.com",
  projectId: "chat-app-bbc66",
  storageBucket: "chat-app-bbc66.appspot.com",
  messagingSenderId: "635230774763",
  appId: "1:635230774763:web:8b2511906aad658f1a65ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)