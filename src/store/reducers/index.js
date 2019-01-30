import {combineReducers} from 'redux'
import {pinReducer} from "./pinReducer";
import {appReducer} from "./appReducer";

export default rootReducer = combineReducers(
    {
        pin: pinReducer, 
        app: appReducer
    }
);
