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
    // const results = products.filter((el) => {
    //   return el.name.toLowerCase().includes(name.toLowerCase());
    // });
    // const results = products.filter((object) =>
    //   Object.values(object).some(
    //     (i) => i.name.toLowerCase() === name.toLowerCase()
    //     // i.toLowerCase().includes(name.toLowerCase())
    //   )
    // );
    // console.log(results);

    // console.log(name);
    // console.log(typeof products);
    // products.filter((el) => {
    //   //if no input the return the original
    //   if (products.input === "") {
    //     console.log(el, "No products");
    //     return el;
    //   }
    //   //return the item which contains the user input
    //   else {
    //     console.log(
    //       products.name.toLowerCase().includes(product.toLowerCase()),
    //       "results"
    //     );
    //     return products.name.toLowerCase().includes(product.toLowerCase());
    //   }
    // });
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
