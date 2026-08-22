import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../Cart.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container py-5">

        <h1 className="cart-title">
          Shopping <span>Cart</span>
        </h1>

        <div className="row g-4">

          {/* Products */}
          <div className="col-lg-8">

            {cart.map((item) => (
              <div className="cart-card" key={item.id}>

                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="cart-image"
                />

                <div className="cart-info">
                  <h2>{item.productName}</h2>

                  <p className="price">
                    ${item.price}
                  </p>

                  <div className="quantity-box">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="quantity-btn"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="quantity-btn"
                    >
                      +
                    </button>

                  </div>

                  <p className="product-total">
                    Product Total:
                    <strong>
                      ${item.price * item.quantity}
                    </strong>
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑 Remove
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="col-lg-4">

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>Products</span>
              </div>

              <div className="summary-line">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <strong>${totalPrice}</strong>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout →
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;