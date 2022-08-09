import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  deleteField,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
const userService = async (method, userId, data) => {
  const usersCollectionRef = doc(db, "users", userId);
  let col = doc(db, "users", userId);
  try {
    let response;

    switch (method) {
      case "get":
        console.log("get");
        response = await getDoc(col, userId);
        console.log(response.data());
        return response.data();

      case "set":
        console.log("set");
        response = await setDoc(usersCollectionRef, data);
        break;
      case "update":
        console.log("update");
        response = await updateDoc(usersCollectionRef, { data });
        break;
      case "delete":
        console.log("delete");
        response = await deleteDoc(usersCollectionRef);
        break;
      default:
        console.log("No method " + method + " exist");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUser = userService.bind({}, "get");
export const setUser = userService.bind({}, "set");
export const updateUser = userService.bind({}, "update");
export const delUser = userService.bind({}, "delete");
