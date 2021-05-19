import React from "react";
import './CheckoutProduct.css';
import { UseStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, rating, price }) => {
    const [{basket}, dispatch] = UseStateValue();
    console.log(id, image, title, rating, price );

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
