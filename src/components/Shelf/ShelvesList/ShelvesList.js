import { useState } from "react";
import ShelfCreate from "../ShelfCreate/ShelfCreate";
import { WarehouseData } from "../../../context/WarehouseContext";
const ShelvesList = ({ shelves, warehouse }) => {
  const { updateValues } = WarehouseData();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const refreshWarehouses = () => {
    return updateValues();
  };
  console.log(shelves);
  return (
    <div className="shelf-container">
      <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
        Shelves in warehouse {warehouse.serial}
      </h3>
      <ul className="shelf-container">
        {shelves
          ? shelves.map((shelf) => (
              <li key={shelf.serial}>
                <div>Name:{shelf.name}</div>
                <div>Serial:{shelf.serial}</div>
              </li>
            ))
          : null}
      </ul>
      <>
        {" "}
        {showModal ? (
          <ShelfCreate
            openModal={openModal}
            refreshWarehouses={refreshWarehouses}
            id={warehouse.serial}
          />
        ) : null}
        <button onClick={openModal} className="btn-submit secondary">
          {showModal ? "Close Create shelf" : "Create shelf"}
        </button>
      </>
    </div>
  );
};
export default ShelvesList;
