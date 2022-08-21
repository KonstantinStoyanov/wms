const SelectedProducts = ({ selectedProducts }) => {
  const selectedProductsStyle = {
    color: "rgb(20, 33, 61)",
    fontWeight: "600",
  };
  const selectedProductsLiStyle = {
    borderBottom: "3px solid #fca311",
  };

  return selectedProducts.map((product) => {
    return (
      <li
        key={product.id}
        className="selected-item flex-item"
        style={selectedProductsLiStyle}
      >
        <p style={selectedProductsStyle}>serial:{product.serial}</p>
        <p style={selectedProductsStyle}>name:{product.name}</p>
      </li>
    );
  });
};
export default SelectedProducts;
