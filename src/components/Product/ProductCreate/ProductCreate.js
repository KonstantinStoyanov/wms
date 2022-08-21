import { useState } from "react";
import * as productService from "../../../services/productService";

export default function ProductCreate({ refreshProducts, openModal }) {
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, serial);

    let data = { name, serial, description };
    const rest = productService.setProduct(data, data.serial);

    refreshProducts();
    openModal();
    return rest;
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="new-password"
      className="create-form"
    >
      <p>Create Product</p>
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
      <div className="flex flex-col py-2">
        <label className="py-2 font-medium">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
