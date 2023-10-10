import { combineReducers } from "redux";
import authReducer from "./auth2";
import currentUserReducer from './currentUser1'
import questionReducer from './questions'

export default combineReducers({
    authReducer, currentUserReducer, questionReducer
})