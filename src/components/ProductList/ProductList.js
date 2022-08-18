const ProductList = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <>No results!!!</>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
