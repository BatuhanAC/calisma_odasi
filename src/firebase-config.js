import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { userControl } from "./components/controller/userControl";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import store from "./store";
import { setRooms } from "./store/rooms";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userControl(user.email || false);
});

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      name: "",
      surname: "",
      username: email,
      birthday: "",
      education: "",
      job: "",
      friendList: [],
      pfp: "",
      online: true,
      password: password,
    });
  } catch (error) {
    toast.error(error.code);
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  await signOut(auth);
  localStorage.setItem("isLogged", false);
};

export const storeRooms = async () => {
  let rooms = [];
  const querySnapshot = await getDocs(collection(db, "rooms"));
  querySnapshot.forEach((doc) => {
    rooms.push(doc.data());
  });
  store.dispatch(setRooms(rooms));
};

export const fetchLessons = async () => {
  let lessons = [];
  const querySnapshot = await getDocs(collection(db, "lessons"));
  querySnapshot.forEach((doc) => {
    lessons.push(doc.data());
  });
};

export const addRoom = async (
  name,
  maxUser,
  educationLevel,
  roomType,
  lesson,
  topic,
  auth
) => {
  const docRef = await addDoc(collection(db, "rooms"), {
    name,
    maxUser,
    educationLevel,
    roomType,
    lesson,
    topic,
    auth,
    createdAt: Timestamp.fromDate(new Date()),
  });
  console.log("Document written with ID: ", docRef.id, docRef);
};
