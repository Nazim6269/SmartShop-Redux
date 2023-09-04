import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../helpers/fetchData";
import { addToCart, selectProduct } from "../redux/actions/actionCreator";
import style from "../styles/card.module.css";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductsReducer);
  const { selectedProduct } = product;

  useEffect(() => {
    fetchSingleProduct(productId).then((res) => {
      dispatch(selectProduct(res));
    });
  }, [productId]);

  const details = selectedProduct
    ? selectedProduct.map((item) => {
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
        return (
          <div key={id}>
            <Card className={style.card}>
              <img src={images[0]} alt={title} className={style.image} />
              <div className={style.text}>
                <h3>{title}</h3>
                <h5>Category: {category}</h5>
                <h5>Brand: {brand}</h5>
                <h4>Price: ${price}</h4>
                <h5>{discountPercentage}% off</h5>
                <p>Description: {description}</p>
                <Link to="/carts">
                  <button
                    className={style.btn}
                    onClick={() => dispatch(addToCart(selectedProduct))}
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            </Card>
          </div>
        );
      })
    : null;

  return <div className={style.cards}>{details}</div>;
};

export default Product;
