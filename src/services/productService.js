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

const productService = async (method, newData, id) => {
  const productsCollectionCurrentRef = id ? doc(db, "products", id) : null;
  const productsCollectionRef = collection(db, "products");
  try {
    let response;
    let data;
    // let productsCollectionRef;
    switch (method) {
      case "getAll":
        data = await getDocs(productsCollectionRef);

        return (data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      case "get":
        response = await getDoc(productsCollectionCurrentRef).then(
          (querySnapshot) => {
            return querySnapshot.data();
          }
        );
        return response;

      case "set":
        console.log("set");
        response = setDoc(productsCollectionCurrentRef, newData);
        break;
      case "update":
        console.log("update");
        response = updateDoc(productsCollectionRef, { newData });
        break;
      case "delete":
        console.log("delete");
        response = deleteDoc(productsCollectionRef);
        break;
      default:
        console.log("No method " + method + " exist");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAll = productService.bind({}, "getAll");

export const getProduct = productService.bind({}, "get");
export const setProduct = productService.bind({}, "set");
export const updateProduct = productService.bind({}, "update");
export const delProduct = productService.bind({}, "delete");
