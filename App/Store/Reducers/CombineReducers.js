import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
// import DashboardReducer from './DashboardReducer';
import CountReducer from './CountReducer';
 
const rootReducer = combineReducers(
    { 
        CounterReducer: CountReducer,
        LoginReducer: LoginReducer
    }
);
 
export default rootReducer;