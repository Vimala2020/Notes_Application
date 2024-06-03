import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANBy2MJI8dul6dTG2bwzEOfljX9Luvjnk",
  authDomain: "notes-app-c95ee.firebaseapp.com",
  projectId: "notes-app-c95ee",
  storageBucket: "notes-app-c95ee.appspot.com",
  messagingSenderId: "534129345551",
  appId: "1:534129345551:web:942cad933a87eb681a8f7a",
  measurementId: "G-HYTB69VEYJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };