import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecartai.firebaseapp.com",
  projectId: "onecartai",
  storageBucket: "onecartai.appspot.com",
  messagingSenderId: "707922126460",
  appId: "1:707922126460:web:fe601be8045923a71f0bf9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}









