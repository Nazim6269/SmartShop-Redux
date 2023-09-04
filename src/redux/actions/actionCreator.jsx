import {
  ADD_TO_CART,
  FETCHING_FAILED,
  FETCHING_START,
  REMOVE_FROM_CART,
  SELECTED_PRODUCT,
  SET_DATA,
} from "../constants/actionTypes";

export const setData = (products) => {
  return {
    type: SET_DATA,
    payload: products,
  };
};

export const fetchStart = () => {
  return {
    type: FETCHING_START,
  };
};

export const fetchFailed = (error) => {
  return {
    type: FETCHING_FAILED,
    payload: error,
  };
};

export const selectProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
