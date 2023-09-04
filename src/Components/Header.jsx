import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={style.navbar}>
      <h2 className={style.logo}>SmartShop</h2>
      <Link to="/" className={style.link}>
        Home
      </Link>
      <Link to="/carts" className={style.link}>
        My Cart
      </Link>
    </div>
  );
};

export default Header;
