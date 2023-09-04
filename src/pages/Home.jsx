import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../helpers/fetchData";
import {
  fetchFailed,
  fetchStart,
  setData,
} from "../redux/actions/actionCreator";
import style from "../styles/card.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allProductsReducer);
  const { isLoading, isError, products } = data;
  const productData = products && products.length > 0 ? products[0] : null;

  useEffect(() => {
    dispatch(fetchStart());
    fetchData()
      .then((res) => {
        dispatch(setData(res));
      })
      .catch((error) => dispatch(fetchFailed(error)));
  }, []);

  const list = productData
    ? productData.map((item) => {
        let {
          id,
          title,
          price,
          category,
          description,
          brand,
          images,
          stock,
          rating,
          discountPercentage,
        } = item;
        return (
          <div key={id}>
            <Card className={style.card}>
              <img src={images[0]} alt={title} className={style.image} />
              <div className={style.text}>
                <h3>{title}</h3>
                <h5>{category}</h5>
                <h5>{brand}</h5>
                <h5>Rating: {rating}</h5>
                <h5>Stock: {stock}</h5>
                <h4>Price: ${price}</h4>
                <h5>{discountPercentage}% off</h5>
                <Link to={`/product/${id}`}>
                  <button className={style.btn}>Details</button>
                </Link>
              </div>
            </Card>
          </div>
        );
      })
    : null;

  return <div className={style.cards}>{list}</div>;
};

export default Home;
