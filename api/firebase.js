import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";

const usersRef = collection(db, "users");
const groupsRef = collection(db, "groups");

export const logInWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const getStudentByUid = async (userUid) => {
  const result = await getDocs(query(usersRef, where("uid", "==", userUid)));
  if (result.docs.length > 0) {
    const doc = result.docs[0];
    return doc.data();
  }
};

export const getUsers = async () => {
  const result = await getDocs(query(usersRef, where("role", "!=", "admin")));
  if (result.docs.length > 0) {
    return result.docs.map((doc) => doc.data());
  }
};

export const getGroups = async () => {
  const result = await getDocs(query(groupsRef));
  if (result.docs.length > 0) {
    return result.docs.map((doc) => doc.data());
  }
};

export const logout = () => {
  signOut(auth);
};
