import { auth, db } from "../firebase";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteField,
  updateDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
const userService = async (method, userId, data) => {
  // const { user } = UserAuth();
  const userCollectionRef = doc(db, "users", userId);
  try {
    let response;

    // let userCollectionRef;
    switch (method) {
      case "get":
        response = await getDoc(userCollectionRef).then((querySnapshot) => {
          return querySnapshot.data();
        });
        return response;

      case "set":
        console.log("set");
        response = setDoc(userCollectionRef, data);
        break;
      case "update":
        console.log("update");
        response = updateDoc(userCollectionRef, { data });
        break;
      case "delete":
        console.log("delete");
        response = deleteDoc(userCollectionRef);
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
