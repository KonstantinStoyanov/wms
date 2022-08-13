import Warehouse from "../Warehouse/Warehouse";
const WarehouseList = ({ warehouses }) => {
  return warehouses.map((warehouse) => (
    <li key={warehouse.id}>
      <Warehouse warehouse={warehouse} />
    </li>
  ));
};
export default WarehouseList;
