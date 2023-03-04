import { ActionType } from "redux-promise-middleware";
import { getProduct } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const getProductPending = () => ({
  type: ACTION_STRING.getProducts.concat("_", Pending),
});

const getProductRejected = (error) => ({
  type: ACTION_STRING.getProducts.concat("_", Rejected),
  payload: { error },
});

const getProductFulfilled = (data) => ({
  type: ACTION_STRING.getProducts.concat("_", Fulfilled),
  payload: { data },
});

const getProductThunk = (params) => {
  return async (dispacth) => {
    try {
      dispacth(getProductPending());
      const result = await getProduct(params);
      dispacth(getProductFulfilled(result.data));
    } catch (error) {
      dispacth(getProductRejected(error));
    }
  };
};

const productActions = {
  getProductThunk,
};

export default productActions;