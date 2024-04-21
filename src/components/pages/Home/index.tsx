import Button from "components/atoms/Button";
import MainTemplate from "components/templates/MainTemplate";
import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { addProduct, fetchProducts, productSelector } from "store/productSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector(productSelector);

  const handleAddProduct = useCallback(() => {
    dispatch(addProduct({ id: "1", name: "New Product" }));
  }, [dispatch]);

  const handleFetchProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  return (
    <MainTemplate>
      <h2>Welcome to our store!</h2>
      {/* <ProductList  /> from organism */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
            </div>
          ))}
        </>
      )}

      <Button onClick={handleAddProduct}>Add Product</Button>
    </MainTemplate>
  );
};

export default Home;
