import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const productReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { getProducts } = ACTION_STRING;

  switch (type) {
    case getProducts.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getProducts.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case getProducts.concat("_", Fulfilled):
      // console.log(products)
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        products: payload.data.data.data,
      };
      default:
        return prevState;
      }
};

export default productReducer;
