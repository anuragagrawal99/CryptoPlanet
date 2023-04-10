//  Importing from Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//  Importing Configurations and other keys
import firebaseConfig from "./config/firebaseConfig";

//  Initializing Firebase
const firebaseApp = initializeApp(firebaseConfig);

//  Initializing Authentication
const auth = getAuth(firebaseApp);

//  Initializing Database
const db = getFirestore(firebaseApp);

export { auth, db };
