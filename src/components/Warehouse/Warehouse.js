import { useState } from "react";
import ShelvesList from "../ShelvesList/ShelvesList";
const Warehouse = ({ warehouse }) => {
  const [showShelf, setShowShelf] = useState(false);

  const handleShowShelf = () => {
    console.log("event");
    return setShowShelf((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleShowShelf}>
        {warehouse.name} - {warehouse.serial}
      </div>
      {showShelf ? (
        <ShelvesList shelves={warehouse.shelves} warehouse={warehouse} />
      ) : null}
    </>
  );
};
export default Warehouse;
