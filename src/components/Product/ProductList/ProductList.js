const ProductList = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <div className="no-results">No results!!!</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="selected-item flex-item">
              <p>Name: {product.name} </p>
              <p>Serial: {product.serial} </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductList;
