const SelectedProducts = ({ selectedProducts }) => {
  console.log(selectedProducts);

  return selectedProducts.map((product) => {
    return <li key={product.id}>{product.name}</li>;
  });
};
export default SelectedProducts;
