import React from "react";
import { Products } from "../data/products";
import Product from "./product";

const Shop = () => {
  return (
    <React.Fragment>
      <div className="shop-page container py-5">
        <div className="shop-header text-center mb-5">
          <span>OUR COLLECTION</span>
          <h1>Shop</h1>
          <p>Discover our premium products</p>
        </div>

        <div className="row g-4">
          {Products.map((productDate) => (
            <Product
              key={productDate.id}
              data={productDate}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;