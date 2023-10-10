import { combineReducers } from "redux";
import authReducer from "./auth2";
import currentUserReducer from './currentUser1'

export default combineReducers({
    authReducer, currentUserReducer
})