import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../Shop.css";

const Product = (props) => {
  const { productName, productImage, price } = props.data;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="product-card">

        <div className="product-image">
          <img
            src={productImage}
            alt={productName}
          />
        </div>

        <div className="product-info">
          <h5>{productName}</h5>

          <p className="product-price">
            ${price}
          </p>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(props.data)}
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Product;