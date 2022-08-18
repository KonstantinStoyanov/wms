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
    <>
      <>{warehouse.serial}</>
      <ul>
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
        <button onClick={openModal}>Create Shelf</button>
        {showModal ? (
          <ShelfCreate
            openModal={openModal}
            refreshWarehouses={refreshWarehouses}
            id={warehouse.serial}
          />
        ) : null}
      </>
    </>
  );
};
export default ShelvesList;
