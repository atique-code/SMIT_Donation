
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVvUXXlO7RdpTxiGduq4_Yo8GhLJUchOo",
  authDomain: "auth-99bab.firebaseapp.com",
  databaseURL: "https://auth-99bab-default-rtdb.firebaseio.com",
  projectId: "auth-99bab",
  storageBucket: "auth-99bab.appspot.com",
  messagingSenderId: "620229470463",
  appId: "1:620229470463:web:d9eff964747a58ed1184ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)