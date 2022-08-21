import { useState } from "react";
import { WarehouseData } from "../../context/WarehouseContext";
import ProductList from "../Product/ProductList/ProductList";
import ProductCreate from "../Product/ProductCreate/ProductCreate";
import Header from "../Header/Header";

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
    <div className="container">
      <div className="main">
        <Header text={"Find Product or Create new"} />

        <div className="product-search">
          <h3>Find Product</h3>
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
        <>
          {showModal ? (
            <ProductCreate
              openModal={openModal}
              refreshProducts={refreshProducts}
            />
          ) : null}
          <button onClick={openModal} className="btn-submit">
            {showModal ? "Close Create product" : "Create product"}
          </button>
        </>
      </div>
    </div>
  );
};
export default FindProduct;
