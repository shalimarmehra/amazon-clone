import React from "react";
import "./CheckoutProduct.css";

function CheckProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title"> {title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button>Remove from the Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckProduct;
