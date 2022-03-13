import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    userReducer
});

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

export default store;