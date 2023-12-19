import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWZ4jXHVtKiwNuN7FhCHT195i8LsVHDkw",
  authDomain: "fir-eb8f3.firebaseapp.com",
  projectId: "fir-eb8f3",
  storageBucket: "fir-eb8f3.appspot.com",
  messagingSenderId: "656183891418",
  appId: "1:656183891418:web:4fa1215f968821ada55ce3",
  measurementId: "G-4QEXY8WMFQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
