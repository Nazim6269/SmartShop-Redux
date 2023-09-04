import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/actionCreator";
import style from "../styles/card.module.css";

const SingleCard = (newData) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    category,
    description,
    brand,
    images,
    discountPercentage,
  } = newData;
  return (
    <div key={id}>
      <Card className={style.card}>
        <img alt={title} className={style.image} />
        <div className={style.text}>
          <h3>{title}</h3>
          <h5>Category: {category}</h5>
          <h5>Brand: {brand}</h5>
          <h4>Price: ${price}</h4>
          <h5>{discountPercentage}% off</h5>
          <p>Description: {description}</p>
          <button
            className={style.btn}
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SingleCard;
