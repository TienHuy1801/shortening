import { linkReducer } from './link';
import { combineReducers } from "redux";

export default combineReducers({
  link: linkReducer
})