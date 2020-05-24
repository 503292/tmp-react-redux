import { combineReducers } from "redux";
import { Type } from "./globalActions";

const isLoading = (state = true, { type }) => {
  switch (type) {
    case Type.LOADER_ON:
      return true;
    case Type.LOADER_OFF:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
});
