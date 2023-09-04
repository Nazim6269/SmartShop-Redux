import {
  ADD_TO_CART,
  FETCHING_FAILED,
  FETCHING_START,
  REMOVE_FROM_CART,
  SELECTED_PRODUCT,
  SET_DATA,
} from "../constants/actionTypes";

//all initial states
const productInitialState = {
  isLoading: false,
  isError: null,
  products: [],
};

const cartInitialState = {
  cart: [],
};

const selectedProductsInitialState = {
  selectedProduct: [],
};

//all reducers
export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isLoading: true,
        isError: null,
      };
    case FETCHING_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        isLoading: false,
        products: [action.payload],
      };

    default:
      return state;
  }
};

export const selectProductReducer = (
  state = selectedProductsInitialState,
  action
) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, action.payload],
      };

    default:
      return state;
  }
};

export const addToCartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
