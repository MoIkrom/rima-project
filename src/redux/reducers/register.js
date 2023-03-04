import { ActionType } from "redux-promise-middleware";
// import { ACTION_STRING } from "../actions/actionStrings";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
};

const registerReducer = (prevState = initialState, { type, payload }) => {
  const { Pending, Rejected, Fulfilled } = ActionType;
  const { register } = ACTION_STRING;

  switch (type) {
    case register.concat("_", Pending):
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case register.concat("_", Rejected):
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.message,
      };
    case register.concat("_", Fulfilled):
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default registerReducer;
