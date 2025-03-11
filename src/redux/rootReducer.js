import { combineReducers } from "redux";
import couterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    counter : couterReducer,
    user :userReducer
})


export default rootReducer