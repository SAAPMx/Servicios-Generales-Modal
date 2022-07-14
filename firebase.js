// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyBL9pguujLtgCauDdsYbOtwvkQcAUKy_5k",
  authDomain: "servicios-generales-6fe8b.firebaseapp.com",
  databaseURL: "https://servicios-generales-6fe8b-default-rtdb.firebaseio.com",
  projectId: "servicios-generales-6fe8b",
  storageBucket: "servicios-generales-6fe8b.appspot.com",
  messagingSenderId: "256908109468",
  appId: "1:256908109468:web:417b15cfb1fc76a7a2af59",
  measurementId: "G-YQPXP7J1EE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description, location, contact) =>
  addDoc(collection(db, "tasks"), { title, description, location, contact });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
