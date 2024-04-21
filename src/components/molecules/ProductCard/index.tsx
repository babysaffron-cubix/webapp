import React from "react";
import Button from "components/atoms/Button";

const ProductCard = () => {
  function addToCart(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="product-card">
      <h3>Product Name</h3>
      <p>description</p>
      <Button onClick={() => addToCart()}> Add to Cart </Button>
    </div>
  );
};

export default ProductCard;
