import { useState } from "react";
import ShelvesList from "../../Shelf/ShelvesList/ShelvesList";
const Warehouse = ({ warehouse }) => {
  const [showShelf, setShowShelf] = useState(false);

  const handleShowShelf = () => {
    console.log("event");
    return setShowShelf((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleShowShelf} className="selected-item flex-item">
        <p>
          name: <span>{warehouse.name}</span>
        </p>
        <p>
          serial: <span>{warehouse.serial}</span>
        </p>
      </div>
      {showShelf ? (
        <ShelvesList shelves={warehouse.shelves} warehouse={warehouse} />
      ) : null}
    </>
  );
};
export default Warehouse;
