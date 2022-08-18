import { useState } from "react";
import { WarehouseData } from "../../context/WarehouseContext";
import ProductList from "../ProductList/ProductList";
import ProductCreate from "../ProductCreate/ProductCreate";
const FindProduct = () => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const { products, warehouses, users, updateValues } = WarehouseData();

  const [showModal, setShowModal] = useState(false);

  const refreshProducts = () => {
    return updateValues("products");
  };
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const filteredData = (name) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  };
  const handleSearch = (e) => {
    setInputText(e.target.value);
    setSearchText(filteredData(e.target.value));
  };
  return (
    <>
      <>
        <button onClick={openModal}>Create warehouse</button>
        {showModal ? (
          <ProductCreate
            openModal={openModal}
            refreshProducts={refreshProducts}
          />
        ) : null}
      </>
      <div className="product-search">
        <h1>Find Product</h1>
        <input
          type="text"
          id="inputText"
          placeholder="Enter Products"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {/* <ProductList products={products} /> */}
      <div className="product-container">
        {searchText === "" ? (
          <ProductList products={products} />
        ) : (
          <ProductList products={searchText} />
        )}
      </div>
    </>
  );
};
export default FindProduct;
