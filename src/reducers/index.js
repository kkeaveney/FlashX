import { combineReducers } from "redux";
import web3 from "../actions/web3Slice";
import token from "../actions/tokenSlice";

export default combineReducers({
  web3,
  token,
});
