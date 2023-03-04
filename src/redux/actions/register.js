import { ActionType } from "redux-promise-middleware";
import { register } from "../../utils/fetchers";
import { ACTION_STRING } from "./actionStrings";

const { Pending, Rejected, Fulfilled } = ActionType;

const registerPending = () => ({
   type: ACTION_STRING.register.concat("_", Pending),
});
const registerRejected = (error) => ({
   type: ACTION_STRING.register.concat("_", Rejected),
   payload: { error },
});
const registerFulfilled = (data) => ({
   type: ACTION_STRING.register.concat("_", Fulfilled),
   payload: { data },
});

const registerThunk = (body) => {
  return async (dispacth) => {
    try {
      dispacth(registerPending());
      const result = await register(body);
      dispacth(registerFulfilled(result.data));
      console.log(result.data);
    } catch (error) {
      dispacth(registerRejected(error));
    }
  };
};

const registerActions = { registerThunk };

export default registerActions;
