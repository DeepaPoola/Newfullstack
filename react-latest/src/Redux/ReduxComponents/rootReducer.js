import { combineReducers } from "redux";
import { messageReducer } from "./message.reducer";
import { productReducer } from "./product.reducer";

let rootReducer=combineReducers({message:messageReducer,product:productReducer})

export {rootReducer}