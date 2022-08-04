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
  getDoc,
} from "firebase/firestore";

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

export const getAllRooms = async () => {
  let rooms = [];
  const colRef = collection(db, "rooms");
  const docsSnap = await getDocs(colRef);
  docsSnap.forEach((doc) => {
    rooms.push(doc.data());
  });
  return rooms;
};

export const fetchLessons = async () => {
  let lessons = [];
  const querySnapshot = await getDocs(collection(db, "lessons"));
  querySnapshot.forEach((doc) => {
    lessons.push({
      value: doc.id,
      label: doc.id.charAt(0).toUpperCase() + doc.id.slice(1),
    });
  });
  return lessons;
};

export const fetchTopics = async (lessonName) => {
  const docRef = doc(db, "lessons", lessonName);
  const docSnapShot = await getDoc(docRef);
  return docSnapShot.data();
};

export const addRoom = async (room) => {
  const docRef = await addDoc(collection(db, "rooms"), room);
  console.log("Document written with ID: ", docRef.id, docRef);
};
