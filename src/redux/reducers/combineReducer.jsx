import { combineReducers } from "redux";
import {
  addToCartReducer,
  productReducer,
  selectProductReducer,
} from "./productReducer";

export const reducers = combineReducers({
  allProductsReducer: productReducer,
  cartReducer: addToCartReducer,
  selectedProductsReducer: selectProductReducer,
});
