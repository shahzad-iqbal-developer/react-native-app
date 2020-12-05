  
import { createStore } from "redux"; 
import CombineReducers from "../Store/Reducers/CombineReducers";
const store = createStore(CombineReducers);
export default store;