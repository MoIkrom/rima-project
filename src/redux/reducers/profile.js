import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";
const initialState = {
   isError: false,
   isLoading: false,
   isFulfilled: false,
   profileData: [],
   profileUser: [],
};

const getProfile = (prevState = initialState, { type, payload }) => {
   const { Pending, Rejected, Fulfilled } = ActionType;
   const { getProfile } = ACTION_STRING;
   switch (type) {
      case getProfile.concat("_", Pending):
         return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
         };
      case getProfile.concat("_", Rejected):
         return {
            ...prevState,
            isLoading: false,
            isError: true,
            isFulfilled: false,
            error: payload.error.message,
         };
      case getProfile.concat("_", Fulfilled):
         //  console.log(payload.data.data.profileUser[0]);
         return {
            ...prevState,
            profileData: payload.data.data.profileData[0],
            profileUser: payload.data.data.profileUser[0],
            isLoading: false,
            isError: false,
            isFulfilled: true,
         };
      default:
         return prevState;
   }
};

const updateProfile = (prevState = initialState, { type, payload }) => {
   const { Pending, Rejected, Fulfilled } = ActionType;
   const { updateProfile } = ACTION_STRING;
   switch (type) {
      case updateProfile.concat("_", Pending):
         return {
            ...prevState,
            isLoading: true,
            isError: false,
            isFulfilled: false,
         };
      case updateProfile.concat("_", Rejected):
         return {
            ...prevState,
            isLoading: false,
            isError: true,
            isFulfilled: false,
            error: payload.error.message,
         };
      case updateProfile.concat("_", Fulfilled):
         //  console.log(payload.data.data.profileUser[0]);
         return {
            ...prevState,
            profileData: payload.data.data.profileData[0],
            profileUser: payload.data.data.profileUser[0],
            isLoading: false,
            isError: false,
            isFulfilled: true,
         };
      default:
         return prevState;
   }
};
const Profiles = { getProfile, updateProfile };
export default Profiles;
