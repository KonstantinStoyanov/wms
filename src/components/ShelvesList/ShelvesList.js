import { useState } from "react";
import ShelfCreate from "../ShelfCreate/ShelfCreate";
import { WarehouseData } from "../../context/WarehouseContext";
const ShelvesList = ({ shelves, warehouse }) => {
  const { updateValues } = WarehouseData();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const refreshWarehouses = () => {
    return updateValues();
  };
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
    // <>
    //   <>{shelves}</>
    //   <li key={warehouse.id}>
    //   <Warehouse warehouse={warehouse} />
    // </li>
    //   <>
    //       <button onClick={openModal}>Create warehouse</button>
    //       {showModal ? (
    //         <WarehouseCreate
    //           openModal={openModal}
    //           refreshWarehouses={refreshWarehouses}
    //         />
    //       ) : null}
    //     </>
    // </>
  );
};
export default ShelvesList;
