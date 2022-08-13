import { createContext, useContext, useState, useEffect } from "react";
import * as warehouseService from "../services/warehouseService";
import * as productService from "../services/productService";
import * as userService from "../services/userService";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.js";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

export const WarehouseContext = createContext();
export const WarehouseData = () => {
  return useContext(WarehouseContext);
};

export const WarehouseProvider = ({ children }) => {
  const [warehouses, setWarehouses] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [refreshWarehouses, setRefreshWarehouses] = useState(false);
  const [refreshProducts, setRefreshProducts] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(false);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getWarehouses = async () => {
      const data = await warehouseService.getAll();
      setWarehouses(data);
      setLoading(false);
      console.log("get warehouse service");
    };
    setRefreshWarehouses(false);
    getWarehouses();
  }, [refreshWarehouses]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await productService.getAll();
      setProducts(data);
      setLoading(false);
    };
    setRefreshProducts(false);
    getProducts();
  }, [refreshProducts]);

  useEffect(() => {
    console.log("getUsers");
    const getUsers = async () => {
      const usersCollectionRef = collection(db, "users");
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    setRefreshUsers(false);
    getUsers();
  }, [refreshUsers]);

  const updateValues = (type) => {
    switch (type) {
      case "users":
        setRefreshUsers(true);
        return;
      case "products":
        setRefreshProducts(true);
        return;
      default:
        setRefreshWarehouses(true);
        return;
    }
  };

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(collection(db, "users"));

  //       // setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //       //   const data = await userService.getAll(user.uid);
  //       setUsers(usersData);
  //       setLoading(false);
  //     };
  //     getUsers();
  //   }, []);

  return (
    <WarehouseContext.Provider
      value={{ warehouses, products, users, updateValues }}
    >
      {!loading ? children : <LoadingSpinner />}
    </WarehouseContext.Provider>
  );
};
