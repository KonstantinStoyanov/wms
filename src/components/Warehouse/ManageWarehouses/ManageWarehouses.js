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
  const addButtonStyle = {
    fontSize: "16px",
    lineHeight: "22px",
    padding: "12px",
    width: "fit-content",
  };
  return (
    <div className="container">
      <div className="main">
        <Header text={"Manage Warehouses"} />
        <>
          <div>
            <h2 style={{ margin: "0 auto", textAlign: "center" }}>
              Warehouses List
            </h2>
            <ul className="selected-container">
              <WarehousesList warehouses={warehouses} />
            </ul>
          </div>
          <>
            {showModal ? (
              <WarehouseCreate
                openModal={openModal}
                refreshWarehouses={refreshWarehouses}
              />
            ) : null}
          </>
          <button
            onClick={openModal}
            className="btn-submit"
            style={addButtonStyle}
          >
            {showModal ? "Close Create warehouse" : "Create warehouse"}
          </button>
        </>
      </div>
    </div>
  );
}
