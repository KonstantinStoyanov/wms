import { useContext, useState } from "react";
import * as warehouseService from "../../../services/warehouseService";
import { UserAuth } from "../../../context/AuthContext";

export default function ShelfCreate({ refreshWarehouses, openModal, id }) {
  const [errors, setErrors] = useState({});
  const { user } = UserAuth();

  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, serial);

    let data = { name, serial };
    const rest = warehouseService.updateWarehouse(data, id);

    refreshWarehouses();
    openModal();
    return rest;
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="new-password">
      <p>Create Warehouse</p>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border p-3"
          type="text"
          autoComplete="new-password"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Serial</label>
        <input
          onChange={(e) => setSerial(e.target.value)}
          value={serial}
          className="border p-3"
          type="text"
          autoComplete="new-password"
        />
      </div>
      <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
        Create
      </button>
    </form>
  );
}
