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
  arrayUnion,
} from "firebase/firestore";

const warehouseService = async (method, newData, id) => {
  const warehousesCollectionCurrentRef = id ? doc(db, "warehouses", id) : null;
  const warehousesCollectionRef = collection(db, "warehouses");
  try {
    let response;
    let data;
    switch (method) {
      case "getAll":
        data = await getDocs(warehousesCollectionRef);

        return (data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      case "get":
        response = await getDoc(warehousesCollectionCurrentRef).then(
          (querySnapshot) => {
            return querySnapshot.data();
          }
        );
        return response;

      case "set":
        console.log("set");
        response = setDoc(warehousesCollectionCurrentRef, newData);
        break;
      case "update":
        console.log("update");

        response = updateDoc(warehousesCollectionCurrentRef, {
          shelves: arrayUnion({ id: newData.serial, ...newData }),
        });
        // console.log(newData);
        // response = setDoc(
        //   doc(db, `warehouses/${id}/shelves`, newData.serial),
        //   {
        //     ...newData,
        //     id: newData.serial,
        //   }
        // );
        break;
      case "delete":
        console.log("delete");
        response = deleteDoc(warehousesCollectionRef);
        break;
      default:
        console.log("No method " + method + " exist");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAll = warehouseService.bind({}, "getAll");

export const getWarehouse = warehouseService.bind({}, "get");
export const setWarehouse = warehouseService.bind({}, "set");
export const updateWarehouse = warehouseService.bind({}, "update");
export const delWarehouse = warehouseService.bind({}, "delete");
