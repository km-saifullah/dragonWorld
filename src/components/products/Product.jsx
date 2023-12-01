import React from "react";
import "./product.css";

const Product = ({ image, productName, rating, price }) => {
  return (
    <div className="product">
      <div className="product_image">
        <img src={image} />
      </div>
      <p className="product_rating">
        Rating: <span className="rating">{rating}</span>
      </p>
      <h4 className="product_name">{productName}</h4>
      <h3 className="product_price">{price} BDT</h3>
    </div>
  );
};

export default Product;
