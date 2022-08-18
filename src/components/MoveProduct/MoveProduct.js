import { WarehouseData } from "../../context/WarehouseContext";
import { useState } from "react";
import SelectedProducts from "../SelectedProducts/SelectedProducts";
const MoveProduct = () => {
  const [serial, setSerial] = useState("");
  const { products, warehouses, users, updateValues } = WarehouseData();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errors, setErrors] = useState("");
  console.log(selectedProducts);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const results= products.filter(product => product.serial.includes(serial));

    products.forEach((product) => {
      let boolean = false;
      setSerial("");
      setErrors("");
      if (product.serial === serial) {
        const checkIsSelected = selectedProducts.forEach((product) => {
          product.serial === serial ? (boolean = true) : (boolean = false);
        });

        if (boolean) {
          return setErrors(`Product ${serial} was selected`);
        }

        return setSelectedProducts((prev) => [...prev, product]);
      } else {
        return setErrors(`There is no product with serial ${serial}`);
      }
    });
  };

  return (
    <>
      <div className="input-section">
        <form onSubmit={handleSubmit} autoComplete="new-password">
          <p>Create Product</p>
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
          {errors !== "" ? <div>{errors}</div> : ""}
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Add
          </button>
        </form>
      </div>

      <div className="input-section">
        <SelectedProducts selectedProducts={selectedProducts} />
      </div>
    </>
  );
};
export default MoveProduct;
