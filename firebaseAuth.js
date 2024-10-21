import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8ZGj-52_sOhgAMjRavm0yrL_Wy-QVlA",
  authDomain: "projectmitra-d1c68.firebaseapp.com",
  projectId: "projectmitra-d1c68",
  storageBucket: "projectmitra-d1c68.appspot.com",
  messagingSenderId: "590789678052",
  appId: "1:590789678052:web:f04972da25fed92fe42df1",
  measurementId: "G-1KHTDTLPKX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In error:", error);
  }
};
