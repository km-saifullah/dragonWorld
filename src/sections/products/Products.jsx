import React from "react";
import productData from "../../data/products";
import Product from "../../components/products/Product";
import "./products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products_heading">
          <h3>Our Products</h3>
        </div>
        <div className="products_list">
          {productData.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              rating={product.rating}
              productName={product.productName}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
