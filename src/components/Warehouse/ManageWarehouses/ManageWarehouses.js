import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
// import { Modal } from "../Modal/Modal";
import WarehouseCreate from "../WarehouseCreate/WarehouseCreate";
import WarehousesList from "../WarehouseList/WarehouseList";
import { WarehouseData } from "../../../context/WarehouseContext";
import Header from "../../Header/Header";
export default function ManageWarehouses() {
  //get users list
  const { products, warehouses, users, updateValues } = WarehouseData();

  const [showModal, setShowModal] = useState(false);

  const refreshWarehouses = () => {
    return updateValues();
  };
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Header text={"Manage Warehouses"} />
      <div>
        <>
          <button onClick={openModal}>Create warehouse</button>
          {showModal ? (
            <WarehouseCreate
              openModal={openModal}
              refreshWarehouses={refreshWarehouses}
            />
          ) : null}
        </>
        <ul>
          <WarehousesList warehouses={warehouses} />
        </ul>
      </div>
    </>
  );
}
