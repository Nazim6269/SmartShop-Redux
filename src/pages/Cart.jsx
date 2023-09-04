import React from "react";
import { useSelector } from "react-redux";
import SingleCard from "../Components/SingleCard";
import style from "../styles/card.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  const data = cart.cart[0];
  console.log(data);

  const cartData = data
    ? data.map((item) => {
        let {
          id,
          title,
          price,
          category,
          description,
          brand,
          images,
          discountPercentage,
        } = item;
        let newData = {
          id,
          title,
          price,
          category,
          description,
          brand,
          images,
          discountPercentage,
        };
        return (
          <div key={id}>
            <SingleCard {...newData} />
          </div>
        );
      })
    : null;

  return <div className={style.cards}>{cartData}</div>;
};

export default Cart;
