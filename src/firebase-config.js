import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {toast} from "react-hot-toast"
import { userControl } from "./components/controller/userControl";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


onAuthStateChanged(auth, user => {
  userControl(user || false)
})

export const login = async(email, password) => {
  try {
     await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
     toast.error(error.code)
  }

}



export const logout = async () => {
  await signOut(auth)
  localStorage.setItem('isLogged', false)
}