import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAxLfRucY60qYsopFjGmAHvgbyvkgUS9g",
  authDomain: "khaira-devnoob-invitation.firebaseapp.com",
  projectId: "khaira-devnoob-invitation",
  storageBucket: "khaira-devnoob-invitation.firebasestorage.app",
  messagingSenderId: "882826871091",
  appId: "1:882826871091:web:de5d5204f2a56259f6be46",
  measurementId: "G-L4CGWE05GZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth =
  getAuth(app);

  export const storage =
  getStorage(app);