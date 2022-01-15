import { actionTypes } from "../redux.types";
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  userDetails: {
    name: "",
    _id: "",
    profileImage: "",
    status: "",
  },
  friends: [],
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    case UserActionTypes.CLEAR_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
